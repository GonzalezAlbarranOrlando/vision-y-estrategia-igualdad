<template>
  <div class="container">
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