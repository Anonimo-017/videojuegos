import { createRouter, createWebHistory } from 'vue-router';
import XboxGames from '../components/Juegos/XboxGames.vue';
import PcGames from '../components/Juegos/PcGames.vue';
import NintendoGames from '../components/Juegos/NintendoGames.vue';
import PlaystationGames from '../components/Juegos/PlaystationGames.vue';

const routes = [
  { path: '/xbox', name: 'XboxGames', component: XboxGames },
  { path: '/playstation', name: 'PlaystationGames', component: PlaystationGames },
  { path: '/nintendo', name: 'NintendoGames', component: NintendoGames },
  { path: '/pc', name: 'PcGames', component: PcGames },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
