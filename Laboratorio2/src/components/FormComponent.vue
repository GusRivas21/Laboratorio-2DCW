<script setup>
    import {ref, reactive, computed} from 'vue'

    // Estado Reactivo para el pedido
    // Se utiliza reactive para crear un objeto reactivo que contiene los datos del pedido
    const pedido = reactive({
        name: "",
        amount: "",
        food: "",
        address: ""
    })

    // Se utiliza ref para crear una referencia reactiva para la lista de comidas
    // y para el estado de envío del pedido
    const comidas = ref([
        "Pizza", "Hamburguesa", "Sushi", "Tacos", "Nachos"
    ]);

    // Se utiliza ref para crear una referencia reactiva para el estado de enviado
    // Se inicializa en false, indicando que el pedido no ha sido enviado
    const enviado = ref(false)

    // Se define una función que se ejecuta al enviar el formulario
    // Esta función imprime el pedido en la consola y cambia el estado de enviado a true
    const pedidoHecho = () =>{
        console.log(pedido);
        enviado.value = true
    }

    // Se utiliza computed para crear una propiedad computada que genera un resumen del pedido
    // La propiedad computada se actualiza automáticamente cuando cambian los valores de pedido
    const resumen = computed(() => {
        return `${pedido.amount} x ${pedido.food} para ${pedido.name} en ${pedido.address}`
    })
</script>

<template>
    <div class="wallpaper">
        <h1>Ordene su Comida</h1>

        <div class="form-container">
            <form @submit.prevent="pedidoHecho" class="form">
                <div class="campo">
                    <label  for="name">Nombre</label>
                    <input v-model="pedido.name" type="text" id="name" placeholder="Su Nombre" required>

                    <label for="food">Seleccione su Comida</label>
                        <select v-model="pedido.food">
                            <option disabled value=""> Elija su Comida </option>
                            <option v-for="comida in comidas" :key="comida" :value="comida">{{ comida }} </option>
                        </select>

                    <label for="amount">Cantidad</label>
                    <input v-model="pedido.amount" type="number" id="amount" placeholder="0" required>

                    <label for="address">Direccion de Entrega</label>
                    <textarea v-model="pedido.address" type="text" id="address" placeholder="Su Direccion" required></textarea>

                    <button>
                        Enviar
                    </button>
                    <p v-if="enviado">¡Gracias por su pedido!</p>
                    <p v-if="enviado && pedido.name && pedido.food && pedido.amount">
                        {{ resumen }}
                    </p>

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
    color: #333;
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