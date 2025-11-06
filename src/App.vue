<script setup>
  import { RouterView, RouterLink } from "vue-router";
  import FooterComponent from "./components/Footer.vue";
  import Header from "./components/header.vue";
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <RouterView />
  </main>

  <FooterComponent />
  
</template>
