<template>
  <div>
    <ui-text-field v-model="newItem" />
    <button @click="addItem">Add</button>
    <div>
      <span v-for="item in listItems">{{ item }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useListStore } from "@/store/list";

definePageMeta({
  layout: "custom",
  title: "Index page",
});

const newItem = ref("");

const listStore = useListStore();
const listItems = computed(() => listStore.list);

const addItem = () => {
  listStore.addItem(newItem.value);
};
</script>
