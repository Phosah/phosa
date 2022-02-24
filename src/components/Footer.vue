<template>
    <div class="max-w-4xl mx-auto py-10 md:py-20 px-4">
        <div class="text-center">
            <h1
                class="mb-8 text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-snug"
            >Let's Talk Development</h1>
            <p class="mb-8 max-w-xl mx-auto text-lg text-brand-gray tracking-wide">
                Any project you want to bring to life or if you just want to
                <span
                    class="text-white"
                >say hi</span> feel free to
                <span class="text-white">reach out or book an appointment</span>
            </p>
            <div class="mb-8 flex justify-center space-x-3">
                <div class="w-10 h-10 flex items-center justify-center bg-[#202020] rounded-full">
                    <img class src="../assets/whatsapp.png" alt="Whatsapp" />
                </div>
                <div class="w-10 h-10 flex items-center justify-center bg-[#202020] rounded-full">
                    <img class src="../assets/instagram.png" alt="Instagram" />
                </div>
                <div class="w-10 h-10 flex items-center justify-center bg-[#202020] rounded-full">
                    <img class src="../assets/twitter.png" alt="Twitter" />
                </div>
                <div class="w-10 h-10 flex items-center justify-center bg-[#202020] rounded-full">
                    <img class src="../assets/email.png" alt="Email" />
                </div>
                <div class="w-10 h-10 flex items-center justify-center bg-[#202020] rounded-full">
                    <img class src="../assets/linkedin.png" alt="LinkedIn" />
                </div>
            </div>
            <button class="py-3 px-10 bg-brand-purple text-white rounded-sm">Book an appointment</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Footer",
}
</script>