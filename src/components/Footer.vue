<template>
    <div class="max-w-4xl mx-auto py-10 md:py-20 px-4">
        <div class="text-center">
            <h1
                class="project-title mb-8 text-5xl md:text-6xl lg:text-8xl font-bold dark:text-white leading-snug"
            >Let's Talk Development</h1>
            <p class="mb-8 max-w-xl mx-auto text-lg text-brand-gray tracking-wide">
                Is there any project you want to bring to life or do you just want to 
                <span
                    class="text-yellow-600 dark:text-white"
                >say hi, </span> feel free to
                <span class="text-yellow-600 dark:text-white">please reach out or book an appointment</span>
            </p>
            
            <div class="mb-8">
                <Links />
            </div>
            <!-- Calendly link widget begin -->
            <a
                class="py-3 px-10 bg-yellow-700 text-white rounded-sm cursor-pointer hover:bg-yellow-600"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/phosa'});return false;"
            >Book an appointment</a>
            <!-- Calendly link widget end -->
        </div>
    </div>
</template>

<script lang="ts">
import Links from "./Links.vue";
export default {
    name: "Footer",
    components: { Links }
}
</script>