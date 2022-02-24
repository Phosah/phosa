<template>
  <div class="bg-brand-black">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Navbar, Footer }
}
</script>

<style>
@font-face {
  font-family: "NeueMachina-Ultrabold.otf";
  src: url("./fonts/NeueMachina-Ultrabold.otf") format("OpenType");
}
@font-face {
  font-family: "Euclid Circular A";
  src: local("Euclid Circular A"),
    url("./fonts/Euclid-Circular-A-light.ttf") format("OpenType");
}
div {
  font-family: "Euclid Circular A", sans-serif;
}
</style>