import { defineStore } from 'pinia'

export const useStore2 = defineStore('store2', {
  state: () => {
    return { count: 0, name: 'wayne brady' }
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
