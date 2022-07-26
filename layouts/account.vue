<template>
  <div class="layout-custom">
    <navigation-bar width="272px" />
    <main class="layout-custom__main">
      <slot />
    </main>
    <profile-bar width="384px" />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/ui/NavigationBar.vue";
import ProfileBar from "@/components/ui/ProfileBar.vue";
</script>

<style lang="scss">
.layout-custom {
  @apply h-full w-full;

  &__main {
    @apply h-full w-full bg-gray-100;
  }
}
</style>
