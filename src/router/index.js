import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import UserSetting from '@/pages/UserSetting'
import UserCenter from '@/pages/UserCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/UserSetting/:userId',
      name: 'UserSetting',
      component: UserSetting
    }, {
      path: '/UserCenter/:userId',
      name: 'UserCenter',
      component: UserCenter
    }
  ]
})
