<template>
  <div id="day-load-chart">
    <!--{{this.datas}}-->
    <div id="DayLoadChart" :style="{width: '500px', height: '500px'}"></div>
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
      msg: 'DoubleX',
      datas: []
    }
  },
  mounted () {
    this.drawChart(2016)
  },
  methods: {
    getVirtulData: function (year) {
      year = year || '2017'
      var date = +echarts.number.parseDate(year + '-01-01')
      var end = +echarts.number.parseDate((+year + 1) + '-01-01')
      var dayTime = 3600 * 24 * 1000
      var data = []
      for (var time = date; time < end; time += dayTime) {
        data.push([
          echarts.format.formatTime('yyyy-MM-dd', time),
          Math.floor(Math.random() * 10000)
        ])
      }
      return data
    },
    drawChart (year) {
      let myChart = this.$echarts.init(document.getElementById('DayLoadChart'))
      this.datas = this.getVirtulData(year)
      // 绘制图表
      var option = {
        title: {
          top: 30,
          left: 'center',
          text: '2017年点击总数情况'
        },
        tooltip: {},
        visualMap: {
          min: 0,
          max: 10000,
          type: 'piecewise',
          orient: 'horizontal',
          left: 'center',
          top: 65,
          textStyle: {
            color: '#000'
          }
        },
        calendar: {
          top: 120,
          left: 30,
          right: 30,
          cellSize: ['auto', 13],
          range: '2016',
          itemStyle: {
            normal: {borderWidth: 0.5}
          },
          yearLabel: {show: false}
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          // data:
          data: this.getVirtulData(year)
        }
      }
      myChart.setOption(option)
    }
  }
}

</script>

<style scoped>

</style>
