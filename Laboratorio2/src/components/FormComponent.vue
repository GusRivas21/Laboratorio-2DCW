<script setup>
import {ref, reactive} from 'vue'

const pedido = reactive({
    name: "",
    amount: "",
    food: "",
    address: ""
})

const pedidoHecho = () =>{
    console.log(pedido);
}

</script>

<template>

<div class="wallpaper">
    <h1>Ordene su Comida</h1>

    <div class="form-container">
        <form @submit.prevent="pedidoHecho" class="form">
            <div class="campo">
                <label  for="name">Nombre</label>
                <input v-model="pedido.name" type="text" id="name" placeholder="Su Nombre">

                <label for="food" placeholder="elija">Seleccione su Comida</label>
                    <select v-model="pedido.food">
                        <option value="">Elija su Comida</option>
                        <option value="pizza">Pizza</option>
                        <option value="hamburguesa">Hamburguesa</option>
                        <option value="sushi">Sushi</option>
                        <option value="tacos">Tacos</option>
                        <option value="Nachos">Nachos</option>
                    </select>

                <label for="amount">Cantidad</label>
                <input v-model="pedido.amount" type="number" id="amount" placeholder="0">

                <label for="address">Direccion de Entrega</label>
                <textarea v-model="pedido.address" type="text" id="address" placeholder="Su Direccion"></textarea>

                <button>Enviar</button>
            </div>
        </form>
    </div>
</div>

</template>

<style scoped>

    .wallpaper{
        background-image: url(https://i.pinimg.com/736x/b8/57/f6/b857f6eeed86bc1eda743afec402b194.jpg);
        background-size: cover;
        background-position: center;
        min-height: 100vh;
    }

    h1 {
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 2.5rem;
    color: white;
    }

    .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    }

    .form {
    background: rgba(255, 255, 255, 0.5);
    padding: 2rem 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    }

    .campo {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    }

    .campo label {
    font-weight: bold;
    color: black;
    margin-bottom: 0.5rem;
    }

    .campo input {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    }

    .campo select {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #fff;
    appearance: none;
    }

    textarea {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    outline: none;
    }

    button {
    margin-top: 1rem;
    padding: 0.8rem;
    width: 100%;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    }

</style>