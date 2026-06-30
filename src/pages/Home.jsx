import { Link } from "react-router-dom";


function Home() {
    return (
        <main id="main">
            <section className="hero" aria-label="Hero">
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <p className="eyebrow">
                            Visionary AI. Intelligent systems. Real impact.
                        </p>

                        <h1 className="hero-title">
                            Architecting Tomorrow: AI-Driven Solutions for a Smarter, More
                            Efficient Future.
                        </h1>

                        <p className="hero-subtitle">
                            NETO Technology Solutions empowers forward-thinking enterprises to
                            navigate the complexities of tomorrow, designing and deploying
                            bespoke AI and intelligent systems that unlock unparalleled
                            efficiency and strategic foresight.
                        </p>

                        <div className="hero-actions">
                            <Link className="button primary" to="/contact.html">
                                Unleash Your Potential
                            </Link>

                            <Link className="button secondary" to="/about.html">
                                Explore Our Vision
                            </Link>
                        </div>

                        <div className="hero-metrics" aria-label="Core principles">
                            <div className="metric">
                                <div className="metric-value">Visionary</div>
                                <div className="metric-label">Future-ready AI</div>
                            </div>

                            <div className="metric">
                                <div className="metric-value">Trusted</div>
                                <div className="metric-label">
                                    Quality &amp; transparency
                                </div>
                            </div>

                            <div className="metric">
                                <div className="metric-value">Partner</div>
                                <div className="metric-label">Co-create outcomes</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-card" aria-label="Abstract system preview">
                        <div className="hero-card-top">
                            <div className="dot dot-red" aria-hidden="true"></div>
                            <div className="dot dot-yellow" aria-hidden="true"></div>
                            <div className="dot dot-green" aria-hidden="true"></div>

                            <div className="hero-card-title">
                                Intelligent System Blueprint
                            </div>
                        </div>

                        <div className="hero-card-body">
                            <div className="skeleton-row"></div>
                            <div className="skeleton-row"></div>
                            <div className="skeleton-row short"></div>

                            <div className="skeleton-grid">
                                <div className="skeleton-tile"></div>
                                <div className="skeleton-tile"></div>
                                <div className="skeleton-tile"></div>
                                <div className="skeleton-tile"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container hero-logos" aria-label="Focus areas">
                    <div className="hero-logos-label">Focus areas</div>

                    <div className="logos">
                        <span className="logo">AI &amp; ML</span>
                        <span className="logo">Smart Systems</span>
                        <span className="logo">Data Engineering</span>
                        <span className="logo">Cloud-Native</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;