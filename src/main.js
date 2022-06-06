import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)         //  Permet d'utiliser le Routeur
app.use(createPinia())  //  Permet d'utiliser Pinia

app.mount('#app')
