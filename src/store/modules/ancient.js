
const state = {
    count:0,
    todos:[
        {id:1,name:'张三1'},
        {id:2,name:'张三2'},
        {id:3,name:'张三3'}
    ]
}
const mutations = {
    add:function(state,num){
        state.count+=num;
    }
}
const actions = {
    add_ac:function(context,num){
        context.commit('add',num)
    },
    list:({commit,state},num)=>{
        setTimeout(() => {
            commit('add',num)
        }, 1000);
    }
}
const getters = {
    getCount:(state) => (id) => {
        const aa= state.todos.find(todo => todo.id === id)
        if(aa){
            return aa;
        } else {
            state.count = 1;
            return state.todos.find(todo => todo.id === 1)
        }
      }
}
export default {
    namespaced:true, // 设置后，commit、mutation等操作需要加上store的模块名，如：this.$store.commit("ancient/add",num)
    state,
    actions,
    getters,
    mutations
}
