<template>
  <div class="layout-profile-progress">
    <div class="layout-profile-progress__title mb-8">
      {{ t("profileBar.progress.title") }}
    </div>
    <div class="layout-profile-progress__items">
      <layout-profile-progress-item
        class="layout-profile-progress__item"
        v-for="item in progressItems"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { IProgressItem } from "./types";

const { t } = useI18n();

const progressItems: IProgressItem[] = [
  {
    title: "UI/UX Design",
    level: "Advanced",
    value: 35,
    icon: "i-mdi-pencil",
    bgColor: "#EEF2FD",
    color: "#5E81F4",
  },
  {
    title: "Photography",
    level: "Intermediate",
    value: 73,
    icon: "i-mdi-camera",
    bgColor: "#D5F5FB",
    color: "#0CC3E7",
  },
  {
    title: "Animation",
    level: "Advanced",
    value: 12,
    icon: "i-mdi-draw",
    bgColor: "#FFEFD6",
    color: "#FFAE33",
  },
];
</script>

<style lang="scss">
.layout-profile-progress {
  &__title {
    @apply text-lg font-medium;
  }

  &__item {
    @apply mb-6 last:mb-0;
  }
}
</style>
