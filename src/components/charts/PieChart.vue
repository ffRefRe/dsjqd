<template>
  <div id="pre-chart">
    <div id="PreChart" :style="{width: '500px', height: '300px'}"></div>
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
      chart_datas: [
        {value: 335, name: 'OS1'},
        {value: 310, name: 'OS2'},
        {value: 234, name: 'OS3'},
        {value: 135, name: 'OS4'},
        {value: 1548, name: 'OS5'},
        {value: 120, name: 'other'}]
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      let myChart = this.$echarts.init(document.getElementById('PreChart'))
      // 绘制图表

      myChart.setOption({
        title: {
          text: '用户访问来源',
          subtext: '操作系统',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data: ['OS1', 'OS2', 'OS3', 'OS4', 'OS5', 'other']
        },
        series: [
          {
            name: '操作系统',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.chart_datas
          }
        ]
      })
    }
  }
}

</script>

<style scoped>

</style>
