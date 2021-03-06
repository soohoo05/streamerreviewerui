import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path :'/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path :'/streamers/:username',
      name: 'streamer',
      component: () => import('./views/StreamerProfile.vue')
    }
  ]
})
