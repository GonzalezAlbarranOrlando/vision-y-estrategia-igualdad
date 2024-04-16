import { createApp } from 'vue'
import App from './App.vue'
//vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. Define route components.
import Inicio from './components/pages/Inicio.vue'
import Contacto from './components/pages/Contacto.vue'
import Nosotros from './components/pages/Nosotros.vue'
import Template from './components/pages/Template.vue'
import NMX_025 from './components/pages/servicios/NMX_025/NMX_025.vue'
import Perspectiva_de_genero from './components/pages/servicios/Perspectiva_de_genero/Perspectiva_de_genero.vue'

import BoletinesHome from '@/components/pages/boletines/BoletinesHome.vue'
import IgualdadSalarial from '@/components/pages/boletines/IgualdadSalarial.vue'
import Legisladoras from '@/components/pages/boletines/Legisladoras.vue'
import Tres_tipos_de_lenguaje from '@/components/pages/boletines/Tres_tipos_de_lenguaje.vue'
import Lenguaje_incluyente from '@/components/pages/boletines/Lenguaje_incluyente.vue'
import Mamas_sin_trabajo from '@/components/pages/boletines/Mamas_sin_trabajo.vue'
import Norma_Mexicana from '@/components/pages/boletines/Norma_Mexicana.vue'
import Planes_de_accesibilidad from '@/components/pages/boletines/Planes_de_accesibilidad.vue'
import La_igualdad_sustantiva from '@/components/pages/boletines/La_igualdad_sustantiva.vue'
import Presupuesto_público from '@/components/pages/boletines/Presupuesto_público.vue'

// 2. Define some routes
// Each route should map to a component.
const routes = [
    { path: '/', component: Inicio },
    { path: '/contacto', component: Contacto },
    { path: '/nosotros', component: Nosotros },
    { path: '/template', component: Template },
    { path: '/NMX_025', component: NMX_025 },
    { path: '/Perspectiva_de_g%C3%A9nero', component: Perspectiva_de_genero },

    { path: '/boletines', component: BoletinesHome },
    { path: '/boletines/IgualdadSalarial', component: IgualdadSalarial },
    { path: '/boletines/Legisladoras', component: Legisladoras },
    { path: '/boletines/Tres_tipos_de_lenguaje', component: Tres_tipos_de_lenguaje },
    { path: '/boletines/Lenguaje_incluyente', component: Lenguaje_incluyente },
    { path: '/boletines/Mam%C3%A1s_sin_trabajo', component: Mamas_sin_trabajo },
    { path: '/boletines/Planes_de_accesibilidad', component: Planes_de_accesibilidad },
    { path: '/boletines/Norma_Mexicana', component: Norma_Mexicana },
    { path: '/boletines/La_igualdad_sustantiva', component: La_igualdad_sustantiva },
    { path: '/boletines/Presupuesto_p%C3%BAblico', component: Presupuesto_público },
    
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