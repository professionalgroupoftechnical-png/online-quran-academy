import { CURRENCY_SYMBOLS } from '../constants/data';

const PLAN_META = {
  basic: { icon: 'fa-seedling', tag: 'Starter' },
  standard: { icon: 'fa-book-open', tag: 'Popular' },
  premium: { icon: 'fa-crown', tag: 'Best Value' },
};

export default function PlanCard({ plan, prices, currency }) {
  const priceKey = currency.toLowerCase();
  const price = prices[plan.id]?.[priceKey] ?? String(plan.usd);
  const meta = PLAN_META[plan.id] || { icon: 'fa-star', tag: 'Plan' };

  return (
    <article className={`plan-card${plan.featured ? ' featured' : ''}`}>
      <div className="plan-card-inner">
        {plan.featured && (
          <div className="plan-popular-badge">
            <i className="fas fa-star" aria-hidden="true" /> Most Popular
          </div>
        )}

        <div className="plan-card-top">
          <div className="plan-icon-wrap">
            <i className={`fas ${meta.icon}`} aria-hidden="true" />
          </div>
          <span className="plan-tier-tag">{meta.tag}</span>
          <h3 className="plan-name">{plan.name}</h3>
          <p className="plan-schedule">{plan.schedule}</p>
        </div>

        <div className="plan-price-block">
          <span className="plan-currency">{CURRENCY_SYMBOLS[currency]}</span>
          <span className="plan-amount">{price}</span>
          <span className="plan-period">/ month</span>
        </div>

        <div className="plan-divider" />

        <ul className="plan-features-clean">
          {plan.features.map((feature) => (
            <li key={feature}>
              <span className="plan-check">
                <i className="fas fa-check" aria-hidden="true" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`plan-cta-btn${plan.featured ? ' featured-cta' : ''}`}
        >
          Enroll Now
          <i className="fas fa-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
