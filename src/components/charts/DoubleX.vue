<!--suppress ALL -->
<template>
  <div id="doube-x">
    <div id="DoubleXChart" :style="{width: '300px', height: '300px'}"></div>
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
  props: ['lista','listb'],
  mounted () {

  },
  watch:{
    listb:function (val) {
      console.log(123124124214)
      this.drawChart()
    }
  },


  methods: {
    drawChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('DoubleXChart'))
      // 绘制图表
      var colors = ['#5793f3', '#d14a61', '#675bba'];
      myChart.setOption({
        color: colors,

        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data:['6日', '7日']
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '6日  ' + params.value
                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ["7-2", "7-4", "7-6", "7-8", "7-10", "7-12", "7-14", "7-16", "7-18", "7-20", "7-22", "7-24"]
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return '7日  ' + params.value
                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ["6-2", "6-4", "6-6", "6-4", "6-10", "6-12", "6-14", "6-16", "6-18", "6-20", "6-22", "6-24"]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name:'6日',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: this.lista
          },
          {
            name:'7日',
            type:'line',
            smooth: true,
            data: this.listb
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
