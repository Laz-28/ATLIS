import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>We build fast, well-architected web apps for founders and small teams</h1>
        <p className="hero-sub">
          Next.js, Supabase and Vercel, shipped with attention to the parts that are easy to get wrong.
        </p>
        <div className="hero-actions">
          <Link to="/services" className="btn btn-primary">Start a project</Link>
          <Link to="/about" className="btn btn-secondary">See our approach</Link>
        </div>
      </section>

      <section className="services">
        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 4L2 12l6 8M16 4l6 8-6 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3>Web development</h3>
          <p>Full-stack builds on Next.js and Supabase, MVP to launch.</p>
        </div>

        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <h3>Product and design</h3>
          <p>Interfaces built around how the product actually works.</p>
        </div>

        <div className="service-card">
          <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 18a4 4 0 01-1-7.87A5 5 0 0116 8a4 4 0 013 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3>Cloud and infrastructure</h3>
          <p>Deployment and hosting set up right the first time.</p>
        </div>
      </section>

      <section className="process">
        <p className="process-label">How we work</p>
        <div className="process-steps">
          <div className="process-step">
            <span className="step-number">01</span>
            <h4>Discovery</h4>
            <p>Scope and requirements</p>
          </div>
          <div className="process-step">
            <span className="step-number">02</span>
            <h4>Build</h4>
            <p>Code, review, iterate</p>
          </div>
          <div className="process-step">
            <span className="step-number">03</span>
            <h4>Launch</h4>
            <p>Deploy and quality check</p>
          </div>
          <div className="process-step">
            <span className="step-number">04</span>
            <h4>Handoff</h4>
            <p>Docs and walkthrough</p>
          </div>
        </div>
      </section>

      <section className="tech-strip">
        <span>React</span>
        <span>Next.js</span>
        <span>Supabase</span>
        <span>Vercel</span>
      </section>

      <section className="cta-banner">
        <h2>Have a project in mind?</h2>
        <Link to="/services" className="btn btn-primary">Start a project</Link>
      </section>
    </main>
  );
}

export default Home;