import React from "react";
import { Link } from "react-router-dom";

function Approach() {
  return (
    <>
      {/* Converted JSX from approach.html main section */}
      <section className="hero" aria-label="Approach hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">The science behind smarter systems</p>
            <h1 className="hero-title">Engineering excellence for tomorrow’s intelligence.</h1>
            <p className="hero-subtitle">
              Our approach is a symphony of cutting-edge technology, rigorous methodologies, and an unwavering
              commitment to quality. We build robust, scalable, and secure foundations for intelligent solutions.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/contact.html">Discuss Your Technical Needs</Link>
              <Link className="button secondary" to="/insights.html">Explore Our Insights</Link>
            </div>
          </div>

          <div className="hero-card" aria-label="Core stack">
            <div className="hero-card-top">
              <div className="dot dot-red" aria-hidden="true"></div>
              <div className="dot dot-yellow" aria-hidden="true"></div>
              <div className="dot dot-green" aria-hidden="true"></div>
              <div className="hero-card-title">Powering Innovation</div>
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
      </section>

      <section className="section" aria-label="Technology stack">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Powering Innovation with Precision.</h2>
            <p className="section-subtitle">
              A high-level overview of the technologies we master—selected for performance, reliability, and
              maintainability.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Cloud Platforms</h3>
              <p className="card-text">Azure, AWS, GCP — built for scalability, reliability, and secure operations.</p>
            </article>
            <article className="card">
              <h3 className="card-title">AI/ML Frameworks</h3>
              <p className="card-text">TensorFlow, PyTorch, Scikit-learn, Hugging Face — models that learn and adapt.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Languages</h3>
              <p className="card-text">Python, Java, Go, C#, JavaScript/TypeScript — chosen for the right tradeoffs.</p>
            </article>
            <article className="card">
              <h3 className="card-title">DevOps &amp; MLOps</h3>
              <p className="card-text">Kubernetes, Docker, CI/CD, Git — continuous delivery and model lifecycle management.</p>
            </article>
          </div>

          <div className="card-grid" style={{ marginTop: "14px" }}>
            <article className="card">
              <h3 className="card-title">Data Technologies</h3>
              <p className="card-text">Kafka, Spark, SQL/NoSQL, Snowflake/Databricks — pipelines and platforms at scale.</p>
            </article>
            <article className="card">
              <h3 className="card-title">UI/UX Frameworks</h3>
              <p className="card-text">React, Angular, Vue — intuitive experiences for intelligent systems.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Security Practices</h3>
              <p className="card-text">Least privilege, encryption, secure SDLC, threat modeling, and observability.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Architecture</h3>
              <p className="card-text">Microservices, event-driven systems, APIs — built for evolution and resilience.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt" aria-label="Methodology">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Agile Intelligence: Our Path to Your Success.</h2>
            <p className="section-subtitle">A rigorous, transparent delivery model designed for predictability.</p>
          </div>

          <ol className="steps">
            <li className="step">
              <div className="step-number">01</div>
              <div className="step-body">
                <h3 className="step-title">Discovery &amp; Strategy</h3>
                <p className="step-text">A deep dive into your objectives, constraints, and success metrics.</p>
              </div>
            </li>
            <li className="step">
              <div className="step-number">02</div>
              <div className="step-body">
                <h3 className="step-title">Architecture &amp; Design</h3>
                <p className="step-text">Robust, scalable, secure system design optimized for future growth.</p>
              </div>
            </li>
            <li className="step">
              <div className="step-number">03</div>
              <div className="step-body">
                <h3 className="step-title">Iterative Build &amp; AI Integration</h3>
                <p className="step-text">Agile sprints with continuous prototyping and validated value delivery.</p>
              </div>
            </li>
            <li className="step">
              <div className="step-number">04</div>
              <div className="step-body">
                <h3 className="step-title">QA, Deployment &amp; Evolution</h3>
                <p className="step-text">Testing at every stage, seamless rollout, monitoring and ongoing optimization.</p>
              </div>
            </li>
          </ol>

          <div className="callout">
            <div>
              <h3 className="callout-title">Want a delivery plan you can trust?</h3>
              <p className="callout-text">Share your goals and we’ll propose an architecture and timeline.</p>
            </div>
            <Link className="button primary" to="/contact.html">Start the Conversation</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Security and ethics">
        <div className="container">
          <div className="feature-grid">
            <div className="feature">
              <h3 className="feature-title">Fortifying Intelligence</h3>
              <p className="feature-text">
                Security is foundational—not an afterthought. We embed robust protocols, align to compliance needs,
                and design resilient architectures to safeguard your data and operations.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Intelligence with Integrity</h3>
              <p className="feature-text">
                We are committed to responsible AI. Solutions are designed for fairness, transparency, and
                accountability—so AI enhances human‑well‑being and earns trust.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Reliability at Scale</h3>
              <p className="feature-text">
                Observability, performance engineering, and automation ensure your intelligent systems remain stable as
                demand grows.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Future‑Proof Architecture</h3>
              <p className="feature-text">
                Modular designs that evolve with your business—minimizing vendor lock‑in and enabling continuous
                innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Approach;
