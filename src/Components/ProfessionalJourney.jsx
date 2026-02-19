import React from 'react';
import './Timeline.css';

const ProfessionalJourney = () => {
    const milestones = [
        {
            title: "Engineering Intern",
            company: "Imperial college of engineering | Bhaktapur, Nepal",
            period: "2024 — Present",
            achievements: [
                "studying the latest research papers in the field of computer engineering and cybersecurity.",
            ]
        },
        {
            title: "Software Engineering Intern",
            company: "Imperial college of engineering | Bhaktapur, Nepal",
            period: "Summer 2023",
            achievements: [
                "Developed internal dashboards for real-time data visualization.",
                "Collaborated on API documentation and unit testing protocols."
            ]
        },
        {
            title: "class Representative",
            company: "Imperial college of engineering | Bhaktapur, Nepal",
            period: "2022 — 2023",
            achievements: [
                "Facilitated communication between students and faculty, ensuring timely dissemination of information.",
                "Organized academic events and workshops to enhance student engagement."
            ]
        }
    ];

    return (
        <section id="experience" className="timeline-section">
            <div className="timeline-container">
                <h2 className="timeline-heading">Professional Journey</h2>

                <div className="timeline-wrapper">
                    {/* Central Line */}
                    <div className="timeline-line"></div>

                    {milestones.map((item, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            {/* Central Marker */}
                            <div className="timeline-marker">
                                <div className="marker-inner"></div>
                            </div>

                            {/* Card Content */}
                            <div className="timeline-card">
                                <div className="card-header">
                                    <span className="period-badge">{item.period}</span>
                                    <h3 className="job-title">{item.title}</h3>
                                    <p className="company-info">{item.company}</p>
                                </div>
                                <ul className="achievement-list">
                                    {item.achievements.map((point, pIndex) => (
                                        <li key={pIndex}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalJourney;