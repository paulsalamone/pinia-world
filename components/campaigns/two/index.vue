<template>
  <div class="container">
    <div class="box0" :style="{ border: `${store.borders[0]}px solid black` }">
      <div
        class="box1"
        :style="{ border: `${store.borders[1]}px solid black` }"
      >
        <div
          class="box2"
          :style="{ border: `${store.borders[2]}px solid black` }"
        ></div>
      </div>
    </div>

    <div class="controls">
      <h4>Borders:</h4>
      <p>increment borders:</p>
      <ul>
        <li>
          Border 1: {{ store.borders[0]
          }}<button @click="store.decrement(0)">-</button
          ><button @click="store.increment(0)">+</button>
        </li>
        <li>
          Border 2: {{ store.borders[1]
          }}<button @click="store.decrement(1)">-</button
          ><button @click="store.increment(1)">+</button>
        </li>
        <li>
          Border 3: {{ store.borders[2]
          }}<button @click="store.decrement(2)">-</button
          ><button @click="store.increment(2)">+</button>
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
* {
  // border: 1px dotted gray;
}

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
