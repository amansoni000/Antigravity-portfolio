import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const titleWords = ["AMAN", "SWARNKAR"];

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 50,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section id="hero" className="hero">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="hero-subtitle">
            // Software Development Engineer
                    </h2>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px' }}
                >
                    <div style={{ overflow: 'hidden', display: 'flex' }}>
                        {Array.from("AMAN").map((letter, index) => (
                            <motion.span variants={child} key={index}>
                                {letter}
                            </motion.span>
                        ))}
                    </div>

                    <div style={{ overflow: 'hidden', display: 'flex' }}>
                        {Array.from("SWARNKAR").map((letter, index) => (
                            <motion.span
                                variants={child}
                                key={index}
                                className="text-gradient"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: 'var(--text-secondary)' }}
                >
                    Building scalable microservices and distributed systems with <span style={{ color: 'white' }}>precision</span> and <span style={{ color: 'white' }}>performance</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="hero-buttons"
                >
                    <a
                        href="#projects"
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            window.lenis?.scrollTo('#projects');
                        }}
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="btn btn-outline"
                        onClick={(e) => {
                            e.preventDefault();
                            window.lenis?.scrollTo('#contact');
                        }}
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
