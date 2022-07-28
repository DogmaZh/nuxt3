<template>
  <div class="progress">
    <div
      class="progress__content"
      :style="{ width: `${value}%`, backgroundColor: bgColor }"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  bgColor: {
    type: String,
    default: "#5E81F4",
  },
});
</script>

<style lang="scss">
.progress {
  @apply w-full h-2 rounded bg-slate-500 bg-opacity-25 relative;

  &__content {
    @apply absolute left-0 bottom-0 rounded h-2;
  }
}
</style>
