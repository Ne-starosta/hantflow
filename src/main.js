import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from 'firebase/app'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBAMN3o-_O0597RbpT-zGt7Ylk4LpiXJfQ',
  authDomain: 'hantflow-2022.firebaseapp.com',
  projectId: 'hantflow-2022',
  storageBucket: 'hantflow-2022.appspot.com',
  messagingSenderId: '334792610671',
  appId: '1:334792610671:web:eee32a7e877a0863b60e9a',
  measurementId: 'G-EN3M60CDFX'
}

initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
