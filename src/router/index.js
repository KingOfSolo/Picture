import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import UserSetting from '@/components/UserSetting'

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
    }
  ]
})
