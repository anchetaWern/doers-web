import { defineNuxtPlugin } from '#app'
import VueGoogleMaps from '@fawmi/vue-google-maps'
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: apiKey,
    },
  })
})
