<template>
  <div
    class="group md:flex md:items-center md:space-x-12 my-12 py-10 md:py-20 px-4 border-2 border-transparent rounded-2xl bg-[#151515] transition-all duration-300 ease-in-out hover:bg-[#1f1f1f] hover:shadow-2xl hover:-translate-y-1"
  >
    <div
      class="md:flex-1 mb-10 md:mb-0 transition-colors duration-300 ease-in-out"
    >
      <div class="flex items-center justify-between mb-2">
        <h6
          class="text-xl text-brand-gray font-semibold group-hover:text-yellow-600"
        >
          Role
        </h6>

        <span
          v-if="project.isLive"
          class="px-3 py-1 text-xs font-bold uppercase tracking-wide bg-green-600 text-white rounded-full"
        >
          Live
        </span>
      </div>

      <h5
        class="mb-2 text-xl font-bold text-yellow-700 group-hover:text-yellow-500 transition-colors"
      >
        {{ project.subtitle }}
      </h5>

      <h3
        class="project-title mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wider leading-relaxed group-hover:text-gray-300"
      >
        {{ project.title }}
      </h3>

      <p
        class="font-openSans text-base md:text-lg text-brand-gray tracking-wide group-hover:text-brand-gray-light"
      >
        {{ project.description }}
      </p>
      <p
        @click="$emit('openModal', project)"
        class="mb-6 text-white text-sm hover:text-yellow-500 cursor-pointer border-b-2 inline-block hover:border-yellow-500"
      >
        Read More
      </p>

      <div class="flex items-center justify-between">
        <a
          :href="project.livelink"
          target="_blank"
          class="flex items-center space-x-2 text-white group-hover:text-yellow-500 transition-colors"
        >
          <p>View Site</p>
          <div
            class="transform transition-transform duration-300 group-hover:translate-x-2"
          >
            <svg
              class="w-6 h-6 transition-colors duration-300 group-hover:text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </a>

        <div
          v-if="project.githubLink !== ''"
          class="w-10 h-10 flex items-center justify-center bg-[#202020] rounded-full transition-all duration-300 ease-in-out group-hover:bg-yellow-600 transform group-hover:scale-105"
        >
          <a :href="project.githubLink" target="_blank">
            <img src="../assets/github.png" alt="Github" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <div class="md:flex-1 max-h-72 rounded-md overflow-hidden">
      <img
        class="max-h-72 w-full object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
        :src="project.img"
        :alt="project.alt"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps(["project"]);
const project = props.project as any;
</script>

<style>
.project-title {
  font-family: "NeueMachina-Ultrabold.otf";
}
/* .project-description {
  font-family: "Euclid Circular A", sans-serif;
} */
</style>
