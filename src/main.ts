import { createApp } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import './style.css'
import router from './router'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App).use(router).use(Toast).component('VueDatePicker', VueDatePicker).mount('#app')
