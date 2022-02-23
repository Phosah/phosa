<template>
  <main>
    <Hero />
    <Arsenal />
    <div v-for="project in projectsArr" :key="project.title">
      <Projects :project="project" />
    </div>
  </main>
</template>

<script lang="ts">
import Hero from "../components/Hero.vue";
import Arsenal from "../components/Arsenal.vue";
import Projects from "../components/Projects.vue";
export default {
  components: { Hero, Arsenal, Projects },
  data() {
    projectsArr: [
      {
        subtitle: "Frontend & Wiring",
        title: "Implementation of Crypcoin Finance",
        description: "Crypcoin is a crypto solution that aids users in blockchain investing by giving staking abilities and profitable APY for investors to receive profits",
        img: ("../assets/crypcoin-photo")
      },
      {
        subtitle: "Frontend & Wiring",
        title: "Aise's Portfolio",
        description: "Aise is a Product designer from Nigeria that prioritizes user experiences in the web3 environment and fintech ecosystem",
        img: ("../assets/aise-photo")
      }
    ]
  }
}
</script>
