import { Link } from 'react-router-dom';
import './Pricing.css';

const plans = [
  {
    name: 'Static Site',
    price: 'KSh 10,000',
    description: 'Perfect for personal portfolios, landing pages, and simple business sites.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'SEO basics',
      'Contact form integration',
      'Social media links',
      '1 round of revisions',
      'Deployed on Vercel',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Dynamic Site',
    price: 'KSh 20,000',
    description: 'For businesses that need a CMS, blog, or interactive elements.',
    features: [
      'Up to 10 pages',
      'CMS integration',
      'Blog or news section',
      'Analytics setup',
      'Contact form with email delivery',
      'Performance optimization',
      '2 rounds of revisions',
      'Deployed on Vercel',
    ],
    cta: 'Get started',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Full-Stack App',
    price: 'KSh 40,000',
    description: 'Complete web applications with authentication, database, and API.',
    features: [
      'Unlimited pages',
      'User authentication',
      'Database and API',
      'Admin dashboard',
      'Payment integration',
      'Email notifications',
      '3 rounds of revisions',
      'Full deployment setup',
      'Documentation and handoff',
    ],
    cta: 'Get started',
    highlighted: false,
  },
];

function Pricing() {
  return (
    <main className="pricing-page">
      <section className="pricing-intro">
        <h1>Pricing</h1>
        <p>Transparent pricing for every stage of your project. No hidden fees.</p>
      </section>

      <section className="pricing-grid-wrapper">
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card${plan.highlighted ? ' pricing-card--featured' : ''}`}
              key={plan.name}
            >
              {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <p className="pricing-card__price">{plan.price}</p>
              <p className="pricing-card__desc">{plan.description}</p>
              <ul className="pricing-card__features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                to="/about"
                className={`pricing-card__btn ${plan.highlighted ? 'pricing-card__btn--primary' : ''}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-note">
        <p>
          Need something custom? <Link to="/about">Get in touch</Link> and we'll scope it together.
        </p>
      </section>
    </main>
  );
}

export default Pricing;
