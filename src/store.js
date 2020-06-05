import Vue from "vue"
import Vuex from "vuex"
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        count:1
    },
    mutations:{
        increment(state){
            state.count++
        },
    },
    getters:{

    },
    actions:{},
    plugins:[createLogger()]
})


