import {createApp} from 'vue'
import {createStore} from 'vuex'
import './style.css'
import router from "./plugins/router.js";
import App from './App.vue'
import {VueGoodTable} from "vue-good-table";

const store = createStore({
    state () {
        return {
            username: "",
            token: ""
        }
    },
    mutations: {
        login (state, username, token) {
            state.username = username;
            state.token = token;
        },
        logout (state) {
            state.username = "";
            state.token = "";
        }
    }
})

createApp(App)
    .use(router)
    .use(store)
    .use(VueGoodTable)
    .mount('#app')
