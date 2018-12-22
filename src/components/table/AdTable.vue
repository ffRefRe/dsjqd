<template>
  <div class="ad-table">
    <!-- RECENT PURCHASES -->
    <div class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">广告投放数据</h3>
        <div class="right">
          <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
          <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
        </div>
      </div>
      <div>

      </div>
      <div class="dataTables_wrapper panel-body no-padding">
        <div class="dataTables_length">
          <label>展示
          <select size="1" v-model="page_size_selected">
            <option v-for="page_size in page_sizes" :value="page_size.value">{{page_size.model}}</option>
          </select>
            <!--<option value="10" selected="selected" v-bind:"page_size.value">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>-->
           条
            </label>
        </div>
        <div class="dataTables_filter"><label>Search: <input type="text"></label></div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="sorting_asc" rowspan="1" colspan="1" >广告平台</th>
              <th class="sorting" rowspan="1" colspan="1" >点击量</th>
              <th class="sorting" rowspan="1" colspan="1" >设备数</th>
              <th class="sorting" rowspan="1" colspan="1" >OS数</th>
              <th class="sorting" rowspan="1" colspan="1" >用户数</th>
              <th class="sorting" rowspan="1" colspan="1" >下载数</th>
              <th class="sorting" rowspan="1" colspan="1" >下载率</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="item.channel_id" v-for="(item, index) in ad_channels" v-if="index < page_size_selected">
              <td><a href="#">{{item.channel_id}}</a></td>
              <td>{{item.click_count}}</td>
              <td>{{item.device_count}}</td>
              <td>{{item.os_count}}</td>
              <td>{{item .ip_count}}</td>
              <td>{{item.load_count}}</td>
              <td><span class="label label-success">{{item.load_l}}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="panel-footer">
        <div class="row">
          <div class="col-md-6"><span class="panel-note"><i class="fa fa-clock-o"></i> 最近24小时</span></div>
          <div class="col-md-6 text-right"><a href="#" class="btn btn-primary">View All Purchases</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdTable',
  props: ['ad_channels'],
  data: function () {
    return {
      ad_channels_: [
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
          channel_id: 978,
          click_count: 987,
          device_count: 56,
          os_count: 987,
          ip_count: 8765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 2678,
          click_count: 9807,
          device_count: 569,
          os_count: 9187,
          ip_count: 88765,
          load_count: 76,
          load_l: 0.01
        },{
          channel_id: 23123,
          click_count: 987,
          device_count: 56,
          os_count: 987,
          ip_count: 8765,
          load_count: 76,
          load_l: 0.01
        },
        {
          channel_id: 389,
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
      ],
      page_size_selected: 5,
      page_sizes: [
        {value: 5, model: '5'},
        {value: 10, model: '10'},
        {value: 15, model: '15'}
      ],
      date_size_selected: 1,
      date_sizes: [
        {value: 1, model: '24小时'},
        {value: 5, model: '5天'},
        {value: 15, model: '15天'},
        {value: 30, model: '30天'}
      ]
    }
  },
}
</script>

<style scoped>
  address, article, aside, div, footer, header, hgroup, layer, main, nav, section {
    display: block;
  }
  .dataTables_length {
    float: left;
  }
  div.dataTables_wrapper .dataTables_length, div.dataTables_wrapper .dataTables_filter, div.dataTables_wrapper .dataTables_info, div.dataTables_wrapper .dataTables_paginate {
    padding: 8px;
    font-size: 14px;
  }
  div.dataTables_wrapper .dataTables_filter {
    background-color: gainsboro;
    text-align: right;
    border-bottom: 1px solid #aaaaaa;
    font-size: 13px;
    line-height: 19px;
    height:40px;
  }
  div.dataTables_wrapper .dataTables_length {
    float: left;
  }
  .dataTables_wrapper table thead th.sorting_asc {
    background-image: url(../../assets/core/sort_asc.png);
  }
  .dataTables_wrapper table thead th.sorting {
    background-image: url(../../assets/core/sort.png);
  }
  .dataTables_wrapper table thead th.sorting_desc {
    background-image: url(../../assets/core/sort_desc.png);
  }
  .dataTables_wrapper table thead th.sorting_asc, .dataTables_wrapper table thead th.sorting_desc, .dataTables_wrapper table thead th.sorting {
    background-position: 12px center;
    background-repeat: no-repeat;
    padding-left: 30px;
  }
  .dataTables_wrapper table thead th.sorting, .dataTables_wrapper table thead th.sorting_asc, .dataTables_wrapper table thead th.sorting_desc {
     cursor: pointer;
   }
  .mws-table thead tr th:first-child {
    border-left: none;
  }
  .mws-table thead tr th {
    padding: 10px 16px;
    border-bottom: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
  }
  th, td, caption {
    font-weight: normal;
    vertical-align: top;
    text-align: left;
  }

</style>
