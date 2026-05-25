export function renderChartPanel(data) {
  document.getElementById("chartPanel").innerHTML = `
    <div class="card">
      <h3>Price History</h3>
      <canvas id="priceChart"></canvas>
    </div>
  `;

  const ctx = document.getElementById("priceChart");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.history.dates,
      datasets: [
        {
          label: "Price",
          data: data.history.prices,
          borderColor: "#58a6ff",
          tension: 0.2,
        },
      ],
    },
  });
}
