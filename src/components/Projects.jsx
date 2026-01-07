import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
        >
            <div className="flex-between" style={{ marginBottom: '20px' }}>
                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'white' }}>
                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                    </svg>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', opacity: 0.5 }}>
                    {project.period}
                </span>
            </div>

            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>
                {project.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '16px' }}>
                {project.description}
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    {project.tech.map((t, i) => (
                        <span key={i} className="tech-tag">
                            {t}
                        </span>
                    ))}
                </div>

                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px', color: 'var(--accent-primary)' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        Code
                    </a>
                )}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Restart Analyser",
            period: "2025",
            description: "A plug-and-play Spring Boot library designed to detect and log root causes of microservice restarts. It captures critical system metrics like thread dumps, heap usage, and GC stats, ensuring 100% detection coverage.",
            tech: ["Java", "Spring Boot", "JMX", "System Diagnostics"],
            githubLink: "https://github.com/amansoni000/Restart_Analyser" // Placeholder link
        },
        {
            title: "PCB Defect Detection",
            period: "2022",
            description: "Research implementation for automatic visual inspection of Printed Circuit Boards. Utilizes advanced image processing techniques like multi-level thresholding and filtering for precise defect classification.",
            tech: ["Python", "OpenCV", "Numpy", "Image Processing"],
            githubLink: "https://github.com/amansoni000/PCB-Defect-Detection-Using-Image-Processing" // Placeholder link
        }
    ];

    return (
        <section id="projects" className="experience-section">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center' }}>
                    <span className="section-tag">// Selected Works</span>
                    <h2 className="section-title">Notable Projects</h2>
                </div>

                <div className="grid-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
