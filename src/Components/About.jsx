import React from 'react';
import './About.css';
import ProfileImage from './Abishek.jpg'; // Ensure this path is correct

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left Side: Profile Card */}
        <aside className="about-left">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              {/* Replace src with your actual image path */}
              <img
                src={ProfileImage}
                alt="Abishek Khatri-Portrait"
                className="profile-img"
              />
              <div className="card-overlay">
                <span className="card-label">01. THE DEVELOPER</span>
                <h3 className="card-name">Abishek Khatri</h3>
                <p className="card-location">kathmandu, nepal</p>
              </div>
            </div>
            <div className="card-glow"></div>
          </div>
        </aside>

        {/* Right Side: Content */}
        <article className="about-right">
          <div className="section-header">
            <span className="section-number">01.</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-text">
            <p>
              I'm a passionate Computer Engineer with a strong foundation in cybersecurity and network engineering. With a keen interest in building scalable, high-performance systems, I focus on rigorous architectural design and clean-code principles. My goal is to bridge the gap between complex engineering problems and elegant software solutions, delivering impactful results in the tech industry.
            </p>
            <p>
              I have a proven track record of successfully executing projects that require precision and attention to detail. My expertise lies in developing secure and efficient systems, and I am always eager to take on new challenges that allow me to grow and contribute to innovative solutions.
            </p>
          </div>

          <div className="education-block">
            <h4 className="block-label">EDUCATION</h4>
            <div className="edu-item">
              <div className="edu-info">
                <span className="edu-degree">B.S. Computer Engineering</span>
                <span className="edu-school">Tribhuvan University</span>
              </div>
              <div className="edu-meta">
                <span className="edu-dates">2080 — 2084</span>
                <span className="edu-gpa">GPA 3.4 / 4.0</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/mathe-tess" target="_blank" rel="noreferrer" className="social-link">
              GitHub Profile <span className="arrow">→</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
              LinkedIn <span className="arrow">→</span>
            </a>
          </div>
        </article>

      </div>
    </section>
  );
};

export default About;