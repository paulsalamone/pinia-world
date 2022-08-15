<template>
  <div>
    <h3>CAMPAIGN TWO CONTENT for {{ store.name }}</h3>
    <h2>Count: {{ store.count }}</h2>
    <button @click="store.increment(1)">Increment</button>
    <h3>Doubled: {{ store.doubleCount }}</h3>
  </div>
</template>

<script setup>
import { useStore2 } from './store2'

const store = useStore2()

console.log(store)
</script>
