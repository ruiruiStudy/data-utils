<template>
  <div class="app-container">
    <div style="margin-bottom: 8px;">
      <el-input v-model="videoUrl" style="width: 70%;" />
      <el-button @click="playHLS(videoUrl)" style="margin-left: 8px;">播放</el-button>
    </div>
    <video
      id="hls"
      width="1000"
      height="600"
      class="img-responsive video-js vjs-default-skin"
      controls
      preload="auto"
      :autoplay="true"
      :muted="false"
      ref="videoRef"
    >
    </video>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";

const videoRef = ref()
const videoUrl = ref('https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8')
let hlsPlayer
const playHLS = (url) => {
  const video = videoRef.value;
  if (typeof hlsPlayer !== "undefined") {
    if (hlsPlayer != null) {
      hlsPlayer.destroy();
    }
  }
  hlsPlayer = new Hls();
  hlsPlayer.loadSource(url);
  hlsPlayer.attachMedia(video);//将视频元素绑定到此 HLS 对象
  hlsPlayer.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
    emit("changeIsPlay", true);
  });
  hlsPlayer.on(Hls.Events.ERROR, function (eventName, data) {
    if(data.fatal && data.type !=="networkError") {
      video.pause();
      emit("changeIsPlay", false);
    }
  });
};

onBeforeUnmount(() => {
  if (typeof hlsPlayer!== "undefined") {
    hlsPlayer.destroy();
  }
})


</script>

<style scoped>

</style>
