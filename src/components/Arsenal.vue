<template>
    <div class="max-w-3xl mx-auto py-20">
        <div class="flex flex-col items-center">
            <div class="h-32 border-r-4 border-white"></div>
            <h4 class="text-xl text-white">My Arsenal</h4>
            <div class="grid grid-cols-3 gap-3">
                <img src="../assets/bootstrap.png" alt="Bootstrap logo" />
                <img src="../assets/tailwind.png" alt="Tailwind logo" />
                <img src="../assets/css.png" alt="CSS logo" />
            </div>
            <div class="grid grid-cols-4 gap-3">
                <img src="../assets/js.png" alt="js logo" />
                <img src="../assets/react.png" alt="react logo" />
                <img src="../assets/sass.png" alt="sass logo" />
                <img src="../assets/html.png" alt="html logo" />
            </div>
            <div class="h-32 border-r-4 border-white"></div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Arsenal"
}
</script>

div {
    font-family: "Euclid Circular A", sans-serif;
}