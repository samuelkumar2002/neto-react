import { Link } from "react-router-dom";

function Careers() {
    return (
        <><main id="main">
            <section className="hero" aria-label="Careers hero">
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <p className="eyebrow">Engineer the future. From the ground up.</p>
                        <h1 className="hero-title">Join our expedition into intelligent systems.</h1>
                        <p className="hero-subtitle">
                            At NETO, we’re building the intelligent systems of tomorrow. Join early and help shape technology,
                            processes, and culture—while working on high-impact AI and Smart Systems initiatives.
                        </p>
                        <div className="hero-actions">
                            <a className="button primary" href="#open-roles">View Open Positions</a>
                            <Link className="button secondary" to="/contact.html">Apply / Connect</Link>
                        </div>
                    </div>

                    <div className="hero-card" aria-label="Why join">
                        <div className="hero-card-top">
                            <div className="dot dot-red" aria-hidden="true"></div>
                            <div className="dot dot-yellow" aria-hidden="true"></div>
                            <div className="dot dot-green" aria-hidden="true"></div>
                            <div className="hero-card-title">Why Join NETO</div>
                        </div>
                        <div className="hero-card-body">
                            <div className="panel-row">
                                <div className="panel-k">Ground-floor impact</div>
                                <div className="panel-v">Influence core technology and culture</div>
                            </div>
                            <div className="panel-row">
                                <div className="panel-k">Cutting-edge innovation</div>
                                <div className="panel-v">AI, data, and smart systems at scale</div>
                            </div>
                            <div className="panel-row">
                                <div className="panel-k">Accelerated growth</div>
                                <div className="panel-v">Mentorship + rapid learning</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" aria-label="Why join NETO">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Your Opportunity to Define the Future.</h2>
                        <p className="section-subtitle">
                            If you’re driven by curiosity and inspired by challenging the status quo, joining NETO now means being at
                            the vanguard. You’ll help build foundational systems that define the next decade.
                        </p>
                    </div>

                    <div className="feature-grid">
                        <div className="feature">
                            <h3 className="feature-title">Culture of excellence</h3>
                            <p className="feature-text">Agile, collaborative, and intellectually stimulating—built for makers.</p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title">Ethical innovation</h3>
                            <p className="feature-text">Responsible AI development and transparency as default practice.</p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title">Mentorship</h3>
                            <p className="feature-text">Work closely with founders and senior specialists.</p>
                        </div>
                        <div className="feature">
                            <h3 className="feature-title">Ownership</h3>
                            <p className="feature-text">High autonomy, high responsibility, meaningful outcomes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section alt" id="open-roles" aria-label="Open positions">
                <div className="container">
                    <div className="section-head">
                        <h2 className="section-title">Explore Pioneering Opportunities.</h2>
                        <p className="section-subtitle">Replace these placeholders with your live openings.</p>
                    </div>

                    <div className="pricing-grid">
                        <article className="price-card">
                            <div className="price-head">
                                <h3 className="price-title">AI/ML Engineer</h3>
                                <p className="price-tag">Engineering</p>
                            </div>
                            <ul className="price-list">
                                <li>Model development and evaluation</li>
                                <li>Production ML pipelines</li>
                                <li>MLOps and monitoring</li>
                            </ul>
                            <Link className="button secondary" to="/contact.html">
                                Apply / Connect
                            </Link>
                        </article>

                        <article className="price-card">
                            <div className="price-head">
                                <h3 className="price-title">Data Engineer</h3>
                                <p className="price-tag">Data Platform</p>
                            </div>
                            <ul className="price-list">
                                <li>ETL/ELT pipelines</li>
                                <li>Streaming and warehousing</li>
                                <li>Governance and quality</li>
                            </ul>
                            <Link className="button secondary" to="/contact.html">Apply</Link>
                        </article>

                        <article className="price-card">
                            <div className="price-head">
                                <h3 className="price-title">Solution Architect</h3>
                                <p className="price-tag">Architecture</p>
                            </div>
                            <ul className="price-list">
                                <li>System design and integration</li>
                                <li>Security-first architecture</li>
                                <li>Cloud-native delivery</li>
                            </ul>
                            <Link className="button secondary" to="/contact.html">Apply</Link>
                        </article>
                    </div>

                    <div className="callout" style={{ marginTop: "14px" }}>
                        <div>
                            <h3 className="callout-title">Application process</h3>
                            <p className="callout-text">Send your resume + brief intro and we’ll respond with next steps.</p>
                        </div>
                        <Link className="button primary" to="/contact.html">Apply Now</Link>
                    </div>
                </div>
            </section>
        </main></>
    );
}

export default Careers;