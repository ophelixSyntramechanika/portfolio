import React from 'react';
import './Hero.css';

const Hero = () => {
    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const smoothScrollTo = (targetId, duration = 700) => {
        const target = document.getElementById(targetId);
        if (!target) return;

        const nav = document.querySelector('.navbar');
        const navHeight = nav ? nav.getBoundingClientRect().height : 0;

        const startY = window.pageYOffset;
        const targetRect = target.getBoundingClientRect();
        const targetY = startY + targetRect.top - navHeight - 12;

        const startTime = performance.now();

        const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            const eased = easeInOutCubic(progress);
            window.scrollTo(0, Math.round(startY + (targetY - startY) * eased));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
        try {
            window.history.replaceState(null, '', `#${targetId}`);
        } catch (e) {
            // ignore
        }
    };

    const handleHeroClick = (e, targetId) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        smoothScrollTo(targetId, 700);
    };

    return (
        <section className="hero-section">
            {/* Background Layers */}
            <div className="grid-overlay"></div>
            <div className="radial-glow"></div>

            <div className="hero-container">
                {/* Status Badge */}
                <div className="status-badge">
                    <span className="status-dot"></span>
                    AVAILABLE FOR HIRE
                </div>

                {/* Main Headline */}
                <h1 className="hero-headline">
                    <span className="line-1">Engineering Intelligence</span>
                    <span className="line-2 gradient-text">Precise Execution</span>
                </h1>

                {/* Roles / Subtitle */}
                <div className="hero-roles">
                    <a href="https://www.instagram.com/eona.arnaud?igsh=MWc3aGZicWs2aGVkYw==" className="role-link" target="_blank" rel="noopener noreferrer">3d-Designer</a>
                    <span className="separator">|</span>
                    <span>Network Engineer</span>
                    <span className="separator">|</span>
                    <span>Computer Engineer</span>
                </div>

                {/* Description */}
                <p className="hero-description">
                    Building scalable, high-performance systems through rigorous architectural
                    design and clean-code principles. Focused on bridging the gap between
                    complex engineering problems and elegant software solutions.
                </p>

                {/* Action Buttons */}
                <div className="hero-actions">
                    <a href="#projects" className="btn-primary" onClick={(e) => handleHeroClick(e, 'projects')}>View Projects</a>
                    <a href="#contact" className="btn-secondary" onClick={(e) => handleHeroClick(e, 'contact')}>Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;