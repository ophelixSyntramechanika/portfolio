import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace with your actual EmailJS credentials
        emailjs.sendForm(
            'service_tft6tjc',
            'template_4j44b1j',
            form.current,
            'cIGJjUiMV0mqQ0Yme'
        )
            .then(() => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('error');
                console.error(error.text);
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <header className="contact-header">
                    <span className="contact-label">GET IN TOUCH</span>
                    <h2 className="contact-title">Let's Build Something Together</h2>
                    <p className="contact-description">
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>
                </header>

                <div className="form-card">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" name="user_name" placeholder="John Doe" required />
                            </div>
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" name="user_email" placeholder="john@example.com" required />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Subject</label>
                            <input type="text" name="subject" placeholder="General Inquiry" required />
                        </div>

                        <div className="input-group">
                            <label>Message</label>
                            <textarea name="message" rows="6" placeholder="Your message here..." required></textarea>
                        </div>

                        <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && <p className="status-msg success">Message sent successfully!</p>}
                        {status === 'error' && <p className="status-msg error">Something went wrong. Please try again.</p>}
                    </form>
                </div>

                <footer className="contact-footer">
                    <div className="social-links">
                        {/* Add your actual links here */}
                        <a href="https://github.com/mathe-tess" className="social-icon">GitHub</a>
                        <a href="https://www.instagram.com/eona.arnaud?igsh=MWc3aGZicWs2aGVkYw==" className="social-icon">Instagram</a>
                        <a href="mailto:abishekkhatri.official@gmail.com" className="social-icon">Email</a>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2026 Abishek khatri. All rights reserved.</p>
                        <p>Designed & Built with <span className="accent">Mathe.tes</span></p>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;