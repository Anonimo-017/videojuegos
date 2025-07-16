<template>
    <div class="img">
    <center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwJ3wVghWr2zVdmsYBz4yhnhFO1s6iv9WXGJrG54KkGKX_vi_SNctmCcHh0jlYk3eEf4&usqp=CAU" class="img-fluid"></center>
    </div>
  <div class="conteiner">

  
    <table class="table">
  <thead>
    <tr>
      <th scope="col">
       
      </th>
      <th scope="col">
        
      </th>
      <th scope="col">
       
      </th>
    </tr>
  </thead>

</table>


<div class="news-grid">
  <div class="news-card">
 <div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00YGMit22NWXb0jbeDNGyrSyrNk7Y8vUED4sUQLRU_zDnM6PNhSZeF3A_Iez3jW_CdHQ&usqp=CAU" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">GTA V</h5>
    <p class="card-text">Conoce las historias entrelazadas de los personajes de Franklin, Michael y Trevor en el extenso mundo abierto de Los Santos y Blaine County, ahora disponible para PS5 con nuevas e impresionantes imágenes, carga más rápida, gatillos adaptativos, respuesta háptica, audio 3D Tempest y más.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Creditos</li>
    <li class="list-group-item">Rock star games</li>
  </ul>
  <div class="card-body">
    <a href="https://www.playstation.com/es-mx/games/grand-theft-auto-v/" class="card-link">COMPRAR JUEGO</a>
    <a href="https://www.youtube.com/watch?v=hBvMSP7cI-Q" class="card-link">VER TRAILER</a>
  </div>
</div>
  </div>
  <div class="news-card">
 <div class="card" style="width: 18rem;">
  <img src="https://image.api.playstation.com/vulcan/ap/rnd/202503/2520/f9bf56d8e1489be01e98aaf5040a54ad4e7d7af183901f17.jpg?w=620&thumb=false" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">EA Sports FC 25</h5>
    <p class="card-text">Eleva a tu equipo al nivel de los mejores del mundo con la inteligencia futbolística de FC. Una renovación de las bases tácticas del juego ofrece un gran control estratégico y un movimiento del equipo aún más realista</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Creditos</li>
    <li class="list-group-item">Ultimate Team</li>
    <li class="list-group-item">Fifa sport</li>
  </ul>
  <div class="card-body">
    <a href="https://www.playstation.com/es-mx/games/ea-sports-fc/" class="card-link">COMPRAR JUEGO</a>
    <a href="https://www.youtube.com/watch?v=TXSFuUXPtP4" class="card-link">VER TRAILER</a>
  </div>
</div>
  </div>
  <div class="news-card">
<div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4_AQXCHdWqBEW6bJCm00NM2Y0JK6HdkK5Q&s" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Call of Duty: Black Ops 6</h5>
    <p class="card-text">Una narrativa alucinante de los enfrentamientos  del sello distintivo de Black Ops, como podrás comprobar en la campaña cinemática para un jugador, en la increíble experiencia multijugador y en el épico regreso de Zombis por rondas.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">CREDITOS</li>
    <li class="list-group-item">Infinity Ward </li>
    <li class="list-group-item">Act Vision</li>
  </ul>
  <div class="card-body">
    <a href="https://www.playstation.com/es-mx/games/call-of-duty-black-ops-6/" class="card-link">COMPRAR JUEGO</a>
    <a href="https://www.youtube.com/watch?v=GD-kTwaQII8" class="card-link">VER TRAILER</a>
  </div>
</div>
  <!-- ... más tarjetas -->
</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'PlaystationGames', 
};
</script>

<style>
.conteiner{
  border: 1px solid #000; 
  border-radius: 5px;
  padding-left: 17%;
  padding-right: 17%;
  padding-top: 10px;;        
  background-color: #006FCD ; 
}
.img{
    border-width: 35%;
    align-items: center;
}

.news-grid {
  display: flex;
  flex-wrap: wrap; /* Permite que las tarjetas se envuelvan a la siguiente línea */
  justify-content: center; /* Centra las tarjetas horizontalmente */
}

.news-card {
  width: 300px; /* Ancho base para pantallas grandes */
  margin: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .news-grid {
    flex-direction: column; /* Disposición vertical en pantallas pequeñas */
    align-items: center;
  }
  .news-card {
    width: 90%; /* Ancho para pantallas pequeñas */
    margin: 1rem 0;
  }
}
</style>


