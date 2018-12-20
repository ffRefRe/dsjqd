<template>

  <div>

    <div id="wrapper">
      <div class="vertical-align-wrap">
        <div class="vertical-align-middle">
          <div class="auth-box ">

              <div class="content">
                <div class="header" style="text-align: center">
                  <div class="logo text-center"></div>
                  <p class="lead">Register your account</p>

                  <div class="box-body" >
                    <div class="col-md-6">

                      <div class="form-group row">
                        <label for="example-text-input" style="width: 85px;" class=" col-form-label">用户帐号：</label>
                        <div class="col-md-9">
                          <input class="form-control" type="text" id="example-text-input"  >
                        </div>
                      </div>

                      <div class="form-group row">
                        <label for="p" style="width: 85px;" class=" col-form-label">用户密码：</label>
                        <div class="col-md-9">
                          <input type="password" class="form-control" id="p"  >
                        </div>
                      </div>

                      <div class="form-group row">
                        <label for="c" style="width: 85px;" class=" col-form-label">确认密码：</label>
                        <div class="col-md-9">
                          <input type="password" class="form-control" id="c"  >
                        </div>
                      </div>

                      <div class="form-group row">
                        <label for="ut" style="width: 85px;" class=" col-form-label">用户类型：</label>
                        <div class="col-md-9">
                          <select class="form-control" id="ut"  >
                            <option value = 0> 广告主 </option>
                            <option value = 1> 广告平台 </option>
                            <!--<option value = 2> 一般用户 </option>-->
                          </select>
                        </div>
                      </div>

                    </div>
                    <div class="col-md-6">

                      <div class="form-group row">
                        <label for="u" style="width: 85px;" class=" col-form-label">单位名称：</label>
                        <div class="col-md-9">
                          <input class="form-control" type="text" id="u"  >
                        </div>
                      </div>

                      <div class="form-group row">
                        <label for="m" style="width: 85px;" class=" col-form-label">邮箱地址：</label>
                        <div class="col-md-9">
                          <input class="form-control" type="text" id="m"  >
                        </div>
                      </div>

                      <div class="form-group row">
                        <label style="width: 85px;" class=" col-form-label">用户状态：</label>
                        <div class="col-md-9">
                          <select class="form-control"  >
                            <option value=1>激活</option>
                            <option value=0>禁用</option>
                          </select>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="row" style="padding: 20px">
                    <div class="col-md-offset-5 col-md-7">
                      <el-button type="primary" @click="createPerson" round>创建
                      </el-button>
                      <el-button round @click="closePerson">取消</el-button>
                    </div>

                  </div>

                </div>

                <div>

                </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
// import axios from 'axios'

export default {
  name: 'register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: '',
      password: '',
      userName: ''

    }
  },

  methods: {
    addUser () {
      var name = this.userName
      console.log(name)
      console.log(this.email)
      console.log(this.password)
      this.$http.post('/api/user/addUser', {
        username: name,
        email: this.email,
        password: this.password
      }, {}).then((response) => {
        console.log(response)
        if (response.status === 200) {
          console.log('success')
        }
      })
    },
    createPerson () {
      this.$router.push('/')
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
