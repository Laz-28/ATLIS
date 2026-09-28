import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesPricing.css';

const services = [
  {
    title: 'Web development',
    description:
      'Full-stack builds, from a single landing page to a multi-page product, on Next.js and Supabase.',
    tags: ['Next.js', 'Supabase', 'Vercel'],
    icon: <path d="M8 4L2 12l6 8M16 4l6 8-6 8" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: 'Product and design',
    description:
      'Interface design and UX passes for products already in progress, or new ones from scratch.',
    tags: ['Figma', 'React'],
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
  },
  {
    title: 'Cloud and infrastructure',
    description: 'Hosting, deployment pipelines, and database setup done right from day one.',
    tags: ['Vercel', 'Supabase'],
    icon: <path d="M7 18a4 4 0 01-1-7.87A5 5 0 0116 8a4 4 0 013 7" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

const faqs = [
  {
    q: 'How is pricing determined?',
    a: "Every project is scoped individually based on complexity, timeline, and what's already built. You'll get a clear quote before any work starts — no hidden add-ons.",
  },
  {
    q: "What's the typical timeline?",
    a: 'A landing page or small site typically takes 1–2 weeks. Larger builds with custom backend work run 3–6 weeks, depending on scope.',
  },
  {
    q: 'Do I own the code?',
    a: 'Yes. Once the project is paid in full, you get full ownership of the codebase and repository access.',
  },
  {
    q: 'How many revisions are included?',
    a: 'Two rounds of revisions are included in every project quote. Additional rounds can be added if needed.',
  },
];

function ServicesPricing() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="services-page">
      <section className="page-intro">
        <h1>Services and pricing</h1>
        <p>Clear scope and real numbers, not templated tiers.</p>
      </section>

      <section className="services-detail">
        {services.map((service) => (
          <div className="service-row" key={service.title}>
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {service.icon}
            </svg>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-row">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="engagement">
        <p className="section-label">Engagement models</p>
        <div className="engagement-cards">
          <div className="engagement-card">
            <h3>Project-based</h3>
            <p>Fixed scope, fixed timeline, one deliverable.</p>
            <span className="price-note">Custom, scoped on a call</span>
          </div>
          <div className="engagement-card">
            <h3>Ongoing</h3>
            <p>Monthly retainer for maintenance and iteration.</p>
            <span className="price-note">Custom, scoped on a call</span>
          </div>
        </div>
      </section>

      <section className="faq">
        <p className="section-label">Frequently asked</p>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={item.q}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.q}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <h2>Ready to scope your project?</h2>
        <Link to="/about" className="btn btn-primary">
          Get a quote
        </Link>
      </section>
    </main>
  );
}

export default ServicesPricing;