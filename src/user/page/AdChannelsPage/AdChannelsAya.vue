<template>
<div id="ad-channels-aya">
  <div class="chart_pannel">
    <div class="panel">
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
export default {
  components: {
    AdChannelDoubleX, AdChannelDay, ReanTime
  },
  name: 'AdChannelsAya'
}
</script>

<style scoped>
  #ad-channels-aya .chart_pannel{
    padding:0 15px !important;
  }
  #ad-channels-aya .chart-content{
  padding:0 20px;
}
</style>
