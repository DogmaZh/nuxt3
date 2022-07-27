<template>
  <div class="layout-custom">
    <layout-navigation-bar v-model="navigationBar" :width="navigationWidth" />
    <main
      class="layout-custom__main"
      :style="{
        paddingLeft: navigationBar ? navigationWidth : '60px',
        paddingRight: profileBar ? profileWidth : '60px',
      }"
    >
      <div class="layout-custom__content">
        <slot />
      </div>
    </main>
    <layout-profile-bar v-model="profileBar" :width="profileWidth" />
  </div>
</template>

<script setup lang="ts">
const navigationBar = ref(true);
const profileBar = ref(true);

const navigationWidth = "272px";
const profileWidth = "384px";
</script>

<style lang="scss">
.layout-custom {
  @apply h-full w-full;

  &__main {
    @apply h-full w-full bg-gray-100 relative transition-all;
  }

  &__content {
    @apply pt-12 px-10 h-full;
  }
}
</style>
