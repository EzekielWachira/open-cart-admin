import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      {
        path: '/products',
        component: () => import('pages/Products.vue'),
        children: [
          { path: '/products/clothes', component: () => import('pages/Clothes.vue') },
          { path: '/products/shoes', component: () => import('pages/Shoes.vue') },
          { path: '/products/beauty', component: () => import('pages/Beauty.vue') },
          { path: '/products/electronics', component: () => import('pages/Electronics.vue') },
          { path: '/products/phones', component: () => import('pages/Phones.vue') },
          { path: '/products/computers', component: () => import('pages/Computers.vue') }
        ]
      },
      { path: '/sales', component: () => import('pages/Sales.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Login.vue'),
    name: 'login'
  },
  {
    path: '/register',
    component: () => import('layouts/Register.vue'),
    name: 'register'
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
