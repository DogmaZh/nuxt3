<template>
  <div
    :class="['aside-bar', { ['aside-bar--right']: right }, position]"
    :style="{ width: innerValue ? width : widthMini }"
  >
    <component
      :is="innerValue ? hideIconVisible : hideIconHidden"
      class="aside-bar__hide"
      @click="innerValue = !innerValue"
    />

    <div v-if="innerValue" class="aside-bar__content-full">
      <slot name="full" />
    </div>
    <div v-else class="aside-bar__content-mini">
      <slot name="mini" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowLeft from "~icons/mdi/arrow-left";
import IconArrowRight from "~icons/mdi/arrow-right";

const emit = defineEmits<{
  (event: "update:model-value", state: boolean): void;
}>();
const props = defineProps({
  left: {
    type: Boolean,
    default: true,
  },
  right: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: "272px",
  },
  widthMini: {
    type: String,
    default: "60px",
  },
});

const innerValue = ref(props.modelValue);

const position = computed(() => (props.right ? "right-0" : "left-0"));

const hideIconHidden = computed(() =>
  props.right ? IconArrowLeft : IconArrowRight
);
const hideIconVisible = computed(() =>
  props.right ? IconArrowRight : IconArrowLeft
);

watch(innerValue, (value) => emit("update:model-value", value));
</script>

<style lang="scss">
.aside-bar {
  @apply absolute h-screen top-0 bg-white transition-width z-10;
  $root: &;

  &--right {
    & #{$root}__hide {
      @apply left-5;
    }
  }

  &__hide {
    @apply absolute top-4 right-5 cursor-pointer;
  }

  &__content {
    @apply w-full;
  }
}
</style>
