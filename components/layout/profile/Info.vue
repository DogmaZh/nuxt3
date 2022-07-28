<template>
  <div class="layout-profile-info">
    <ui-dropdown>
      <div class="flex items-center">
        <div class="block w-14 h-14 rounded-xl bg-slate-400 mr-6"></div>
        <span class="text-xl font-medium">Alexa Rogue</span>
      </div>
      <template #content>
        <div
          class="cursor-pointer hover:bg-primary hover:text-white px-4 py-1 border-b-2 border-black"
        >
          {{ t("profileInfo.account") }}
        </div>
        <div
          class="cursor-pointer hover:bg-primary hover:text-white px-4 py-1 border-black"
        >
          {{ t("profileInfo.logout") }}
        </div>
      </template>
    </ui-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const props = defineProps({
  mini: {
    type: Boolean,
    default: false,
  },
});

const { t } = useI18n();
</script>

<style lang="scss">
.layout-profile-info {
}
</style>
