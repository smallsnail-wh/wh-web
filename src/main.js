import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import UsersModule from './store/modules/UsersModule';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'bearer '+ localStorage.getItem("currentUser_token");
axios.defaults.baseURL = '/wh';

/*axios.interceptors.request.use(
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = 'bearer '+ localStorage.getItem("currentUser_token");
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });*/
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit('loginOut');
                    router.replace({
                        path: '/',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)  // 返回接口返回的错误信息
    });

Vue.use(VueAxios,axios);

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);



// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    let token = window.localStorage.getItem('currentUser_token')
    if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
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
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});