<template>
  <div id="app">



    <el-button type="primary" @click="login">login</el-button>
    <el-button type="primary" @click="register">register</el-button>

    <login></login>

  </div>
</template>

<script>
  import Login from './user/login'

export default {
  name: 'App',
  components:{
    Login,

  },
  methods:{
    register:function () {
      console.log(1)
      this.$router.push({path:'/register'});
    },
    login:function () {
      this.$router.push({path:'/login'});
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
