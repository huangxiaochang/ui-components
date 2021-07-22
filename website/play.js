// 该入口主要是用于查看某个组件的效果
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './play/index.vue'
import '../packages/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

