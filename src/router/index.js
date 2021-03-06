import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* eslint-disable */ 
const router = new Router({
  mode: 'history', // 默认是hash模式
  scrollBehavior (to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    // console.log(to) // to：要进入的目标路由对象，到哪里去
    // console.log(from) // from：离开的路由对象，哪里来
    // console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
    if (savePosition) {
      return savePosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: '/',
      component: () => import(/* webpackChunkName: "about" */ '@/components/HelloWorld.vue')
    },
    {
      path: '/users',
      name: '/users',
      component: () => import(/* webpackChunkName: "about" */ '@/components/User.vue')
    }
  ]
})

export default router