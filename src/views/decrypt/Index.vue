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
        <el-button type="primary" @click="handleCrack(formDataRef)">{{ modeType == 2 ? '加密' : '解密' }}</el-button>
        <el-button type="primary" plain :icon="Setting" @click="handleSetting">设置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="8">
      <el-col :span="12">
        <el-input
          v-model="noDecryptTexts"
          :rows="28"
          type="textarea"
          :placeholder="placeholderTip"
          @focus="handleFouce"
          @input="handleInputChange"
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
      @close="showTip = false"
      v-if="showTip"
    />
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, computed } from "vue";
import { ElMessage } from 'element-plus'
import { Setting } from '@element-plus/icons-vue'
import JsonViewer from 'vue-json-viewer'
import DecryptSetting from './components/SettingDrawer'
import Tips from './components/tips.vue'
import { Decrypt, Encrypt } from "@/utils/decrypt";

console.log('加解密娃哈哈')
const jsonKey = ref(true)
const formDataRef = ref()
const showSetting = ref(false)
const selectOptions = ref([])
const showTip = ref(false)
// 未解密内容
const noDecryptTexts = ref()

// 解密后内容
const decryptTexts = localStorage.getItem('modeType') == 2 ? ref('请输入需要解密的内容') : ref('请在左侧输入密文/JSON对象')

// 默认展开节点层级
const expandLevel = ref(localStorage.getItem('expandLevel') || '5')
// 1=解密，2=加密
const modeType = localStorage.getItem('modeType') || '1'
// 左侧框默认提示
const placeholderTip = computed(() => {
  return localStorage.getItem('modeType') == 2 ? '请输入需要加密的内容' : "请输入密文/JSON对象\n【支持JSON对象】\n【支持JSON对象】\n【支持JSON对象】\n【密文/JSON对象两种格式】"
})


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

// 加解密事件
const handleCrack = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if(modeType == 1) {
        handleDecrypt()
      } else {
        handleEncrypt()
      }
    }
  })
}

// 处理解密
const handleDecrypt = () => {
  if(!noDecryptTexts.value) {
    ElMessage({
      message: '请先输入密文/JSON对象',
      type: 'warning',
      showClose: true,
    })
    return false
  }

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
  }
}

// 处理加密
const handleEncrypt = () => {
  if(!noDecryptTexts.value) {
    ElMessage({
      message: '请先输入需要加密的内容',
      type: 'warning',
      showClose: true,
    })
    return false
  }
  const { cryptKey, cryptIv } = formData
  decryptTexts.value = Encrypt(JSON.stringify(noDecryptTexts.value), cryptKey, cryptIv)
}

const tipRef = ref()
// 下拉列表切换事件
const handleChangeSelect = (e) => {
  const storage = localStorage.getItem('tableData')
  if(!storage) {
    // 获取不到缓存，就提示添加配置
    showTip.value = true
  } else {
    selectOptions.value = JSON.parse(storage)
  }
  const optionItem = selectOptions.value.find(item => item.projectId == e)
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
// 输入框值改变后
const handleInputChange = () => {
  if(localStorage.getItem('autoCrypt') === 'true') {
    handleCrack(formDataRef.value)
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
:deep(.el-drawer__header) {
  margin-bottom: 12px;
}
</style>
