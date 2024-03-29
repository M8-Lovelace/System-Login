// Importar las librerías de Vue, Vue Router y Quasar
import { createApp } from "vue";
import { router } from "./routes/routes.js";
import { Quasar, Loading, Dialog, BottomSheet, Notify } from "quasar";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Importaciones de quasar
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

// Importar el componente principal de la aplicación
import App from "./App.vue";

// Pinia para manejar el estado de la aplicación
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

// Crear la instancia de Vue y pasarle el router y quasar
const myApp = createApp(App)
  .use(Quasar, { plugins: { Loading, Dialog, BottomSheet, Notify } })
  .use(router)
  .use(pinia);

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
