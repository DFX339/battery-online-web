<template>
<div>
   <label>
      {{msg}}

   </label>
   <button @click = "getUsers()"> test获取用户 </button>
   <button @click = "findAll()"> findAll获取数据 </button>
   <br/>
   用户名<input  v-model="username" />
   密码<input  v-model="password" />
   <button @click = "insert()"> insert插入数据 </button>
   <button @click = "update()"> update插入数据 </button>
   <button @click = "delete1()"> delete插入数据 </button>
   <iframe v-show="iframeState" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto src="http://10.28.85.149:8080?username=admin&password=Clio$123&embedFlag=hideToolbar#query/open//summary/summaryKPI_2019.saiku"></iframe>
</div>

</template>
<script>
/* eslint-disable */ 
//import { users } from '../service/api'
export default {
 
  data: function () { 
   
    return {
     msg:  "Welcome to my vue.",
     username: '',
     password: '',
     iframeState:true,
    }
  },

  methods: {
    func(){
        this.$router.push({
            name: '/'
            }
         )
    },

    getUsers(){
  
      let param = null
      this.msg='123'
      let that = this
      this.$api.get('/users',null, res => {
        that.msg=res
        //console.log(123)
      })
    },

     findAll(){
      let param = null
      this.msg='123'
      let that = this
      this.$api.get('/user/findAll',null, res => {
        that.msg=res
        //console.log(123)
      })
    },

    insert(){
      let params={username:this.username,password:this.password}
      let that = this
      this.$api.get('/user/insert', params, res => {
        that.msg=res
        //console.log(123)
      })
    },

     update(){
      let params={username:this.username,password:this.password}
      let that = this
      this.$api.get('/user/update', params, res => {
        that.msg=res
        //console.log(123)
      })
    },

     delete1(){
      let params={username:this.username}
      let that = this
      this.$api.get('/user/delete', params, res => {
        that.msg=res
        //console.log(123)
      })
    }
  }
}
</script>