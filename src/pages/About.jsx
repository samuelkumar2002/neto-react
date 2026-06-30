import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <main id="main">
                <section className="hero" aria-label="About hero">
                    <div className="container hero-grid">
                        <div className="hero-copy">
                            <p className="eyebrow">The architecture of tomorrow. Built on vision.</p>
                            <h1 className="hero-title">A new kind of company for a new era of intelligence.</h1>
                            <p className="hero-subtitle">
                                NETO Technology Solutions is founded on a profound commitment to ethical AI, a relentless pursuit of
                                innovation, and the unwavering belief that technology should empower, elevate, and inspire every
                                enterprise.
                            </p>
                            <div className="hero-actions">
                                <Link className="button primary" to="/services.html">
                                    Explore Our Capabilities
                                </Link>
                                <Link className="button secondary" to="/contact.html">
                                    Partner with Visionaries
                                </Link>
                            </div>
                        </div>

                        <div className="hero-card" aria-label="Values snapshot">
                            <div className="hero-card-top">
                                <div className="dot dot-red" aria-hidden="true"></div>
                                <div className="dot dot-yellow" aria-hidden="true"></div>
                                <div className="dot dot-green" aria-hidden="true"></div>
                                <div className="hero-card-title">NETO Foundations</div>
                            </div>
                            <div className="hero-card-body">
                                <div className="panel-row">
                                    <div className="panel-k">Ethical AI</div>
                                    <div className="panel-v">Fairness, transparency, accountability</div>
                                </div>
                                <div className="panel-row">
                                    <div className="panel-k">Engineering excellence</div>
                                    <div className="panel-v">Scalable, secure, reliable systems</div>
                                </div>
                                <div className="panel-row">
                                    <div className="panel-k">Partnership</div>
                                    <div className="panel-v">Co-creating intelligent outcomes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" aria-label="Genesis and vision">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="section-title">Forging the Future, One Intelligent System at a Time.</h2>
                            <p className="section-subtitle">
                                NETO Technology Solutions was conceived from a singular vision: to bridge the chasm between nascent
                                technological potential and tangible, transformative business outcomes. We recognized the burgeoning
                                power of AI and the imperative for integrated smart systems, understanding that true innovation lies not
                                just in writing code, but in architecting solutions that seamlessly blend intelligence with human
                                aspiration.
                            </p>
                        </div>

                        <div className="split">
                            <div className="panel">
                                <div className="panel-row">
                                    <div className="panel-k">Mission</div>
                                    <div className="panel-v">
                                        Our mission is to empower businesses with cutting-edge, AI-driven and future-ready Smart systems and
                                        solutions that optimize operations, enhance decision-making, and create unparalleled value, while
                                        adhering to the highest standards of innovation, quality, and ethical practice.
                                    </div>
                                </div>
                            </div>

                            <div className="panel">
                                <div className="panel-row">
                                    <div className="panel-k">Vision</div>
                                    <div className="panel-v">
                                        To be the leading global innovator in AI and Smart Systems, recognized for our transformative
                                        solutions that redefine industries and elevate human potential, driving a sustainable and intelligent
                                        future.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section alt" aria-label="Core values">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="section-title">The Pillars of Our Philosophy.</h2>
                            <p className="section-subtitle">Values that guide how we build, partner, and deliver.</p>
                        </div>

                        <div className="card-grid">
                            <article className="card">
                                <h3 className="card-title">Innovation</h3>
                                <p className="card-text">Relentlessly pushing boundaries, embracing the unexplored to craft truly novel solutions.</p>
                            </article>
                            <article className="card">
                                <h3 className="card-title">Excellence</h3>
                                <p className="card-text">Unparalleled quality, precision, and robust performance in every system we design.</p>
                            </article>
                            <article className="card">
                                <h3 className="card-title">Integrity</h3>
                                <p className="card-text">Transparent communication, ethical responsibility, and a client-first mindset.</p>
                            </article>
                            <article className="card">
                                <h3 className="card-title">Collaboration</h3>
                                <p className="card-text">Synergistic partnerships with clients and within our team to achieve collective brilliance.</p>
                            </article>
                        </div>

                        <div
                            className="card-grid"
                            style={{ marginTop: "14px" }}
                        >
                            <article className="card">
                                <h3 className="card-title">Impact</h3>
                                <p className="card-text">We measure success by the tangible, positive transformation we bring to business and society.</p>
                            </article>
                            <article className="card">
                                <h3 className="card-title">Adaptability</h3>
                                <p className="card-text">Thriving in dynamic environments, evolving our expertise to meet tomorrow’s demands.</p>
                            </article>
                            <article className="card">
                                <h3 className="card-title">Trust</h3>
                                <p className="card-text">Security, privacy, and reliability are foundational to every engagement.</p>
                            </article>
                            <article className="card">
                                <h3 className="card-title">Partnership</h3>
                                <p className="card-text">We co-create—aligning strategy, execution, and long-term outcomes.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="section" aria-label="Leadership and team">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="section-title">Architects of Intelligence: Our Founding Visionaries.</h2>
                            <p className="section-subtitle">
                                Replace these profiles with your founders and leadership. Highlight your prior roles, domain expertise,
                                and the vision you bring to NETO.
                            </p>
                        </div>

                        <div className="pricing-grid">
                            <article className="price-card">
                                <div className="price-head">
                                    <h3 className="price-title">Founder Name</h3>
                                    <p className="price-tag">Founder &amp; CEO</p>
                                </div>
                                <p className="card-text">
                                    Placeholder bio. Add a concise, credibility-focused summary (previous roles, years of experience,
                                    specialization in AI / enterprise architecture, and leadership vision).
                                </p>
                            </article>

                            <article className="price-card">
                                <div className="price-head">
                                    <h3 className="price-title">Co-Founder Name</h3>
                                    <p className="price-tag">Co-Founder &amp; CTO</p>
                                </div>
                                <p className="card-text">
                                    Placeholder bio. Focus on technical depth: ML engineering, system design, cloud platforms, MLOps,
                                    and delivery track record.
                                </p>
                            </article>

                            <article className="price-card">
                                <div className="price-head">
                                    <h3 className="price-title">Leadership Role</h3>
                                    <p className="price-tag">Head of Delivery / Architecture</p>
                                </div>
                                <p className="card-text">
                                    Placeholder bio. Emphasize client partnership, quality assurance, security, and predictable execution.
                                </p>
                            </article>
                        </div>

                        <div
                            className="callout"
                            style={{ marginTop: "14px" }}
                        >
                            <div>
                                <h3 className="callout-title">Our team ethos</h3>
                                <p className="callout-text">
                                    Our collective strength lies in the brilliance and diversity of our team—a confluence of seasoned AI
                                    specialists, innovative data scientists, astute solution architects, and visionary engineers, united
                                    by a shared passion for crafting the extraordinary.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section alt" aria-label="Hyderabad hub">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="section-title">Strategic Roots, Global Aspirations.</h2>
                            <p className="section-subtitle">
                                Based in Hyderabad, we’re positioned at a global technology hub—enabling access to exceptional talent and
                                a thriving innovation ecosystem.
                            </p>
                        </div>

                        <div className="callout">
                            <div>
                                <h3 className="callout-title">Let’s build the intelligent backbone of your enterprise.</h3>
                                <p className="callout-text">Start with a short brief and we’ll propose next steps.</p>
                            </div>
                            <Link className="button primary" to="/contact.html">
                                Connect with NETO
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;