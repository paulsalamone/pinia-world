import { defineStore } from 'pinia'

export const useStore1 = defineStore('store1', {
  state: () => {
    return { count: 0, name: 'paul salamone' }
  },
  actions: {
    increment(val = 1) {
      this.count += val
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
