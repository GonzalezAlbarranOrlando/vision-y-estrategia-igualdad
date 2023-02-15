<template>
  <div class="container mb-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="" to="/"> Inicio </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Boletines</li>
      </ol>
    </nav>
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Boletines TEST</p>
    </div>
    <!--Animated title end-->
    <div class="row justify-content-center" id="boletines">
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/igualdad_salarial.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              IGUALDAD SALARIAL, UN PASO MÁS HACIA LA IGUALDAD DE GÉNERO
              SUSTANTIVA
            </h5>
            <p class="crop-text-4 general-text">
              “Cualquiera puede leer un discurso, pero sólo aquellos con
              voluntad pueden convertir las palabras en acciones”
              <br />
              En los últimos años se ha hecho un esfuerzo por establecer el
              mayor número de acciones que permitan erradicar la desigualdad de
              género, una problemática compleja que lleva siglos existiendo, sin
              embargo, el avance de los últimos diez años ha sido sorprendente
              en países donde la justicia laboral es una realidad. La
              actualización de la NMX 025 en Igualdad Laboral y No
              Discriminación en el año 2015 atestigua este hecho.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/IgualdadSalarial"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/justicia.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Legisladoras, pero, sobre todo, legislación con perspectiva de
              género
            </h5>
            <p class="crop-text-4 general-text">
              “La causa de la mujer es la del hombre: los dos se levantan o
              sucumben juntos”
              <br />
              <em> Alfred Tennyson, poeta ingles </em>
              <br />
              <b><em>Los propósitos:</em></b> El 18 de octubre de 2018, el pleno
              de la Cámara de Diputados aprobó que en la plataforma de
              comunicación, así como en la documentación y papelería oficial, se
              usara la leyenda conmemorativa: “LXIV Legislatura de la paridad de
              género”, para celebrar que luego de décadas de demandar un papel
              más activo de las mujeres en la toma de decisiones, por fin
              ocuparían el 48.2% de los escaños parlamentarios.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Legisladoras"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/comunicacion.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Tres tipos de lenguaje para la vida: el accesible, el incluyente y
              el no sexista
            </h5>
            <p class="crop-text-4 general-text">
              “En el lenguaje del Siglo XX, la llegada a la luna fue un gran
              paso para el hombre, en el lenguaje del Siglo XXI, fue un gran
              paso para la humanidad”.
              <br />
              Desmontar estereotipos en el lenguaje cotidiano significa
              desmontar el Siglo XX, para avanzar, como en todos los aspectos de
              nuestra vida, con nuevas maneras de comunicarnos. De la misma
              manera como han evolucionado las telecomunicaciones y las nuevas
              técnicas para mejorar la salud, LA EVOLUCIÓN DEL LENGUAJE ES
              EQUIPARABLE A LA EVOLUCIÓN DE NUESTRA CULTURA.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Tres_tipos_de_lenguaje"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/braille.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Lenguaje incluyente y lenguaje no sexista, ¿Son lo mismo?
            </h5>
            <p class="crop-text-4 general-text">
              <em>
                “Un señor de Guerrero contó que al llegar a Cuernavaca le fue
                muy difícil encontrar trabajo, ya que no tenía sus papeles y le
                costaba mucho trabajo hacer los trámites debido a su apariencia
                y porque hablaba lengua indígena”. Prontuario ENADIS 2017.
              </em>
              <br />
              El origen de su uso: somos una sociedad que discrimina.
              <br />
              En México, seis de cada diez personas de 18 años y más consideran
              que la mayoría de las y los jóvenes son irresponsables (60.3%),
              casi la mitad piensa que mientras más religiones se permitan en el
              país, habrá más conflictos sociales (44.7%), cuatro de cada diez
              están de acuerdo con que los pobres se esfuerzan poco por salir de
              su pobreza (39.1%), una de cada tres personas piensa que convivir
              con personas con sida o VIH siempre es un riesgo (35.2%) y una
              proporción similar opina que la pobreza de las personas indígenas
              se debe a su cultura (34.1%). Asimismo, una de cada cuatro
              personas considera que las personas con discapacidad son de poca
              ayuda en el trabajo (24.5%).
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Lenguaje_incluyente"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/madre.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">Mamás sin trabajo</h5>
            <p class="crop-text-4 general-text">
              En la vida cotidiana, cuando se le otorga valor al trabajo
              realizado por los hombres en el mundo laboral, y se le niega valor
              al que es efectuado en casa tradicionalmente por las mujeres; de
              forma automática se les excluye de cualquier reconocimiento por su
              contribución al bienestar familiar, y, por ende, de cualquier
              retribución.
              <br />
              Según datos del Banco Mundial, antes de la pandemia la
              participación laboral de las mujeres en México fue tan solo de 45
              por ciento, comparado con 77 por ciento para los hombres,
              generándose una brecha de 32 puntos porcentuales. De los países de
              la Organización para la Cooperación y el Desarrollo Económico
              (OCDE), sólo Turquía e Italia tienen menor participación laboral
              de la mujer, y en América Latina y el Caribe, México está solo por
              encima de Guatemala.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Mam%C3%A1s_sin_trabajo"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/norma_m.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Norma Mexicana NMX-R-SCFI-2015; herramienta de competitividad
              empresarial e institucional.
            </h5>
            <p class="crop-text-4 general-text">
              El instituto Nacional de las Mujeres (Inmujeres) define la
              <b
                >Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No
                Discriminación</b
              >
              como un mecanismo de adopción voluntaria para reconocer a los
              centros de trabajo que cuentan con prácticas en materia de
              igualdad laboral y no discriminación, que busca favorecer el
              desarrollo integral de las y los trabajadores.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Norma_Mexicana"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/accessibility.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Planes de accesibilidad universal para centros de trabajo del
              siglo XXI
            </h5>
            <p class="crop-text-4 general-text">
              <em
                >"La única discapacidad es cuando la gente no puede ver el
                potencial humano." Henry Viscandi</em
              >
              <br />
              La accesibilidad universal es la cualidad que tienen o se confiere
              a los entornos, en los que se puede disfrutar de bienes o
              servicios, según el contexto dado, con el fin de hacerlos
              adecuados a las capacidades, necesidades y expectativas de todos
              sus potenciales usuarios independientemente de su edad, sexo,
              origen cultural o grado de capacidad.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Planes_de_accesibilidad"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/startup.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              La igualdad sustantiva de género empieza en el diseño de políticas
              públicas, no el discurso.
            </h5>
            <p class="crop-text-4 general-text">
              En 2016, el Instituto Nacional de Estadística y Geografía (INEGI)
              realizó la encuesta “Mujeres y hombres en México”, la cual reflejó
              que 8 de cada 10 hombres son económicamente activos, mientras que
              sólo 4 mujeres de cada 10 lo son. Por otra parte, de acuerdo con
              un reporte del Instituto Mexicano del Seguro Social (IMSS), en
              2019 los hombres percibían un salario promedio diario de $398, $52
              pesos más que las mujeres. Estos datos permiten tener un punto de
              referencia para entender la brecha de género que existe en México,
              que, dadas las condiciones actuales, se va ampliando día con día,
              y cada vez resulta más complicado mejorar sus condiciones de vida.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/La_igualdad_sustantiva"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 py-3">
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top"
              src="@/assets/img/boletines/savings.jpeg"
              alt="..."
            />
            <h5 class="my-h5 text-truncate">
              Presupuesto público y derechos humanos de grupos vulnerables
            </h5>
            <p class="crop-text-4 general-text">
              Levántate, en pie, defiende tus derechos. Levántate, en pie, no
              dejes de luchar. Bob Marley, cantante jamaicano.
              <br />
              <b>De acuerdo con el último informe del Coneval</b>, 46.9% de las
              personas con discapacidad presentaban rezago educativo, mientras
              que 14.5% de la población sin discapacidad se encontraba en la
              misma situación, aunado a esto, 41.2% de las personas con
              discapacidad no contaba con acceso a la seguridad social y 27.8%
              presentó carencia por acceso a la alimentación. El diagnóstico es
              simple, aunque cada año crecen los recursos destinados a programas
              sociales, su diseño no impacta en las condiciones de vida de los
              grupos vulnerables.
            </p>
            <router-link
              aria-current="page"
              to="/boletines/Presupuesto_p%C3%BAblico"
              class="btn btn-light btn-sm"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoletinesHome",
};
</script>

<style>
</style>