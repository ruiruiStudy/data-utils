<template>
  <el-drawer
      v-model="open"
      title="解密配置"
      :direction="direction"
      :before-close="handleClose"
  >
    <el-form :model="formData" label-width="120px" label-position="top">
      <el-form-item label="1.设置默认加解密的项目">
        <el-select v-model="formData.projectId" placeholder="选择项目">
          <el-option v-for="item in selectOptions" :key="item.projectId" :label="item.projectName" :value="item.projectId"/>
        </el-select>
      </el-form-item>
      <el-form-item label="2.点击左侧输入框，是否自动清除内容">
        <el-switch v-model="formData.autoClean" active-text="是" inactive-text="否"/>
      </el-form-item>
      <el-form-item label="3.左侧输入框有变化后，是否自动加解密">
        <el-switch v-model="formData.autoCrypt" active-text="是" inactive-text="否"/>
      </el-form-item>
      <el-form-item label="4.解密后的树状结构，默认展开几级">
        <el-radio-group v-model="formData.expandLevel">
          <el-radio label="1" />
          <el-radio label="2" />
          <el-radio label="3" />
          <el-radio label="4" />
          <el-radio label="5" />
          <el-radio label="8" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="5.当前模式">
        <el-radio-group v-model="formData.modeType">
          <el-radio label="1">解密</el-radio>
          <el-radio label="2">加密</el-radio>
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

const emits = defineEmits(['success', 'close'])

const open = ref(false)
const direction = ref('rtl')
const formData = reactive({
  projectId: localStorage.getItem('defaultProjectId') || '0',
  autoClean: localStorage.getItem('autoClean') === 'true' || false,
  autoCrypt: localStorage.getItem('autoCrypt') === 'true' || false,
  expandLevel: localStorage.getItem('expandLevel') || '5',
  modeType: localStorage.getItem('modeType') || '1'
})

const selectOptions = ref([])
const storage = localStorage.getItem('tableData')
if(!storage) {
  ElMessage({
    message: '未配置解密，暂时不能设置默认的解密项目',
    type: 'warning',
    showClose: true,
  })
} else {
  selectOptions.value = JSON.parse(storage)
}

const handleClose = () => {
  open.value = false
  emits('close')
}
const handleOpen = () => {
  open.value = true
}
defineExpose({
  handleOpen
})

const confirmClick = () => {
  const { projectId, autoClean, expandLevel, modeType, autoCrypt } = formData
  localStorage.setItem('defaultProjectId', projectId)
  localStorage.setItem('autoClean', autoClean)
  localStorage.setItem('autoCrypt', autoCrypt)
  localStorage.setItem('expandLevel', expandLevel)
  localStorage.setItem('modeType', modeType)
  emits('success')
  open.value = false
  ElMessage({
    message: '配置成功，刷新后生效',
    type: 'success',
    showClose: true,
  })
  location.reload()
}
</script>

<style scoped>

</style>
