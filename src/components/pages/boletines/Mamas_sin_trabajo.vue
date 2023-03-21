<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="" to="/">Inicio</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link class="" to="/boletines">Boletines</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Mamás sin trabajo
        </li>
      </ol>
    </nav>
    <h1 class="my-h1">Mamás sin trabajo</h1>
    <div class="row">
      <div class="col-sm-4 text-center">
        <img
          src="@/assets/img/boletines/madre.jpeg"
          class="w-100  my-3"
          alt="..."
        />
      </div>
      <div class="col-sm-8 general-text">
        <p>
          <b>
            En la vida cotidiana, cuando se le otorga valor al trabajo realizado
            por los hombres en el mundo laboral, y se le niega valor al que es
            efectuado en casa tradicionalmente por las mujeres; de forma
            automática se les excluye de cualquier reconocimiento por su
            contribución al bienestar familiar, y, por ende, de cualquier
            retribución.
          </b>
        </p>
        <p>
          Según datos del Banco Mundial, antes de la pandemia la participación
          laboral de las mujeres en México fue tan solo de 45 por ciento,
          comparado con 77 por ciento para los hombres, generándose una brecha
          de 32 puntos porcentuales. De los países de la Organización para la
          Cooperación y el Desarrollo Económico (OCDE), sólo Turquía e Italia
          tienen menor participación laboral de la mujer, y en América Latina y
          el Caribe, México está solo por encima de Guatemala.
        </p>
        <p>
          Un artículo reciente de Fátima Masse, quien se desempeña como
          Directora de Sociedad Incluyente en el IMCO, señala que de 37.4
          millones de mujeres que tienen hijos, solo 43% tienen un trabajo
          remunerado (16 millones). Esto implica que no es tan común que las
          mamás tengan un empleo. La situación se complica aún más si agregamos
          un componente de discriminación al problema, porque solo el 28% de las
          mamás indígenas tienen un trabajo remunerado, por lo que, para mejorar
          sus ingresos, combinan la crianza de los hijos con múltiples
          actividades que son parte de una economía de autoconsumo, como la cría
          de animales o el cultivo de productos.
        </p>
        <p>
          La única luz en el camino para incorporar a las mamás al sector
          productivo radica en que los centros de trabajo adopten la Norma
          Mexicana en Igualdad Laboral y No Discriminación (NMX 025), cuya
          desventaja es que se trata de una norma voluntaria, por lo que aún no
          se llega a los 600 centros de trabajo operándola en todo el país.
        </p>
        <p>
          ¿Cómo ayudan a las mamás trabajadoras los centros de trabajo que
          tienen implantada la NMX 025?
        </p>
        <ol>
          <li>
            Se elimina del proceso de contratación cualquier pregunta sobre si
            la candidata está embarazada.
          </li>
          <li>Todos los centros de trabajo cuentan con lactario.</li>
          <li>
            Operan un programa de corresponsabilidad entre la vida laboral,
            familiar y personal, que permite contar con horarios flexibles de
            trabajo para atender a los hijos.
          </li>
          <li>
            Los centros de trabajo cuentan con convenio de guardería con
            instituciones privadas, adicionales a las del ISSSTE e IMSS.
          </li>
          <li>
            Existe el teletrabajo y los horarios híbridos a partir de las
            necesidades de las mamás trabajadoras.
          </li>
          <li>Hay permisos para el cuidado de menores.</li>
          <li>
            Se establece una licencia de paternidad superior en al menos un día
            a la que señala el marco normativo oficial.
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyName",
};
</script>    
<style>
</style>