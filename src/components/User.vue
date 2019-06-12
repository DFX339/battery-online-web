<template>
<div>
   <label>
      {{msg}}

   </label>
   <button @click = "getUsers()"> 获取数据
   </button>
</div>

</template>
<script>
/* eslint-disable */ 
//import { users } from '../service/api'
export default {
 
  data: function () { 
   
    return {
     msg:  "Welcome to my vue."
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
      debugger;
      let param = null
      this.msg='123'
      let that = this
      this.$api.get('/users',null, res => {
        that.msg=res
        //console.log(123)
      })
    }
  }
}
</script>