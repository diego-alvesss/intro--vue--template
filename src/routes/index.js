import { createRouter, createWebHistory } from 'vue-router';
import PaiSlot from '../components/Slots/PaiSlot.vue';
import SlotNomeado from '../components/Slots/slot_nomeado.vue';

const routes = [
  { path: '/', component: PaiSlot },
  { path: '/slot-nomeado', component: SlotNomeado }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
