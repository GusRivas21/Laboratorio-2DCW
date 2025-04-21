    <script setup>
        import { defineEmits } from 'vue';

        const emit = defineEmits(['cambiar-seccion']);

        const cambiarSeccion = (seccion) => {
            emit('cambiar-seccion', seccion);
        };
    </script>

    <template>
        <nav class="navbar">
        <div class="logo-container">
            <a href="/inicio"><img src="/logoRes.jpg" alt="Logo de la aplicación" class="logo"/></a>
        </div>
        <ul>
            <li><router-link to="/servicios">Servicios</router-link></li>
            <li><router-link to="/formulario">Formulario</router-link></li>
            <li><router-link to="/sobre_nosotros">Sobre Nosotros</router-link></li>
        </ul>
        </nav>
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

        a {
            background-color: black;
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