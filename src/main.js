import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // 导入路由配置
import './style.css'

// 创建Vue应用
const app = createApp(App)

//安装插件
app.use(router)// 安装路由
//app.use(store)// 状态管理

// 注册全局组件

// 挂载Vue应用
app.mount('#app')
//应用实例必须在调用了 .mount() 方法后才会渲染出来
