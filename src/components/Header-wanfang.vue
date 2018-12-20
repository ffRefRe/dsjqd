<style>
    .anxs-8qwe-top-rt {
        float: right;
        padding-top: 35px;
        font-family: 'Microsoft YaHei';
    }

    .anxs-8qwe-top-rt .anxs-8qwe-list {
        float: left;
        border-left: 1px solid #d4d9dc;
        color: #555;
        font-size: 14px;
        font-family: 'Microsoft YaHei';
    }

    .anxs-8qwe-top-rt .anxs-8qwe-list>a {
        color: #555;
        padding: 0 20px;
        text-decoration: none;
        cursor: pointer;
    }

    .anxs-8qwe-top-rt .anxs-8qwe-list>a:hover {
        color: #409EFF;
        padding: 0 20px;
        text-decoration: none;
        cursor: pointer;
    }

</style>
<template>
    <!--       <header class="main-header" style="background-color: white;border-bottom:1px solid grey;height:80px;">-->
    <header class="main-header" style="background-color:#f9f9f9;height:70px;">
        <!--        <div class="head-style">-->
        <div class="col-md-4">
            <img src="../../../static/image/wanfang-logo.png" style= "margin-top:10px">
        </div>
        <div class="col-md-4" style="margin-left:25px;">
            <!--                <h1 style="font-size:31px;color:white;margin-top:25px;">软件源代码安全评估平台 </h1>-->
            <!--                <h1 style="font-size:16px;color:white;margin-top:-5px">Software resources code security assessment platform</h1>-->

        </div>
            <!--
                           <div class="col-md-1 pull-right" style="margin-top:30px;">
                                <div class="dropdown">
                              <button class=" btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="color:white;">
                               <span class="fa fa-user"></span>
                                <span class="caret"></span>
                              </button>
                              <ul class="dropdown-menu dropdown-menu-right " style="min-width: 100px;" aria-labelledby="dropdownMenu1">
                                <li><router-link to="my_projects">我的项目</router-link></li>
                                <li><router-link to="user_info">用户信息</router-link></li>
                                <li><router-link to="password">修改密码</router-link></li>
                                <li role="separator" class="divider"></li>
                                <li><a @click="logout">退出系统</a></li>
                              </ul>
                            </div>

                </div>
            -->
       <div class="col-md-4 anxs-8qwe-top-rt" >
            <div class="anxs-8qwe-list anxs-8qwe-list-login anxs-no-line">
                <a class="anxs-8qwe-login anxs-8qwe-login-all"  href="#/user_info" >我的账户</a>
            </div>
            <div class="anxs-8qwe-list anxs-8qwe-list-login anxs-no-line">
                <a class="anxs-8qwe-login anxs-8qwe-login-all" href="#/password">修改密码</a>
            </div>
            <div class="anxs-8qwe-list anxs-8qwe-list-login anxs-no-line">
            <a class="anxs-8qwe-login anxs-8qwe-login-all"  @click="logout">退出登录</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  computed: {
    user () {
      // 因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
      return this.$store.state.user
    }
  },
  methods: {
    logout: function () {
      var vm = this
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/api/user/logout',
        data: '',
        success: function (data) {
          if (data.status == 0) {
            vm.$router.push({
              path: '/login'
            })
            console.log('注销成功！')
          }
        }
      })
    }
  }
}

</script>
