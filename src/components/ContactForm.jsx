import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheck, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const form = useRef();

    // EmailJS Configuration
    const PUBLIC_KEY = "Uf7QV0H5ygjqcW0AX";
    const SERVICE_ID = "service_mk3cpio";
    const TEMPLATE_ID = "template_4oi5qjs";

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setFormState('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormState('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setFormState('error');
                setTimeout(() => setFormState('idle'), 3000);
            });
    };

    const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent-primary/50 focus:bg-white/10 transition-all font-mono text-sm backdrop-blur-sm";
    const labelClasses = "text-xs font-mono text-accent-primary mb-2 block tracking-wider";

    return (
        <div className="contact-form-container">
            {/* Decorative Elements */}
            <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--accent-primary)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.2, pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--accent-secondary)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.2, pointerEvents: 'none' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ position: 'relative', zIndex: 10 }}
            >
                <AnimatePresence mode="wait">
                    {formState === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="success-message"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(45deg, #4ade80, #059669)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '30px',
                                    boxShadow: '0 0 30px rgba(74,222,128,0.4)'
                                }}
                            >
                                <FaCheck style={{ fontSize: '30px', color: 'black' }} />
                            </motion.div>
                            <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>Message Sent!</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '400px' }}>
                                I'll get back to you as soon as possible.
                            </p>
                        </motion.div>
                    ) : (
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="form-grid">
                                {/* Name Input */}
                                <div className="glass-input-group">
                                    <label htmlFor="user_name" className="glass-label">NAME</label>
                                    <input
                                        type="text"
                                        name="user_name" // Required for EmailJS
                                        id="user_name"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="glass-input"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="glass-input-group">
                                    <label htmlFor="user_email" className="glass-label">EMAIL</label>
                                    <input
                                        type="email"
                                        name="user_email" // Required for EmailJS
                                        id="user_email"
                                        required
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="glass-input"
                                    />
                                </div>
                            </div>

                            {/* Message Input */}
                            <div className="glass-input-group">
                                <label htmlFor="message" className="glass-label">MESSAGE</label>
                                <textarea
                                    name="message" // Required for EmailJS
                                    id="message"
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="glass-input"
                                    style={{ resize: 'none' }}
                                />
                            </div>

                            {/* Submit Button */}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
                                {formState === 'error' && (
                                    <span style={{ color: '#ef4444', fontSize: '14px' }}>Failed to send. Check console.</span>
                                )}
                                <button
                                    type="submit"
                                    disabled={formState === 'sending'}
                                    className="glass-button"
                                >
                                    <span>
                                        {formState === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                                    </span>
                                    <div style={{
                                        width: '30px',
                                        height: '30px',
                                        background: 'black',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}>
                                        {formState === 'sending' ? (
                                            <div style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                        ) : (
                                            <FaArrowRight style={{ fontSize: '12px' }} />
                                        )}
                                    </div>
                                </button>
                            </div>
                        </form>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ContactForm;
