export async function fetchMarketData(ticker) {
  const url = `https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=D&token=YOUR_API_KEY`;

  const res = await fetch(url);
  const json = await res.json();

  return {
    ticker,
    history: {
      dates: json.t.map(ts => new Date(ts * 1000).toLocaleDateString()),
      prices: json.c,
    },
    fundamentals: {
      revenueGrowth: Math.random() * 30,
      profitMargin: Math.random() * 20,
      debtRatio: Math.random(),
    },
  };
}
