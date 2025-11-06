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
    error.value = "🌧️ Les données météo ne sont pas disponibles pour le moment.";
  } finally {
    loading.value = false;
  }
}

onMounted(chargerMeteo);

watch(ville, chargerMeteo);
</script>


<template>
  <div class="meteo-view">


    <form class="form-list" @submit.prevent>
      <label for="ville" class="form-label">Choisir une ville :</label>
      <div class=" selection d-flex gap-2">
        <select id="ville" v-model="ville" class="form-select w-auto">
          <option v-for="v in villes" :key="v.code" :value="v.code">{{ v.nom }}</option>
        </select>
      </div>
    </form>

    <h2 class="title">{{ ville }}</h2>

    <div class="mt-4">
      <div v-if="loading" class="alert alert-secondary">Chargement...</div>
      <div v-else-if="error" class="alert alert-danger">Erreur : {{ error }}</div>

      <div v-else-if="meteo">
        <div class="container">

          <div class="main-card">
            <h3 classe="card-title">Date</h3>
            <div class="row row-main">
              <img :src="meteo.current.icon" alt="meteo actuelle" width="64" height="64" />
              <p>{{ meteo.current.tmp }}°C</p>
              <div class="min-max">
                <p class="min">Min <br> {{ meteo.current.tmin }}°C</p>
                <p class="max">Max <br> {{ meteo.current.tmax }}°C</p>
              </div>
            </div>
            <div class="row">
              <p>Matin</p>
              <p>Midi</p>
              <p>Soir</p>
            </div>
            <div class="row">
              <img :src="meteo.current.icon" alt="meteo actuelle" width="64" height="64" />
              <img :src="meteo.current.icon" alt="meteo actuelle" width="64" height="64" />
              <img :src="meteo.current.icon" alt="meteo actuelle" width="64" height="64" />
            </div>
          </div>
          <div class="container-cards">
          <div v-for="j in meteo.days" :key="j.day_long">
            <div class="card">
              <h3>{{ j.day_long }}</h3>
              <img :src="j.icon" :alt="j.condition" width="64" height="64" />
              <div class="row">
                <p class="min">{{ j.tmin }}°C</p>
                <p class="max">{{ j.tmax }}°C</p>
              </div>
            </div>
            </div>

          </div>
        </div>



        <div class="text-center mb-3">
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
