<template>
  <nav class="navbar navbar-expand-lg">
    <div
      class="container-fluid px-4 pb-3"
      style="
        border-style: none none solid none;
        border-width: 1px;
        color: lightgray;
      "
    >
      <!--Logo-->
      <router-link aria-current="page" to="/">
        <img
          src="@/assets/img/logo-vye.png"
          width="180"
          alt="logo"
        />
      </router-link>
      <!--Navbar toggler-->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--Navbar-->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item px-3">
            <router-link class="nav-link" to="/nosotros">
              <b>Nosotros</b>
            </router-link>
          </li>
          <li class="nav-item px-3 dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <b>Servicios</b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/NMX_025">
                  <p>Norma Mexicana NMX 025</p>
                </router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/Perspectiva_de_g%C3%A9nero"
                >
                  <p>Perspectiva de Género</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item px-3">
            <router-link class="nav-link" to="/boletines">
              <b>Boletines</b>
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link class="nav-link" to="/contacto">
              <b>Contacto</b>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style>
</style>