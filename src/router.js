import { createWebHashHistory, createRouter } from 'vue-router'


const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            redirect: "/maps",

        },
        {
            path: "/maps",
            component: () => import("./pages/Maps.vue")
        },
        {
            path: "/mods",
            component: () => import("./pages/Mods.vue")
        },
        {
            path: "/settings",
            component: () => import("./pages/Settings.vue")
        }
    ]
})

export default router