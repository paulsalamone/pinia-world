<template>
  <div>
    <header>
      <h1>Nuxt2 / Pinia Test</h1>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/parent/campaign1">Campaign One</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/parent/campaign2">Campaign Two</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <NuxtChild />
  </div>
</template>

<script></script>

<style scoped>
header {
  display: flex;
  align-items: center;
  background-color: lightgoldenrodyellow;
}
ul {
  list-style: none;
  display: flex;
  align-items: left;
  justify-content: left;
  padding: 0;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
}
.activeOn {
  color: white;
  background-color: #444;
}
</style>
