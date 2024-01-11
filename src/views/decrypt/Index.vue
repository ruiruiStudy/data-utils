<template>
  <div class="app-container">
    <el-form :inline="true" :model="formData" ref="formDataRef" :rules="rules">
      <el-form-item label="项目" prop="projectId">
        <el-select v-model="formData.projectId" placeholder="项目" @change="handleChangeSelect" style="width: 100px;">
          <el-option v-for="item in selectOptions" :key="item.projectId" :label="item.projectName" :value="item.projectId"/>
        </el-select>
      </el-form-item>
      <el-form-item label="key值" prop="cryptKey">
        <el-input v-model="formData.cryptKey" placeholder="请输入key值" style="width: 240px;"/>
      </el-form-item>
      <el-form-item label="iv" prop="cryptIv">
        <el-input v-model="formData.cryptIv" placeholder="请输入iv值" style="width: 240px;"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleCrack(formDataRef)">解密</el-button>
        <el-button type="primary" plain :icon="Setting" @click="handleSetting">设置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="8">
      <el-col :span="12">
        <el-input
            v-model="noDecryptTexts"
            :rows="28"
            type="textarea"
            placeholder="请输入密文/JSON对象&#10【支持JSON对象】&#10【支持JSON对象】&#10【支持JSON对象】&#10【密文/JSON对象两种格式】"
            @focus="handleFouce"
        />
      </el-col>
      <el-col :span="12">
        <div class="crack-box">
          <json-viewer
            v-if="jsonKey"
            :value="decryptTexts"
            :expand-depth="expandLevel"
            copyable
          />
        </div>
      </el-col>
    </el-row>

<!--  解密设置  -->
    <decrypt-setting
      ref="settingRef"
      @success="changeSetting"
      @close="showSetting = false"
      v-if="showSetting"
    />

<!--  提示框  -->
    <tips
      ref="tipRef"
      v-if="showTip"
    />
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from "vue";
import { ElMessage } from 'element-plus'
import { Setting } from '@element-plus/icons-vue'
import JsonViewer from 'vue-json-viewer'
import DecryptSetting from './components/SettingDrawer'
import Tips from './components/tips.vue'
import { Decrypt } from "@/utils/decrypt";

const jsonKey = ref(true)
const formDataRef = ref()
const showSetting = ref(false)
const selectOptions = ref([])
const showTip = ref(false)
// 未解密内容
const noDecryptTexts = ref()

// 解密后内容
const decryptTexts = ref('请在左侧输入密文/JSON对象')

// 表单内容
const formData = reactive({
  projectId: '',
  cryptKey: '',
  cryptIv: ''
})

// 校验规则
const rules = reactive({
  cryptKey: [
    { required: true, message: '请输入key值', trigger: 'blur' }
  ],
  cryptIv: [
    { required: true, message: '请输入key值', trigger: 'blur' }
  ]
})

// 默认展开节点层级
const expandLevel = ref(localStorage.getItem('expandLevel') || '5')

// 解密事件
const handleCrack = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if(!noDecryptTexts.value) {
        ElMessage({
          message: '请先输入密文/JSON对象',
          type: 'warning',
          showClose: true,
        })
        return false
      }

      console.log('类型', typeof noDecryptTexts.value)
      if(noDecryptTexts.value.includes('{')) {
        decryptTexts.value = JSON.parse(noDecryptTexts.value)
      } else {
        const { cryptKey, cryptIv } = formData
        const toCryptCtx = noDecryptTexts.value.replace(/\s+/g, '')
        const result = (Decrypt(toCryptCtx, cryptKey, cryptIv))
        if(!result) {
          ElMessage({
            message: '别逗，输入正常一点的加密JSON字符串',
            type: 'error',
            showClose: true,
          })
          return false
        }
        decryptTexts.value = JSON.parse((Decrypt(toCryptCtx, cryptKey, cryptIv)))
        console.log('decryptTexts', decryptTexts.value)
      }
    }
  })
}

const tipRef = ref()
// 下拉列表切换事件
const handleChangeSelect = (e) => {
  const storage = localStorage.getItem('tableData')
  console.log('storage', storage)
  if(!storage) {
    // 获取不到缓存，就提示添加配置
    showTip.value = true
  } else {
    selectOptions.value = JSON.parse(storage)
  }
  const optionItem = selectOptions.value.find(item => item.projectId == e)
  console.log('optionItem', optionItem)
  if(optionItem) {
    formData.projectId = e
    formData.cryptKey = optionItem.key
    formData.cryptIv = optionItem.iv
  }
}

// 预设下拉选项值
const presetOption = () => {
  const defaultProjectId = localStorage.getItem('defaultProjectId') || '0'
  handleChangeSelect(defaultProjectId)
}
presetOption()

// 设置按钮点击
const settingRef = ref()
const handleSetting = () => {
  showSetting.value = true
  nextTick(() => {
    console.log('settingRef', settingRef)
    settingRef.value.handleOpen()
  })
}

// 设置内容改变
const changeSetting = () => {
  jsonKey.value = false
}

// 输入框获取焦点
const handleFouce = () => {
  if(localStorage.getItem('autoClean') === 'true') {
    noDecryptTexts.value = null
  }
}
</script>

<style scoped>
.crack-box {
    min-height: 600px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    max-height: calc(100vh - 90px);
    overflow-y: scroll;
}
:deep(.el-form--inline .el-form-item) {
    margin-right: 8px;
}
</style>
