import { useState } from 'react';
import './AboutContact.css';

function AboutContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budgetRange: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\nBudget range: ${formData.budgetRange}\n\n${formData.message}`
    );
    window.location.href = `mailto:hello@atlis.dev?subject=${subject}&body=${body}`;
  };

  return (
    <main className="about-page">
      <section className="page-intro">
        <h1>About and contact</h1>
        <p>Who's building Atlis, and how to reach us.</p>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <p className="section-label">Founders</p>
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-header">
              <div className="founder-avatar" aria-hidden="true">
                <span>LO</span>
              </div>
              <div>
                <h3>Lazaro Otieno</h3>
                <span className="founder-role">Co-Founder & Lead Engineer</span>
              </div>
            </div>
            <p>
              Computer science student and software engineer in Nairobi. 
              Specializing in scalable architecture, Next.js applications, distributed systems, 
              and robust full-stack workflows.
            </p>
          </div>

          <div className="founder-card">
            <div className="founder-header">
              <div className="founder-avatar" aria-hidden="true">
                <span>RM</span>
              </div>
              <div>
                <h3>Robert Mireri</h3>
                <span className="founder-role">Co-Founder & Systems Engineer</span>
              </div>
            </div>
            <p>
              Computer science student and engineer in Nairobi. 
              Focused on database systems, cloud infrastructure, frontend performance, 
              and delivering clean, reliable digital products.
            </p>
          </div>
        </div>

        <div className="studio-mission">
          <p>
            Atlis is built on the belief that a tight-knit engineering team delivers deeper attention, 
            faster iterations, and cleaner code than sprawling agencies with dozens of accounts to juggle.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="approach">
        <p className="section-label">Our Approach</p>
        <div className="approach-grid">
          <div className="approach-card">
            <span className="approach-num">01</span>
            <h4>Fast where it's safe to be fast</h4>
            <p>AI handles boilerplate; architecture and critical systems stay deliberate and sound.</p>
          </div>
          <div className="approach-card">
            <span className="approach-num">02</span>
            <h4>Scoped before it's started</h4>
            <p>Clear deliverables and transparent milestones, with zero surprise costs once the build begins.</p>
          </div>
          <div className="approach-card">
            <span className="approach-num">03</span>
            <h4>Built to be handed off</h4>
            <p>Clean codebases, complete documentation, and repository ownership—not a black box.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact">
        <p className="section-label">Start a conversation</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <select name="projectType" value={formData.projectType} onChange={handleChange} required>
              <option value="" disabled>Project type</option>
              <option value="Static Website (KSh 10,000)">Static Website (KSh 10,000)</option>
              <option value="Dynamic Website / CMS (KSh 20,000)">Dynamic Website / CMS (KSh 20,000)</option>
              <option value="Full-Stack Web App (KSh 40,000)">Full-Stack Web App (KSh 40,000)</option>
              <option value="Cloud / Infrastructure">Cloud / Infrastructure</option>
              <option value="Custom / Other">Custom / Other</option>
            </select>
            <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} required>
              <option value="" disabled>Budget range</option>
              <option value="Under KSh 20,000">Under KSh 20,000</option>
              <option value="KSh 20,000 - 40,000">KSh 20,000 - 40,000</option>
              <option value="KSh 40,000 - 80,000">KSh 40,000 - 80,000</option>
              <option value="KSh 80,000+">KSh 80,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Tell us about what you want to build..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}

export default AboutContact;