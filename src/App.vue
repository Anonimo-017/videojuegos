<template>
  <div id="app">
    <CompEncabezado />
    <div v-if="$route.path === '/'"> 
      <UltimasnoticiasComponent />
    </div>
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import CompEncabezado from './components/conf/CompEncabezado.vue';
import UltimasnoticiasComponent from './components/UltimasnoticiasComponent.vue'; 
import FooterComp from './components/conf/FooterComp.vue';

export default {
  name: 'App',
  components: {
    CompEncabezado,
    UltimasnoticiasComponent, 
    FooterComp,
  },
};
</script>

<style scoped>

@media (max-width: 768px) { 
  .news-grid {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
  }

  .news-card {
    width: 90%;     margin: 1rem 0; 
  }
}
</style>