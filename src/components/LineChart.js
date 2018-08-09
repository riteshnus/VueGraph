import { Bar, mixins } from 'vue-chartjs'

export default {
  name: 'LineChart',
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(
      this.chartData,
      {responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: 0
            }
          }],
          xAxes: [ {
            categoryPercentage: 0.9,
            barPercentage: 0.1
          }]
        },
        maintainAspectRatio: false})
  }
}
