import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Trello from "../views/Trello.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/trello",
    name: "Trello",
    component: Trello
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
