<template>
  <div class="dark:bg-brand-black px-6">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, onMounted } from 'vue'
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const isDark = ref(true)
onMounted(() => {
  const saved = localStorage.getItem('dark')
  isDark.value = saved === 'true'
  updateClass()
})

function updateClass() {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('dark', isDark.value.toString())
}

function toggleDark() {
  isDark.value = !isDark.value
  updateClass()
}

provide('toggleDark', toggleDark)
provide('isDark', isDark)
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
div, p {
  font-family: "Euclid Circular A", sans-serif;
}
</style>