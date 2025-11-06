<template>
  <header class="header">
    <div class="logo-container">
      <RouterLink :to= "{name: 'Meteo'}" class="link">
        <img src="/images/logo.png" alt="Logo du site" class="logo" />
        <h1>METEAPP</h1>
      </RouterLink>
    </div>
  </header>
</template>

<script setup>



</script>

<style scoped>
@font-face{
    font-family: "Tilt";
    src: url('../../public/fonts/TiltWarp.ttf')
}

.header {
  display: flex;
  justify-content: center;   
  align-items: center;
  margin-top: 150px;       
  padding: 20px 0;
  height: 160px;             
}

/* conteneur vertical */
.logo-container {
  display: flex;
  flex-direction: column;    
  align-items: center;
     
      
}

/* logo */
.logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-left: 10px;
}

/* titre */
h1 {
    font-family: "Tilt", Calibri, sans-serif;
  margin-top: 10px;          
  font-size: 1.8rem;
  font-weight: bold;
  color: #4E505F;
  
}

.link {
  text-decoration: none;
  color: inherit;
}


</style>
