<template>
<div id="ad-channels-aya">
  <div style="padding: 0 15px">
    <div class="panel" >
      <div class="panel-heading">
        <h3 class="panel-title">广告投放数据分析</h3>
        <div class="right">
          <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
          <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
        </div>
      </div>
      <div class="chart-content"><ad-channel-day></ad-channel-day></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="panel">
        <div class="panel-heading">
          <h3 class="panel-title">广告投放数据分析</h3>
          <div class="right">
            <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
            <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
          </div>
        </div>
      <div class="chart-content"><ad-channel-double-x :lista="lista" :listb="listb"></ad-channel-double-x></div>
      </div>
    </div>
  <div class="col-md-6">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">点击来源分析</h3>
        <div class="right">
          <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
          <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
        </div>
      </div>
      <el-button-group>
        <el-button v-bind:class="{'selected': (selected===0)}" @click="selected=0">操作系统</el-button>
        <el-button v-bind:class="{'selected': (selected===1)}" @click="selected=1">设备</el-button>
      </el-button-group>
      <div class="chart-content" ><pie-chart :chart_datas=chart_datas ></pie-chart></div>
    </div>
  </div>


  <div class="col-md-6">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">广告投放数据分析</h3>
        <div class="right">
          <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
          <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
        </div>
      </div>
      <div class="chart-content"><rean-time></rean-time></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">点击来源分析</h3>
        <div class="right">
          <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
          <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
        </div>
      </div>
      <el-button-group>
        <el-button v-bind:class="{'selected': (selected===0)}" @click="selected=0">操作系统</el-button>
        <el-button v-bind:class="{'selected': (selected===1)}" @click="selected=1">设备</el-button>
      </el-button-group>
      <div class="chart-content" ><pie-chart-device :chart_datas=chart_datas ></pie-chart-device>></div>
    </div>
  </div>
</div>


</template>

