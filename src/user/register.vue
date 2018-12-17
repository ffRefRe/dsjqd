<template>

  <div>



    <div id="wrapper">
      <div class="vertical-align-wrap">
        <div class="vertical-align-middle">
          <div class="auth-box ">

              <div class="content">
                <div class="header">
                  <div class="logo text-center"></div>
                  <p class="lead">Register your account</p>
                </div>

                <form class="form-horizontal">
                  <div class="box-body">

                    <br>
                    <div class="input-group">
                      <div class="input-group-btn">
                        <button type="button" class="btn btn-primary btn-style">
                          <i class=" fa fa-university"></i>&nbsp;&nbsp;用户名&nbsp;&nbsp;</button>
                      </div>
                      <!-- /btn-group -->
                      <input type="text" class="form-control" placeholder="用户名" v-model="userName" id="unitname"></div>
                    <br>

                    <div class="input-group">
                      <div class="input-group-btn">
                        <button type="button" class="btn btn-primary btn-style">
                          <i class=" fa fa-envelope"></i>&nbsp;&nbsp;邮箱地址</button>
                      </div>
                      <!-- /btn-group -->
                      <input type="text" class="form-control" placeholder="邮箱地址" v-model="email" id="email"></div>
                    <br>
                    <div class="input-group">
                      <div class="input-group-btn">
                        <button type="button" class="btn btn-primary  btn-style">
                          <i class=" fa fa-users"></i>&nbsp;&nbsp;密码&nbsp;&nbsp;&nbsp;&nbsp;</button>
                      </div>
                      <!-- /btn-group -->
                      <input type="text" class="form-control" placeholder="密码" v-model="password"></div>
                  </div>
                  <!-- /.box-body -->
                  <div class="box-footer">
                    <center>
                      <button type="button" @click='addUser' class="btn btn-primary">保存修改</button>&nbsp;&nbsp;</center>
                  </div>
                </form>


            </div>
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
        email:'',
        password:'',
        userName: '',

      }
    },

    methods: {
      addUser() {
        var name = this.userName;
        console.log(name)
        console.log(this.email)
        console.log(this.password)
        this.$http.post('/api/user/addUser', {
          username: name,
          email: this.email,
          password: this.password,
        },{}).then((response) => {
          console.log(response);
          if(response.status ==200) {
            console.log('success')
          }

        })
      },





    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/demo.css";
  @import "../../static/css/main.css";
  @import "../bootstrap/dist/css/bootstrap.min.css";






</style>
