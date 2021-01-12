import { route } from 'quasar/wrappers'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import { StateInterface } from '../store'
import routes from './routes'
import authModule from 'src/store/module-auth'
// import { Getter } from 'vuex-class'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default route<Store<StateInterface>>(function ({ Vue }) {
  Vue.use(VueRouter)

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // @Getter('authModule/getLoginStatus') getLoginStatus: any

  // Router.beforeEach((to, from, next) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //   if (to.matched.some(record => record.meta.requiresAuth)) {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     if (!authModule.getters['authModule/getLoginStatus']) {
  //       next({
  //         path: '/login',
  //         query: { redirect: to.fullPath }
  //       })
  //     } else {
  //       next({
  //         path: '/products',
  //         query: { redirect: to.fullPath }
  //       })
  //     }
  //   } else {
  //     next()
  //   }
  // })

  return Router
})
