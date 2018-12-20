<template>
  <!--       <header class="main-header" style="background-color: white;border-bottom:1px solid grey;height:80px;">-->
  <header class="main-header" style="background-color: rgb(84, 92, 100);height:80px;text-align: right;">
    <!--        <div class="head-style">-->
    <div>
      <div class="col-lg-4" style="display: flex">
        <router-link to="/home">
          <img src="../../../static/image/logo-2.png" style="height:55px;margin-top:10px;cursor:pointer">
        </router-link>
        <h2 style="color: white;float: bottom;padding-bottom: 0px;"><b>棱镜七彩</b>
        </h2>
      </div>

    </div>
  </header>
</template>
<script>
export default {
  data: function () {
    return {
      id: 0
    }
  },

  methods: {
    logout: function () {
      this.$http.get('/api/user/logout').then(response => {
        this.$router.push({path: '/login'})
        console.log('注销成功！')
      }, response => {
        console.log('request error')
      })
    }
  },

  created: function () {
    this.id = this.$route.query.user_id
  }
}

</script>
