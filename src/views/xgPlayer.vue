<template>
  <div class="app-container">
    <div>西瓜</div>
    <div id="gua" ref="playerRef"></div>
  </div>
</template>
<script setup>
import Player from 'xgplayer';
import HlsPlugin from 'xgplayer-hls'
import 'xgplayer/dist/index.min.css';
import { ref, onMounted } from "vue";

const playerRef = ref();

const onLoad = () => {
  let player = new Player({
    plugins: [HlsPlugin],
    el: playerRef.value,
    // url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
    // url: 'https://wjc1.aog.cc:98/m3u8/f0edKx5fSmL1GpygjUy24zCGx0QcjLnFe0oKHRQZUAQmEM4FscoCAzbdETll_eSbZOn8Go2RxKeNODg.m3u8',
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
    height: 400,
    width: 500,
    autoplay: true,// 是否自动播放（默认false）
    autoplayMuted: true,// 是否自动静音自动播放（默认false）
    screenShot: true,// 是否使用截图（默认false）
    videoAttributes: {// video扩展属性
      crossOrigin: 'anonymous',// 元素获取数据的 CORS 请求的配置
    },
    marginControls: false,// 是否开启画面和控制栏分离模式（默认false）
    loop: true,// 是否开启循环播放（默认false）
    volume: 0.3,// 默认音量,取值范围0 ~ 1(默认0.6)
    commonStyle: {
      progressColor: '#cccccce6',//进度条底色
    },
    thumbnail: {// 进度条预览图配置
      pic_num: 44,//预览图总帧数
      width: 160,// 预览图每一帧的宽度
      height: 90,// 预览图每一帧的高度
      col: 10,// 每张雪碧图包含的预览图列数
      row: 10,// 每张雪碧图包含的预览图行数
      // 雪碧图url列表
      urls: [ '//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/xgplayer-demo-thumbnail.jpg' ],
    },
    download: true,// 示下载按钮
  });

  // 清晰度切换
  player.emit('resourceReady', [
    {
      name: '超清',
      definition: '1080p',
      url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4'
    },
      {
      name: '高清',
      definition: '720p',
      url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4'
    },
      {
      name: '标清',
      definition: '480p',
      url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4'
    }
  ]);
}
onMounted(() => {
  onLoad()
})
</script>
<style scoped>
</style>
