import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Shop from './components/Shop.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Cart from './components/Cart.vue'

import store from './store';

import PriemVue from 'primevue/config'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import './assets/app.css';
import 'primevue/resources/themes/aura-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/shop', name: 'Shop', component: Shop },
        { path: '/about', name: 'About', component: About },
        { path: '/Cart', name: 'Cart', component: Cart }
    ]
});

const app = createApp(App);
app.use(router);
app.use(PriemVue);
app.use(ToastService);
app.use(store);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.mount('#app')