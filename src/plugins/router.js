import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', name: 'home', component: () => import('../components/Home.vue')},
    {path: '/about', name: 'about', component: () => import('../components/About.vue')},
    {path: '/login', name: 'login', component: () => import('../components/Login.vue')},
    {path: '/bus-stops', name: 'bus-stops', component: () => import('../components/BusStops.vue')},
    {path: '/my-stops', name: 'my-stops', component: () => import('../components/MyStops.vue')},
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router