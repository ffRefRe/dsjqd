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
        <el-table></el-table>
      </div>
      <div class="panel-footer">
        <div class="row">
          <div class="col-md-6"><span class="panel-note"><i class="fa fa-clock-o"></i> 最近24小时</span></div>
          <div class="col-md-6 text-right"><a href="#" class="btn btn-primary">查看投放报告</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElTable from '../table/ElTable'
export default {
  name: 'AdChannels',
  components: {
    ElTable
  }
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
