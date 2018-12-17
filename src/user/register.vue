<template>

  <div>


    <div>

      <button @click="click">click </button>
      <router-link to="login">sss</router-link>

      <button @click="sendapi"> s end </button>
      <el-button @click="visi">Button</el-button>

      <div class="hello">
        <h1>{{ msg }}</h1>
        <form>
          <input type="text" name="username" v-model="userName"> <br>
          <a href="javascript:;" @click="addUser">提交</a>
        </form>
      </div>


    </div>



    <div id="wrapper">
      <div class="vertical-align-wrap">
        <div class="vertical-align-middle">
          <div class="auth-box ">
            <div class="left">
              <div class="content">
                <div class="header">
                  <div class="logo text-center"></div>
                  <p class="lead">Login to your account</p>
                </div>

                <form class="form-auth-small">
                  <div class="form-group">
                    <label class="control-label sr-only">Email</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <label class="control-label sr-only">Password</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Password">
                  </div>
                  <div class="form-group clearfix">
                    <label class="fancy-checkbox element-left">
                      <input type="checkbox">
                      <span>Remember me</span>
                    </label>
                  </div>
                  <button @click="login" type="submit" class="btn btn-primary btn-lg btn-block">LOGIN</button>
                  <div class="bottom">
                    <span class="helper-text"><i class="fa fa-lock"></i> <a href="#">Forgot password?</a></span>
                  </div>
                </form>

              </div>
            </div>
            <div class="right">
              <div class="overlay"></div>
              <div class="content text">
                <h1 class="heading">Free Bootstrap dashboard template</h1>
                <p>by The Develovers</p>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>


















  </div>



</template>



<script>
  import axios from 'axios'


  export default {
    name: 'register',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        email:'samuel.gold@domain.com',
        password:'thisisthepassword',
        userName: '',

      }
    },

    methods: {
      addUser() {
        var name = this.userName;
        this.$http.post('/api/user/addUser', {
          username: name,
        },{}).then((response) => {
          console.log(response);
          if(response.status ==200) {
            console.log('success')
          }

        })
      },

      login: function() {
        console.log(this.email)
      },
      click: function () {
        console.log(123);


        this.$http.jsonp('https://sug.so.360.cn/suggest',
          {params:{
              word:'a'
            }}
        ).then(function (resp) {
          console.log(resp.data)
        })


      },

      sendapi: function() {
        console.log("send");



        axios({
          method:'get',
          url:'http://192.168.2.188:8080/api'
        }).then(function(resp){
          console.log(resp.data);
        }).catch(resp => {
          console.log('请求失败：'+resp.status+','+resp.statusText);
        });




      },
      visi() {
        console.log("cisi");


        this.$http.get('api/user/me').then(response => {
          console.log(response);
        });



        this.$http.get("api/task/exitFortifyPDF/1/2").then(response => {
          console.log(response);
          if (response.data.status == 1){
            this.isUpload = true;
          } else {
            this.isUpload = false;
          }
        });


      }





    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/demo.css";
  @import "../../static/css/main.css";
  @import "../bootstrap/dist/css/bootstrap.min.css";






</style>
