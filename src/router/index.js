import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/app/login/login'
import Home from '@/components/app/home/home'
const DefaultLayout = () => import('@/components/app/layout/default-layout/default-layout');
const MenuLayout = () => import('@/components/app/layout/menu-layout/menu-layout');
// 新闻
const InlandComponent = () => import('@/components/app/news/inland/inland');
const ForeignComponent = () => import('@/components/app/news/foreign/foreign');
// 生活
const BeautyComponent = () => import('@/components/app/life/beauty/beauty');
const HealthCareComponent = () => import('@/components/app/life/healthCare/healthCare');
// 娱乐
import recreationRouter from '@/router/recreation/route';

// 用户
const UserComponent = () => import('@/components/app/system/user/user')

Vue.use(Router)
const router = new Router({
  routes: [{
      path: '',
      redirect: '/login'
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '',
      component: DefaultLayout,
      children: [{
          path: '/home',
          component: Home
        },
        {
          path: '/news/inland',
          component: InlandComponent
        },
        {
          path: '/news/foreign',
          component: ForeignComponent
        },
        {
          path: '/life/beauty',
          component: BeautyComponent
        },
        {
          path: '/life/healthcare',
          component: HealthCareComponent
        }
      ]
    },
    {
      path: '/recreation',
      component: MenuLayout,
      children: recreationRouter
    },
    {
      path: '/system',
      component: DefaultLayout,
      children: [{
        path: 'user',
        component: UserComponent
      }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('全局路由拦截')
  next()
})
router.onError((err) => {
  console.log('路由报错');
  console.log(err);
})
export default router
