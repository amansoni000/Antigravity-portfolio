import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="experience-section">
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="project-card"
                    style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)' }}
                >
                    <div className="flex-between" style={{ alignItems: 'start', flexWrap: 'wrap', gap: '20px' }}>
                        <div>
                            <span className="section-tag">// Education</span>
                            <h3 style={{ fontSize: '32px', marginBottom: '10px' }}>IIIT Jabalpur</h3>
                            <p style={{ fontSize: '20px', color: 'var(--text-secondary)' }}>B.Tech in Electronics & Communication</p>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>8.1/10</div>
                            <div style={{ fontFamily: 'var(--font-mono)', opacity: 0.5 }}>CGPA</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '30px', fontFamily: 'var(--font-mono)', opacity: 0.7 }}>
                        <span>2019 - 2023</span>
                        <span>Jabalpur, India</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
