export function computeScore(data) {
  const g = data.fundamentals.revenueGrowth;
  const p = data.fundamentals.profitMargin;
  const d = data.fundamentals.debtRatio;

  const growth = Math.min(40, g);
  const valuation = Math.max(0, 20 - d * 20);
  const momentum = Math.random() * 20;
  const risk = 20 - Math.min(20, d * 20);

  return {
    total: Math.round(growth + valuation + momentum + risk),
    growth: Math.round(growth),
    valuation: Math.round(valuation),
    momentum: Math.round(momentum),
    risk: Math.round(risk),
  };
}
