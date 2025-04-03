<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';

const seccionActiva = ref('inicio');
</script>

<template>
  <HeaderComponent @cambiar-seccion="seccionActiva = $event" />
  <div class="contenido">
    <div v-if="seccionActiva === 'inicio'">
    </div>
    <div v-if="seccionActiva === 'acerca'">
    </div>
    <div v-if="seccionActiva === 'contacto'">
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.contenido {
  padding: 20px;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>