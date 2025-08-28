<template>
  <v-sheet>
    <section>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <h1 class="text-h3 mt-5 font-weight-bold">DOERs Merch</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <p>100% of the proceeds from our merch will be used for buying gloves, sacks, pickers, and other materials used for our clean up activities. </p>
            <v-btn color="#FFA726" class="mt-5" href="https://www.facebook.com/DOERsInAction" target="_blank" variant="elevated">Order via Facebook</v-btn>
          </v-col>
        </v-row>

      </v-container>

      <v-container class="mt-10 mb-10">
        <v-row justify="space-between">
          <v-col cols="12" md="3" v-for="item in items">
            <Card :item="item" height="250px" />
          </v-col>

          
        </v-row>

      </v-container>

    </section>
  </v-sheet>

</template>

<script setup>
import Card from "@/components/Card";

useHead({
  title: 'Merch - DOERs',

  meta: [
    { hid: 'description', name: 'description', content: '100% of proceeds from our merch will be used for buying gloves, sacks, pickers, and other materials used for our clean up activities.' },
    { name: 'robots', content: 'index, follow' },


    // Open Graph (Facebook, LinkedIn, etc.)
    { property: 'og:title', content: 'Merch - DOERs' },
    { property: 'og:description', content: '100% of proceeds from our merch will be used for buying gloves, sacks, pickers, and other materials used for our clean up activities.' },
    { property: 'og:image', content: 'https://doers-web.vercel.app/images/merch/doers-keychain.jpg' }, // full URL required
    { property: 'og:url', content: 'https://doers-web.vercel.app/merch' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Merch - DOERs' },
    { name: 'twitter:description', content: '100% of proceeds from our merch will be used for buying gloves, sacks, pickers, and other materials used for our clean up activities.' },
    { name: 'twitter:image', content: 'https://doers-web.vercel.app/images/merch/doers-keychain.jpg' }

  ]
})

const items = [
  {
    image: '/images/merch/doers-keychain.jpg',
    title: 'Pawikan Keychain',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae.',
   
  },
  {
    image: '/images/merch/doers-shirt.jpg',
    title: 'DOERs Shirt',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae.',
    
  },
  {
    image: '/images/merch/doers-umbrella.jpg',
    title: 'DOERs Payong',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae.',
    
  },
  {
    image: '/images/merch/doers-seabon.jpg',
    title: 'Seabon',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae.',
   
  },
];

</script>

<style scoped>
.social-icon {
  color: #666766;
}

.social-link:hover .social-icon {
  color: #26A9E0; 
}
</style>