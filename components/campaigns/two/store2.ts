import { defineStore } from 'pinia'
import { useGlobalStore } from '@/stores/global'

export const useStore2 = defineStore('store2', {
  state: () => {
    return {
      borders: [3, 2, 1],
      globalStore: useGlobalStore(),
    }
  },
  actions: {
    increment(box: number): void {
      this.borders[box] += 1
    },
    decrement(box: number): void {
      this.borders[box] -= 1
    },
  },
  getters: {},
})
