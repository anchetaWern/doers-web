// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { mdi } from 'vuetify/iconsets/mdi'
import { aliases } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'vercel', // vercel | vercel-static
    prerender: {
      crawlLinks: true, 
      routes: ['/'],  
    }
  },

  modules: ['@nuxt/icon', 'nuxt-simple-sitemap', 'nuxt-simple-robots'],

  sitemap: {
    siteUrl: 'https://doers-web.vercel.app',
  },

  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/'   // allow all pages
    },
    sitemap: [
      'https://doers-web.vercel.app/sitemap.xml'
    ]
  },

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
