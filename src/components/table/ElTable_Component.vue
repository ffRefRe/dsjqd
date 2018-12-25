<template>
  <div class="El_table">

    <div class="dataTables_length">
      <span>总数量：3223个</span>
      <label>展示
        <select size="1" v-model="page_size_selected">
          <option v-for="page_size in page_sizes" :value="page_size.value">{{page_size.model}}</option>
        </select>条
      </label>
      <div class="dataTables_filter" style="width: 75%;height: 40px;float: right" >
        <el-button  icon="el-icon-setting" class="fl">操作</el-button>
        <el-select v-model="value5" multiple placeholder="标记" class="fl">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value5" multiple placeholder="筛选项" class="fl">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="demo-input-suffix fl" style="width:230px;">
          <el-input placeholder="请输入广告平台名称或编号" prefix-icon="el-icon-search" v-model="input21"></el-input>
        </div>
      </div>
    </div>
    <div class="container_table">
      <el-table
        :data="tableData.slice((currentPage-1)*page_size_selected,currentPage*page_size_selected)"
        stripe
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="channel_id" label="APP名称" sortable></el-table-column>
        <el-table-column prop="click_count" label="点击数" ></el-table-column>
        <el-table-column prop="device_count" sortable label="设备数"></el-table-column>
        <el-table-column prop="os_count" sortable label="操作系统数" width="120"></el-table-column>
        <el-table-column prop="ip_count" label="用户数"></el-table-column>
        <el-table-column prop="load_count" sortable label="下载量"></el-table-column>
        <el-table-column prop="load_l" sortable label="下载率"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <!--<el-button type="warning" icon="el-icon-star-off" circle></el-button>-->
            <el-button type="primary" icon="el-icon-star-on" v-if="istag" @click='switchChange'></el-button>
            <el-button type="primary" icon="el-icon-star-off" v-else="!istag" @click='switchChange'></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="fy"
                     layout="prev, pager, next"
                     @current-change="current_change"
                     :total="total"
                     background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
Vue.use(ElementUI)

export default {
  name: 'list11',
  data () {
    return {
      total: 100, // 默认数据总数
      pagesize: 9, // 每页的数据条数
      currentPage: 1, // 默认开始页面
      page_size_selected: 5,
      page_sizes: [
        {value: 5, model: '5'},
        {value: 10, model: '10'},
        {value: 15, model: '15'}
      ],
      istag: true,
      input: '',
      input21: '',
      options: [{
        value: '0.1',
        label: '一小时'
      }, {
        value: '1',
        label: '一天'
      }, {
        value: '7',
        label: '一周'
      }, {
        value: '30',
        label: '一个月'
      }, {
        value: '365',
        label: '一年'
      }],
      value5: [],
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
        }
      ]
    }
  },
  props: ['tableData'],

  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 0) {
        return 'th'
      }
      return ''
    },
    switchChange () {
      this.istag = !this.istag
    },
    created: function () {
      this.total = this.tableData.length
    },
    current_change: function (currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>

<style>
  .dataTables_length {
    /*float: left;*/
  }
  div.El_table > .dataTables_length {
    background-color: gainsboro;
    /*text-align: right;*/
    border-bottom: 1px solid #aaaaaa;
    font-size: 13px;
    line-height: 19px;
    height:57px;
  }
  div.El_table > .dataTables_length {
    text-align: center;
    line-height: 40px;
    padding: 8px;
    font-size: 14px;
  }
  div.El_table > el-input{
    height: 35px;
    line-height: 36px;
    width: 90%;
  }
  div.El_table > .el-input{
    height: 35px;
    line-height: 36px;
    width: 90%;
  }
  .fl{
    float: right;
    width: 100px;
    padding-right: 10px;
    /*margin-right:20px;*/
  }
  .fy{
    text-align:center;
    margin-top:30px;
  }
  .title{
    height:100%;
  }
</style>
