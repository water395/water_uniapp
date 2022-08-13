import App from './App'  //总组件
import uView from "uview-ui"; //uniapp ui框架
import store from '@/store/index.js'


// #ifndef VUE3

import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app';

Vue.use(uView);


const app = new Vue({
	store,
    ...App
})

// console.log(app)

// 引入请求封装，将app参数传递到配置中
require('./common/request.js')(app);


app.$mount()
// #endif















// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif