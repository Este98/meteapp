<script setup>
import { ref, onMounted, watch } from "vue";
import { fetchMeteo } from "../services/meteo.js";

const villes = [
  { code: "bordeaux", nom: "Bordeaux" },
  { code: "arcachon", nom: "Arcachon" },
  { code: "libourne", nom: "Libourne" },
  { code: "blaye", nom: "Blaye" },
  { code: "langon", nom: "Langon" }
];

const ville = ref("bordeaux");
const meteo = ref(null);
const loading = ref(false);
const error = ref("");

async function chargerMeteo() {
  error.value = "";
  loading.value = true;
  meteo.value = null;
  try {
    meteo.value = await fetchMeteo(ville.value);
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}

onMounted(chargerMeteo);

watch(ville, chargerMeteo);
</script>


<template>
  <div class="">
    <h1 class="">🌦️ Météo — Gironde</h1>

    <form class="d-flex flex-column align-items-center gap-2" @submit.prevent>
      <label for="ville" class="form-label">Choisir une ville :</label>
      <div class="d-flex gap-2">
        <select id="ville" v-model="ville" class="form-select w-auto">
          <option v-for="v in villes" :key="v.code" :value="v.code">{{ v.nom }}</option>
        </select>
      </div>
    </form>

    <div class="mt-4">
      <div v-if="loading" class="alert alert-secondary">Chargement...</div>
      <div v-else-if="error" class="alert alert-danger">Erreur : {{ error }}</div>

      <div v-else-if="meteo">
        <div class="text-center mb-3">
          <h2>{{ meteo.city }}</h2>
          <p>{{ meteo.current.condition }} — {{ meteo.current.tmp }}°C</p>
          <img :src="meteo.current.icon" alt="meteo actuelle" width="64" height="64" />
        </div>

        <section class="row g-3">
          <div v-for="j in meteo.days" :key="j.day_long" class="col-12 col-md-4">
            <div class="card p-3 text-center">
              <h5>{{ j.day_long }}</h5>
              <img :src="j.icon" :alt="j.condition" width="64" height="64" />
              <p>{{ j.tmin }}°C / {{ j.tmax }}°C</p>
              <p class="text-muted">{{ j.condition }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>