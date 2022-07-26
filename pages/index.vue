<template>
  <div>Index page</div>
</template>

<script setup lang="ts">
import { useListStore } from "@/store/list";

definePageMeta({
  layout: "account",
  title: "Index page",
});

const newItem = ref("");

const listStore = useListStore();
const listItems = computed(() => listStore.list);

const addItem = () => {
  listStore.addItem(newItem.value);
};
</script>
