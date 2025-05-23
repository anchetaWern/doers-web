// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { mdi } from 'vuetify/iconsets/mdi'
import { aliases } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'vercel',
    prerender: {
      autoSubfolderIndex: false
    }
  },

  modules: ['@nuxt/icon'],

  vuetify: {
    // Add this
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],

  build: {
    transpile: ['vuetify'],
  },

 

  srcDir: 'src/',

})
