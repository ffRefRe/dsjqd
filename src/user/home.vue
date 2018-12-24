<template>
  <div id="wrapper">

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="brand">
        <a href="index.html"><img src="../assets/tsu.jpg" alt="Logo" class="img-responsive logo"></a>

      </div>

      <div class="container-fluid">

        <form class="navbar-form navbar-left">
          <div class="input-group">
            <span>广告投放管理平台</span>
          </div>
        </form>

        <form class="navbar-form navbar-left">
          <div class="input-group">
            <input type="text" value="" class="form-control" placeholder="Search ....">
            <span class="input-group-btn"><button type="button" class="btn btn-primary">Go</button></span>
          </div>
        </form>

        <div class="navbar-btn navbar-btn-right">
          <a class="btn btn-success update-pro" href="#downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro" title="Upgrade to Pro" target="_blank">
            <i class="fa fa-rocket"></i>
            <span>UPGRADE TO PRO</span>
          </a>
        </div>

        <div id="navbar-menu">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                <i class="lnr lnr-alarm"></i>
                <span class="badge bg-danger">5</span>
              </a>

              <ul class="dropdown-menu notifications">
                <li><a href="#" class="notification-item"><span class="dot bg-warning"></span>System space is almost full</a></li>
                <li><a href="#" class="notification-item"><span class="dot bg-danger"></span>You have 9 unfinished tasks</a></li>
                <li><a href="#" class="notification-item"><span class="dot bg-success"></span>Monthly report is available</a></li>
                <li><a href="#" class="notification-item"><span class="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>
                <li><a href="#" class="notification-item"><span class="dot bg-success"></span>Your request has been approved</a></li>
                <li><a href="#" class="more">See all notifications</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="lnr lnr-question-circle"></i> <span>Help</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
              <ul class="dropdown-menu">
                <li><a href="#">Basic Use</a></li>
                <li><a href="#">Working With Data</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Troubleshooting</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="../assets/user.png" class="img-circle" alt="Avatar"> <span>Samuel</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
              <ul class="dropdown-menu">
                <li><a href="#"><i class="lnr lnr-user"></i> <span>My Profile</span></a></li>
                <li><a href="#"><i class="lnr lnr-envelope"></i> <span>Message</span></a></li>
                <li><a href="#"><i class="lnr lnr-cog"></i> <span>Settings</span></a></li>
                <li><a href="#"><i class="lnr lnr-exit"></i> <span>Logout</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="sidebar-nav" class="sidebar">
      <div class="sidebar-scroll">
        <nav>

          <hr style="margin: 10px">
          <div class="sidebar-header align-items-center" style="display: flex">
            <div><img src="../assets/user-medium.png" class="img-circle userImg" alt="User Image"></div>
            <span id="adtext">广告主</span>
          </div>

          <hr style="margin: 10px">

          <ul class="nav">
            <li><a v-bind:class="{'active':active_selected===1}" @click="goPage(1, 'homepage')"> <i class="lnr lnr-home"></i> <span>广告主</span></a></li>

            <!--<li><a href="elements.html" class=""><i class="lnr lnr-code"></i> <span>Elements</span></a></li>-->
            <!--<li><a href="charts.html" class=""><i class="lnr lnr-chart-bars"></i> <span>Charts</span></a></li>-->
            <!--<li><a href="panels.html" class=""><i class="lnr lnr-cog"></i> <span>Panels</span></a></li>-->
            <!--<li><a href="notifications.html" class=""><i class="lnr lnr-alarm"></i> <span>Notifications</span></a></li>-->
            <!---->
            <li>
              <a v-bind:class="{'active':active_selected>=2 && active_selected<3}" @click="active_selected=2" href="#subPages" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>我的广告</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
              <div id="subPages" class="collapse ">
                <ul class="nav">
                  <li><a v-bind:class="{'active':active_selected===2.1}"  @click="goPage(2.1, 'adSponsor')">广告主1</a></li>
                  <li><a v-bind:class="{'active':active_selected===2.2}"  @click="goPage(2.2, 'myAd')">广告主2</a></li>
                  <li><a v-bind:class="{'active':active_selected===2.3}"  @click="goPage(2.3,'adPut')">广告主3</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a v-bind:class="{'active':active_selected>=3 && active_selected<4}" @click="active_selected=3" href="#subPages_ad_channel" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>广告投放管理</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
              <div id="subPages_ad_channel" class="collapse ">
                <ul class="nav">
                  <li><a v-bind:class="{'active':active_selected===3.1}" @click="goPage(3.1, 'adchannels')">广告投放情况</a></li>
                  <li><a v-bind:class="{'active':active_selected===3.2}" @click="goPage(3.2,'adchannelsaya')">广告投放分析</a></li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#subPages2" data-toggle="collapse" class="collapsed"><i class="lnr lnr-cog"></i> <span>用户</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
              <div id="subPages2" class="collapse ">
                <ul class="nav">
                  <li><a @click="goPage('login')">登录1</a></li>
                  <li><a @click="goPage('loginma')">登录2</a></li>
                  <li><a @click="goPage('register')">注册</a></li>
                </ul>
              </div>

            </li>

            <!--<li><a href="tables.html" class=""><i class="lnr lnr-dice"></i> <span>Tables</span></a></li>-->
            <!--<li><a href="typography.html" class=""><i class="lnr lnr-text-format"></i> <span>Typography</span></a></li>-->
            <!--<li><a href="icons.html" class=""><i class="lnr lnr-linearicons"></i> <span>Icons</span></a></li>-->
          </ul>

        </nav>
      </div>
    </div>

    <div class="main">
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>

    <div class="clearfix"></div>
    <footer>
      <div class="container-fluid">
        <p class="copyright">Copyright &copy; 2018.Company name All rights reserved.<a href="http://www.cssmoban.com/" target="_blank" title="">group4</a> - Collect from <a href="" title="" target="_blank">广告投放管理系统</a></p>

      </div>
    </footer>
  </div>

</template>

<script>
import {bootjs} from '../../static/js/bootstrap.min'
import {jqujs} from '../../static/js/jquery.min'
// import Vue from 'Vue'
// Vue.use(bootjs)
// Vue.use(jqujs)
export default {
  data: function () {
    return {
      active_selected: 1
    }
  },
  methods: {
    goPage (selected, val) {
      this.active_selected = selected
      this.$router.push({path: val})
    }
  }

}

</script>

<style>
  @import "../../static/css/bootmin.css";
  @import "../../static/css/style.css";
  @import "../../static/css/main.css";
  @import "../../static/css/demo.css";

  .logo{
    height: 70px;
  }

  .navbar-default .brand {
    padding: 11px 39px;
  }

  .main {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: #EEF5F9;
  }

  .userImg {
    width: 75px;
    height: 75px;
  }

  .list-unstyled li {
    cursor: pointer;
  }

  .default {
    background: #EEF5F9;
  }

  .sidebar-header{
    padding: 20px 15px 10px;
  }

  #adtext{
    font-size: 20px;
    color: #fff;
    height: auto;
    margin: 23px 0 0 5px;
  }

</style>
