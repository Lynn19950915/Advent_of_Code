import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// 在根元件上建立 Vue 應用實體
const app = createApp(App)
app.use(router)
app.mount("#app")
