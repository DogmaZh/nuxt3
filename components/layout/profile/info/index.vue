<template>
  <div class="layout-profile-info">
    <common-dropdown :arrow="!mini">
      <div class="flex items-center">
        <div :class="[width, height, 'block rounded-xl bg-slate-400']"></div>
        <span v-if="!mini" class="text-xl font-medium ml-6">Alexa Rogue</span>
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
    </common-dropdown>
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

const width = computed(() => (props.mini ? "w-7" : "w-14"));
const height = computed(() => (props.mini ? "h-7" : "h-14"));
</script>

<style lang="scss">
.layout-profile-info {
}
</style>
