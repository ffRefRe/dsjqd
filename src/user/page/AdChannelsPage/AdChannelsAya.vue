<template>
<div id="ad-channels-aya">
  <div class="panel">
    <div class="panel-heading">
      <h3 class="panel-title">广告投放数据分析</h3>
      <div class="right">
        <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
        <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
      </div>
    </div>
    <ad-channel-double-x></ad-channel-double-x>
    <ad-channel-day></ad-channel-day>
    <rean-time></rean-time>
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

</style>
