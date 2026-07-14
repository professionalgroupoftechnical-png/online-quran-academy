import SectionTitle from './SectionTitle';
import CurrencySelector from './CurrencySelector';
import PlanCard from './PlanCard';
import { PLANS } from '../constants/data';

export default function Plans({ currentCurrency, onCurrencyChange, prices }) {
  return (
    <section className="section plans-section-v2 pattern-bg" id="plans">
      <div className="container">
        <SectionTitle
          label="Pricing"
          title="Flexible Quran Learning Plans"
          subtitle="Simple, transparent pricing — pick what fits your family"
        />

        <p className="plans-note">
          <i className="fas fa-gift" aria-hidden="true" />
          All plans include a <strong>2-day free trial</strong> — no credit card needed
        </p>

        <div className="currency-selector-wrap">
          <CurrencySelector
            currentCurrency={currentCurrency}
            onCurrencyChange={onCurrencyChange}
          />
        </div>

        <div className="plans-grid">
          {PLANS.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              prices={prices}
              currency={currentCurrency}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
