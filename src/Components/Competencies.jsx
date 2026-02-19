import React from 'react';
import './Competencies.css';

const Competencies = () => {
    const skillGroups = [
        {
            title: "Frontend Development",
            icon: "◈",
            color: "cyan",
            skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "Framer Motion"]
        },
        {
            title: "Backend Systems",
            icon: "⚙",
            color: "purple",
            skills: ["Node.js / Express", "Python / Django / FastAPI", "PostgreSQL / Redis", "GraphQL", "Go (Golang)"]
        },
        {
            title: "DevOps & Tools",
            icon: "☁",
            color: "green",
            skills: ["Docker / Kubernetes", "AWS / Google Cloud", "CI/CD Pipelines", "Git / GitHub Actions", "Linux Administration"]
        }
    ];

    return (
        <section id="skills" className="competencies-section">
            <div className="comp-container">
                {/* Header Section */}
                <header className="comp-header">
                    <span className="comp-label">TECHNICAL ARSENAL</span>
                    <h2 className="comp-title">Core Competencies</h2>
                    <p className="comp-subtitle">
                        A curated list of technologies and tools I utilize to build performant applications.
                    </p>
                </header>

                {/* Competency Grid */}
                <div className="comp-grid">
                    {skillGroups.map((group, index) => (
                        <div key={index} className={`comp-card ${group.color}-theme`}>
                            <div className="comp-icon-box">
                                {group.icon}
                            </div>
                            <h3 className="comp-card-title">{group.title}</h3>
                            <ul className="comp-skill-list">
                                {group.skills.map((skill, sIndex) => (
                                    <li key={sIndex} className="comp-skill-item">
                                        <span className="skill-dot"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competencies;