<script setup>
  import { RouterView, RouterLink } from "vue-router";
  import FooterComponent from "./components/Footer.vue";
  import HeaderComponent from "./components/header.vue";
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <RouterView />
  </main>

  <FooterComponent />
  
</template>