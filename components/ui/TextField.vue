<template>
  <input v-model="innerValue" />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{ (e: "update:modelValue", value: string) }>();

const innerValue = ref("");

watch(
  () => props.modelValue,
  (value) => (innerValue.value = value)
);
watch(innerValue, (value) => emit("update:modelValue", value));

onMounted(() => {
  innerValue.value = props.modelValue;
});
</script>
