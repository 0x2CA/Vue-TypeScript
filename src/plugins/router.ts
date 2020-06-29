import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "../routes"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history', //https://router.vuejs.org/zh/guide/essentials/history-mode.html
    base: "/",
    routes
});

export default router;