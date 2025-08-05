<template>
    <div class="max-w-7xl mx-auto">
        <nav class="flex items-center justify-between py-4">
            <div class="flex items-center space-x-2">
                <img src="../assets/phosa-logo.png" alt="Phosa logo" />
                <p class="logo-name text-3xl text-white">Phosa</p>
            </div>
            <div>
                <!-- Calendly link widget begin -->
                <a
                    class="mt-8 py-3 px-10 bg-yellow-700 hover:bg-brand-gray text-white rounded-sm cursor-pointer"
                    onclick="Calendly.initPopupWidget({url: 'https://calendly.com/phosa'});return false;"
                >Let's talk</a>
                <!-- Calendly link widget end -->
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