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
    path: '/setting',
    name: 'Setting',
    component: () => import('@/views/Setting'),
    meta: { title: '解密项目列表', }
  },
  {
    path: '/hls',
    name: 'Hls',
    component: () => import('@/views/HlsVideo'),
    meta: { title: 'm3u8视频', }
  },
  {
    path: '/rtsp',
    name: 'Rtsp',
    component: () => import('@/views/RTSP.vue'),
    meta: { title: 'rtsp视频', }
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
  {
    path: '/xgPlayer',
    name: 'XgPlayer',
    component: () => import('@/views/xgPlayer.vue'),
    meta: { title: '西瓜视频', }
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
})

export default router
