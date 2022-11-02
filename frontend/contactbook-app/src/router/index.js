import { createWebHistory, createRouter } from "vue-router";

import ContactBook from "../views/ContactBook.vue";
import NotFound from "../views/NotFound.vue";
import ContactEdit from "../views/ContactEdit.vue";
import ContactAdd from "../views/ContactAdd.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: NotFound,
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: ContactEdit,
        props: true,
    },
    {
        path: "/contacts/newcontact",
        name: "contact.add",
        component: ContactAdd,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
