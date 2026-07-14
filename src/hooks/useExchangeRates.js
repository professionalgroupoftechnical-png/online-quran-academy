import { useEffect, useState } from 'react';
import { PLANS } from '../constants/data';

function buildInitialPrices() {
  const prices = {};
  PLANS.forEach((plan) => {
    prices[plan.id] = {
      usd: String(plan.usd),
      pkr: plan.defaultPkr,
      gbp: plan.defaultGbp,
      eur: plan.defaultEur,
    };
  });
  return prices;
}

export function useExchangeRates() {
  const [prices, setPrices] = useState(buildInitialPrices);

  useEffect(() => {
    async function updateLiveExchangeRates() {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        if (!data?.rates) return;

        const { rates } = data;
        setPrices((prev) => {
          const next = { ...prev };
          PLANS.forEach((plan) => {
            const usdBase = plan.usd;
            next[plan.id] = {
              usd: String(usdBase),
              pkr: String(Math.round(usdBase * rates.PKR)),
              gbp: (usdBase * rates.GBP).toFixed(1),
              eur: (usdBase * rates.EUR).toFixed(1),
            };
          });
          return next;
        });
      } catch {
        // Keep default prices on failure
      }
    }

    updateLiveExchangeRates();
  }, []);

  return prices;
}
