<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['project']);
const project = props.project as any;
</script>

<template>
    <div class="md:flex md:items-center md:space-x-12 py-10 md:py-20 px-4">
        <div class="md:flex-1 mb-10 md:mb-0">
            <h6 class="mb-6 text-xl text-brand-gray font-semibold">Role</h6>
            <h5 class="mb-10 text-xl font-bold text-white">{{ project.subtitle }}</h5>
            <h3
                class="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wider leading-relaxed"
            >{{ project.title }}</h3>
            <p
                class="mb-8 text-base md:text-lg text-brand-gray font-semibold tracking-wide"
            >{{ project.description }}</p>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 text-white">
                    <p>View Site</p>
                    <a :href="project.livelink" target="_blank">
                        <svg
                            class="w-6 h-6 hover:transition-all hover:translate-x-1 hover:text-brand-gray"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
                <div class="w-10 h-10 flex items-center justify-center bg-[#202020] rounded-full hover:bg-brand-gray">
                    <a :href="project.githubLink">
                        <img class src="../assets/github.png" alt="Github" />
                    </a>
                </div>
            </div>
        </div>
        <div class="md:flex-1">
            <img class="my-auto" :src="project.img" :alt="project.alt" />
        </div>
    </div>
</template>