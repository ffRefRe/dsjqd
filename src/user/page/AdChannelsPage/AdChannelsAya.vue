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
      <div class="chart-content"><ad-channel-double-x></ad-channel-double-x></div>
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
      <div class="chart-content" ><pie-chart></pie-chart></div>
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
</div>

</template>

<script>
import AdChannelDoubleX from '../../../components/charts/DoubleX'
import AdChannelDay from '../../../components/charts/DayLoadChart'
import ReanTime from '../../../components/charts/RealTimeChart'
import PieChart from '../../../components/charts/PieChart'
export default {
  components: {
    AdChannelDoubleX, AdChannelDay, ReanTime, PieChart
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
      }]
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
