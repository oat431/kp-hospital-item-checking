import { createRouter, createWebHistory } from "vue-router"
import MedicinePage from "../page/MedicinePage.vue";
import Home from "../page/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/med",
        name: "medicine",
        component: MedicinePage
    },
    {
        path: "/tool",
        name: "tool",
        component: MedicinePage
    },
    {
        path: "/adult-emer",
        name: "AdultEmergency",
        component: MedicinePage
    },
    {
        path: "/kid-emer",
        name: "ChildrenEmergency",
        component: MedicinePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;