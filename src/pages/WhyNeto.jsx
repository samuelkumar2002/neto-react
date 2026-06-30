import { Link } from "react-router-dom";

function WhyNeto() {
    return (
        <><main id="main">
            <section className="hero" aria-label="Why NETO hero">
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <p className="eyebrow">Our commitment to your success</p>
                        <h1 className="hero-title">The NETO Advantage.</h1>
                        <p className="hero-subtitle">
                            While new, our foundation is built on decades of collective expertise, a pioneering spirit, and an
                            unwavering commitment to delivering transformative AI and Smart Systems solutions.
                        </p>
                        <div className="hero-actions">
                            <Link className="button primary" to="/contact.html">
                                Let's Discuss Your Challenge
                            </Link>
                            <Link className="button secondary" to="/approach.html">
                                See Our Method
                            </Link>
                        </div>
                    </div>

                    <div className="hero-card" aria-label="Confidence pillars">
                        <div className="hero-card-top">
                            <div className="dot dot-red" aria-hidden="true"></div>
                            <div className="dot dot-yellow" aria-hidden="true"></div>
                            <div className="dot dot-green" aria-hidden="true"></div>
                            <div className="hero-card-title">Confidence Pillars</div>
                        </div>
                        <div className="hero-card-body">
                            <div className="panel-row">
                                <div className="panel-k">Expertise</div>
                                <div className="panel-v">AI, data, architecture, and delivery discipline</div>
                            </div>
                            <div className="panel-row">
                                <div className="panel-k">Precision</div>
                                <div className="panel-v">Engineering rigor and quality at every stage</div>
                            </div>
                            <div className="panel-row">
                                <div className="panel-k">Integrity</div>
                                <div className="panel-v">Ethical AI, transparency, and trust</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" aria-label="Unrivaled expertise">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Decades of Collective AI &amp; Smart Systems Mastery.</h2>
                        <p className="section-subtitle">
                            NETO is built by specialists with deep experience across enterprise software, AI engineering, and complex
                            integrations. You get strategy and execution from the same team.
                        </p>
                    </div>

                    <div className="feature-grid">
                        <div className="feature">
                            <h3 className="feature-title">Visionary expertise</h3>
                            <p className="feature-text">Guidance through complex AI and smart systems landscapes.</p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title">Uncompromising quality</h3>
                            <p className="feature-text">Precision, scalability, security, and performance as defaults.</p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title">Agile collaboration</h3>
                            <p className="feature-text">Transparent iterations where your insights shape the build.</p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title">Future-ready focus</h3>
                            <p className="feature-text">Designed for tomorrow's challenges, not just today's.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section alt" aria-label="Process">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Our Rigorous Process: Engineered for Your Confidence.</h2>
                        <p className="section-subtitle">
                            Even without a lengthy portfolio, our defined methodology ensures clarity, control, and predictable
                            outcomes.
                        </p>
                    </div>

                    <ol className="steps">
                        <li className="step">
                            <div className="step-number">01</div>
                            <div className="step-body">
                                <h3 className="step-title">Discovery</h3>
                                <p className="step-text">Scope, constraints, risks, and success metrics—aligned early.</p>
                            </div>
                        </li>
                        <li className="step">
                            <div className="step-number">02</div>
                            <div className="step-body">
                                <h3 className="step-title">Architecture</h3>
                                <p className="step-text">Secure, scalable system design optimized for evolution.</p>
                            </div>
                        </li>
                        <li className="step">
                            <div className="step-number">03</div>
                            <div className="step-body">
                                <h3 className="step-title">Build &amp; Validate</h3>
                                <p className="step-text">Agile sprints with demos, QA, and measurable progress.</p>
                            </div>
                        </li>
                        <li className="step">
                            <div className="step-number">04</div>
                            <div className="step-body">
                                <h3 className="step-title">Launch &amp; Evolve</h3>
                                <p className="step-text">Deployment, monitoring, optimization, and ongoing partnership.</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>

            <section className="section" aria-label="Partnership">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Your Visionary Ally, Not Just a Vendor.</h2>
                        <p className="section-subtitle">
                            We immerse ourselves in your domain, align to your long-term goals, and co-create intelligent systems that
                            deliver enduring value.
                        </p>
                    </div>

                    <div className="callout">
                        <div>
                            <h3 className="callout-title">Building for good, building to last</h3>
                            <p className="callout-text">
                                Ethical AI and future-proof engineering ensure your investment remains trustworthy and resilient amid
                                technological shifts.
                            </p>
                        </div>
                        <Link className="button primary" to="/contact.html">
                            Discover How We Can Empower Your Enterprise
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section alt" aria-label="Testimonials placeholder">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">What Our Future Partners Will Say.</h2>
                        <p className="section-subtitle">
                            While our journey has just begun, we are confident our meticulous approach and dedication will earn your
                            trust. We invite you to be among the first to experience the NETO difference.
                        </p>
                    </div>

                    <div className="quote-grid">
                        <figure className="quote">
                            <blockquote>“A team that brings clarity, rigor, and real engineering craft to complex AI initiatives.”</blockquote>
                            <figcaption>
                                <span className="quote-name">Future Partner</span>
                                <span className="quote-role">(Placeholder)</span>
                            </figcaption>
                        </figure>
                        <figure className="quote">
                            <blockquote>“Transparent delivery, secure architecture, and outcomes that scale.”</blockquote>
                            <figcaption>
                                <span className="quote-name">Future Partner</span>
                                <span className="quote-role">(Placeholder)</span>
                            </figcaption>
                        </figure>
                        <figure className="quote">
                            <blockquote>“A strategic partner—not just implementers—helping us lead in the AI era.”</blockquote>
                            <figcaption>
                                <span className="quote-name">Future Partner</span>
                                <span className="quote-role">(Placeholder)</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}

export default WhyNeto;