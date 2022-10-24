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
