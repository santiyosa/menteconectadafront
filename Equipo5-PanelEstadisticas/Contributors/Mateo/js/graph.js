const ctx = document.getElementById('graficoInteracciones').getContext('2d');

const data = {
  labels: ['Comentarios', 'Reacciones', 'Mensajes', 'Vistas'],
  datasets: [{
    label: 'Interacciones',
    data: [25, 30, 20, 25],
    backgroundColor: ['#f87171', '#60a5fa', '#facc15', '#8cff7dff'],
    borderWidth: 1
  }]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#374151',
        font: {
          size: 14
        }
      }
    },
  }
};

const miGrafico = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});

function incrementarValoresAleatoriamente() {
  const valores = data.datasets[0].data;
  for (let i = 0; i < valores.length; i++) {
    valores[i] += Math.floor(Math.random() * 11) + 1;
  }
}

setInterval(() => {
  incrementarValoresAleatoriamente();
  miGrafico.update();
}, 1000);
