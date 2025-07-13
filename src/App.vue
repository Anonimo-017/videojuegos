<template>

  <CompEncabezado />
  <br>
  <div class="body">
  <br>
<h2 class="gamer-title">El mejor lugar para noticias juegos y más del mundo gamer.</h2>
  <principal />
    <Ultimasnoticias />


</div>
</template>

<script>
import CompEncabezado from './components/conf/CompEncabezado.vue'; 
import principal from './components/principal.vue';
import Ultimasnoticias from './components/Ultimasnoticias.vue';

export default {
  name: 'App',
  components: {
    CompEncabezado,
    Ultimasnoticias
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.gamer-title {
  font-family: 'Orbitron';
  color: #0404b3; 
  text-shadow: 1px 1px 2px #000000; 
  animation: neon-glow 1.5s ease-in-out infinite alternate;
}

@keyframes neon-glow {
  from {
    text-shadow: 1px 1px 2px #000000;
  }
  to {
    text-shadow: 3px 3px 5px #9004ba;
  }
}
.body {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
