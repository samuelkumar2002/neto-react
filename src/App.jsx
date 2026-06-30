// Styles are imported via src/index.css
// Script functionality integrated via React hooks
import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import WhyNeto from "./pages/WhyNeto";
import Careers from "./pages/Careers";
import Insights from "./pages/Insights";
import logo from "./assets/neto-logo.png";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
/* -------------------------------------------------
   Header – replicates original static header with navigation toggle
   ------------------------------------------------- */
function Header() {
  useEffect(() => {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    const setNavOpen = (open) => {
      if (!toggle || !nav) return;
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    if (toggle && nav) {
      const handleClick = () => setNavOpen(!nav.classList.contains('open'));
      toggle.addEventListener('click', handleClick);
      return () => toggle.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Go to top">
          <img src={logo} alt="NETO logo" className="logo-image" style={{ height: '70px', marginRight: '0.5rem' }} aria-hidden="true" />
          <span className="brand-name">NETO Technology Solutions</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-controls="site-nav"
          aria-expanded="false"
        >
          <span className="nav-toggle-lines" aria-hidden="true"></span>
        </button>
        <nav className="site-nav" id="site-nav" aria-label="Primary navigation">
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/about.html">About</NavLink>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/services.html">Services</NavLink>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/approach.html">Technology &amp; Approach</NavLink>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/why-neto.html">Why NETO</NavLink>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/careers.html">Careers</NavLink>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/insights.html">Insights</NavLink>
          <NavLink className={({ isActive }) => "nav-link nav-cta" + (isActive ? " active" : "")} to="/contact.html">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

/* -------------------------------------------------
   Footer – replicates original static footer with dynamic year
   ------------------------------------------------- */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand footer-brand-row">
            <span className="brand-mark" aria-hidden="true"></span>
            <span className="brand-name">
              NETO TECHNOLOGY SOLUTIONS PRIVATE LIMITED
            </span>
          </div>
          <p className="footer-text">
            NETO Technology Solutions designs and deploys AI‑driven intelligent systems and
            future‑ready software solutions.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <Link to="/about.html">About</Link>
          <Link to="/services.html">Services</Link>
          <Link to="/contact.html">Contact</Link>
          <Link to="/insights.html">Insights</Link>
        </div>
        <div className="footer-meta">
          <div>© <span id="year">{year}</span> NETO TECHNOLOGY SOLUTIONS PRIVATE LIMITED. All rights reserved.</div>
          <div className="footer-small">A NETO Technology Solutions initiative.</div>
        </div>
      </div>
    </footer>
  );
}


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/services.html" element={<Services />} />
        <Route path="/approach.html" element={<Approach />} />
        <Route path="/why-neto.html" element={<WhyNeto />} />
        <Route path="/careers.html" element={<Careers />} />
        <Route path="/insights.html" element={<Insights />} />
        <Route path="/contact.html" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
