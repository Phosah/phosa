<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Arsenal from "../components/Arsenal.vue";
import Projects from "../components/Projects.vue";
import img2 from "@/assets/aise-photo.png"
import img3 from "@/assets/bitpowr-photo.png"
import img5 from "@/assets/nuovo-app-photo.png"
import img6 from "@/assets/athena-photo.png"
import cybergist from "@/assets/cybergist.png"
import gruve from "@/assets/gruve.png"
import sippy from '@/assets/sippy.png'

const projectsArr = [
  {
    subtitle: "Web3 & Blockchain",
    title: "Gruve Ticketing System",
    description: "Gruve makes selling and purchasing event tickets easy and fun through a decentralized event experience.",
    img: gruve,
    alt: "Gruve photo",
    githubLink: "https://github.com/Phosah/",
    livelink: "https://beta.gruve.events"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Sippy",
    description: "Sippy is a an advanced e-commerce store specially for drinks all around the country making it easier for users to access from their comfort zone",
    img: sippy,
    alt: "sippy photo",
    githubLink: "https://github.com/Phosah/",
    livelink: "https://sippy.life"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Cybergist",
    description: "CyberGist is a startup-in-progress focused on building a cybersecurity model capable of autonomous decision-making and protection.",
    img: cybergist,
    alt: "Cybergist photo",
    githubLink: "https://github.com/Phosah/cybergist",
    livelink: "https://cybergist.vercel.app"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Aise's Portfolio",
    description: "Aise is a Product designer from Nigeria that prioritizes user experiences in the web3 environment and fintech ecosystem",
    img: img2,
    alt: "Crypcoin photo",
    githubLink: "https://github.com/Phosah/aise-v2",
    livelink: "https://v2-aise.netlify.app"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Bitpowr",
    description: "Crypcoin is a crypto solution that aids users in blockchain investing by giving staking abilities and profitable APY for investors to receive profits",
    img: img3,
    alt: "Bitpowr photo",
    githubLink: "https://github.com/Phosah/bitpowr",
    livelink: "https://bitpowr-web3.netlify.app"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Nuovo Store",
    description: "An e-commerce website implementation that focuses on clothing and accessories. Fetching data from an external api ",
    img: img5,
    alt: "Ecommerce site photo",
    githubLink: "https://github.com/Phosah/nuovo",
    livelink: "https://nuovo-store.netlify.app"
  },
  {
    subtitle: "Frontend & Wiring",
    title: "Athena",
    description: "Athena is a decentralized exchange (DEX) on the Ethereum. Athena’s Exchange design is based on automated market maker (AMM)",
    img: img6,
    alt: "Athena",
    githubLink: "https://github.com/Phosah/athena",
    livelink: "https://new-athena.netlify.app"
  },
];
</script>

<template>
  <main class="mx-2 md:mx-12">
    <Hero />
    <Arsenal />
    <div class="max-w-7xl mx-auto py-20">
      <h2 class="project-title text-5xl md:text-6xl lg:text-7xl text-center text-white font-extrabold">Projects</h2>
      <div v-for="project in projectsArr" :key="project.title">
        <Projects :project="project" />
      </div>
    </div>
  </main>
</template>
