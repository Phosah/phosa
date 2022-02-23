<template>
    <div class="max-w-7xl mx-auto">
        <h2 class="text-6xl text-white">Projects</h2>
        <div class="flex items-center">
            <div>
                <h6>Role</h6>
                <h5>{{ project.subtitle }}</h5>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <p>View Site</p>
                        <img src alt />
                    </div>
                    <div>
                        <img src alt />
                    </div>
                </div>
                <div>
                    <img :src="project.img" :alt="project.alt" />
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Projects",
    prop: {
        project: {
            type: Object
        }
    }
}
</script>