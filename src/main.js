import { createApp } from 'vue'
//import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

// const app = createApp()
// app.use( store)
// app.mount(App, '#app')


createApp(App).use(store).use(router).mount('#app')