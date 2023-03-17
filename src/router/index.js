import { createRouter, createWebHistory } from "vue-router";
import DatasetView from "../views/DatasetView.vue";
import EditView from "../views/EditView.vue";
import StationsView from "../views/StationsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DatasetView
  },
  {
    path: "/stations",
    name: "Stations",
    component: StationsView
  },
  {
    path: "/:topic",
    props: true,
    name: "Dataset Editor",
    component: EditView
  }
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  base: window.VUE_ADMIN_URL.replace(window.VUE_APP_URL, ''),
  routes
});

export default router
