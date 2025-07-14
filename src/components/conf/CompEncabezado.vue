<template>
  <div class="menu">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Somos gamers</a>
        <ul class="nav nav-underline">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Ultimas noticias</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/xbox">Xbox</router-link> </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/playstation">Play station</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nintendo">Nintendo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pc">Juegos para pc</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>

</script>