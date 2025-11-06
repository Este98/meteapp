<script setup>
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <nav aria-label="Footer navigation">
      <ul class="footer-links">
        <li class="liens-footer">
          <RouterLink :to= "{name: 'MentionsLegales'}" class="nav-link">Mentions légales</RouterLink>
        </li>
            |  
        <li>
          <RouterLink :to= "{name: 'APropos'}" class="nav-link">À propos de nous</RouterLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>