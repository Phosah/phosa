<template>
    <div class="max-w-5xl mx-auto py-32 px-4">
        <div class="text-center">
            <h1
                class="mb-8 md:mb-12 text-5xl md:text-6xl lg:text-8xl font-extrabold text-brand-purple"
            >Hi i am Phosa</h1>
            <p class="max-w-xl mx-auto mb-12 md:text-lg text-brand-gray tracking-wide">
                I'm a frontend developer with over
                <span class="text-white">3 years</span> of experience and an immense love for
                <span class="text-white">Vue</span> and Interactive web applications in
                <span class="text-white">Fintech</span> and
                <span class="text-white">Web3 applications</span>.
            </p>
        </div>
        <Links />
    </div>
</template>

<script lang="ts">
import Links from "./Links.vue";
export default {
    name: "Hero",
    components: { Links }
}
</script>

<style>
</style>