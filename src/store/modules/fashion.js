
const state = {
    count:0
}
const mutations = {
    add:function(state,num){
        state.count+=num;
    }
}
export default {
    namespaced:true,
    state,
    mutations
}
