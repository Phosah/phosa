<template>
  <main class="mx-2 md:mx-12">
    <Hero />
    <Arsenal />
    <OverviewModal :isOpen="isModalOpen" @close="closeModal" :project="selectedProject" />
    <div class="max-w-7xl mx-auto py-20">
      <h2 class="project-title text-5xl md:text-6xl lg:text-7xl text-center dark:text-white font-extrabold">Projects</h2>
      <div v-for="project in projects" :key="project.title">
        <Project :project="project" @openModal="openModal" />
      </div>
    </div>
  </main>
</template>


<script setup lang="ts">
import Hero from "../components/Hero.vue";
import Arsenal from "../components/Arsenal.vue";
import Project from "../components/Project.vue";
import img2 from "@/assets/aise-photo.png"
import img3 from "@/assets/bitpowr-photo.png"
import img6 from "@/assets/athena-photo.png"
import cybergist from "@/assets/cybergist.png"
import gruve from "@/assets/gruve.png"
import sippy from '@/assets/sippy.png'
import OverviewModal from "@/components/modals/OverviewModal.vue";
import { ref } from "vue";

const isModalOpen = ref(false);
const selectedProject = ref(null);

function openModal(project: any) {
  isModalOpen.value = true;
  selectedProject.value = project;
}

function closeModal() {
  isModalOpen.value = false;
  // selectedProject.value = null;
}

