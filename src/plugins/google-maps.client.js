import { defineNuxtPlugin } from '#app'
import VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
    },
  })
})
