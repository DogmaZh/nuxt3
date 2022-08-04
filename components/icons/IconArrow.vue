<template>
  <div
    :class="[
      'i-mdi-arrow-right',
      size,
      'cursor-pointer',
      'origin-center',
      'rotate-0',
      transform,
    ]"
  ></div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { EDirections } from "@/shared/types";

const props = defineProps({
  size: {
    type: String,
    default: "text-base",
  },
  direction: {
    type: Number as PropType<EDirections>,
    default: EDirections.right,
  },
});

const transform = computed(() => {
  switch (props.direction) {
    case EDirections.right:
      return "rotate-0";

    case EDirections.bottom:
      return "rotate-90";

    case EDirections.left:
      return "rotate-180";

    case EDirections.top:
      return "rotate-270";
  }
});
</script>
