<script setup>
  import { RouterView, RouterLink } from "vue-router";
  import Header from "./components/header.vue";
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <RouterView />
  </main>
</template>
