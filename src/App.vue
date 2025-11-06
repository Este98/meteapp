<script setup>
import { RouterView, RouterLink } from "vue-router";
import FooterComponent from "./components/Footer.vue";
import HeaderComponent from "./components/header.vue";
</script>

<template>
  <div class="page">
    <header>
      <HeaderComponent />
    </header>

    <main class="main">
      <RouterView />
    </main>

    <FooterComponent />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  
}

.main {
  flex-grow: 1;
}
</style>
