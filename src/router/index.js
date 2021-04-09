import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'LostAndFoundAnimal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LostAndFoundAnimal.vue')
  },
  {
    path: '/LostAndFoundAnimal',
    name: 'LostAndFoundAnimal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LostAndFoundAnimal.vue')
  },
  {
    path: '/Composition',
    name: 'Composition',
    component: () => import('../views/Composition.vue')
  },
  {
    path: '/Inquiry',
    name: 'Inquiry',
    component: () => import('../views/Inquiry.vue')
  },
  {
    path: '/RecordAgency',
    name: 'RecordAgency',
    component: () => import('../views/RecordAgency.vue')
  },
  {
    path: '/Page',
    name: 'Page',
    component: () => import('../views/Page.vue')
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },

  {
    path: '/Modify',
    name: 'Modify',
    component: () => import('../views/Modify.vue')
  },
  {
    path: '/InquiryPage',
    name: 'InquiryPage',
    component: () => import('../views/InquiryPage.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
