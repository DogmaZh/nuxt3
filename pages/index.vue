<template>
  <div>
    <ui-text-field v-model="test" />
    Result: {{ test }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const test = ref("text");
</script>
