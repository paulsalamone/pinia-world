import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { userName: '', points: 0 }
  },
  actions: {
    increment(val = 1) {
      this.points += val
    },
    setUserName(name: string) {
      this.userName = name
    },
  },
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
})
