<template>
  <div>
    <h3>CAMPAIGN ONE CONTENT for {{ store.name }}</h3>
    <h2>Count: {{ store.count }}</h2>
    <button @click="store.increment(1)">Increment</button>
  </div>
</template>

<script setup>
import { useStore1 } from './store1'

const store = useStore1()

console.log(store)
</script>
