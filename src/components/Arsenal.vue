<template>
    <div class="max-w-3xl mx-auto py-10 md:py-20 px-4">
        <div class="flex flex-col items-center">
            <div class="mb-10 h-24 border-r-2 border-yellow-600"></div>
            <h4 class="mb-20 text-2xl text-white">My Arsenals</h4>
            <div class="grid grid-cols-6 gap-x-12 gap-16 md:gap-y-24">
                <SolidityIcon class="w-10 h-10 text-black hover:text-yellow-700" />
                <VueIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" color="blue" />
                <TypescriptIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <TailwindIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <JavascriptIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <ChainlinkIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <NodejsIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <NextjsIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <DockerIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <Web3jsIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <OpenzepplinIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
                <LinearIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <ExpressIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <NuxtIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <NestjsIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors"  />
                <GsapIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
                <StyledComponentIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
                <LaravelIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
                <ReactIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
                <ScssIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
                <JestIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
                <EslintIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
                <CypressIcon class="w-10 h-10 text-black hover:text-yellow-700 transition-colors" />
            </div>
            <div class="mt-10 h-24 border-r-2 border-yellow-600"></div>
        </div>
    </div>
</template>

<script lang="ts">
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

export default {
    name: "Arsenal",
    components: {
        SolidityIcon,
        TypescriptIcon,
        VueIcon,
        TailwindIcon,
        JavascriptIcon,
        ChainlinkIcon,
        NodejsIcon,
        NextjsIcon,
        DockerIcon,
        Web3jsIcon,
        OpenzepplinIcon,
        LinearIcon,
        ExpressIcon,
        NuxtIcon,
        NestjsIcon,
        GsapIcon,
        StyledComponentIcon,
        LaravelIcon,
        ReactIcon,
        ScssIcon,
        JestIcon,
        EslintIcon,
        CypressIcon
    }
}
</script>

<!-- div {
    font-family: "Euclid Circular A", sans-serif;
} -->