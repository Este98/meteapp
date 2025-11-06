// src/services/meteo.js
const API_BASE = "https://www.prevision-meteo.ch/services/json";

export async function fetchMeteo(villeCode) {
  const res = await fetch(`${API_BASE}/${villeCode}`);
  if (!res.ok) {
    throw new Error(`Erreur HTTP ${res.status}`);
  }
  const data = await res.json();

  // Récupération des 3 prochains jours
  const days = [data.fcst_day_0, data.fcst_day_1, data.fcst_day_2].map((d) => ({
    day_long: d.day_long,
    condition: d.condition,
    icon: d.icon,
    tmin: d.tmin,
    tmax: d.tmax
  }));

  return {
    city: data.city_info.name,
    current: {
      tmp: data.current_condition.tmp,
      condition: data.current_condition.condition,
      icon: data.current_condition.icon
    },
    days
  };  
}

