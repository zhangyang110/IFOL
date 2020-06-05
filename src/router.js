import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const context = require.context('./pages', true, /\/*\/route\.js$/);
const keys = context.keys();
let routes = keys.reduce((initial, key) => {
    let module = context(key);
    return initial.concat(module instanceof Array ? module : module.default)
}, []);
const DynamicLayout = () => import('@/layout');
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect:"/moduleOne",
            component: DynamicLayout,
            children: [
                ...routes
            ]
        },
    ]
});

export default router;