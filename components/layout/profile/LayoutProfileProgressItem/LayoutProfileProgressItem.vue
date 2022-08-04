<template>
  <div class="layout-profile-progress-item">
    <div
      class="layout-profile-progress-item__card"
      :style="{ backgroundColor: bgColor }"
    >
      <div :class="[icon, 'text-base']" :style="{ color }" />
    </div>
    <div class="layout-profile-progress-item__info">
      <div class="layout-profile-progress-item__info-title">{{ title }}</div>
      <div class="layout-profile-progress-item__info-notice">{{ level }}</div>
    </div>
    <common-progress
      class="layout-profile-progress-item__value"
      :value="value"
      :bg-color="color"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#5E81F4",
  },
  bgColor: {
    type: String,
    default: "#EEF2FD",
  },
  icon: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss">
.layout-profile-progress-item {
  @apply flex items-center;

  &__card {
    @apply w-12 h-12 flex items-center rounded justify-center mr-4 shrink-0;
  }

  &__info {
    @apply mr-6 shrink-0;
  }

  &__info-notice {
    @apply text-sm text-slate-400;
  }

  &__value {
    @apply ml-auto w-32;
  }
}
</style>
