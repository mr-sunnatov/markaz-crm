import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import uz from 'element-plus/dist/locale/uz-uz'

import Maska from 'maska'

import VueCookies from 'vue3-cookies'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus, {locale: uz})
.use(VueCookies, {
    expireTimes: '30d',
    secure: true
})
.use(Maska)
.use(store)
.use(router)
.mount('#app')
