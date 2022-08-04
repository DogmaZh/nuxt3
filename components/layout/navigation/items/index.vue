<template>
  <div
    :class="[
      'layout-navigation-items',
      { ['layout-navigation-items--mini']: mini },
    ]"
  >
    <div
      class="layout-navigation-items__highlight"
      :style="{ top: `${highlightTop}px` }"
    ></div>
    <NuxtLink
      class="layout-navigation-items__item group"
      v-for="item in items"
      activeClass="layout-navigation-items__item--active"
      :to="item.route"
    >
      <div
        :class="['layout-navigation-items__item-icon', item.icon, 'text-2xl']"
      />
      <span v-if="!mini" class="layout-navigation-items__item-text">
        {{ item.name }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import { ILayoutNavigationItem } from "@/shared/types";

const props = defineProps({
  items: {
    type: Array as PropType<ILayoutNavigationItem[]>,
    default: () => [],
  },
  mini: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

const routeIndex = computed(() =>
  props.items.findIndex((item) => item.route === router.currentRoute.value.path)
);
const highlightTop = computed(() => {
  const itemHeight = 24;
  const itemMargin = 32;
  const offset = -8;

  if (routeIndex.value === 0) {
    return offset;
  } else {
    return routeIndex.value * (itemHeight + itemMargin) + offset;
  }
});
</script>

<style lang="scss">
.layout-navigation-items {
  @apply flex flex-col justify-center relative;
  $root: &;

  &--mini {
    & #{$root}__item {
      @apply ml-0 justify-center;
    }

    & #{$root}__item-icon {
      @apply mr-0;
    }
  }

  &__item {
    @apply mb-8 last:mb-0 flex ml-10;

    &--active {
      & #{$root}__item-icon {
        @apply text-primary;
      }

      & #{$root}__item-text {
        @apply text-black;
      }
    }
  }

  &__item-icon {
    @apply text-inactive group-hover:text-primary mr-7 shrink-0;
  }

  &__item-text {
    @apply text-inactive group-hover:text-black font-medium whitespace-nowrap text-ellipsis overflow-hidden;
  }

  &__highlight {
    @apply absolute right-0 block h-10 w-1 bg-primary rounded-xl transition-all;
  }
}
</style>
