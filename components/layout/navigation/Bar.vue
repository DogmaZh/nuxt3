<template>
  <ui-aside-bar class="navigation-bar" v-bind="$attrs">
    <template #full>
      <div class="navigation-bar__full-content px-10 pt-12">
        <div class="flex justify-center content-center">
          <icons-aside-logo class="mb-12" />
        </div>
        <ui-button class="w-full mb-12">
          {{ t("navigationBar.join") }}
        </ui-button>
        <layout-navigation-items :items="items" class="-mx-10" />
      </div>
    </template>
    <template #mini>
      <div class="navigation-bar__mini-content"></div>
    </template>
  </ui-aside-bar>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ILayoutNavigationItem } from "@/types";

import IconViewDashboard from "~icons/mdi/view-dashboard";
import IconBorderAll from "~icons/mdi/border-all";
import IconAccount from "~icons/mdi/account";

const { t } = useI18n();
const items: ILayoutNavigationItem[] = [
  {
    name: t("navigationBar.items.all"),
    route: "/",
    icon: IconBorderAll,
  },
  {
    name: t("navigationBar.items.dashboard"),
    route: "/dashboard",
    icon: IconViewDashboard,
  },
  {
    name: t("navigationBar.items.friends"),
    route: "/friends",
    icon: IconAccount,
  },
];
</script>

<style lang="scss">
.navigation-bar {
}
</style>
