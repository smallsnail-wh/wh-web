import Vuex from 'vuex'
import Vue from 'vue'
import UsersModule from './modules/UsersModule';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        users:UsersModule
    },
    state: {
        todos: [
          { id: 1, text: '...', done: true },
          { id: 2, text: '...', done: false }
        ],
        count: 0
    },
    getters: {
        doneTodos: state =>{
            return state;
        },
        doneTodosCount: (state, getters) => {
            return getters;
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        add(state){
            state.count++;
        },
        increment(state,number){
            state.count+=number;
        }
    },
    actions: {
        increment(context){
            context.commit('add');
        }
    }
})