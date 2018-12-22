<template>
  <div id="real-time-chart">
    <div id="RealTimeChart" :style="{width: '500px', height: '500px'}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Vue from 'vue'
Vue.prototype.$echarts = echarts
export default {
  name: 'DoubleX',
  data () {
    return {
      msg: 'DoubleX'
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {

    drawChart () {
      let myChart = echarts.init(document.getElementById('RealTimeChart'))

      var date = []
      var randomData = []

      for (var i = 0; i < 30; i++) {
        date.push('第' + (i + 1) + '小时')
        randomData.push(Math.floor(Math.random() * 100))
      }

      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: 'category',
          data: date
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: randomData,
          type: 'line'
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)

      var len = date.length

      setInterval(function () {
        randomData.push(Math.floor(Math.random() * 100))
        randomData.shift()
        date.push(len++)
        date.shift()
        myChart.setOption({
          xAxis: {
            data: date
          },
          series: [{
            data: randomData
          }]
        })
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
