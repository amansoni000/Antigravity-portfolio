import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="contact-title">
                        Let's Talk
                    </h2>
                    <p className="contact-description">
                        Open for opportunities. Let's build something extraordinary together.
                    </p>
                </motion.div>

                <ContactForm />

                <div className="social-links">
                    {[
                        { icon: FaEnvelope, href: "mailto:amanswarnkar2001@gmail.com", label: "Email" },
                        { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                        { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                        { icon: FaPhone, href: "tel:+916350468427", label: "Phone" }
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            whileHover={{ y: -10 }}
                            className="social-item"
                        >
                            <div className="social-icon">
                                <item.icon />
                            </div>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', opacity: 0.5 }}>
                                {item.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>

            <footer className="contact-footer">
                <p>© 2026 Aman Swarnkar</p>
                <p>Designed & Built with React</p>
            </footer>
        </section>
    );
};

export default Contact;
