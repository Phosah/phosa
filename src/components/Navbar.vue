<template>
    <div class="max-w-7xl mx-auto">
        <nav class="flex items-center justify-between py-4">
            <div class="flex items-center space-x-2">
                <img src="../assets/phosa-logo.png" alt="Phosa logo" />
                <p class="logo-name text-3xl dark:text-white">Phosa</p>
            </div>
          <!-- toggle button -->
 <!-- Dark/Light toggle -->
 <button
        @click="toggleDark()"
        class="flex items-center space-x-2 p-1 rounded-full
               bg-gray-200 dark:bg-gray-800
               transition-colors duration-200"
      >
        <!-- Sun (light mode) -->
        <SunIcon
          class="w-6 h-6 p-1 rounded-full transition-colors"
          :class="!isDark
            ? 'bg-white text-yellow-500'
            : 'opacity-50 text-gray-500'"
        />

        <!-- Moon (dark mode) -->
        <MoonIcon
          class="w-6 h-6 p-1 rounded-full transition-colors"
          :class="isDark
            ? 'bg-gray-700 text-white'
            : 'opacity-50 text-gray-500'"
        />
      </button>
            <div>
                <!-- Calendly link widget begin -->
                <a
                    class="mt-8 py-3 px-3 md:px-10 bg-yellow-700 hover:bg-brand-gray text-white rounded-md cursor-pointer"
                    onclick="Calendly.initPopupWidget({url: 'https://calendly.com/phosa'});return false;"
                >Let's talk</a>
                <!-- Calendly link widget end -->
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import SunIcon from './svgs/SunIcon.vue'
import MoonIcon from './svgs/MoonIcon.vue'
const toggleDark = inject<() => void>('toggleDark')!
const isDark = inject<boolean>('isDark')!
</script>

<style>
@font-face {
    font-family: "NeueMachina-Ultrabold";
    src: url("./fonts/NeueMachina-Ultrabold.otf") format("OpenType");
    font-weight: 900;
}
@font-face {
    font-family: "Euclid Circular";
    src: local("Euclid Circular A"),
        url("./fonts/Euclid-Circular-A-light.ttf") format("OpenType");
}
.logo-name {
    font-family: "NeueMachina-Ultrabold.otf";
}
</style>