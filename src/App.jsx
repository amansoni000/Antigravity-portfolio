import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Cosmo from './components/Cosmo';
import Preloader from './components/Preloader';

function App() {
    const [loading, setLoading] = useState(true);
    const { scrollY, scrollYProgress } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

    useEffect(() => {
        if (loading) return; // Don't init Lenis until loading is done

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [loading]);


    const [gravityBroken, setGravityBroken] = useState(false);

    const sectionVariants = {
        normal: (i) => ({
            y: 0,
            x: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            pointerEvents: 'auto',
            transition: { duration: 1.5, ease: "easeInOut", delay: i * 0.1 }
        }),
        broken: (i) => ({
            y: 800 + Math.random() * 400, // Fall down
            x: (Math.random() - 0.5) * 200, // Drift sideways
            rotate: (Math.random() - 0.5) * 60, // Random rotation
            scale: 0.9,
            opacity: 0.8,
            pointerEvents: 'none',
            transition: { duration: 1, ease: "bounceOut", delay: i * 0.05 }
        })
    };

    return (
        <div className={`relative w-full min-h-screen text-white ${gravityBroken ? 'overflow-hidden h-screen' : ''}`}>
            <AnimatePresence mode='wait'>
                {loading && <Preloader setLoading={setLoading} />}
            </AnimatePresence>

            <Cursor />
            <div className="noise-overlay"></div>
            <div className="aurora-bg">
                <motion.div style={{ y: y1 }} className="aurora-blob blob-1"></motion.div>
                <motion.div style={{ y: y2 }} className="aurora-blob blob-2"></motion.div>
                <motion.div style={{ y: y3 }} className="aurora-blob blob-3"></motion.div>
            </div>

            {!loading && (
                <>
                    <Navbar />
                    <Cosmo
                        key="cosmo-v2"
                        onToggleGravity={() => setGravityBroken(!gravityBroken)}
                        isGravityBroken={gravityBroken}
                    />
                    <main className="relative z-10">
                        {[Hero, Experience, Projects, Skills, Education, Contact].map((Component, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={sectionVariants}
                                initial="normal"
                                animate={gravityBroken ? "broken" : "normal"}
                                style={{ transformOrigin: 'center bottom' }}
                            >
                                <Component />
                            </motion.div>
                        ))}
                    </main>
                </>
            )}
        </div>
    );
}

export default App;
