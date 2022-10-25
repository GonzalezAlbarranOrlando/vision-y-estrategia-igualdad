<template>
  <MyHeader />
  <br />
  <br />
  <router-view></router-view>
  <br />
  <br />
  <MyFooter />
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
/*Bootstrap js*/
import "bootstrap/dist/js/bootstrap.js";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
/*Bootstrap css*/
@import "bootstrap/dist/css/bootstrap.css";
</style>
