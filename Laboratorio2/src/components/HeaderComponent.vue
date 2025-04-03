    <template>
        <nav class="navbar">
        <div class="logo-container">
            <img src="/logoRes.jpg" alt="Logo de la aplicación" class="logo" />
        </div>
        <ul>
            <li><a href="#" @click.prevent="cambiarSeccion('inicio')">Inicio</a></li>
            <li><a href="#" @click.prevent="cambiarSeccion('acerca')">Acerca</a></li>
            <li><a href="#" @click.prevent="cambiarSeccion('contacto')">Contacto</a></li>
        </ul>
        </nav>
    </template>

    <script setup>
    import { defineEmits } from 'vue';

    const emit = defineEmits(['cambiar-seccion']);

    const cambiarSeccion = (seccion) => {
        emit('cambiar-seccion', seccion);
    };
    </script>

    <style scoped>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(6, 6, 6);
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
        width: 70px; /* Ajusta el tamaño según necesites */
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