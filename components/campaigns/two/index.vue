<template>
  <div class="container">
    <div class="box0" :style="{ border: `${store.bordersO.b1}px solid black` }">
      <div
        class="box1"
        :style="{ border: `${store.bordersO.b2}px solid black` }"
      >
        <div
          class="box2"
          :style="{ border: `${store.bordersO.b3}px solid black` }"
        ></div>
      </div>
    </div>

    <div class="controls">
      <h4>Borders:</h4>
      <p>increment borders:</p>
      <ul>
        <li>
          Border 1: {{ store.bordersO.b1
          }}<button @click="store.decrement('b1')">-</button
          ><button @click="store.increment('b1')">+</button>
        </li>
        <li>
          Border 2: {{ store.bordersO.b2
          }}<button @click="store.decrement('b2')">-</button
          ><button @click="store.increment('b2')">+</button>
        </li>
        <li>
          Border 3: {{ store.bordersO.b3
          }}<button @click="store.decrement('b3')">-</button
          ><button @click="store.increment('b3')">+</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore2 } from './store2'

const store = useStore2()

console.log(store)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}
.box0 {
  width: 500px;
  height: 500px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box1 {
  width: 350px;
  height: 350px;
  display: flex;

  justify-content: center;
  align-items: center;
}
.box2 {
  width: 200px;
  height: 200px;
  display: flex;

  justify-content: center;
  align-items: center;
}
.controls {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px dotted grey;
  padding: 10px;
  ul {
    display: flex;
    flex-direction: column;
    li {
      margin: 5px 0;
      button {
        margin: 4px;
      }
    }
  }
}
</style>
