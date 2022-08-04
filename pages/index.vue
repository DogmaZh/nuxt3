<template>
  <div class="all-courses-page">All courses</div>
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
