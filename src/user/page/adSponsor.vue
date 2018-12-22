<template>

  <div>
    <ad-channel></ad-channel>
  </div>

</template>

<script>
import AdChannel from '../../components/AdChannelsPage/AdChannels'
export default {
  name: 'adSponsor',
  components: {
    AdChannel
  },
  data () {
    return {
      ad_channels: [
        {
          channel_id: 123,
          click_count: 987,
          device_count: 56,
          os_count: 987,
          ip_count: 8765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 678,
          click_count: 9807,
          device_count: 569,
          os_count: 9187,
          ip_count: 88765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 678,
          click_count: 9807,
          device_count: 569,
          os_count: 9187,
          ip_count: 88765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 123,
          click_count: 987,
          device_count: 56,
          os_count: 987,
          ip_count: 8765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 678,
          click_count: 9807,
          device_count: 569,
          os_count: 9187,
          ip_count: 88765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 678,
          click_count: 9807,
          device_count: 569,
          os_count: 9187,
          ip_count: 88765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 123,
          click_count: 987,
          device_count: 56,
          os_count: 987,
          ip_count: 8765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 678,
          click_count: 9807,
          device_count: 569,
          os_count: 9187,
          ip_count: 88765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 678,
          click_count: 9807,
          device_count: 569,
          os_count: 9187,
          ip_count: 88765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 123,
          click_count: 987,
          device_count: 56,
          os_count: 987,
          ip_count: 8765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 678,
          click_count: 9807,
          device_count: 569,
          os_count: 9187,
          ip_count: 88765,
          load_count: 76,
          load_l: 0.01
        }
      ]
    }
  },

  methods: {

  }

}
</script>

<style scoped>

</style>
