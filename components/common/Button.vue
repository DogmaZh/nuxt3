<template>
  <button class="button" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.button {
  @apply bg-primary hover:bg-slate-400 flex justify-center items-center rounded-lg text-white py-4 transition-colors whitespace-nowrap text-ellipsis overflow-hidden;
}
</style>
