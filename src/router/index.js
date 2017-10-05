import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Mine from '../pages/Mine/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
