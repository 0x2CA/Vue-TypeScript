import Vue from 'vue'
import Main from './Main.vue'
import "./plugins/axios.ts"
import "./plugins/platform.ts"
import router from "./plugins/router"

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(Main),
}).$mount('#app')
