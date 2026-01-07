import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + 5;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 200);
                    return 100;
                }
                return next;
            });
        }, 10);

        return () => clearInterval(timer);
    }, [setLoading]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 99999, background: '#030303', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <div style={{ textAlign: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ fontSize: '10vw', fontWeight: 'bold', fontFamily: 'var(--font-main)', color: 'white' }}
                >
                    {count}%
                </motion.h1>
                <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', margin: '20px auto', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                        style={{ height: '100%', background: 'var(--accent-primary)', width: `${count}%` }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
