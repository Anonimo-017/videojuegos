<template>
  <div id="app">
    <CompEncabezado />
    <Ultimasnoticias v-if="$route.path === '/'"/> 
    <router-view />
  </div>
</template>

<script>
import CompEncabezado from './components/conf/CompEncabezado.vue';
import Ultimasnoticias from './components/UltimasnoticiasComponent.vue';

export default {
  name: 'App',
  components: {
    CompEncabezado,
    Ultimasnoticias,
  },
};
</script>