import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'

//引入jquery
import $ from 'jquery'
// 引入bootstrap
import 'bootstrap'
// 引入bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
//引入bootstrap图标库
import '../node_modules/bootstrap/bootstrap-icons-1.10.5/font/bootstrap-icons.css'


import './assets/css/main.css'

const app = createApp(App)


app.use(router,ElementPlus,$)
app.mount('#app')
