import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
     
      {
      path:'/about',
        name:'about',
        component: function(){
          return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        }
      },
      {
        path:'/ranking',
        name:'ranking',
        component: function(){
          return import(/* webpackChunkName: "about" */ '../views/Ranking.vue')
        }
      },
    ]

  },
  {
    path:'/agregar',
    name:'agregar',
    component: function(){
      return import(/* webpackChunkName: "about" */ '../views/AgregarCentro.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
