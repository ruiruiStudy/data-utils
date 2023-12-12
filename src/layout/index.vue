<template>
  <div class="main">
    <div class="sideLeftbar" :style="{ width: isCollapse ? '64px' : '170px' }">
      <sidebar :isCollapse="isCollapse" />
      <div class="toggleShowMenu">
<!--        <el-icon :size="22">-->
<!--          <Expand v-if="isCollapse" @click="toggleShowSidebar(false)" />-->
<!--          <Fold v-if="!isCollapse" @click="toggleShowSidebar(true)" />-->
<!--        </el-icon>-->
      </div>

    </div>
    <div class="main-contents" :style="{ left: isCollapse ? '64px' : '170px' }">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import Sidebar from './components/sideMenu.vue'
import { RouterView } from 'vue-router'
import { ref } from "vue";
// const isCollapse = ref(localStorage.getItem('showSidebar') || false)
const isCollapse = false;
console.log('isCollapse', isCollapse)
const toggleShowSidebar = e => {
  console.log('e', e)
  isCollapse.value = e
  localStorage.setItem('showSidebar', e)
}
</script>

<style lang="scss">
.toggleShowMenu {
  position: fixed;
  bottom: 8px;
  left: 8px;
  cursor: pointer;
}
.main {
  position: absolute;
  width: 100vw;
  height: 100vh;
  .sideLeftbar {
    width: 170px;
    position: absolute;
    top: 0;
    bottom: 0;
    border-right: solid 1px var(--el-menu-border-color);
  }
  .main-contents {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
}
</style>
