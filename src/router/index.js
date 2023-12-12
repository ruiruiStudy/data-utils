import { createRouter, createWebHashHistory } from 'vue-router'

/** 静态路由列表 */
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    // component: () => import('@/views/HomeView'),
    // meta: { title: '首页', icon: 'user' }
    component: () => import('@/views/decrypt/Index'),
    meta: { title: '解密', icon: 'user' }
  },
  {
    path: '/hls',
    name: 'Hls',
    component: () => import('@/views/HlsVideo'),
    meta: { title: 'm3u8视频', icon: 'user' }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('@/views/Setting'),
    meta: { title: '配置项目列表', icon: 'user' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView'),
    meta: { title: '关于', icon: 'user' }
  },
  {
    path: '/comic',
    name: 'Comic',
    component: () => import('@/views/comicCharacter/index'),
    meta: { title: '手绘动漫css', icon: 'user' }
  },
  // {
  //   path: '/transform',
  //   name: 'Transform',
  //   component: () => import('@/views/Transform'),
  //   meta: { title: '翻译', icon: 'user' }
  // },
  // {
  //   path: '/decrypt',
  //   name: 'Decrypt',
  //   component: () => import('@/views/Decrypt'),
  //   meta: { title: '解密', icon: 'user' }
  // },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
})

export default router
