import { defineNuxtPlugin } from '#app'
import VueGoogleMaps from '@fawmi/vue-google-maps'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDYeSRVhHP_-RBcnbRg_Bv-H-2OIuOlY7I',
    },
  })
})
