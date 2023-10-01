import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import VueDatePicker from '@vuepic/vue-datepicker'
import './style.css'
import router from './router'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App).use(router).use(createPinia().use(piniaPluginPersistedState)).use(Toast).component('VueDatePicker', VueDatePicker).mount('#app')
