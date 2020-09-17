import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './sotre'
// 엔트리 포인트
new Vue({
  el: '#app',
  router,
  store, //vuex를 통해 만든 스토어를 엔트리포인트에서 전달해준다.
  
  render: h => h(App)
})
