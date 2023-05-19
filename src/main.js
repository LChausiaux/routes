import {createRouter, createWebHistory} from 'vue-router';
import {createApp} from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

import './assets/main.css';

const routes = [
    {path: '/', component: HelloWorld},
    {path: '/about', component: TheWelcome},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
