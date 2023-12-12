import { createRouter, createWebHashHistory } from 'vue-router'

/** 静态路由列表 */
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/decrypt/Index'),
    meta: { title: '解密' }
  },
  {
    path: '/hls',
    name: 'Hls',
    component: () => import('@/views/HlsVideo'),
    meta: { title: 'm3u8视频', }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('@/views/Setting'),
    meta: { title: '配置项目列表', }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView'),
    meta: { title: '关于', }
  },
  {
    path: '/comic',
    name: 'Comic',
    component: () => import('@/views/comicCharacter/index'),
    meta: { title: '手绘动漫css', }
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('@/views/Random.vue'),
    meta: { title: '生成随机数', }
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
})

export default router
