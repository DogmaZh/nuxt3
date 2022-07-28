<template>
  <popper hover @open:popper="show = true" @close:popper="show = false">
    <div class="dropdown flex items-center">
      <div class="dropdown__activator">
        <slot />
      </div>
      <icon-chevron-down
        :class="['dropdown__chevron', { ['dropdown__chevron--show']: show }]"
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
import IconChevronDown from "~icons/mdi/chevron-down";
import Popper from "vue3-popper";

const show = ref(false);
</script>

<style lang="scss">
.dropdown {
  &__activator {
    @apply mr-6;
  }

  &__content {
    @apply border border-solid border-black rounded shadow-md bg-white;
  }

  &__chevron {
    @apply origin-center rotate-0 transition-transform;

    &--show {
      @apply origin-center rotate-180 transition-transform;
    }
  }
}
</style>
