import {createApp} from 'vue'
import {createStore} from 'vuex'
import './style.css'
import router from "./plugins/router.js";
import App from './App.vue'

import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles 
import 'vue-good-table-next/dist/vue-good-table-next.css'

const store = createStore({
    state () {
        return {
            username: "",
            token: ""
        }
    },
    mutations: {
        saveUsername (state, username) {
            state.username = username;
        },
        saveToken (state, token) {
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
    .use(VueGoodTablePlugin)
    .mount('#app')
    
