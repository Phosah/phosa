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

import img1 from "@/assets/crypcoin-photo.png"
import img2 from "@/assets/aise-photo.png"
import img3 from "@/assets/bitpowr-photo.png"
import img4 from "@/assets/music-photo.png"
import img5 from "@/assets/nuovo-app-photo.png"
import img6 from "@/assets/athena-photo.png"

const projectsArr = [
  {
    subtitle: "Frontend & Wiring",
    title: "Implementation of Crypcoin Finance",
    description: "Crypcoin is a crypto solution that aids users in blockchain investing by giving staking abilities and profitable APY for investors to receive profits",
    img: img1,
    alt: "Crypcoin photo",
    githubLink: "https://github.com/Phosah/crypcoin",
    livelink: "https://crypcoinbinarytrade.com"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Aise's Portfolio",
    description: "Aise is a Product designer from Nigeria that prioritizes user experiences in the web3 environment and fintech ecosystem",
    img: img2,
    alt: "Crypcoin photo",
    githubLink: "https://github.com/Phosah/aise",
    livelink: "https://aise.netlify.com"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Implementation of Bitpowr",
    description: "Crypcoin is a crypto solution that aids users in blockchain investing by giving staking abilities and profitable APY for investors to receive profits",
    img: img3,
    alt: "Bitpowr photo",
    githubLink: "https://github.com/Phosah/bitpowr",
    livelink: "https://bitpowr-web3.netlify.com"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Music app UI",
    description: "A simple UI for a music player app with various reatures to improve interaction",
    img: img4,
    alt: "Music app photo",
    githubLink: "https://github.com/Phosah/music-player-app",
    livelink: "https://music-webpage.netlify.com"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Nuovo Store",
    description: "An e-commerce website implementation that focuses on clothing and accessories. Fetching data from an external api ",
    img: img5,
    alt: "Ecommerce site photo",
    githubLink: "https://github.com/Phosah/nuovo",
    livelink: "https://nuovo-store.netlify.com"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Athena",
    description: "Athena is a decentralized exchange (DEX) on the Ethereum. Athena’s Exchange design is based on automated market maker (AMM)",
    img: img6,
    alt: "Athena",
    githubLink: "https://github.com/Phosah/athena",
    livelink: "https://new-athena.netlify.com"
  },
];

</script>
