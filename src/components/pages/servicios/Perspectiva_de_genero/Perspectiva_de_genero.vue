<template>
  <div class="container-fluid">
    <!--sidenav -->
    <div
      id="mySidenav"
      class="sidenav"
      style="width: 300px"
      v-if="boolean_sidenav"
    >
      <button
        type="button"
        class="btn-close closebtn"
        aria-label="Close"
        v-on:click="boolean_sidenav = false"
      ></button>
      <div class="sidenav-blue">
        <b>Perspectiva de Género</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero = 'En que consiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero = 'Servicio de asesoramiento';
          boolean_sidenav = false;
        "
      >
        Servicio de asesoramiento
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero = 'Consultoría';
          boolean_sidenav = false;
        "
      >
        Consultoría
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero = 'Experiencia';
          boolean_sidenav = false;
        "
      >
        Experiencia
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero = 'Transparencia';
          boolean_sidenav = false;
        "
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero =
            'Escuela de Liderazgo Adolescente';
          boolean_sidenav = false;
        "
      >
        Escuela de Liderazgo Adolescente
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero =
            'Empoderamiento de las mujeres a través del deporte';
          boolean_sidenav = false;
        "
      >
        Empoderamiento de las mujeres a través del deporte
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero =
            'Asesoría y certificación de Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación';
          boolean_sidenav = false;
        "
      >
        Asesoría y certificación de Norma Mexicana NMX-R-025-SCFI-2015 en
        Igualdad Laboral y No Discriminación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_Perspectiva_de_genero =
            'Perspectiva de Género y Derechos Humanos de la Mujer y el Hombre';
          boolean_sidenav = false;
        "
      >
        Perspectiva de Género y Derechos Humanos de la Mujer y el Hombre
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">
        Perspectiva de Género
      </p>
    </div>
    <!--Animated title end-->
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
    <div
      class="my-5"
      v-if="selected_opt_Perspectiva_de_genero === 'En que consiste'"
    >
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_Perspectiva_de_genero === 'Servicio de asesoramiento'"
    >
      <ServicioDeAsesoramiento />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_Perspectiva_de_genero === 'Consultoría'"
    >
      <Consultoria />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_Perspectiva_de_genero === 'Experiencia'"
    >
      <Experiencia />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_Perspectiva_de_genero === 'Transparencia'"
    >
      <Transparencia />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_Perspectiva_de_genero ===
        'Escuela de Liderazgo Adolescente'
      "
    >
      <EscuelaDeLiderazgoAdolescente />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_Perspectiva_de_genero ===
        'Empoderamiento de las mujeres a través del deporte'
      "
    >
      <EmpoderamientoDeLasMujeres />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_Perspectiva_de_genero ===
        'Asesoría y certificación de Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación'
      "
    >
      <AsesoríayCertificaciónDeNormaMexicanaNMX025 />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_Perspectiva_de_genero ===
        'Perspectiva de Género y Derechos Humanos de la Mujer y el Hombre'
      "
    >
      <PerspectivaDeGéneroyDerechosHumanos />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeAsesoramiento from "./ServicioDeAsesoramiento.vue";
import Consultoria from "./Consultoria.vue";
import Experiencia from "./Experiencia.vue";
import Transparencia from "./Transparencia.vue";
import EscuelaDeLiderazgoAdolescente from "./capacitacion/Escuela de Liderazgo Adolescente.vue";
import EmpoderamientoDeLasMujeres from "./capacitacion/Empoderamiento de las mujeres a través del deporte.vue";
import AsesoríayCertificaciónDeNormaMexicanaNMX025 from "./capacitacion/Asesoría y certificación de Norma Mexicana NMX-R-025-SCFI-2015.vue";
import PerspectivaDeGéneroyDerechosHumanos from "./capacitacion/Perspectiva de Género y Derechos Humanos de la Mujer y el Hombre.vue";

export default {
  name: "Perspectiva_de_genero",
  data() {
    return {
      selected_opt_Perspectiva_de_genero: "En que consiste",
      boolean_sidenav: false,
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeAsesoramiento,
    Consultoria,
    Experiencia,
    Transparencia,
    EscuelaDeLiderazgoAdolescente,
    EmpoderamientoDeLasMujeres,
    AsesoríayCertificaciónDeNormaMexicanaNMX025,
    PerspectivaDeGéneroyDerechosHumanos,
  },
};
</script>
  
<style>
</style>