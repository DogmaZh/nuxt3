<template>
  <aside-bar class="navigation-bar">
    <template #full>
      <span>Navigation bar</span>
    </template>
    <template #mini> N </template>
  </aside-bar>
</template>

<script setup lang="ts">
import AsideBar from "@/components/ui/AsideBar.vue";
</script>

<style lang="scss">
.navigation-bar {
  @apply px-10 pt-12;
}
</style>
