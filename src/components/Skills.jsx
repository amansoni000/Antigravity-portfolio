import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="skill-card"
        >
            <h3 style={{ fontSize: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)' }}></span>
                {title}
            </h3>
            <div>
                {skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skillSets = [
        {
            title: "Languages & Databases",
            skills: ["Java", "SQL", "Python", "MongoDB", "ElasticSearch", "Redis"]
        },
        {
            title: "Frameworks & Architecture",
            skills: ["Spring Boot", "Hibernate", "RabbitMQ", "Microservices", "JPA", "Kafka"]
        },
        {
            title: "DevOps & Tools",
            skills: ["Docker", "Kubernetes", "Git", "Jenkins", "Grafana", "Kibana"]
        }
    ];

    return (
        <section id="skills" className="experience-section">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center' }}>
                    <span className="section-tag">// Expertise</span>
                    <h2 className="section-title">Technical Arsenal</h2>
                </div>

                <div className="grid-3">
                    {skillSets.map((set, index) => (
                        <SkillCard key={index} title={set.title} skills={set.skills} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
