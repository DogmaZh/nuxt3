<template>
  <div class="input">
    <input v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.input {
  @apply bg-white rounded-xl relative flex items-center;

  & input {
    @apply w-full h-full px-4 py-4 rounded-xl;
  }
}
</style>