const projects = [
  {
    subtitle: "Fullstack",
    title: "Gruve Ticketing System",
    description: "Gruve is a next-generation ticketing system that leverages blockchain technology to deliver secure, transparent, and borderless event experiences.",
    img: gruve,
    alt: "Gruve photo",
    githubLink: "",
    livelink: "https://beta.gruve.events",
    overview: 'Gruve is a next-generation ticketing system that leverages blockchain technology to deliver secure, transparent, and borderless event experiences. It empowers creators to host any type of event — from concerts and conferences to NFT-gated meetups — while ensuring every ticket is verifiable and fraud-proof. The platform offers a seamless event lifecycle, from ticket creation to attendee tracking, with features like multi-language support, currency conversion, wallet integration for both buyers and creators, real-time analytics, and discount management. Gruve combines a modern, intuitive UI with decentralized verification to make event hosting effortless and ticket purchasing enjoyable for audiences worldwide.',
    stack: ['Typescript', 'Ethers.js', 'Next.js', 'Prisma', 'Lighthouse', 'Chakra UI']
  },
  {
    subtitle: "Frontend",
    title: "Sippy",
    description: "Sippy is a an advanced e-commerce store specially for drinks all around the country making it easier for users to access from their comfort zone",
    img: sippy,
    alt: "sippy photo",
    githubLink: "",
    livelink: "https://sippy.life",
    overview: 'Sippy is a modern online platform for ordering and delivering both alcoholic and non-alcoholic beverages directly to your doorstep. Whether it’s a wedding, birthday, family gathering, or casual get-together, Sippy makes stocking up on drinks fast, affordable, and effortless. With a wide selection from popular soft drinks to premium spirits, unbeatable wholesale pricing, and delivery on your schedule, Sippy ensures you never run out of refreshments when it matters most. After signing up, customers can manage orders via a personalized dashboard, track ongoing deliveries, view past purchases, and enjoy light or dark mode for a tailored experience.Our mission is simple: bring joy and convenience to every occasion by removing the hassle of beverage shopping. Sippy isn’t just a delivery service — it’s your reliable drinks partner for every celebration.',
    stack: ['Typescript', 'SCSS', 'Next.js', 'Redux', 'React']
  },
  {
    subtitle: "Frontend",
    title: "Bitpowr",
    description: "Bitpowr is a sleek, modern frontend UI designed for decentralized finance (DeFi) operations.",
    img: img3,
    alt: "Bitpowr photo",
    githubLink: "https://github.com/Phosah/bitpowr",
    livelink: "https://bitpowr-web3.netlify.app",
    overview: 'Bitpowr is a sleek, modern frontend UI designed for decentralized finance (DeFi) operations. The interface delivers a seamless experience for managing digital assets through an intuitive dashboard and dedicated modules for staking, token swaps, liquidity provision, yield farming, validator management, and pool participation. Built with a clean, responsive design and optimized for usability, Bitpowr focuses on giving crypto users a streamlined way to interact with DeFi protocols. From tracking staking rewards to executing swaps or managing liquidity positions, every section is crafted for speed, clarity, and a professional user experience. Whether you’re a casual investor or a DeFi power user, Bitpowr’s interface provides all the essential tools to navigate the decentralized economy with confidence.',
    stack: ['Vue', 'TailwindCss', 'Netlify']
  },
  // {
  //   subtitle: "Frontend",
  //   title: "Nuovo Store",
  //   description: "An e-commerce website implementation that focuses on clothing and accessories. Fetching data from an external api ",
  //   img: img5,
  //   alt: "Ecommerce site photo",
  //   githubLink: "https://github.com/Phosah/nuovo",
  //   livelink: "https://nuovo-store.netlify.app"
  // },
  {
    subtitle: "Frontend",
    title: "Athena",
    description: "Athena is a comprehensive, user-focused DeFi frontend interface that brings multiple blockchain tools into a single, intuitive dashboard.",
    img: img6,
    alt: "Athena",
    githubLink: "https://github.com/Phosah/athena",
    livelink: "https://new-athena.netlify.app",
    overview: 'Athena is a comprehensive, user-focused DeFi frontend interface that brings multiple blockchain tools into a single, intuitive dashboard. Designed for traders, investors, and blockchain enthusiasts, Athena provides dedicated modules for trading, staking, token swaps, liquidity provision, yield farming, validator management, pool participation, and project launchpad access. Its modern and responsive design ensures a seamless user experience across all devices, making it easy to monitor portfolio performance, execute trades, stake assets, provide liquidity, and participate in early-stage token launches. Whether you’re entering the DeFi space for the first time or actively managing a diversified crypto portfolio, Athena’s clean UI and feature-rich tools empower you to navigate decentralized finance with speed, clarity, and confidence.',
    stack: ['Vue', 'Tailwind']
  },
  {
    subtitle: "Frontend",
    title: "Cybergist",
    description: "CyberGist is an emerging cybersecurity platform designed to autonomously detect, mitigate, and neutralize digital threats in real-time.",
    img: cybergist,
    alt: "Cybergist photo",
    githubLink: "",
    livelink: "https://cybergist.vercel.app",
    overview: 'CyberGist is an emerging cybersecurity platform designed to autonomously detect, mitigate, and neutralize digital threats in real-time. By combining visual network modeling, machine learning, and kernel-level security, CyberGist delivers both proactive and reactive defense mechanisms for modern network environments. Key capabilities include visualizing network topology and data flow, protecting sensitive information, securing access points with Single Sign-On (SSO), monitoring for abnormal network behavior, and safeguarding kernel virtual address space and memory. Its AI engine continuously learns from its environment, isolating and investigating potential threats before they escalate. CyberGist represents a forward-looking approach to cybersecurity — integrating advanced analytics, intelligent automation, and deep system-level protection to keep networks resilient against evolving threats.',
    stack: ['Vue', 'Tailwind', 'CSS', 'AOS']
  },
  {
    subtitle: "Frontend",
    title: "Aise's Portfolio",
    description: "Aise is the personal portfolio of a senior product designer specializing in crafting user experiences for both Web2 and Web3 applications.",
    img: img2,
    alt: "Aise photo",
    githubLink: "https://github.com/Phosah/aise-v2",
    livelink: "https://v2-aise.netlify.app",
    overview: 'Aise is the personal portfolio of a senior product designer specializing in crafting user experiences for both Web2 and Web3 applications. The site showcases a curated collection of design projects spanning SaaS platforms, decentralized applications, fintech tools, and consumer-facing products. With a focus on usability, accessibility, and visual clarity, Aise’s work bridges aesthetics and functionality, delivering solutions that resonate with end users while meeting business goals. The portfolio highlights a proven ability to design intuitive interfaces, optimize user flows, and adapt to the unique challenges of both traditional and blockchain-based products. From concept sketches to polished prototypes, Aise’s portfolio reflects a design philosophy rooted in empathy, innovation, and adaptability — making it a valuable resource for potential collaborators and employers alike.',
    stack: ['Vue', 'Pinia', 'Tailwind']
  },
];
</script>