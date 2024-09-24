import { createApp } from 'vue'
import App from './App.vue'
import HomeComponent from './components/HomeComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import ServiceComponent from './components/ServiceComponent.vue'


import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {path:'/home', component:HomeComponent},
    {path:'/service', component:ServiceComponent},
    {path:'/contact', component:ContactComponent},
   
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});

const app = createApp(App)
app.use(router)
app.mount('#app')
