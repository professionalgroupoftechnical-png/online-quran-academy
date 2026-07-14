import { CURRENCIES } from '../constants/data';

export default function CurrencySelector({ currentCurrency, onCurrencyChange }) {
  return (
    <div className="currency-selector" id="currencySelector">
      {CURRENCIES.map(({ code, flag, label }) => (
        <button
          key={code}
          type="button"
          className={`currency-btn${currentCurrency === code ? ' active' : ''}`}
          data-currency={code}
          onClick={() => onCurrencyChange(code)}
        >
          <span className="currency-flag">{flag}</span> {label}
        </button>
      ))}
    </div>
  );
}
