/*
 * @Author: zhangbo
 * @E-mail: xtfge_0915@163.com
 * @Date: 2019-10-09 19:42:40
 * @LastEditors: zhangbo
 * @LastEditTime: 2020-02-28 13:50:56
 * @Desc: 
 */
import Vue from 'vue'
import './plugins/element.js'
import App from './App'
import "@/assets/css/iconfont.css";
import vuetify from './plugins/vuetify';
import axios from 'axios';

// axios.defaults.headers.post['Content-Type']='text/plain'
// axios.defaults.headers.get['Content-Type']='text/plain'
axios.defaults.withCredentials=true;
Vue.prototype.$axios =axios;

Vue.config.productionTip = false
new Vue({
 vuetify,
 render: h => h(App)
}).$mount('#app')
