<template>
  <div>
    <h1>Nuxt2 / Pinia Test</h1>
    <NuxtLink to="/parent"><h2>enter >></h2></NuxtLink>
    <br />
    <br />

    <p>quick links (hide):</p>
    <ul>
      <li>
        <NuxtLink to="/parent/campaign1"><a>Campaign One</a></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/parent/campaign2"><a>Campaign Two</a></NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss"></style>
