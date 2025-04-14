import Home from "@/Component/Home.vue";
import TpToDoList from "@/Component/TpToDoList.vue";
import TutoSyntaxe from "@/Component/TutoSyntaxe.vue";
import { createRouter, createWebHistory } from "vue-router";




const routes = [
    { path: '/',component: Home },
    { path: '/tuto-syntaxe',component: TutoSyntaxe },
    { path: '/tp-todolist',component: TpToDoList },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;