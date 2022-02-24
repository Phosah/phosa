<template>
    <div class="max-w-7xl mx-auto px-4">
        <nav class="flex items-center justify-between py-4">
            <div class="flex items-center space-x-2">
                <img src="../assets/phosa-logo.png" alt="Phosa logo" />
                <p class="logo-name text-3xl text-white">Phosa</p>
            </div>
            <div>
                <button class="py-3 px-10 bg-brand-purple text-white rounded-sm">Let's talk</button>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>
@font-face {
    font-family: "NeueMachina-Ultrabold.otf";
    src: url("./fonts/NeueMachina-Ultrabold.otf") format("OpenType");
}
@font-face {
    font-family: "Euclid Circular A";
    src: local("Euclid Circular A"),
        url("./fonts/Euclid-Circular-A-light.ttf") format("OpenType");
}
.logo-name {
    font-family: "NeueMachina-Ultrabold.otf";
}
</style>