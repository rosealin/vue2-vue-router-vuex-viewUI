import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const commonRoutes = [
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" ,roles:['admin','user']},
    component: () => import("../components/Login.vue")
  },
  {
    path: "/home",
    name: "home",
    meta:{roles:['admin']},
    component: () => import("../views/Home.vue")
  },
  {
    path: "/404",
    name: "404",
    meta:{roles:['user']},
    component: () => import("../components/404.vue")
  },
  {path:'/',redirect:'./home'}
];

const createRouter = () =>
  new Router({
    routes: commonRoutes
  });

const router = createRouter();

export default router