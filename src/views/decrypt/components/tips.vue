<template>
  <el-dialog
    v-model="dialogVisible"
    title="系统提示"
    width="30%"
    :before-close="handleClose"
  >
    <span>你还没配置解密项目，建议您先去配置，配置好之后，下次就可以直接使用了</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">暂不配置</el-button>
        <el-button type="primary" @click="handleConfirm">去配置</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()

const dialogVisible = ref(true)

const handleClose = () => {
  open.value = false
}

const handleOpen = () => {
  console.log('打开')
  dialogVisible.value = true
}

const handleConfirm = () => {
  console.log('peizhi')
  router.push({
    path: '/setting'
  })
}
</script>

<style scoped>

</style>
