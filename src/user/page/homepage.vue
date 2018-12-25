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
                      <span class="number">{{ipCountSun}}</span>
                      <span class="title">用户数</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="metric">
                    <span class="icon"><i class="fa fa-shopping-bag"></i></span>
                    <p>
                      <span class="number">{{clickCountSun}}</span>
                      <span class="title">点击次数</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="metric">
                    <span class="icon"><i class="fa fa-eye"></i></span>
                    <p>
                      <span class="number">{{loadCountSun}}</span>
                      <span class="title">下载次数</span>
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="metric">
                    <span class="icon"><i class="fa fa-bar-chart"></i></span>
                    <p>
                      <span class="number">{{rate}}%</span>
                      <span class="title">转化率</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-9">
                  <div id="headline-chart" class="ct-chart">
                    <img src="../../assets/HOURLY1.png">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="weekly-summary text-right">
                    <span class="number">{{clickCountSunH}}</span> <span class="percentage"><i class="fa fa-caret-up text-success"></i> 12%</span>
                    <span class="info-label">小时点击次数</span>
                  </div>
                  <div class="weekly-summary text-right">
                    <span class="number">{{ipCountSunH}}</span> <span class="percentage"><i class="fa fa-caret-up text-success"></i> 23%</span>
                    <span class="info-label">小时用户数</span>
                  </div>
                  <div class="weekly-summary text-right">
                    <span class="number">{{loadCountSunH}}</span> <span class="percentage"><i class="fa fa-caret-down text-danger"></i> 8%</span>
                    <span class="info-label">小时下载量</span>
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
      clickCountSun: 1,
      ipCountSun: 1,
      loadCountSun: 1,
      clickCountSunH: 1,
      ipCountSunH: 1,
      loadCountSunH: 1,
      rate: 0.0

    }
  },
  mounted () {
    this.requestClickCountSun()
    this.requestIpCountSun()
    this.requestLoadCountSun()

    this.requestClickCountSunH()
    this.requestIpCountSunH()
    this.requestLoadCountSunH()
  },
  methods: {
    requestClickCountSun () {
      this.$http.post('/api/project/clickCountSun', {
      }, {}).then((response) => {
        this.clickCountSun = response.bodyText.slice(21, -2)
      })
    },
    requestIpCountSun () {
      this.$http.post('/api/project/ipCountSun', {
      }, {}).then((response) => {
        this.ipCountSun = response.bodyText.slice(18, -2)
        this.rate = (this.loadCountSun * 100 / this.clickCountSun).toFixed(5)
      })
    },
    requestLoadCountSun () {
      this.$http.post('/api/project/loadCountSun', {
      }, {}).then((response) => {
        this.loadCountSun = response.bodyText.slice(21, -2)
        this.rate = (this.loadCountSun * 100 / this.clickCountSun).toFixed(5)
      })
    },

    requestClickCountSunH () {
      this.$http.post('/api/project/clickCountSunH', {
        appid: 1,
        datetime: '2017-11-08',
        hour: 8
      }, {}).then((response) => {
        this.clickCountSunH = response.bodyText.slice(21, -2)
      })
    },
    requestIpCountSunH () {
      this.$http.post('/api/project/ipCountSunH', {
        appid: 1,
        datetime: '2017-11-08',
        hour: 8
      }, {}).then((response) => {
        this.ipCountSunH = response.bodyText.slice(18, -2)
      })
    },
    requestLoadCountSunH () {
      this.$http.post('/api/project/loadCountSunH', {
        appid: 1,
        datetime: '2017-11-08',
        hour: 8
      }, {}).then((response) => {
        this.loadCountSunH = response.bodyText.slice(21, -2)
      })
    }

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
