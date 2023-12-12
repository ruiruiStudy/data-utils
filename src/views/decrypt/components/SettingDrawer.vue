<template>
  <el-drawer
      v-model="open"
      title="解密配置"
      :direction="direction"
      :before-close="handleClose"
  >
    <el-form :model="formData" label-width="120px" label-position="top">
      <el-form-item label="1.选择默认项目">
        <el-select v-model="formData.projectId" placeholder="选择项目">
          <el-option v-for="item in projectOptions" :key="item.projectId" :label="item.projectName" :value="item.projectId"/>
        </el-select>
      </el-form-item>
      <el-form-item label="2.点击输入框，是否自动清除内容">
        <el-switch v-model="formData.autoClean" active-text="是" inactive-text="否"/>
      </el-form-item>
      <el-form-item label="3.解密后的树状结构，默认展开几级">
        <el-radio-group v-model="formData.expandLevel">
          <el-radio label="1" />
          <el-radio label="2" />
          <el-radio label="3" />
          <el-radio label="4" />
          <el-radio label="5" />
          <el-radio label="8" />
        </el-radio-group>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button type="primary" @click="confirmClick">确定</el-button>
      <el-button @click="handleClose">取消</el-button>
    </template>
  </el-drawer>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from 'element-plus'
import { projectOptions } from '@/utils/options'
const emits = defineEmits(['success'])

const open = ref(false)
const direction = ref('rtl')
const formData = reactive({
  projectId: localStorage.getItem('projectId') || '0',
  autoClean: localStorage.getItem('autoClean') === 'true' || false,
  expandLevel: localStorage.getItem('expandLevel') || '5'
})
console.log('auto', localStorage.getItem('autoClean'), typeof localStorage.getItem('autoClean'))
const handleClose = () => {
  open.value = false
}
const handleOpen = () => {
  open.value = true
}
defineExpose({
  handleOpen
})

const confirmClick = () => {
  console.log('formData', formData)
  const { projectId, autoClean, expandLevel } = formData
  localStorage.setItem('projectId', projectId)
  localStorage.setItem('autoClean', autoClean)
  localStorage.setItem('expandLevel', expandLevel)
  emits('success')
  open.value = false
  ElMessage({
    message: '配置成功，刷新后生效',
    type: 'success',
    showClose: true,
  })
}
</script>

<style scoped>

</style>
