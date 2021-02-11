import { createApp } from 'vue';
import Router from './modules/Router';
import App from './App.vue';

createApp(App).use(Router).mount('#app');