import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import onsenUI from './onsenUI'

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.config.productionTip = false



new Vue({
  // router, // 실제 라우터의 정의
  // onsenUI, // onsenUI menu tab
  render: h => h(App),
}).$mount('#app')

