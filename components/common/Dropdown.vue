<template>
  <popper hover @open:popper="show = true" @close:popper="show = false">
    <div class="dropdown flex items-center">
      <div class="dropdown__activator">
        <slot />
      </div>
      <div
        v-if="arrow"
        :class="[
          'dropdown__chevron i-mdi-chevron-down text-base',
          { ['dropdown__chevron--show']: show },
        ]"
      />
    </div>
    <template #content>
      <div class="dropdown__content">
        <slot name="content" />
      </div>
    </template>
  </popper>
</template>

<script setup lang="ts">
import Popper from "vue3-popper";

const props = defineProps({
  arrow: {
    type: Boolean,
    default: true,
  },
});

const show = ref(false);
</script>

<style lang="scss">
.dropdown {
  &__content {
    @apply border border-solid border-black rounded shadow-md bg-white;
  }

  &__chevron {
    @apply origin-center rotate-0 transition-transform ml-6;

    &--show {
      @apply origin-center rotate-180 transition-transform;
    }
  }
}
</style>
