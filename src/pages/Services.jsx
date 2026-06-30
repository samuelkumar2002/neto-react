import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <main id="main">
      <section className="hero" aria-label="Services hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Solutions engineered for tomorrow’s enterprise challenges</p>
            <h1 className="hero-title">The Spectrum of Intelligence.</h1>
            <p className="hero-subtitle">
              From automating complex workflows to extracting predictive insights from vast data, NETO’s intelligent
              solutions are meticulously crafted to deliver efficiency, foresight, and competitive advantage.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/contact.html">Request a Deep Dive</Link>
              <Link className="button secondary" to="/approach.html">Explore Our Approach</Link>
            </div>
          </div>

          <div className="hero-card" aria-label="Solution framework">
            <div className="hero-card-top">
              <div className="dot dot-red" aria-hidden="true"></div>
              <div className="dot dot-yellow" aria-hidden="true"></div>
              <div className="dot dot-green" aria-hidden="true"></div>
              <div className="hero-card-title">Solution Framework</div>
            </div>
            <div className="hero-card-body">
              <p className="card-text" style={{margin: 0}}>
                NETO’s suite of intelligent solutions is designed to integrate with your existing infrastructure,
                unlocking operational excellence, strategic decision-making, and elevated customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ai" aria-label="AI and ML transformation">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">AI &amp; Machine Learning Transformation</h2>
            <p className="section-subtitle">
              Leverage the full spectrum of AI/ML to redefine your capabilities. We design bespoke models and deploy
              intelligent systems that learn, adapt, and optimize.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Predictive Analytics &amp; Forecasting</h3>
              <p className="card-text">Uncover future trends and mitigate risks with intelligent foresight.</p>
            </article>
            <article className="card">
              <h3 className="card-title">NLP &amp; Generation (NLG)</h3>
              <p className="card-text">Automate content, elevate interactions, and extract insights from text.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Computer Vision</h3>
              <p className="card-text">Transform visual data into intelligence for quality, security, and automation.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Ethical &amp; Explainable AI (XAI)</h3>
              <p className="card-text">Transparent, fair, responsible AI—built for trust and governance.</p>
            </article>
          </div>

          <div className="callout">
            <div>
              <h3 className="callout-title">Request a Deep Dive into AI</h3>
              <p className="callout-text">Tell us your use case and we’ll propose an AI strategy and implementation path.</p>
            </div>
            <Link className="button primary" to="/contact.html">Talk to NETO</Link>
          </div>
        </div>
      </section>

      <section className="section alt" id="smart-systems" aria-label="Smart systems and IoT">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Smart Systems &amp; IoT Integration</h2>
            <p className="section-subtitle">
              Harmonize devices, sensors, and data streams into an intelligent ecosystem for real-time insights and
              automated control.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">IoT Platform Development</h3>
              <p className="card-text">Robust platforms for device management and secure data ingestion.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Edge AI Solutions</h3>
              <p className="card-text">Bring intelligence to the source for faster insights and reduced latency.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Smart Infrastructure Automation</h3>
              <p className="card-text">Transform physical spaces into responsive, adaptive environments.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Digital Twin Implementations</h3>
              <p className="card-text">Virtual replicas for predictive maintenance and optimized simulations.</p>
            </article>
          </div>

          <div className="callout">
            <div>
              <h3 className="callout-title">Discover Smart System Synergy</h3>
              <p className="callout-text">Explore how interconnected intelligence can modernize your operations.</p>
            </div>
            <Link className="button primary" to="/contact.html">Start a Conversation</Link>
          </div>
        </div>
      </section>

      <section className="section" id="data" aria-label="Data strategy and engineering">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Data Strategy &amp; Engineering</h2>
            <p className="section-subtitle">
              Architect resilient pipelines, scalable warehouses, and governance frameworks so AI initiatives are built
              on clean, accessible, trustworthy data.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Data Lake &amp; Warehouse Architecture</h3>
              <p className="card-text">Scalable repositories built for high-volume, high-velocity data.</p>
            </article>
            <article className="card">
              <h3 className="card-title">ETL / ELT Pipeline Development</h3>
              <p className="card-text">Reliable data flow and transformation for analytics and ML pipelines.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Governance &amp; Data Quality</h3>
              <p className="card-text">Establish trust, observability, and quality controls across data assets.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Streaming &amp; Real-Time Data</h3>
              <p className="card-text">Event-driven pipelines for instant insights and automation.</p>
            </article>
          </div>

          <div className="callout">
            <div>
              <h3 className="callout-title">Optimize Your Data Foundation</h3>
              <p className="callout-text">We’ll help you move from data chaos to strategic clarity.</p>
            </div>
            <Link className="button primary" to="/contact.html">Get a Data Assessment</Link>
          </div>
        </div>
      </section>

      <section className="section alt" id="software" aria-label="Custom software">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Custom Software &amp; Application Development (AI-Enabled)</h2>
            <p className="section-subtitle">
              When off-the-shelf solutions fall short, NETO crafts bespoke applications tailored to your strategic
              ambitions—AI-enabled, secure, and future-proof.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Enterprise Application Development</h3>
              <p className="card-text">Scalable, secure, performant applications built for modern teams.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Cloud-Native Development</h3>
              <p className="card-text">Azure, AWS, GCP solutions designed for resilience and elasticity.</p>
            </article>
            <article className="card">
              <h3 className="card-title">Microservices Architecture</h3>
              <p className="card-text">Modular systems that accelerate delivery and enable rapid innovation.</p>
            </article>
            <article className="card">
              <h3 className="card-title">UX/UI for Intelligent Systems</h3>
              <p className="card-text">Intuitive interfaces that make complex AI functionality accessible.</p>
            </article>
          </div>

          <div className="callout">
            <div>
              <h3 className="callout-title">Envision Your Custom Solution</h3>
              <p className="callout-text">Share your objectives and we’ll propose an architecture and delivery roadmap.</p>
            </div>
            <Link className="button primary" to="/contact.html">Request a Proposal</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Partnership approach">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Your Vision. Our Intelligent Craftsmanship.</h2>
            <p className="section-subtitle">
              We believe true partnership is built on shared vision and seamless execution. Our agile methodology,
              rigorous QA, and transparent communication ensure projects transcend expectations.
            </p>
          </div>

          <div className="callout">
            <div>
              <h3 className="callout-title">Ready to transform your enterprise?</h3>
              <p className="callout-text">Start your intelligent journey with a short discovery call.</p>
            </div>
            <Link className="button primary" to="/contact.html">Start Your Intelligent Journey</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
