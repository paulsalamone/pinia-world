import { defineStore } from 'pinia'
import { useGlobalStore } from '@/stores/global'

export const useStore2 = defineStore('store2', {
  state: () => {
    return {
      borders: [3, 2, 1],
      bordersO: {
        b1: 20,
        b2: 5,
        b3: 1,
      },
      globalStore: useGlobalStore(),
    }
  },
  actions: {
    increment(box: string): void {
      console.log('increment')
      switch (box) {
        case 'b1':
          this.bordersO.b1 += 2
          break
        case 'b2':
          this.bordersO.b2 += 2
          break
        case 'b3':
          this.bordersO.b3 += 2
          break
        default:
          break
      }
      this.globalStore.points += 1
    },
    decrement(box: string): void {
      console.log('decrement')
      switch (box) {
        case 'b1':
          this.bordersO.b1 -= 2
          break
        case 'b2':
          this.bordersO.b2 -= 2
          break
        case 'b3':
          this.bordersO.b3 -= 2
          break
        default:
          break
      }
      this.globalStore.points += 1
    },
  },
  getters: {},
})
