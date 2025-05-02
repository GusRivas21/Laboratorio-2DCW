<script setup>
import ServicesBG from '@/components/img/fondoServices.jpg'
</script>

<template>
  <section class="relative bg-cover bg-center py-16 px-4" :style="{ backgroundImage: `url(${ServicesBG})` }">
    <div class="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center text-gray-900">
      <div class="bg-white rounded-full shadow-lg p-6 w-64 h-64 flex flex-col justify-center items-center mx-auto transition-transform hover:scale-105">
        <img src="./img/pizza.png" alt="Atención a la Mesa" class="w-16 h-16 mb-4" />
        <h3 class="font-bold text-lg mb-1">Atención a la Mesa</h3>
        <p class="text-sm text-gray-700">
          Disfruta de nuestra comida sin necesidad de levantarte de tu mesa.
        </p>
      </div>

      <div class="bg-white rounded-full shadow-lg p-6 w-64 h-64 flex flex-col justify-center items-center mx-auto transition-transform hover:scale-105">
        <img src="./img/delivery.png" alt="Delivery" class="w-16 h-16 mb-4" />
        <h3 class="font-bold text-lg mb-1">Delivery</h3>
        <p class="text-sm text-gray-700">¿No tienes tiempo para visitarnos? Te lo llevamos.</p>
      </div>

      <div class="bg-white rounded-full shadow-lg p-6 w-64 h-64 flex flex-col justify-center items-center mx-auto transition-transform hover:scale-105">
        <img src="./img/reservar.png" alt="Reservaciones" class="w-16 h-16 mb-4" />
        <h3 class="font-bold text-lg mb-1">Reservaciones</h3>
        <p class="text-sm text-gray-700">
          Reserva una mesa para tu familia o pareja y disfruta.
        </p>
      </div>

      <div class="bg-white rounded-full shadow-lg p-6 w-64 h-64 flex flex-col justify-center items-center mx-auto transition-transform hover:scale-105">
        <img src="./img/coctel.png" alt="Bar y Coctelería" class="w-16 h-16 mb-4" />
        <h3 class="font-bold text-lg mb-1">Bar y Coctelería</h3>
        <p class="text-sm text-gray-700">Disfruta de todo tipo de bebidas en nuestro bar.</p>
      </div>

      <div class="bg-white rounded-full shadow-lg p-6 w-64 h-64 flex flex-col justify-center items-center mx-auto transition-transform hover:scale-105">
        <img src="./img/catering.png" alt="Catering" class="w-16 h-16 mb-4" />
        <h3 class="font-bold text-lg mb-1">Catering</h3>
        <p class="text-sm text-gray-700">
          Menús personalizados para eventos o reuniones.
        </p>
      </div>

      <div class="bg-white rounded-full shadow-lg p-6 w-64 h-64 flex flex-col justify-center items-center mx-auto transition-transform hover:scale-105">
        <img src="./img/wifi.png" alt="Wi-Fi Gratis" class="w-16 h-16 mb-4" />
        <h3 class="font-bold text-lg mb-1">Wi-Fi Gratis</h3>
        <p class="text-sm text-gray-700">Wi-Fi gratuito para nuestros queridos clientes.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 15px 20px;
  color: white;
  width: 100%;
  box-sizing: border-box;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 80px;
  height: auto;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.navbar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>