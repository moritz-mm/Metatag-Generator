import { createRouter, createWebHistory } from 'vue-router';
import { isLocalSupported, setLocal } from '../modules/Localizer';
import Home from '../components/Home.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:local?",
            component: Home,
            beforeEnter: async (to) => {
                const requestedLocal = to.params.local as string;
                if (!isLocalSupported(requestedLocal)) {
                    return "/de";
                }
                await setLocal(requestedLocal);
            }
        }
    ]
});