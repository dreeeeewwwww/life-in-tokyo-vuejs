import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'index' },
  { path: '/archive', component: 'archive' },
  { path: '/biography', component: 'biography' },
  { path: '/discography', component: 'discography' },
  { path: '/images', component: 'images' },
  { path: '/video', component: 'video' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
