import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import List from '@/pages/list/List.vue'
import City from '@/pages/city/City.vue'
import Details from '@/pages/details/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
