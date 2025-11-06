import { createRouter, createWebHistory } from "vue-router";

import Meteo from "../views/Meteo.vue";
import APropos from "../views/APropos.vue";
import MentionsLegales from "../views/MentionsLegales.vue";
import NotFound from "../views/404.vue";

const routes = [
  { path: '/', name: 'Meteo', component: Meteo },
  {path: '/a-propos', name: 'APropos', component: APropos },
  {path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegales },
  {path: '/:catchAll(.*)*', name: 'not-found', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;