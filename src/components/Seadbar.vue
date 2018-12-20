<template>
  <aside class="main-sidebar" style="margin-top:50px; style=" z-index:-1>
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../../static/image/man_user.png" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info" style="color:#556081;">
          <p>{{username}}</p>
          <!-- Status -->
          <a href="#" style="color:#556081;">
            <i class="fa fa-circle text-success"></i>在线</a>
        </div>
      </div>
    </section>
    <div class="list">
      <ul class="yiji">
        <li>
          <a class="inactive" id='project-title'><i class="fa fa-th-large"></i>&nbsp;&nbsp;项目管理</a>
          <ul style="display: none" id="projectManage">
            <li v-bind:class="{ active: result_title=='upload'}" v-show="license">
              <router-link :to="{path:'upload', query:{ user_id: id } }">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-upload"></i>
                <span>上传新项目</span></router-link>

            </li>
            <li v-bind:class="{ active: result_title=='my_projects'}" class="last">
              <router-link :to="{path:'my_projects', query:{ user_id: id } }">
                &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-list"></i>
                <span>我的项目</span></router-link>
            </li>
          </ul>
        </li>
        <li>
          <a class="inactive" id="user-title">
            <i class="fa fa-group"></i>&nbsp;&nbsp;用户管理</a>
          <ul style="display: none" id="userInfo">
            <li v-bind:class="{ active: result_title=='user_manage'}">
              <router-link :to="{path:'user_manage', query:{ user_id: id } }">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-id-card-o"></i> 管理用户信息</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: result_title=='user_info'}">
              <router-link :to="{path:'user_info', query:{ user_id: id } }">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-eye"></i> 查看自身信息</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: result_title=='password'}">
              <router-link :to="{path:'password', query:{ user_id: id } }"><span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa  fa-lock"></i> 修改密码</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <a class="inactive" id="help-title">
            <i class="fa fa-link"></i>&nbsp;&nbsp;帮助</a>
          <ul style="display: none" id="help">
            <li v-bind:class="{ active: result_title=='standard'}">
              <router-link to="standard" @click="clickcolor('standard')"><span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-align-center"></i> 术语说明</span>
              </router-link>
            </li>
            <li>
              <a href="../../../static/about.html" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-thumbs-o-up"></i><span>关于我们</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="inactive" id="sys-title">
            <i class="fa fa-cogs"></i>&nbsp;&nbsp;系统</a>
          <ul style="display: none" id="sys">
            <li v-bind:class="{ active: result_title=='user_email'}">
              <router-link to="user_email" @click="clickcolor('user_email')"><span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-envelope-open-o" aria-hidden="true"></i> 设置邮箱</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: result_title=='server'}">
              <router-link to="server" @click="clickcolor('server')"><span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-server"></i>资源信息</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: result_title=='sysLicense'}">
              <router-link to="sysLicense" @click="clickcolor('sysLicense')"><span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-book"></i>系统证书</span>
              </router-link>
            </li>
            <li v-bind:class="{ active: result_title=='log'}">
              <router-link to="/log" @click="clickcolor('log')"><span>&nbsp;&nbsp; <i class="fa fa-history"></i>系统日志</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
  export default {
    data: function () {
      return {
        username: '',
        task_id: '',
        id: '',
        //跳转页面信息
        license: true,
      }
    },
    mounted: function () {
      this.$http.get("/api/user/me").then(response => {
        if (response.data.status == 1) {
          this.id = response.data.data.id;
          this.username = response.data.data.username;
        }
        else {
          this.$router.push({
            path: '/login'
          })
        }
      });

      this.$http.get("/api/sys/license").then(response => {
        if(response.data.status != 1 || response.data.status == null)
        {
          this.license = false;
        }
        else
        {
          this.license = true;
        }
      });
      //    控制左侧导航点击样式
      $(document).ready(function () {
        $('.inactive').click(function () {
          if ($(this).siblings('ul').css('display') == 'none') {
            $(this).parent('li').siblings('li').removeClass('inactives');
            $(this).addClass('inactives');
            $(this).siblings('ul').slideDown(100).children('li');
            if ($(this).parents('li').siblings('li').children('ul').css('display') == 'block') {
              $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
              $(this).parents('li').siblings('li').children('ul').slideUp(100);

            }
          } else {
            //控制自身变成+号
            $(this).removeClass('inactives');
            //控制自身菜单下子菜单隐藏
            $(this).siblings('ul').slideUp(100);
            //控制自身子菜单变成+号
            $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
            //控制自身菜单下子菜单隐藏
            $(this).siblings('ul').children('li').children('ul').slideUp(100);

            //控制同级菜单只保持一个是展开的（-号显示）
            $(this).siblings('ul').children('li').children('a').removeClass('inactives');
          }
        })
      });

      this.getSideBar();

    },
    created: function () {
      this.getTitle();
    },
    methods: {
      logout: function () {
        $.ajax({
          type: 'get',
          url: '/api/user/logout',
          success: function (data) {
            window.location.href = "login.html#!/";
          }
        });
      },
      getTitle: function () {
        var url = window.location.href;
        this.result_title = url.split("/")[url.split("/").length - 1];
        this.result_title = this.result_title.split("?")[0];
        console.log(" this.result_title" + this.result_title)
      },
      //以下函数控制左侧导航，刷新后仍保持样式
      clickcolor: function (title) {
        this.result_title = title;
        this.$router.push({
          path: '/' + this.result_title,
          query: {user_id: this.id}
        })
      },
      //控制二级导航栏刷新后还保持样式
      getSideBar: function () {
        //许可证DIV
        var licensDiv = document.getElementById("projectManage");
        //安全漏洞DIV
        var vulDiv = document.getElementById("userInfo");
        var helpDiv = document.getElementById("help");
        var sysDiv = document.getElementById("sys");

        if (this.result_title == "upload" || this.result_title == "my_projects") {
          //将ul样式设置为block展开形式，none为隐藏
          licensDiv.style.display = 'block';
          $('#project-title').addClass('inactives');
        }

        if (this.result_title == "standard") {
          //将ul样式设置为block展开形式，none为隐藏
          helpDiv.style.display = 'block';
          $('#help-title').addClass('inactives');
        }

        if (this.result_title == "sysLicense" || this.result_title == "server" || this.result_title == "user_email" || this.result_title == "log") {
          //将ul样式设置为block展开形式，none为隐藏
          sysDiv.style.display = 'block';
          $('#sys-title').addClass('inactives');
        }

        if (this.result_title == "user_manage" || this.result_title == "user_info" || this.result_title == "password") {
          //将ul样式设置为block展开形式，none为隐藏
          vulDiv.style.display = 'block';
          $('#user-title').addClass('inactives');
        }
      }
    },

    watch: {
      projectInfo: function (val) {
        if (val.length != 0) {
          var newDate = new Date();

          //将任务创建时间转换成当地时间，格式为：2014年6月18日 上午10:33:24
          newDate.setTime(val[0].create_time);
          var local_create_time = newDate.toLocaleString();
          this.create_time = local_create_time;

          //将任务结束时间转化为当地时间
          newDate.setTime(val[0].finish_time);
          var local_finish_time = newDate.toLocaleString();
          this.finish_time = local_finish_time;

          this.token = val[0].token;
          this.type = val[0].type;
          console.log("this.this.token:" + this.token)
        }
      }
    }
  }

</script>
