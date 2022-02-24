<template>
    <div class="max-w-3xl mx-auto py-10 md:py-20 px-4">
        <div class="flex flex-col items-center">
            <div class="mb-10 h-24 border-r-2 border-brand-gray"></div>
            <h4 class="mb-20 text-2xl text-white">My Arsenals</h4>
            <div class="grid grid-cols-4 gap-x-3 gap-16 md:gap-y-24">
                <div class="mx-auto">
                    <img src="../assets/bootstrap.png" alt="Bootstrap logo" />
                </div>
                <div class="col-span-2 mx-auto text-center">
                    <img src="../assets/tailwind.png" alt="Tailwind logo" />
                </div>
                <div class="mx-auto text-center">
                    <img src="../assets/css.png" alt="CSS logo" />
                </div>
                <div class="mx-auto text-center">
                    <img src="../assets/js.png" alt="js logo" />
                </div>
                <div class="mx-auto text-center">
                    <img src="../assets/react.png" alt="react logo" />
                </div>
                <div class="mx-auto text-center">
                    <img src="../assets/sass.png" alt="sass logo" />
                </div>
                <div class="mx-auto text-center">
                    <img src="../assets/html.png" alt="html logo" />
                </div>
            </div>
            <div class="mt-10 h-24 border-r-2 border-brand-gray"></div>
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