<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <div class="not-found">
    <h1>Page 404 !</h1>
    <p>Désolé, cette page n'existe pas.</p>
    <RouterLink :to="{name: 'Meteo'}">Retourner à l'accueil</RouterLink>
    
    </div>
</template>