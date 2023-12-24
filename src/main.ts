import { createApp } from 'vue'
import App from './App'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import 'APlayer/dist/APlayer.min.css';
import './assets/main.css'
import './assets/dot-loader.css'

const app = createApp(App)
app.mount('#app')
