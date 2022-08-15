import { defineStore } from 'pinia'

export const usePaulStore = defineStore('paul', {
  state: () => {
    return { count: 0 }
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
