<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
  <HeaderComponent/>

  <RouterView/>
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