import Vue from 'vue'
import Vuex from 'vuex'
import fashion from './modules/fashion';
import ancient from './modules/ancient';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fashion,
    ancient
  },
})
/* state:{
    count:0
},
mutations:{
    add(state){
        state.count++
    }
} */