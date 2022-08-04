<template>
  <common-aside-bar class="navigation-bar" v-bind="$attrs">
    <template #full>
      <div class="navigation-bar__full-content px-10 pt-6">
        <div class="flex justify-center mb-12">
          <icons-aside-logo />
        </div>
        <common-button class="w-full mb-12">
          {{ t("navigationBar.join") }}
        </common-button>
        <layout-navigation-items :items="items" class="-mx-10" />
      </div>
    </template>
    <template #mini>
      <div
        class="navigation-bar__mini-content flex flex-col items-center justify-center pt-30"
      >
        <div class="w-full px-2 mb-14">
          <common-button class="w-full">
            <div class="i-mdi-plus text-base"></div>
          </common-button>
        </div>
        <layout-navigation-items class="w-full" :items="items" mini />
      </div>
    </template>
  </common-aside-bar>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ILayoutNavigationItem } from "@/shared/types";

const { t } = useI18n();
const items: ILayoutNavigationItem[] = [
  {
    name: t("navigationBar.items.all"),
    route: "/",
    icon: "i-mdi-border-all",
  },
  {
    name: t("navigationBar.items.dashboard"),
    route: "/dashboard",
    icon: "i-mdi-view-dashboard",
  },
  {
    name: t("navigationBar.items.friends"),
    route: "/friends",
    icon: "i-mdi-account",
  },
];
</script>
