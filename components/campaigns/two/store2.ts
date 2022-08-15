import { defineStore } from 'pinia'
import { useGlobalStore } from '@/stores/global'

export const useStore2 = defineStore('store2', {
  state: () => {
    return {
      count: 0,
      name: 'wayne brady',
      globalStore: useGlobalStore(),
    }
  },
  actions: {
    increment(val = 1) {
      this.count += val
      this.globalStore.points += 1
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
