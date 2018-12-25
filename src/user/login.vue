<template>

  <div class="vertical-align-wrap">
    <div class="vertical-align-middle">
      <div class="auth-box ">
        <div class="left">
          <div class="content">
            <div class="header">
              <div class="logo text-center"></div>
              <p class="lead" id="ptext">广告平台登录</p>
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
                  <span> 记住我</span>
                </label>
              </div>
              <button @click="addUser" type="submit" class="btn btn-primary btn-lg btn-block">登  录</button>
              <div class="bottom">
                <span class="helper-text"><i class="fa fa-lock"></i> <a href="#">忘记密码？</a></span>
              </div>
            </form>

          </div>
        </div>
        <div class="right">
          <div class="overlay"></div>
          <div class="content text">
            <h1 class="heading">广告平台</h1>
            <p>管理您的广告</p>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: 'samuel.gold@domain.com',
      password: 'thisisthepassword',
      userName: 'xxx222221421',

    }
  },

  methods: {
    addUser () {
      var name = this.userName
      this.$http.post('/api/user/addUser', {
        username: name
      }, {}).then((response) => {
        console.log(response)
        if (response.status === 200) {
          console.log('success')
        }
      })
    },

    login () {
      this.$router.push('/')
    },
    click: function () {
      console.log(123)

      this.$http.jsonp('https://sug.so.360.cn/suggest',
        {params: {
          word: 'a'
        }}
      ).then(function (resp) {
        console.log(resp.data)
      })
    },

    sendapi: function () {
      console.log('send')

      axios({
        method: 'get',
        url: 'http://192.168.2.188:8080/api'
      }).then(function (resp) {
        console.log(resp.data)
      }).catch(resp => {
        console.log('请求失败：' + resp.status + ',' + resp.statusText)
      })
    },
    visi () {
      console.log('cisi')

      this.$http.get('api/user/me').then(response => {
        console.log(response)
      })

      this.$http.get('api/task/exitFortifyPDF/1/2').then(response => {
        console.log(response)
        if (response.data.status === 1) {
          this.isUpload = true
        } else {
          this.isUpload = false
        }
      })
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/demo.css";
  @import "../../static/css/main.css";
  @import "../bootstrap/dist/css/bootstrap.min.css";

  .vertical-align-wrap{
    background-color: lightgrey;
    height: 100%;
    width: 100%;

  }

  #ptext{
    font-size: 24px;
    color: #4d4d4d;
  }

</style>
