<template>
  <aside-bar class="profile-bar" right>
    <template #full> Profile bar </template>
    <template #mini> P </template>
  </aside-bar>
</template>

<script setup lang="ts">
import AsideBar from "@/components/ui/AsideBar.vue";
</script>

<style lang="scss">
.profile-bar {
  @apply px-8 pt-11;
}
</style>
