import { defineStore } from 'pinia'
import { useGlobalStore } from '@/stores/global'

export const useStore1 = defineStore('store1', {
  state: () => {
    return {
      hsl: {
        hue: 50,
        saturation: 20,
        lightness: 50,
      },

      globalStore: useGlobalStore(),
    }
  },
  actions: {
    // randomize(): void {
    //   this.hsl.hue += Math.floor(Math.random() / 8)
    //   this.hsl.saturation += Math.floor(Math.random() / 5)
    //   this.hsl.lightness += Math.floor(Math.random() / 6)
    // },
    increment(dimension: string, limit: number, amount: number): void {
      switch (dimension) {
        case 'hue':
          this.hsl.hue < 360 ? (this.hsl.hue += amount) : (this.hsl.hue = 0)
          this.globalStore.points += 1

          break
        case 'saturation':
          this.hsl.saturation < 100
            ? (this.hsl.saturation += amount)
            : (this.hsl.saturation = 0)
          this.globalStore.points += 1

          break
        case 'lightness':
          this.hsl.lightness < 100
            ? (this.hsl.lightness += amount)
            : (this.hsl.lightness = 0)
          this.globalStore.points += 1

          break
        default:
          break
      }
    },
    decrement(dimension: string, limit: number, amount: number) {
      switch (dimension) {
        case 'hue':
          this.hsl.hue > 0 ? (this.hsl.hue -= amount) : (this.hsl.hue = 360)
          this.globalStore.points += 1

          break
        case 'saturation':
          this.hsl.saturation > 0
            ? (this.hsl.saturation -= amount)
            : (this.hsl.saturation = 100)
          this.globalStore.points += 1

          break
        case 'lightness':
          this.hsl.lightness > 0
            ? (this.hsl.lightness -= amount)
            : (this.hsl.lightness = 100)
          this.globalStore.points += 1

          break
        default:
          break
      }
    },
  },
  getters: {
    // these are like computeds
  },
})
