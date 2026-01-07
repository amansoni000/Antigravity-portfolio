import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceItem = ({ experience, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="timeline-item"
        >
            <div className="timeline-dot"></div>

            <div className="grid-2" style={{ alignItems: 'start' }}>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    {experience.period}
                </div>

                <div>
                    <h3 className="exp-role">
                        {experience.role}
                    </h3>
                    <h4 className="exp-company">{experience.company}</h4>

                    <ul style={{ marginBottom: '20px' }}>
                        {experience.points.map((point, i) => (
                            <li key={i} style={{ marginBottom: '10px', fontSize: '16px', color: 'var(--text-secondary)' }}>
                                <span style={{ color: 'var(--accent-primary)', marginRight: '10px' }}>■</span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <div>
                        {experience.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const experiences = [
        {
            role: "Software Development Engineer",
            company: "Addverb Technologies",
            period: "Jan 2023 - Present",
            points: [
                "Engineered Inbound microservice (99.9% availability) for Warehouse Management System.",
                "Delivered backend solutions for RIL, Volvo, Shiperoo.",
                "Built Restart Analysis Library reducing MTTR by 50%.",
                "Designed resilient workflows for distributed data streams.",
                "Mentored juniors and led Scrum discussions.",
                "Optimized performance reducing processing time by 60%."
            ],
            tech: ["Java", "Spring Boot", "Kafka", "Elasticsearch", "SQL", "Docker"]
        },
        {
            role: "TCS Research Intern",
            company: "TCS Research & Innovation",
            period: "May 2022 - Aug 2022",
            points: [
                "Developed multi-echelon supply chain management systems.",
                "Built inventory flow model using classical and quantum solvers."
            ],
            tech: ["Python", "Cplex", "Qiskit", "D’Wave"]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">// Career Path</span>
                    <h2 className="section-title">Work Experience</h2>
                </div>

                <div>
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
