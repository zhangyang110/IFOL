import Vue from 'vue';
import App from './App.vue';
import moment from "moment";
import store from "./store";
import router from "./router";
import {sync} from 'vuex-router-sync';
import '@/common/style/index.less';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
sync(store, router);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