<script>
import AdChannelDoubleX from '../../../components/charts/DoubleX'
import AdChannelDay from '../../../components/charts/DayLoadChart'
import ReanTime from '../../../components/charts/RealTimeChart'
import PieChart from '../../../components/charts/PieChart'
import PieChartDevice from '../../../components/charts/PieChart_Device'
export default {
  components: {
    AdChannelDoubleX, AdChannelDay, ReanTime, PieChart, PieChartDevice
  },
  name: 'AdChannelsAya',
  data: function () {
    return {
      selected: -1,
      pie_items: [{
        index: 0,
        title: '操作系统'
      },
      {
        index: 1,
        title: '设备类型'
      }],
      chart_datas: [
        {value: 335, name: 'OS1'},
        {value: 310, name: 'OS2'},
        {value: 234, name: 'OS3'},
        {value: 135, name: 'OS4'},
        {value: 1548, name: 'OS5'},
        {value: 120, name: 'other'}],
      lista: [],
      listb: []
    }
  },
  mounted () {
    this.initOs()
    this.initDv()
    this.initDoubleX()
  },
  methods: {
    initOs () {
      this.$http.post('/api/project/os', {
        appid: 1
      }, {}).then((response) => {
        var a = response.body[0]['sum(OS_13_count)']
        var b = response.body[0]['sum(OS_17_count)']
        var c = response.body[0]['sum(OS_17_count)']
        var d = response.body[0]['sum(ip_count)']
        this.chart_datas = [
          {value: a, name: 'OS1'},
          {value: b, name: 'OS2'},
          {value: c, name: 'OS3'},
          {value: d - a - b - c, name: 'other'}]
      })
    },
    initDv () {
      this.$http.post('/api/project/dv', {
        appid: 1
      }, {}).then((response) => {
        var a = response.body[0]['sum(dv_0_count)']
        var b = response.body[0]['sum(dv_1_count)']
        var c = response.body[0]['sum(dv_2_count)']
        var d = response.body[0]['sum(ip_count)']

        // console.log(a,b,c,d,d-a-b-c);
        // this.chart_datas=[
        //   {value: a, name: 'OS1'},
        //   {value: b, name: 'OS2'},
        //   {value: c, name: 'OS3'},
        //   {value: d-a-b-c, name: 'other'}]
      })
    },
    initDoubleX () {
      this.$http.post('/api/project/doubleX', {
        appid: 1,
        datetime: '2017-11-07'
      }, {}).then((response) => {
        console.log(response)
        var a0 = response.body[0]['sum(click_count)']
        var a1 = response.body[1]['sum(click_count)']
        var a2 = response.body[2]['sum(click_count)']
        var a3 = response.body[3]['sum(click_count)']
        var a4 = response.body[4]['sum(click_count)']
        var a5 = response.body[5]['sum(click_count)']
        var a6 = response.body[6]['sum(click_count)']
        var a7 = response.body[7]['sum(click_count)']
        var a8 = response.body[8]['sum(click_count)']
        var a9 = response.body[9]['sum(click_count)']
        var a10 = response.body[10]['sum(click_count)']
        var a11 = response.body[11]['sum(click_count)']
        var a12 = response.body[12]['sum(click_count)']
        var a13 = response.body[13]['sum(click_count)']
        var a14 = response.body[14]['sum(click_count)']
        var a15 = response.body[15]['sum(click_count)']
        var a16 = response.body[16]['sum(click_count)']
        var a17 = response.body[17]['sum(click_count)']
        var a18 = response.body[18]['sum(click_count)']
        var a19 = response.body[19]['sum(click_count)']
        var a20 = response.body[20]['sum(click_count)']
        var a21 = response.body[21]['sum(click_count)']
        var a22 = response.body[22]['sum(click_count)']
        var a23 = response.body[23]['sum(click_count)']
        this.lista = [a0 + a1, a2 + a3, a4 + a5, a6 + a7, a8 + a9, a10 + a11, a12 + a13, a14 + a15, a16 + a17, a18 + a19, a20 + a21, a22 + a23]
        console.log(this.lista)
      })

      this.$http.post('/api/project/doubleX', {
        appid: 1,
        datetime: '2017-11-08'
      }, {}).then((response) => {
        console.log(response)
        var a0 = response.body[0]['sum(click_count)']
        var a1 = response.body[1]['sum(click_count)']
        var a2 = response.body[2]['sum(click_count)']
        var a3 = response.body[3]['sum(click_count)']
        var a4 = response.body[4]['sum(click_count)']
        var a5 = response.body[5]['sum(click_count)']
        var a6 = response.body[6]['sum(click_count)']
        var a7 = response.body[7]['sum(click_count)']
        var a8 = response.body[8]['sum(click_count)']
        var a9 = response.body[9]['sum(click_count)']
        var a10 = response.body[10]['sum(click_count)']
        var a11 = response.body[11]['sum(click_count)']
        var a12 = response.body[12]['sum(click_count)']
        var a13 = response.body[13]['sum(click_count)']
        var a14 = response.body[14]['sum(click_count)']
        var a15 = response.body[15]['sum(click_count)']
        var a16 = response.body[16]['sum(click_count)']
        var a17 = response.body[17]['sum(click_count)']
        var a18 = response.body[18]['sum(click_count)']
        var a19 = response.body[19]['sum(click_count)']
        var a20 = response.body[20]['sum(click_count)']
        var a21 = response.body[21]['sum(click_count)']
        var a22 = response.body[22]['sum(click_count)']
        var a23 = response.body[23]['sum(click_count)']
        this.listb = [a0 + a1, a2 + a3, a4 + a5, a6 + a7, a8 + a9, a10 + a11, a12 + a13, a14 + a15, a16 + a17, a18 + a19, a20 + a21, a22 + a23]
        console.log(this.listb)
      })
    }

  }
}
</script>

<style scoped>
  #ad-channels-aya .chart_pannel{
    padding:0 15px !important;
  }
  #ad-channels-aya .chart-content{
  padding:0 20px;
}
  button.selected{
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
</style>
