import Vue from "vue";
import App from "./App.vue";
import axios from 'axios'
import 'mavon-editor/dist/css/index.css'
import Vant from "./vant.js";
import router from './router';
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style.css';
import './assets/icons' // icon
import dayjs from 'dayjs'

Vue.config.productionTip = false;

Vue.prototype.$http = axios

Vue.use(Vant);
Vue.use(ElementUI, {size: 'small'});

Vue.prototype.utools = window.utools;
Vue.prototype.$dayjs = dayjs;

if (window.utools) {
  window.utools.onPluginEnter(({code, type, payload}) => {

    console.log('用户进入插件应用', `code:${code}`, `type:${type}`, `关键字:${payload}`)

    Vue.prototype.$pluginCode = code
    Vue.prototype.$pluginType = type
    Vue.prototype.$pluginPayload = payload

  });

  window.utools.onPluginDetach(() => {
    console.log('分离插件')
    Vue.prototype.$pluginDetach = true
  })
}


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
