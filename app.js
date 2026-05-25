import { renderNavbar } from "./components/navbar.js";
import { renderScoreCard } from "./components/scoreCard.js";
import { renderChartPanel } from "./components/chartPanel.js";
import { fetchMarketData } from "./services/marketData.js";
import { computeScore } from "./services/scoringEngine.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();

  const analyzeBtn = document.getElementById("analyzeBtn");
  analyzeBtn.addEventListener("click", runAnalysis);
});

async function runAnalysis() {
  const ticker = document.getElementById("tickerInput").value.trim();
  if (!ticker) return alert("Enter a ticker");

  const data = await fetchMarketData(ticker);
  const score = computeScore(data);

  renderScoreCard(score, data);
  renderChartPanel(data);
}
