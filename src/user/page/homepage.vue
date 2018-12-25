<template>

  <div>
    <div class="main">
      <!-- MAIN CONTENT -->
      <div class="main-content">
        <div class="container-fluid">
          <!-- OVERVIEW -->
          <div class="panel panel-headline">
            <div class="panel-heading">
              <h3 class="panel-title">广告投放详情</h3>
              <p class="panel-subtitle">时间: 2018.12.24</p>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3">
                  <div class="metric">
                    <span class="icon"><i class="fa fa-download"></i></span>
                    <p>
                      <span class="number">274,678</span>
                      <span class="title">显示次数</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="metric">
                    <span class="icon"><i class="fa fa-shopping-bag"></i></span>
                    <p>
                      <span class="number">1,231</span>
                      <span class="title">点击次数</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="metric">
                    <span class="icon"><i class="fa fa-eye"></i></span>
                    <p>
                      <span class="number">88</span>
                      <span class="title">下载次数</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="metric">
                    <span class="icon"><i class="fa fa-bar-chart"></i></span>
                    <p>
                      <span class="number">5%</span>
                      <span class="title">转化率</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-9">
                  <div id="headline-chart" class="ct-chart"></div>
                </div>
                <div class="col-md-3">
                  <div class="weekly-summary text-right">
                    <span class="number">$215</span> <span class="percentage"><i class="fa fa-caret-up text-success"></i> 12%</span>
                    <span class="info-label">日收益</span>
                  </div>
                  <div class="weekly-summary text-right">
                    <span class="number">$5,758</span> <span class="percentage"><i class="fa fa-caret-up text-success"></i> 23%</span>
                    <span class="info-label">月收益</span>
                  </div>
                  <div class="weekly-summary text-right">
                    <span class="number">$65,938</span> <span class="percentage"><i class="fa fa-caret-down text-danger"></i> 8%</span>
                    <span class="info-label">年收益</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END OVERVIEW -->

        </div>
      </div>
      <!-- END MAIN CONTENT -->
    </div>

  </div>

</template>

<script>

  export default {
    name: 'first',
    data () {
      return {

      }
    },

    methods: {

    }

  }
</script>

<style scoped>


  #wrapper .main {
    width: calc(100%) !important;
    padding-top: 0px !important;
  }

  .main-content {
    padding: 20px 10px !important;
  }

</style>
