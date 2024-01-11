<template>
  <div class="app-container">

    <el-alert title="请手动添加项目解密配置，数据将缓存在浏览器中，注意：如果切换浏览器、需要重新添加配置" type="info" show-icon closable />

    <el-button
      type="primary"
      @click="handleAdd"
      style="margin-top: 10px;"
    >新增</el-button>

    <el-table :data="tableData" v-loading="loading" border style="margin-top: 10px;">
      <el-table-column prop="projectId" label="项目id" width="70" />
      <el-table-column prop="projectName" label="项目名称" width="180" />
      <el-table-column prop="key" label="key值" />
      <el-table-column prop="iv" label="iv值" />
      <el-table-column label="操作" width="160">
        <template v-slot="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope.row)"
          >编辑</el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope.$index)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="400px"
      :before-close="handleClose"
    >

      <el-form :model="formData" label-width="80px" :rules="rules" ref="formRef">
        <el-form-item label="项目名称" prop="projectName">
          <el-input v-model="formData.projectName" placeholder="项目名称" />
        </el-form-item>
        <el-form-item label="key值" prop="key">
          <el-input v-model="formData.key" placeholder="key值" />
        </el-form-item>
        <el-form-item label="iv值" prop="iv">
          <el-input v-model="formData.iv" placeholder="iv值" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance()
// import { projectOptions } from '@/utils/options'
const tableData = ref([])
import { ElMessageBox, ElMessage } from "element-plus";


const isEdit = ref(false) // 是否编辑状态
const dialogVisible = ref(false)
const title = ref('')
const loading = ref(false)
const formData = ref({
  projectId: '',
  projectName: '',
  key: '',
  iv: ''
})
const rules = reactive({
  projectName: [
    { required: true, message: '请输入项目名称', trigger: 'blur' }
  ],
  key: [
    { required: true, message: '请输入key值', trigger: 'blur' }
  ],
  iv: [
    { required: true, message: '请输入iv值', trigger: 'blur' }
  ]
})

function getList() {
  loading.value = true
  const storage = localStorage.getItem('tableData')
  if(!storage) {
    tableData.value = []
    setTimeout(() => {
      loading.value = false
    }, 500)
    loading.value = false
  } else {
    tableData.value = JSON.parse(storage)
    setTimeout(() => {
      loading.value = false
    }, 500)
  }
}

function handleEdit(row) {
  reset()
  title.value = '编辑项目配置'
  isEdit.value = true
  dialogVisible.value = true
  formData.value = row
}
function handleDelete(row) {
  ElMessageBox.confirm('确认删除该项目?', '系统提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    tableData.value.splice(row, 1)
    localStorage.setItem('tableData', JSON.stringify(tableData.value))
    getList()
    ElMessage({
      type: 'success',
      message: '删除成功',
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '删除失败',
    })
  })
}
function handleAdd() {
  title.value = '新增项目配置'
  isEdit.value = false
  dialogVisible.value = true
}

function handleClose() {
  reset()
}

function reset() {
  title.value = ''
  isEdit.value = false
  dialogVisible.value = false
  formData.value = {
    projectId: '',
    projectName: '',
    key: '',
    iv: ''
  }
}

const handleConfirm = async (formEl) => {
  proxy.$refs.formRef.validate((valid, fields) => {
    if (valid) {
      if(!isEdit.value) {
        const lastArr = [...tableData.value, Object.assign(formData.value, {
          projectId: tableData.value.length > 0
            ? String(Number(tableData.value[tableData.value.length - 1].projectId) + 1)
            : '0'
        })]
        localStorage.setItem('tableData', JSON.stringify(lastArr))
        reset()
        getList()
      } else {
        localStorage.setItem('tableData', JSON.stringify(tableData.value))
        reset()
        getList()
      }
    }
  })
}

getList()
</script>

<style scoped>

</style>
