<template>
  <div class="container-fluid">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Animated title</p>
    </div>
    <!--Animated title end-->
    <!--Select option-->
    <select
      class="form-select form-select-lg"
      aria-label=".form-select-lg example"
      v-model="selected_opt"
    >
      <option selected value="opt1">opt1</option>
      <option value="opt2">opt2</option>
      <option value="opt3">opt3</option>
      <option value="opt4">opt4</option>
    </select>
    <!--Select option end-->
    <!--Heading 1-->
    <h1 class="my-h1">Heading 1</h1>
    <!--General text-->
    <div class="general-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      <br />
      1234567890
    </div>
    <!--General text end-->
    <!--Heading 2-->
    <h2 class="my-h2">Heading 2</h2>
    <!--General text-->
    <div class="general-text">
      <ul>
        <li>El eficiente diseño de los programas presupuestarios.</li>
        <li>La efectividad de los programas presupuestarios.</li>
        <li>Aspectos susceptibles de Mejora.</li>
        <li>Hallazgos.</li>
      </ul>
    </div>
    <!--General text end-->
    <br />
    <!--download here-->
    <a class="download-here" href="/pdf/example.pdf" target="_blank"> aquí </a>
    <!--download here end-->
    <br />

    <!--download text-->
    <div class="mb-3" style="text-align: center">
      <a class="download-text" href="/pdf/example.pdf" target="_blank">
        Download text
        <i class="fa fa-cloud-download download-text"></i>
      </a>
    </div>
    <!--download text end-->

    <!--Accordion Boletines-->
    <div class="accordion" id="accordionBoletines">
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading1">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="false"
            aria-controls="collapse1"
          >
            <b>title1</b>
          </button>
        </h2>
        <div
          id="collapse1"
          class="accordion-collapse collapse"
          aria-labelledby="heading1"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text1</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading2">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            <b>title2</b>
          </button>
        </h2>
        <div
          id="collapse2"
          class="accordion-collapse collapse"
          aria-labelledby="heading2"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text2</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading3">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-expanded="false"
            aria-controls="collapse3"
          >
            <b>title3</b>
          </button>
        </h2>
        <div
          id="collapse3"
          class="accordion-collapse collapse"
          aria-labelledby="heading3"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text3</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading4">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-expanded="false"
            aria-controls="collapse4"
          >
            <b>title4</b>
          </button>
        </h2>
        <div
          id="collapse4"
          class="accordion-collapse collapse"
          aria-labelledby="heading4"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text4</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading5">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-expanded="false"
            aria-controls="collapse5"
          >
            <b>title5</b>
          </button>
        </h2>
        <div
          id="collapse5"
          class="accordion-collapse collapse"
          aria-labelledby="heading5"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text5</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading6">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse6"
            aria-expanded="false"
            aria-controls="collapse6"
          >
            <b>title6</b>
          </button>
        </h2>
        <div
          id="collapse6"
          class="accordion-collapse collapse"
          aria-labelledby="heading6"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text6</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading7">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse7"
            aria-expanded="false"
            aria-controls="collapse7"
          >
            <b>title7</b>
          </button>
        </h2>
        <div
          id="collapse7"
          class="accordion-collapse collapse"
          aria-labelledby="heading7"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text7</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading8">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-expanded="false"
            aria-controls="collapse8"
          >
            <b>title8</b>
          </button>
        </h2>
        <div
          id="collapse8"
          class="accordion-collapse collapse"
          aria-labelledby="heading8"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text8</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading9">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse9"
            aria-expanded="false"
            aria-controls="collapse9"
          >
            <b>title9</b>
          </button>
        </h2>
        <div
          id="collapse9"
          class="accordion-collapse collapse"
          aria-labelledby="heading9"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text9</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading10">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse10"
            aria-expanded="false"
            aria-controls="collapse10"
          >
            <b>title10</b>
          </button>
        </h2>
        <div
          id="collapse10"
          class="accordion-collapse collapse"
          aria-labelledby="heading10"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">text10</div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <b>titleOne</b>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionBoletines"
        >
          <div class="accordion-body">
            <div class="general-text">textOne</div>
          </div>
        </div>
      </div>
    </div>
    <!--Accordion Boletines end-->
  </div>
</template>
      
  <script>
export default {
  name: "TemplatePage",
  data() {
    return {
      selected_opt: "opt1",
    };
  },
};
</script>
      
  <style>
</style>