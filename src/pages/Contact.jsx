import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Globe, User, Building2, Tag, MessageSquare, ArrowRight, Lock } from "lucide-react";
import "./Contact.css";

function Contact() {
    return (
        <main id="main" className="contact-page">
            <section className="contact-hero" aria-label="Contact hero">
                <div className="contact-container">
                    <div className="contact-hero-copy">
                        <p className="contact-eyebrow">Your next intelligent breakthrough starts here</p>
                        <h1 className="contact-hero-title">Connect with NETO.</h1>
                        <p className="contact-hero-subtitle">
                            Whether you’re ready to transform your enterprise, explore a strategic partnership, or join our team,
                            we’re eager to connect.
                        </p>
                        <div className="contact-hero-actions">
                            <a className="contact-button-primary" href="#form">Send Your Vision</a>
                            <Link className="contact-button-secondary" to="/services.html">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="form" aria-label="Contact form">
                <div className="contact-container">
                    <div className="contact-two-column">
                        {/* Left Side: Information Card */}
                        <div className="contact-info-card">
                            <h3 className="info-headline">Let's build the future together.</h3>
                            
                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon-wrapper"><Mail size={20} /></div>
                                    <div className="info-content">
                                        <h4>Email</h4>
                                        <p>inquiries@netotech.com</p>
                                    </div>
                                </div>
                                <div className="info-divider"></div>
                                <div className="info-item">
                                    <div className="info-icon-wrapper"><Phone size={20} /></div>
                                    <div className="info-content">
                                        <h4>Phone</h4>
                                        <p>+91 XXXXXXXXXX</p>
                                    </div>
                                </div>
                                <div className="info-divider"></div>
                                <div className="info-item">
                                    <div className="info-icon-wrapper"><MapPin size={20} /></div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <p>Hyderabad, Telangana, India</p>
                                    </div>
                                </div>
                                <div className="info-divider"></div>
                                <div className="info-item">
                                    <div className="info-icon-wrapper"><Clock size={20} /></div>
                                    <div className="info-content">
                                        <h4>Business Hours</h4>
                                        <p>Mon–Sat, 10:00–18:00</p>
                                    </div>
                                </div>
                                <div className="info-divider"></div>
                                <div className="info-item">
                                    <div className="info-icon-wrapper"><Globe size={20} /></div>
                                    <div className="info-content">
                                        <h4>Social</h4>
                                        <p>LinkedIn / X / GitHub</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Card */}
                        <div className="contact-form-card">
                            <form
                                className="contact-form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <div className="input-wrapper">
                                            <User className="input-icon" size={20} />
                                            <input id="name" name="name" type="text" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <div className="input-wrapper">
                                            <Mail className="input-icon" size={20} />
                                            <input id="email" name="email" type="email" placeholder="you@company.com" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <div className="input-wrapper">
                                            <Building2 className="input-icon" size={20} />
                                            <input id="company" name="company" type="text" placeholder="Company name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <div className="input-wrapper">
                                            <Tag className="input-icon" size={20} />
                                            <input id="subject" name="subject" type="text" placeholder="New Project" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="message">Message</label>
                                    <div className="input-wrapper textarea-wrapper">
                                        <MessageSquare className="input-icon" size={20} />
                                        <textarea id="message" name="message" rows="5" placeholder="Tell us about your project"></textarea>
                                    </div>
                                </div>

                                <button className="contact-submit-btn" type="submit">
                                    Connect with NETO
                                    <ArrowRight size={20} className="btn-icon" />
                                </button>
                                
                                <div className="security-note">
                                    <Lock size={14} />
                                    <span>Your information is secure and will never be shared.</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Contact;