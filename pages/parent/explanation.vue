<template>
<main>
      <h3>A demo of using state-management system <a href="https://pinia.vuejs.org/">Pinia</a> with Nuxt 2, for future use in DC campaigns. </h3>
  <h3>1. Enter a user name to get started: 

    <form v-if="!named"
    novalidate @submit.prevent="onSubmit">
<input type="text" placeholder="your name" v-model="name" name="name">
    <button type="submit">submit</button>
    </form>
    <h6 v-else>Thanks!</h6>
  </h3>
  <h3> 2. Choose a "campaign":</h3>

<ul>
            <li>
              <NuxtLink to="/parent/campaign1"
                ><a>Campaign One (composition API)</a></NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/parent/campaign2"
                ><a>Campaign Two (options API)</a></NuxtLink
              >
            </li>
          </ul>
  <p>
    <b>NOTES:</b>
    <ul>
      <li>• Pinia IS Vuex 5.</li>
      <li>• No longer requires Mutations</li>
      <li>• Can have multiple, modular and nested Pinia stores. (Allows local stores within component/campaign folders)</li>
      <li>
• Requires: Pinia @pinia/nuxt version 0.2.1 or below to work with Nuxt 2.
      </li>
      <li>• Best when used with Composition API.</li>
      <li>• For options API, click <a href="https://pinia.vuejs.org/cookbook/options-api.html">here.</a></li>
      <li>• Note the "global state" in upper right: XP adds experience points gained from interaction with both campaigns</li>
      <li>• Can be used in conjunction with Vuex (set nuxt.config buildModules to     ['@pinia/nuxt', { disableVuex: false }],
</li>
    </ul>
  </p>
  </main>
</template>

<script setup lang="ts">

import { useGlobalStore } from '@/stores/global'
import { ref } from "vue";

const global = useGlobalStore()

const name = ref("")

const named = ref(false)

function onSubmit() {
    global.setUserName(name.value);
    name.value = "";
    named.value = true;
}

</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
  max-width: 700px;
  ul {
    display: flex;
    flex-direction: column;
  }
}
</style>