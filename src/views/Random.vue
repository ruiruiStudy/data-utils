<template>
  <div class="app-container">
    <el-form :model="formData" label-width="120px">
      <el-form-item label="最小值">
        <el-input-number v-model="formData.min" placeholder="最小值" />
      </el-form-item>
      <el-form-item label="最大值">
        <el-input-number v-model="formData.max" placeholder="最大值" />
      </el-form-item>
      <el-form-item label="生成个数">
        <el-input-number v-model="formData.numbers" placeholder="生成个数" />
      </el-form-item>
      <el-form-item label="精确度">
        <el-input-number v-model="formData.precision" placeholder="精确度" />位小数
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="confirmClick">开始生成</el-button>
        <el-button @click="handleClear">清除结果</el-button>
      </el-form-item>
    </el-form>

    <div v-if="resultArr.length > 0">
      生成结果： <el-button link type="primary" @click="copyText">复制文本</el-button>
      <div>
        {{ resultArr }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from 'element-plus'

const formData = reactive({
  min: 0, // 最小值
  max: 100, // 最大值
  numbers: 20, // 生成个数,
  precision: 2, // 精确度2
})
// 生成结果
const resultArr = ref([])

const confirmClick = () => {
  const { min, max, numbers, precision } = formData;
  const arr = [];
  for (let i = 0; i < numbers; i++) {
    arr.push(
      Number((Math.random() * (max - min + 1) + min).toFixed(precision))
    );
  }
  resultArr.value = arr
}

const handleClear = () => {
  resultArr.value = []
}

// 复制文本
function copyText() {
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = resultArr.value;
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  ElMessage({
    message: '复制成功',
    type:'success',
    showClose: true,
  })
}

</script>

<style scoped>

</style>
