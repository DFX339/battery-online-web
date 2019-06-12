<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Hello World vue!!!</h1>
      <button @click = "func()"> 跳转
   </button>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    func () {
      this.$router.push({
        name: '/users'
      }
    )
  }
}
}
</script>
