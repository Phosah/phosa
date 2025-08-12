<template>
    <main class="min-h-[60vh] md:h-[60vh] md:relative">
      <header
        class="max-w-7xl mx-auto md:absolute inset-0  min:h-[60vh] py-2 md:flex md:items-center justify-between gap-20 z-10"
      >
        <div class="flex-1 relative z-50">
          <!-- Safari: show gradient text -->
          <div v-if="isSafari" class="safari-text-container">
            <h1 class="safari-text" data-aos="flip-up" data-aos-duration="1000">
                Hi, I am Phosah
            </h1>
          </div>
  
          <!-- Chrome/Firefox/Edge: your original video-mask -->
          <div v-else class="video-text-mask">
            <svg width="100%" height="200" viewBox="0 0 1000 200">
              <defs>
                <mask id="text-mask">
                  <rect width="100%" height="100%" fill="black" />
                  <text
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="120"
                    font-family="Verdana"
                    font-weight="500"
                    fill="white"
                    data-aos="flip-up"
                    data-aos-duration="1000"
                  >
                    Hi, I am Phosah
                  </text>
                </mask>
              </defs>

              <foreignObject width="100%" height="100%" mask="url(#text-mask)">
                <video autoplay loop muted playsinline class="object-cover w-full h-full">
                  <source :src="selectedVideo" type="video/mp4" />
                </video>
              </foreignObject>
            </svg>
          </div>
  
          <div class="max-w-5xl mx-auto mb-12 md:text-lg tracking-wide text-center">
            <p class="dark:text-gray-200"> I’m a Full-Stack Developer with  <span class="dark:text-white text-yellow-600">4 years</span>  of experience delivering end-to-end web and mobile solutions.</p>

            <p class="dark:text-gray-200">I leverage modern JavaScript frameworks (Vue, React, Next.js) alongside Flutter to build responsive, </p>

            <p class="text-yellow-600"> performant interfaces, and I architect backend services with Node.js/Express and Laravel. </p>

            <p class="text-yellow-600">On the blockchain side, I design and deploy Solidity smart contracts and integrate </p>

            <p class="text-yellow-600">on-chain logic into production-grade dApps. With a strong focus on CI/CD,  </p>
               
            <p class="text-brand-gray">performance optimization, and security best practices,</p>

            <p class="text-brand-gray">I turn complex requirements in Fintech and Web3 </p>
            
            <p class="text-brand-gray">into seamless, scalable products.</p>
          </div>
        </div>
      </header>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const isSafari = ref(false)
  const selectedVideo = ref<string>('')

const videos = [
  new URL('../assets/phosah-2-video.mp4', import.meta.url).href,
  new URL('../assets/phosah-3-video.mp4', import.meta.url).href,
  new URL('../assets/phosah-4-video.mp4', import.meta.url).href,
]
  
  onMounted(() => {
    const ua = navigator.userAgent
    const isActuallySafari = /^((?!chrome|crios|fxios|android).)*safari/i.test(ua)
    const isIOS = /iPhone|iPad|iPod/.test(ua)
    const isMobileScreen = window.innerWidth <= 768
  
    // Show Safari version if: it's Safari OR (iOS on small screen)
    isSafari.value = isActuallySafari || (isIOS && isMobileScreen)

    const randomIndex = Math.floor(Math.random() * videos.length);
    selectedVideo.value = videos[randomIndex]
  })
  </script>
  
  <style scoped>
  /* Safari fallback: gradient-filled text */
  .safari-text-container {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .safari-text {
    font-size: clamp(1.75rem, 12vw, 6rem);
    font-weight: 500;
    font-family: "NeueMachina-Ultrabold.otf";
    background: linear-gradient(to right, #d97706, #fbbf24, #3b82f6);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    animation: gradientShift 4s ease-in-out infinite;
  }
  
  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  /* Optional: ensure your video-text-mask sits where your h1 would */
  .video-text-mask {
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>