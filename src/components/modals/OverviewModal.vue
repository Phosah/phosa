<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-50">
      <!-- Backdrop -->
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gradient-to-br from-black/80 to-black/70 backdrop-blur-sm" />
      </TransitionChild>

      <!-- Modal container -->
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl ring-1 ring-gray-800 transition-all"
            >
              <!-- Header -->
              <div class="p-6 border-b border-gray-700">
                <DialogTitle class="project-title text-xl md:text-3xl font-bold text-white">
                  {{ project?.title }}
                </DialogTitle>
              </div>

              <!-- Body -->
              <div class="p-6 space-y-8">
                <!-- Tech Stack -->
                <section>
                  <h4 class="text-lg font-semibold text-yellow-400 mb-3">
                    Tech Stack
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in project?.stack"
                      :key="tech"
                      class="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium border border-gray-700 hover:border-yellow-400 hover:text-yellow-300 transition"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </section>

                <!-- Overview -->
                <section>
                  <h4 class="text-lg font-semibold text-yellow-400 mb-3">
                    Overview
                  </h4>
                  <p class="text-gray-300 text-base leading-relaxed">
                    {{ project?.overview }}
                  </p>
                </section>
              </div>

              <!-- Footer -->
              <div class="px-6 py-4 bg-gray-900 border-t border-gray-700 flex justify-end">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md bg-yellow-500 px-5 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition"
                  @click="$emit('close')"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close"]);
</script>
