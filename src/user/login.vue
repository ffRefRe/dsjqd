<template>

  <div>
    apv


    <button @click="click">click </button>
    <button @click="sendapi"> s end </button>
    <el-button @click="visi">Button</el-button>


  </div>



</template>



<script>
  import axios from 'axios'



  export default {
    name: 'login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

    methods: {

      click: function () {
        console.log(123);

        // this.$http.get(/api/).then(response => {
        //   if (response.data.status == 1){
        //     this.isUpload = true;
        //   } else {
        //     this.isUpload = false;
        //   }
        // });

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
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
