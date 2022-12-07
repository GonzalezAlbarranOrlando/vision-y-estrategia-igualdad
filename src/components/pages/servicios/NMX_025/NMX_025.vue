<template>
  <div class="container">
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
        <b>NMX-R-025-SCFI-2015</b>
      </div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NMX_R_025_SCFI_2015 = 'En que consiste';
          boolean_sidenav = false;
        "
      >
        En que consiste
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NMX_R_025_SCFI_2015 = 'Servicio de implantación';
          boolean_sidenav = false;
        "
      >
        Servicio de implantación
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NMX_R_025_SCFI_2015 = 'Transparencia';
          boolean_sidenav = false;
        "
      >
        Transparencia
      </button>
      <div class="sidenav-blue"><b>Capacitación:</b></div>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NMX_R_025_SCFI_2015 =
            'Implantación de Norma Mexicana NMX-R-025-SCFI-2015 en centros de trabajo';
          boolean_sidenav = false;
        "
      >
        Implantación de Norma Mexicana NMX-R-025-SCFI-2015 en centros de trabajo
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NMX_R_025_SCFI_2015 =
            'Herramientas para la mejora continua del centro de trabajo una vez certificado en Norma Mexicana NMX-R-025-SCFI-2015';
          boolean_sidenav = false;
        "
      >
        Herramientas para la mejora continua del centro de trabajo una vez
        certificado en Norma Mexicana NMX-R-025-SCFI-2015
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NMX_R_025_SCFI_2015 = 'Formación del equipo auditor';
          boolean_sidenav = false;
        "
      >
        Formación del equipo auditor
      </button>
      <button
        class="text-truncate"
        v-on:click="
          selected_opt_NMX_R_025_SCFI_2015 =
            'Inducción a la Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación';
          boolean_sidenav = false;
        "
      >
        Inducción a la Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y
        No Discriminación
      </button>
    </div>
    <!--sidenav end-->
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">NMX-R-025-SCFI-2015</p>
    </div>
    <!--Animated title end-->
    <h1 class="my-h1">
      Norma Mexicana en Igualdad Laboral y No Discriminación
    </h1>
    <span
      style="font-size: 30px; cursor: pointer; color: gray; font-weight: bold"
      v-on:click="boolean_sidenav = true"
      >&#9776; Menú de opciones</span
    >
    <div
      class="my-5"
      v-if="selected_opt_NMX_R_025_SCFI_2015 === 'En que consiste'"
    >
      <EnQueConsiste />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NMX_R_025_SCFI_2015 === 'Servicio de implantación'"
    >
      <ServicioDeImplantacion />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NMX_R_025_SCFI_2015 === 'Transparencia'"
    >
      <Transparencia />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_NMX_R_025_SCFI_2015 ===
        'Implantación de Norma Mexicana NMX-R-025-SCFI-2015 en centros de trabajo'
      "
    >
      <ImplantacióndeNormaMexicana />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_NMX_R_025_SCFI_2015 ===
        'Herramientas para la mejora continua del centro de trabajo una vez certificado en Norma Mexicana NMX-R-025-SCFI-2015'
      "
    >
      <Herramientasparalamejoracontinua />
    </div>
    <div
      class="my-5"
      v-if="selected_opt_NMX_R_025_SCFI_2015 === 'Formación del equipo auditor'"
    >
      <Formacióndelequipoauditor />
    </div>
    <div
      class="my-5"
      v-if="
        selected_opt_NMX_R_025_SCFI_2015 ===
        'Inducción a la Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación'
      "
    >
      <InducciónalaNormaMexicana />
    </div>
  </div>
</template>
  
<script>
import EnQueConsiste from "./EnQueConsiste.vue";
import ServicioDeImplantacion from "./ServicioDeImplantacion.vue";
import Transparencia from "./Transparencia.vue";
import ImplantacióndeNormaMexicana from "./capacitacion/Implantación de Norma Mexicana.vue";
import Herramientasparalamejoracontinua from "./capacitacion/Herramientas para la mejora continua.vue";
import Formacióndelequipoauditor from "./capacitacion/Formación del equipo auditor.vue";
import InducciónalaNormaMexicana from "./capacitacion/Inducción a la Norma Mexicana.vue";

export default {
  name: "NMX_R_025_SCFI_2015",
  data() {
    return {
      selected_opt_NMX_R_025_SCFI_2015: "En que consiste",
      boolean_sidenav: false,
    };
  },
  components: {
    EnQueConsiste,
    ServicioDeImplantacion,
    Transparencia,
    ImplantacióndeNormaMexicana,
    Herramientasparalamejoracontinua,
    Formacióndelequipoauditor,
    InducciónalaNormaMexicana,
  },
};
</script>
  
<style>
</style>