import { Link } from "react-router-dom";

function Insights() {
    return (
        <>
            {/* Paste converted <main> here */}
            <main id="main">
                <section className="hero" aria-label="Insights hero">
                    <div className="container hero-grid">
                        <div className="hero-copy">
                            <p className="eyebrow">Navigating the intelligent horizon</p>
                            <h1 className="hero-title">Pioneering Perspectives.</h1>
                            <p className="hero-subtitle">
                                Explore NETO’s insights on AI, smart systems, and transformative technologies—trend analyses and
                                practical frameworks shaping tomorrow’s digital realm.
                            </p>
                            <div className="hero-actions">
                                <a className="button primary" href="#subscribe">Stay Ahead of the Curve</a>
                                <Link className="button secondary" to="/contact.html">
                                    Discuss a Topic
                                </Link>
                            </div>
                        </div>

                        <div className="hero-card" aria-label="Tags">
                            <div className="hero-card-top">
                                <div className="dot dot-red" aria-hidden="true"></div>
                                <div className="dot dot-yellow" aria-hidden="true"></div>
                                <div className="dot dot-green" aria-hidden="true"></div>
                                <div className="hero-card-title">Categories</div>
                            </div>
                            <div className="hero-card-body">
                                <div className="logos" style={{ justifyContent: "flex-start" }}>
                                    <span className="logo">Artificial Intelligence</span>
                                    <span className="logo">Machine Learning</span>
                                    <span className="logo">IoT</span>
                                    <span className="logo">Data Analytics</span>
                                    <span className="logo">Ethical AI</span>
                                    <span className="logo">Cybersecurity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" aria-label="Featured articles">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="section-title">Featured Articles</h2>
                            <p className="section-subtitle">Replace these with your real posts when ready.</p>
                        </div>

                        <div className="post-grid">
                            <article className="post">
                                <div className="post-top">
                                    <div className="post-tag">Ethical AI</div>
                                    <div className="post-date">2025</div>
                                </div>
                                <h3 className="post-title">Architecting Responsible AI Systems: A Practical Blueprint</h3>
                                <p className="post-text">Building AI that is transparent, safe, and aligned with business outcomes.</p>
                                <a className="post-link" href="#">
                                    Read
                                </a>
                            </article>

                            <article className="post">
                                <div className="post-top">
                                    <div className="post-tag">Data Engineering</div>
                                    <div className="post-date">2025</div>
                                </div>
                                <h3 className="post-title">From Data Chaos to Strategic Clarity</h3>
                                <p className="post-text">Modern data foundations that enable real-time intelligence and automation.</p>
                                <a className="post-link" href="#">Read</a>
                            </article>

                            <article className="post">
                                <div className="post-top">
                                    <div className="post-tag">Smart Systems</div>
                                    <div className="post-date">2025</div>
                                </div>
                                <h3 className="post-title">Edge AI &amp; Smart Ecosystems</h3>
                                <p className="post-text">Real-time decision-making at the source for resilient operations.</p>
                                <a className="post-link" href="#">Read</a>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="section alt" id="subscribe" aria-label="Subscribe">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="section-title">Stay Ahead of the Curve.</h2>
                            <p className="section-subtitle">Subscription is a front-end placeholder you can connect later.</p>
                        </div>

                        <div className="split">
                            <div className="panel">
                                <div className="panel-row">
                                    <div className="panel-k">Newsletter</div>
                                    <div className="panel-v">Exclusive analyses, trend reports, and practical frameworks.</div>
                                </div>
                                <div className="panel-row">
                                    <div className="panel-k">Frequency</div>
                                    <div className="panel-v">Monthly (editable)</div>
                                </div>
                            </div>

                            <form
                                className="form"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" placeholder="you@company.com" />
                                </div>
                                <button className="button primary" type="submit">Subscribe Now</button>
                                <p className="form-note">We respect your inbox. Replace with your privacy statement.</p>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Insights;