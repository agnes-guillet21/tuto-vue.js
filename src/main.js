import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

import './assets/global.css';
import './assets/toDoListTp.css';


createApp(App)
.use(router)
.mount('#app')
