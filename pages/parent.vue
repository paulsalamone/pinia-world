<template>
  <div>
    <header>
      <div>
        <NuxtLink to="/parent/" class="nuxt-link"
          ><h1>Pinia World 🍍</h1></NuxtLink
        >
        <nav>
          <ul>
            <li>
              <NuxtLink to="/parent/campaign1"><a>Campaign One</a></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/parent/campaign2"><a>Campaign Two</a></NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="global">
        <p><b>Global State:</b></p>
        <p>
          username:
          <span class="userName">{{ globalStore.userName }}</span>
        </p>
        <p>
          <b>XP:</b> <span class="xp">{{ globalStore.points }}</span>
        </p>
      </div>
    </header>

    <NuxtChild />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '../stores/global'

const globalStore = useGlobalStore()
</script>

<style lang="scss">
body,
*,
html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(86, 29, 115);
  color: white;
  padding: 10px 100px;
  h1 {
    color: white;
    text-decoration: none;
    &:hover {
      color: yellow;
      cursor: pointer;
      text-decoration: none;
    }
    &:active {
      color: gold;
      text-decoration: none;
    }
  }
}
ul {
  list-style: none;
  display: flex;
  align-items: left;
  justify-content: left;
  padding: 0;
  // color: goldenrod;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
  a {
    color: goldenrod;
    text-decoration: none;
    &:hover {
      color: gold;
      cursor: pointer;
    }
  }
}
.activeOn {
  color: white;
  background-color: #444;
}
.xp {
  color: goldenrod;
}
.userName {
  color: goldenrod;
}
.global {
  text-align: right;
}
.nuxt-link {
  text-decoration: none;
}
</style>
