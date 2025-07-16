<template>
  <div id="app">
    <CompEncabezado />
    <div v-if="$route.path === '/'">  <!-- Mostrar solo en la ruta '/' -->
      <UltimasnoticiasComponent />
    </div>
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import CompEncabezado from './components/conf/CompEncabezado.vue';
import UltimasnoticiasComponent from './components/UltimasnoticiasComponent.vue'; // Importación agregada
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
/* Estilos existentes... */

@media (max-width: 768px) { /* Ajusta este valor según tu necesidad */
  .news-grid {
    display: flex; /* Mantenemos flexbox para la disposición vertical */
    flex-direction: column; /*  Coloca las tarjetas una encima de la otra */
    align-items: center; /* Centra las tarjetas horizontalmente */
  }

  .news-card {
    width: 90%; /* Ajusta el ancho para que quepa en la pantalla */
    margin: 1rem 0; /* Ajusta los márgenes para un mejor espaciado vertical */
  }
}
</style>