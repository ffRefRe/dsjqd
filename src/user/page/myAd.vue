<template>

  <div>
    myAd

    <div style="width: 900px;height: 500px" id="mychart"></div>

    <div style="width: 900px;height: 500px" id="vulPieChart"></div>

  </div>

</template>

<script>

export default {
  name: 'myAd',
  data () {
    return {

    }
  },

  mounted: function () {
    this.initChart();
  },

  methods: {
    initChart() {

      var myChart = this.$echarts.init(document.getElementById('mychart'));

      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }

  }

}
</script>

<style scoped>

</style>
