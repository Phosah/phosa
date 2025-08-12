<template>
    <div class="max-w-3xl mx-auto py-10 md:py-20 px-4">
      <div class="flex flex-col items-center">
        <div class="mb-10 h-16 border-r-2 border-yellow-600"></div>
        <h4 class="project-title mb-20 text-2xl dark:text-white">My Arsenal</h4>
  
        <div class="grid grid-cols-3 md:grid-cols-6 gap-x-12 gap-16 md:gap-y-24">
          <template v-for="(item, i) in icons" :key="i">
          <div
            class="flex flex-col items-center space-y-2 p-4 rounded-lg
                   bg-gray-200 dark:bg-[#202020]
                   transition-all duration-300 ease-in-out
                   hover:bg-yellow-600 dark:hover:bg-yellow-600 hover:shadow-2xl
                   hover:-translate-y-1
                   ring-2 ring-transparent hover:ring-yellow-700"
          >
            <component
              :is="item.component"
              class="w-10 h-10 text-black transition-colors hover:text-white"
            />
            <span class="text-xs text-center text-gray-700 dark:text-gray-500">
              {{ item.name }}
            </span>
          </div>
        </template>
        </div>
  
        <div class="mt-10 h-16 border-r-2 border-yellow-600"></div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import SolidityIcon from "./svgs/SolidityIcon.vue";
import TypescriptIcon from "./svgs/TypescriptIcon.vue";
import VueIcon from "./svgs/VueIcon.vue";
import TailwindIcon from "./svgs/TailwindIcon.vue";
import JavascriptIcon from "./svgs/JavascriptIcon.vue";
import ChainlinkIcon from "./svgs/ChainlinkIcon.vue";
import NodejsIcon from "./svgs/NodejsIcon.vue";
import NextjsIcon from "./svgs/NextjsIcon.vue";
import DockerIcon from "./svgs/DockerIcon.vue";
import Web3jsIcon from "./svgs/Web3jsIcon.vue";
import OpenzepplinIcon from "./svgs/OpenzepplinIcon.vue";
import LinearIcon from "./svgs/LinearIcon.vue";
import ExpressIcon from "./svgs/ExpressIcon.vue";
import NuxtIcon from "./svgs/NuxtIcon.vue";
import NestjsIcon from "./svgs/NestjsIcon.vue";
import GsapIcon from "./svgs/GsapIcon.vue";
import StyledComponentIcon from "./svgs/StyledComponentIcon.vue";
import LaravelIcon from "./svgs/LaravelIcon.vue";
import ReactIcon from "./svgs/ReactIcon.vue";
import ScssIcon from "./svgs/ScssIcon.vue";
import JestIcon from "./svgs/JestIcon.vue";
import EslintIcon from "./svgs/EslintIcon.vue";
import CypressIcon from "./svgs/CypressIcon.vue";

const icons = [
  { name: "Solidity", component: SolidityIcon },
  { name: "Vue.js", component: VueIcon },
  { name: "TypeScript", component: TypescriptIcon },
  { name: "Tailwind CSS", component: TailwindIcon },
  { name: "JavaScript", component: JavascriptIcon },
  { name: "Chainlink", component: ChainlinkIcon },
  { name: "Node.js", component: NodejsIcon },
  { name: "Next.js", component: NextjsIcon },
  { name: "Docker", component: DockerIcon },
  { name: "Web3.js", component: Web3jsIcon },
  { name: "OpenZeppelin", component: OpenzepplinIcon },
  { name: "Linear", component: LinearIcon },
  { name: "Express", component: ExpressIcon },
  { name: "Nuxt.js", component: NuxtIcon },
  { name: "NestJS", component: NestjsIcon },
  { name: "GSAP", component: GsapIcon },
  { name: "Styled Components", component: StyledComponentIcon },
  { name: "Laravel", component: LaravelIcon },
  { name: "React", component: ReactIcon },
  { name: "SCSS", component: ScssIcon },
  { name: "Jest", component: JestIcon },
  { name: "ESLint", component: EslintIcon },
  { name: "Cypress", component: CypressIcon },
];
</script>