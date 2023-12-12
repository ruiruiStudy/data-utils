<template>
  <div class="app-container">
    <el-table :data="projectOptions" border>
      <el-table-column prop="projectId" label="项目id" width="70" />
      <el-table-column prop="projectName" label="项目名称" width="180" />
      <el-table-column prop="key" label="key值" />
      <el-table-column prop="iv" label="iv值" />
    </el-table>
  </div>
</template>

<script setup>
import { projectOptions } from '@/utils/options'
</script>

<style scoped>

</style>
