import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'dashboard',
    meta: { requiresAuth: true },
    children: [
      { path: '/', component: () => import('pages/Index.vue'), meta: { requiresAuth: true } },
      {
        path: '/products',
        component: () => import('pages/Products.vue'),
        name: 'products',
        children: [
          { path: '/products/clothes', component: () => import('pages/Clothes.vue'), meta: { requiresAuth: true } },
          { path: '/products/shoes', component: () => import('pages/Shoes.vue'), meta: { requiresAuth: true } },
          { path: '/products/beauty', component: () => import('pages/Beauty.vue'), meta: { requiresAuth: true } },
          { path: '/products/electronics', component: () => import('pages/Electronics.vue'), meta: { requiresAuth: true } },
          { path: '/products/phones', component: () => import('pages/Phones.vue'), meta: { requiresAuth: true } },
          { path: '/products/computers', component: () => import('pages/Computers.vue'), meta: { requiresAuth: true } }
        ],
        meta: { requiresAuth: true }
      },
      { path: '/sales', component: () => import('pages/Sales.vue'), meta: { requiresAuth: true } },
      { path: '/settings', component: () => import('pages/Settings.vue'), meta: { requiresAuth: true } },
      { path: '/customers', component: () => import('pages/Customers.vue'), meta: { requiresAuth: true } }
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
