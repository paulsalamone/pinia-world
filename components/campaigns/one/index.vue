<template>
  <div class="container">
    <div
      class="box1"
      :style="{
        backgroundColor: `hsl(${store.hsl.hue}, ${store.hsl.saturation}%, ${store.hsl.lightness}%)`,
      }"
    >
      <div
        class="box2"
        :style="{
          backgroundColor: `hsl(${store.hsl.hue + 10}, ${
            store.hsl.saturation + 10
          }%, ${store.hsl.lightness + 10}%)`,
        }"
      >
        <div
          class="box3"
          :style="{
            backgroundColor: `hsl(${store.hsl.hue + 20}, ${
              store.hsl.saturation + 20
            }%, ${store.hsl.lightness + 20}%)`,
          }"
        ></div>
      </div>
    </div>
    <div class="controls">
      <h4>HSL Color:</h4>
      <p>increment each dimension by 10:</p>
      <ul>
        <li>
          Hue: {{ store.hsl.hue }}
          <button @click="store.decrement('hue', 360, 10)">-</button
          ><button @click="store.increment('hue', 360, 10)">+</button>
        </li>
        <li>
          Saturation: {{ store.hsl.saturation }}
          <button @click="store.decrement('saturation', 100, 10)">-</button
          ><button @click="store.increment('saturation', 100, 10)">+</button>
        </li>
        <li>
          Lightness: {{ store.hsl.lightness
          }}<button @click="store.decrement('lightness', 100, 10)">-</button
          ><button @click="store.increment('lightness', 100, 10)">+</button>
        </li>
      </ul>
      <!-- <button @click="store.randomize()">randomize</button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore1 } from './store1'

const store = useStore1()

console.log(store)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}
.box1 {
  width: 500px;
  height: 500px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box2 {
  width: 350px;
  height: 350px;
  display: flex;

  justify-content: center;
  align-items: center;
}
.box3 {
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
