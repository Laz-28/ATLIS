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
        <p>Who's building this, and how to reach me.</p>
      </section>

      <section className="founder">
        <div className="founder-avatar" aria-hidden="true" />
        <div>
          <h3>Musk, founder</h3>
          <p>
            Computer science student and developer in Nairobi. Atlis is a one-person studio
            built on the belief that small teams get more attention than agencies with a dozen
            accounts to juggle.
          </p>
        </div>
      </section>

      <section className="approach">
        <p className="section-label">Approach</p>
        <div className="approach-list">
          <div className="approach-item">
            <h4>Fast where it's safe to be fast</h4>
            <p>AI handles boilerplate; architecture stays deliberate.</p>
          </div>
          <div className="approach-item">
            <h4>Scoped before it's started</h4>
            <p>No surprise costs once the build begins.</p>
          </div>
          <div className="approach-item">
            <h4>Built to be handed off</h4>
            <p>Clean code and docs, not a black box.</p>
          </div>
        </div>
      </section>

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
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <select name="projectType" value={formData.projectType} onChange={handleChange} required>
              <option value="" disabled>Project type</option>
              <option value="Web app">Web app</option>
              <option value="Landing page">Landing page</option>
              <option value="Cloud/infra">Cloud / infra</option>
              <option value="Other">Other</option>
            </select>
            <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} required>
              <option value="" disabled>Budget range</option>
              <option value="Under KSh 50,000">Under KSh 50,000</option>
              <option value="KSh 50,000-150,000">KSh 50,000-150,000</option>
              <option value="KSh 150,000+">KSh 150,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
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