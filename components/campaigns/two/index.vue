<template>
  <div>
    <p>
      Note: This campaign uses a <i>local</i> Pinia state + the
      <b>Options</b> API
    </p>

    <h3>CAMPAIGN TWO CONTENT for {{ name }}</h3>
    <h2>Count: {{ count }}</h2>
    <button @click="handleIncrement(1)">Increment</button>
    <!-- <h3>Doubled: {{ store.doubleCount }}</h3> -->
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useStore2 } from './store2'

export default {
  computed: {
    ...mapState(useStore2, ['name', 'count']),
  },
  methods: {
    ...mapActions(useStore2, ['increment']),
    handleIncrement(val: number) {
      this.increment(val)
    },
  },
}
</script>
