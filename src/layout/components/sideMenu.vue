<template>
  <el-menu
      :default-active="currentRoute"
      class="el-menu-vertical-demo"
      router
      :collapse="isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Connection /></el-icon>
        <span>系统工具</span>
      </template>
      <el-menu-item
          v-for="item in constantRoutes"
          :key="item.path"
          :index="item.path"
          @click="clickMenu"
      >
        <template #title>
<!--          <el-icon><location /></el-icon>-->
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { Connection } from '@element-plus/icons-vue'
import { constantRoutes } from '@/router'
import { ref } from "vue";
defineProps({
  isCollapse: { type: Boolean, default: false }
})
const currentRoute =  ref( localStorage.getItem('currentRoute') || '/')

/** 点击菜单，更新localStorage */
const clickMenu = (e) => {
  localStorage.setItem('currentRoute', e.index)
}
</script>
<style lang="scss">
.el-menu {
  border-right: none !important;
}
</style>
