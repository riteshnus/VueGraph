<template>
  <div>
    <line-chart :chart-data="dataSetfull"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import {mapGetters, mapState} from 'vuex'

export default {
  name: "ExpenseCharts",
  components: {
    LineChart
  },
  computed: {
    ...mapState([
      'label','values'
    ]),
    dataSetfull () {
      return {
        labels: this.label,
        datasets: [
          {
            label: 'Expenses',
            backgroundColor: '#f87979',
            data: this.values
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
div {
  color: white;
  background-color: white;
}
</style>
