import { debounce } from '@/utils'
import { ref } from "vue";

// 变量
const $_sidebarElm = ref(null)
const $_resizeHandler = ref(null)

// 方法
const $_sidebarResizeHandler = e => {
  if (e.propertyName === 'width') {
    this.$_resizeHandler()
  }
}
