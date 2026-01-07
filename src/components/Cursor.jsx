import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-accent-primary rounded-full pointer-events-none z-[9999]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: 12, // Offset to center
                    y: 12  // Offset to center
                }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-white/50 rounded-full pointer-events-none z-[9998]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                }}
            />
        </>
    );
};

export default Cursor;
