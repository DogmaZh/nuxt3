<template>
  <button class="button" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.button {
  @apply bg-primary hover:bg-slate-400 flex justify-center content-center rounded-lg text-white py-4 px-6 transition-colors whitespace-nowrap text-ellipsis;
}
</style>
