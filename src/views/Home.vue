<template>
  <main>
    <Hero />
    <Arsenal />
    <div class="max-w-7xl mx-auto py-20">
      <h2 class="text-5xl md:text-6xl lg:text-7xl text-center text-white font-extrabold">Projects</h2>
      <div v-for="project in projectsArr" :key="project.title">
        <Projects :project="project" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Arsenal from "../components/Arsenal.vue";
import Projects from "../components/Projects.vue";

const projectsArr = [
  {
    subtitle: "Frontend & Wiring",
    title: "Implementation of Crypcoin Finance",
    description: "Crypcoin is a crypto solution that aids users in blockchain investing by giving staking abilities and profitable APY for investors to receive profits",
    img: "/src/assets/crypcoin-photo.png",
    alt: "Crypcoin photo"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Aise's Portfolio",
    description: "Aise is a Product designer from Nigeria that prioritizes user experiences in the web3 environment and fintech ecosystem",
    img: "src/assets/aise-photo.png",
    alt: "Crypcoin photo"
  }
];

</script>
