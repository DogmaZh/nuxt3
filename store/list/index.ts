import { defineStore } from 'pinia';

export const useListStore = defineStore({
  id: 'list',
  state: () => ({
    items: ['item1', 'item2', 'item3'] as string[]
  }),
  actions: {
    addItem(item: string) {
      this.items.push(item)
    }
  },
  getters: {
    list: (state) => state.items
  }
})