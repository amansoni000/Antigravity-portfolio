import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = ['hero', 'experience', 'projects', 'skills', 'education', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero', id: 'hero' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Education', href: '#education', id: 'education' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const handleNavClick = (href) => {
        setMobileMenuOpen(false);
        window.lenis?.scrollTo(href);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="navbar"
            >
                <div className="navbar-content">
                    <a href="#" className="logo">
                        AS<span style={{ color: 'var(--accent-primary)' }}>.</span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="nav-link"
                                    style={{
                                        color: activeSection === link.id ? 'white' : 'var(--text-secondary)',
                                        position: 'relative'
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                >
                                    {link.name}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeDot"
                                            style={{
                                                position: 'absolute',
                                                bottom: '-5px',
                                                left: '50%',
                                                width: '4px',
                                                height: '4px',
                                                background: 'var(--accent-primary)',
                                                borderRadius: '50%',
                                                x: '-50%'
                                            }}
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <a
                            href="https://drive.google.com/file/d/1UQ1QOmFAuS-bbGIJaHBTlrG5ochb2KRN/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary desktop-only"
                            style={{ padding: '8px 20px', fontSize: '14px' }}
                        >
                            Resume
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}
                        >
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: '80px',
                            left: '20px',
                            right: '20px',
                            background: 'rgba(10, 10, 10, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '20px',
                            padding: '20px',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            alignItems: 'center'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                style={{
                                    fontSize: '18px',
                                    color: activeSection === link.id ? 'white' : 'var(--text-secondary)',
                                    fontWeight: activeSection === link.id ? 'bold' : 'normal'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1UQ1QOmFAuS-bbGIJaHBTlrG5ochb2KRN/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ width: '100%', textAlign: 'center' }}
                        >
                            Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
