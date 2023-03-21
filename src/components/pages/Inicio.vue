<template>
  <div class="container-fluid">
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
          <img
            src="@/assets/img/carrusel/carrusel-centro-de-trabajo-certificado.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/NMX_025">
            <img
              src="@/assets/img/carrusel/B-025.jpg"
              class="d-block w-100"
              alt="..."
            />
          </router-link>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <router-link to="/Perspectiva_de_g%C3%A9nero">
            <img
              src="@/assets/img/carrusel/B-perspectiva.jpg"
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
    <h1 class="my-h1 mt-5">Servicios</h1>
    <div class="row justify-content-center" id="servicios">
      <div class="col-sm-6 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link to="/NMX_025" style="text-decoration: none">
            <img src="@/assets/img/inicio/I-025.jpg" class="w-100" alt="..." />
            <div
              class="
                card-header
                table-title
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <h5 class="my-3">Norma Mexicana NMX 025</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
      <div class="col-sm-6 py-2">
        <!--card servicios-->
        <div class="card">
          <router-link
            to="/Perspectiva_de_g%C3%A9nero"
            style="text-decoration: none"
          >
            <img
              src="@/assets/img/inicio/I-perspectiva.jpg"
              class="w-100"
              alt="..."
            />
            <div
              class="
                card-header
                table-title
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <h5 class="my-3">Perspectiva de Género</h5>
            </div>
          </router-link>
        </div>
        <!--card servicios end-->
      </div>
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