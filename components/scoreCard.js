export function renderScoreCard(score, data) {
  document.getElementById("scoreCard").innerHTML = `
    <div class="card">
      <h3>Investment Score</h3>
      <p class="score">${score.total}</p>

      <ul>
        <li>Growth: ${score.growth}</li>
        <li>Risk: ${score.risk}</li>
        <li>Valuation: ${score.valuation}</li>
        <li>Momentum: ${score.momentum}</li>
      </ul>
    </div>
  `;
}
