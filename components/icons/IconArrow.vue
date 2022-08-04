<template>
  <div :class="[`i-mdi-arrow-${direction}`, size, 'cursor-pointer']"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "text-base",
  },
  direction: {
    type: String,
    default: "right",
  },
});
</script>
