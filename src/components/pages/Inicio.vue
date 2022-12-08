<template>
  <div class="container py-5">
    <div
      id="carouselExampleIndicators"
      class="carousel slide carousel-dark my-shadow"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <router-link to="/contacto">
            <img
              src="https://picsum.photos/id/302/600/200"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/contacto">
            <img
              src="https://picsum.photos/id/404/600/200"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/contacto">
            <img
              src="https://picsum.photos/id/507/600/200"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InicioPage",
};
</script>

<style>
</style>