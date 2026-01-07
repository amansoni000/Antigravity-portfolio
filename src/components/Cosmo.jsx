import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Cosmo = ({ onToggleGravity, isGravityBroken }) => {
    const moveControls = useAnimation();
    const floatControls = useAnimation();

    // Roaming Logic (X-axis)
    useEffect(() => {
        if (!isGravityBroken) {
            const roam = async () => {
                while (true) {
                    // Walk Right
                    await moveControls.start({
                        x: "80vw",
                        scaleX: 1,
                        transition: { duration: 15, ease: "linear" }
                    });

                    // Wait
                    await new Promise(r => setTimeout(r, 1000));

                    // Walk Left
                    await moveControls.start({
                        x: "10vw",
                        scaleX: -1,
                        transition: { duration: 15, ease: "linear" }
                    });

                    // Wait
                    await new Promise(r => setTimeout(r, 1000));
                }
            };
            roam();
        } else {
            moveControls.stop();
        }
    }, [isGravityBroken, moveControls]);

    // Floating/Panic Animation (Y-axis)
    useEffect(() => {
        if (!isGravityBroken) {
            floatControls.start({
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            });
        } else {
            floatControls.start({
                y: [0, -100, -50, -150, 0],
                rotate: [0, 180, 360],
                transition: { duration: 8, repeat: Infinity, ease: "linear" }
            });
        }
    }, [isGravityBroken, floatControls]);

    return (
        // 1. Outer Container: Fixed to viewport, full width, but no height to avoid blocking clicks
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: 0,
                zIndex: 9999,
                pointerEvents: 'none' // Let clicks pass through empty space
            }}
        >
            {/* 2. Mover: Handles horizontal movement (x) and flipping (scaleX) */}
            <motion.div
                animate={moveControls}
                initial={{ x: "10vw" }}
                style={{
                    position: 'absolute',
                    bottom: '50px', // Vertical position
                    // transform: 'translateY(-200px)', // ✅ base vertical offset
                    left: 0,
                    width: '60px',
                    height: '60px',
                    pointerEvents: 'auto', // Re-enable clicks on Cosmo
                    transformOrigin: 'center'
                }}
            >
                {/* 3. Floater: Handles bobbing (y) and rotation */}
                <motion.div animate={floatControls} style={{ width: '100%', height: '100%' }}>

                    {/* Tooltip */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-2 py-1 rounded-lg text-[10px] font-medium whitespace-nowrap pointer-events-none"
                        style={{ originX: 0.5 }} // Ensure tooltip flips with parent
                    >
                        {isGravityBroken ? "Help!" : "Cosmo"}
                    </motion.div>

                    {/* SVG Character */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onToggleGravity}
                        className="cursor-pointer relative w-full h-full drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        title={isGravityBroken ? "Restore Gravity" : "Break Gravity"}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Backpack */}
                            <rect x="20" y="30" width="60" height="50" rx="10" fill="#333" />

                            {/* Body */}
                            <path d="M30 40 C30 20 70 20 70 40 V 80 C70 90 30 90 30 80 V 40 Z" fill="white" />

                            {/* Helmet */}
                            <circle cx="50" cy="35" r="25" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                            <circle cx="50" cy="35" r="20" fill="#1a1a1a" /> {/* Visor Background */}

                            {/* Visor Reflection */}
                            <path d="M35 30 Q 50 15 65 30" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="60" cy="28" r="3" fill="rgba(255,255,255,0.8)" />

                            {/* Face (Cute Eyes) */}
                            <motion.g
                                animate={isGravityBroken ? { y: [-1, 1, -1], x: [-1, 1, -1] } : {}}
                                transition={{ duration: 0.2, repeat: Infinity }}
                            >
                                {isGravityBroken ? (
                                    <>
                                        {/* Panic Eyes > < */}
                                        <path d="M42 32 L48 38 M48 32 L42 38" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M52 32 L58 38 M58 32 L52 38" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </>
                                ) : (
                                    <>
                                        {/* Normal Eyes */}
                                        <circle cx="43" cy="35" r="2" fill="white" />
                                        <circle cx="57" cy="35" r="2" fill="white" />
                                        {/* Blinking Animation */}
                                        <motion.rect
                                            x="40" y="33" width="6" height="4" fill="#1a1a1a"
                                            animate={{ opacity: [0, 0, 1, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
                                        />
                                        <motion.rect
                                            x="54" y="33" width="6" height="4" fill="#1a1a1a"
                                            animate={{ opacity: [0, 0, 1, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
                                        />
                                    </>
                                )}
                            </motion.g>

                            {/* Details */}
                            <rect x="40" y="60" width="20" height="15" rx="2" fill="#e5e5e5" /> {/* Chest Panel */}
                            <circle cx="45" cy="67" r="2" fill="#ef4444" /> {/* Red Button */}
                            <circle cx="50" cy="67" r="2" fill="#22c55e" /> {/* Green Button */}
                            <circle cx="55" cy="67" r="2" fill="#3b82f6" /> {/* Blue Button */}

                            {/* Arms */}
                            <path d="M30 50 Q 15 60 20 75" stroke="white" strokeWidth="8" strokeLinecap="round" />
                            <path d="M70 50 Q 85 60 80 75" stroke="white" strokeWidth="8" strokeLinecap="round" />

                            {/* Legs */}
                            <path d="M40 85 L 40 95" stroke="white" strokeWidth="8" strokeLinecap="round" />
                            <path d="M60 85 L 60 95" stroke="white" strokeWidth="8" strokeLinecap="round" />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Cosmo;
