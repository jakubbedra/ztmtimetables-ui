import { createApp } from 'vue'
import './style.css'
import router from "./plugins/router.js";
import App from './App.vue'
import {VueGoodTable} from "vue-good-table";

createApp(App)
    .use(router)
    .use(VueGoodTable)
    .mount('#app')
