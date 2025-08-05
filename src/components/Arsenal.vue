<template>
    <div class="max-w-3xl mx-auto py-10 md:py-20 px-4">
      <div class="flex flex-col items-center">
        <div class="mb-10 h-16 border-r-2 border-yellow-600"></div>
        <h4 class="project-title mb-20 text-2xl text-white">My Arsenal</h4>
  
        <div class="grid grid-cols-3 md:grid-cols-6 gap-x-12 gap-16 md:gap-y-24">
          <template v-for="(Icon, i) in icons" :key="i">
            <div
              class="p-4 rounded-lg flex items-center justify-center
                     bg-[#202020] 
                     transition-all duration-300 ease-in-out
                     hover:bg-yellow-600 hover:shadow-2xl
                     hover:-translate-y-1
                     ring-2 ring-transparent hover:ring-yellow-700"
            >
              <component
                :is="Icon"
                class="w-10 h-10 text-black transition-colors
                       hover:text-white"
              />
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
    SolidityIcon, VueIcon, TypescriptIcon, TailwindIcon,
    JavascriptIcon, ChainlinkIcon, NodejsIcon, NextjsIcon,
    DockerIcon, Web3jsIcon, OpenzepplinIcon, LinearIcon,
    ExpressIcon, NuxtIcon, NestjsIcon, GsapIcon,
    StyledComponentIcon, LaravelIcon, ReactIcon, ScssIcon,
    JestIcon, EslintIcon, CypressIcon
] 
</script>