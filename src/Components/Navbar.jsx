import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
        const targetY = startY + targetRect.top - navHeight - 12; // small padding

        const startTime = performance.now();

        const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            const eased = easeInOutCubic(progress);
            window.scrollTo(0, Math.round(startY + (targetY - startY) * eased));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
        // update hash without jump
        try {
            window.history.replaceState(null, '', `#${targetId}`);
        } catch (e) {
            // ignore
        }
    };

    const handleNavClick = (e, targetId) => {
        // allow modifier clicks (open in new tab/window)
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        setIsOpen(false);
        smoothScrollTo(targetId, 700);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Brand / Logo */}
                <div className="nav-logo">
                    <span className="accent">&lt;</span>
                    <span className="logo-text"> ABISHEK_KHATRI </span>
                    <span className="accent">/&gt;</span>
                </div>

                {/* Hamburger Menu Icon */}
                <div className={`nav-hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Navigation Links & CTA */}
                <div className={`nav-menu-wrapper ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
                        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
                        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
                        <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
                    </ul>

                    <div className="nav-cta">
                        <a href="#contact" className="cta-button" onClick={(e) => handleNavClick(e, 'contact')}>Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;