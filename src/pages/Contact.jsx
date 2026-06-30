import { Link } from "react-router-dom";

function Contact() {
    return (
        <><main id="main">
            <section className="hero" aria-label="Contact hero">
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <p className="eyebrow">Your next intelligent breakthrough starts here</p>
                        <h1 className="hero-title">Connect with NETO.</h1>
                        <p className="hero-subtitle">
                            Whether you’re ready to transform your enterprise, explore a strategic partnership, or join our team,
                            we’re eager to connect.
                        </p>
                        <div className="hero-actions">
                            <a className="button primary" href="#form">Send Your Vision</a>
                            <Link className="button secondary" to="/services.html">
                                Explore Services
                            </Link>
                        </div>
                    </div>

                    <div className="hero-card" aria-label="Direct channels">
                        <div className="hero-card-top">
                            <div className="dot dot-red" aria-hidden="true"></div>
                            <div className="dot dot-yellow" aria-hidden="true"></div>
                            <div className="dot dot-green" aria-hidden="true"></div>
                            <div className="hero-card-title">Direct Channels</div>
                        </div>
                        <div className="hero-card-body">
                            <div className="panel-row">
                                <div className="panel-k">Email</div>
                                <div className="panel-v">inquiries@netotech.com (replace)</div>
                            </div>
                            <div className="panel-row">
                                <div className="panel-k">Phone</div>
                                <div className="panel-v">+91 XXXXXXXXXX (replace)</div>
                            </div>
                            <div className="panel-row">
                                <div className="panel-k">Location</div>
                                <div className="panel-v">Hyderabad, Telangana, India</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section alt" id="form" aria-label="Contact form">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Initiate Your Inquiry.</h2>
                        <p className="section-subtitle">This form is a front-end placeholder you can connect to your backend later.</p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-card">
                            <h3 className="contact-title">We look forward to co-creating your future.</h3>
                            <p className="contact-text">Share a short brief and we’ll respond with next steps.</p>

                            <div className="contact-details">
                                <div className="contact-detail">
                                    <div className="contact-k">Business hours</div>
                                    <div className="contact-v">Mon–Sat, 10:00–18:00 (replace)</div>
                                </div>
                                <div className="contact-detail">
                                    <div className="contact-k">Social</div>
                                    <div className="contact-v">LinkedIn / X / GitHub (replace links)</div>
                                </div>
                                <div className="contact-detail">
                                    <div className="contact-k">Address</div>
                                    <div className="contact-v">Add full registered address here (replace)</div>
                                </div>
                            </div>
                        </div>

                        <form
                            className="form"
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div className="field">
                                <label htmlFor="name">Name</label>
                                <input id="name" name="name" type="text" placeholder="Your name" />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" placeholder="you@company.com" />
                            </div>

                            <div className="field">
                                <label htmlFor="company">Company</label>
                                <input id="company" name="company" type="text" placeholder="Company name" />
                            </div>

                            <div className="field">
                                <label htmlFor="subject">Subject</label>
                                <input id="subject" name="subject" type="text" placeholder="New Project / Partnership / Careers / General" />
                            </div>

                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project"></textarea>
                            </div>

                            <button className="button primary" type="submit">Connect with NETO</button>
                            <p className="form-note">Add your privacy policy link here.</p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}
export default Contact;