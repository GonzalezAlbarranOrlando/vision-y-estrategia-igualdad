<template>
  <MyHeader />
  <img alt="Vue logo" src="./assets/logo.png" />
  <MyFooter />
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
</style>
