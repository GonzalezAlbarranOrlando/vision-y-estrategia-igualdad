import { createApp } from 'vue'
import App from './App.vue'
//vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. Define route components.
import Inicio from './components/pages/Inicio.vue'
import Contacto from './components/pages/Contacto.vue'
import Nosotros from './components/pages/Nosotros.vue'
import Template from './components/pages/Template.vue'
import Boletines from './components/pages/Boletines.vue'
import NMX_025 from './components/pages/servicios/NMX_025/NMX_025.vue'
import Perspectiva_de_genero from './components/pages/servicios/Perspectiva_de_genero/Perspectiva_de_genero.vue'


// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Inicio },
    { path: '/contacto', component: Contacto },
    { path: '/nosotros', component: Nosotros },
    { path: '/template', component: Template },
    { path: '/boletines', component: Boletines },
    { path: '/NMX_025', component: NMX_025 },
    { path: '/Perspectiva_de_g%C3%A9nero', component: Perspectiva_de_genero },
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// use the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')