<template>
  <v-sheet>
    <section>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <h1 class="text-h3 mt-5 font-weight-bold">How You Can Help</h1>
      
            <p class="mt-5 mb-5">Everyone has the power to make a difference. You can join our clean-ups, plant trees, donate blood, or volunteer your time in community projects. Even the smallest act of kindness—sharing our mission, lending a hand, or inspiring others—creates ripples of positive change. Together, we can build a cleaner, greener, and more caring world.</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="space-between">
          <v-col cols="12" md="4" v-for="(item, index) in items" :class="{ 'mx-auto': index === items.length - 1 }">
            <Card :item="item" height="300px" />
          </v-col>

          
        </v-row>

      </v-container>

    </section>


    <section>
    
      <v-container>
        <v-divider class="my-6" />
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="auto">
            <h4 class="text-h4 font-weight-medium">Event Calendar</h4>
            <p class="mt-3">These are all our events for the month. You can message us on our <a href="https://www.facebook.com/DOERsInAction/events" target="_blank">Facebook page</a> for more details.</p>
          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="12">
    
            <EventList :events="events" title="August 2025" />
      
          </v-col>
        </v-row>
      </v-container>
      
    </section>
    

    
    <section>
      <v-container>
        <v-divider class="my-6" />
      </v-container>

      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <v-responsive>
              <h2 class="text-h4 font-weight-bold">
                Daily Cleanup Locations
              </h2>
              <p class="mt-3">Feel free to participate in our daily beach clean ups.</p>
              
            </v-responsive>
          </v-col>

        
        </v-row>
      </v-container>
    </section>
      
    <DailyCleanupLocations />

  </v-sheet>


  <v-sheet class="py-16" color="#181818">
    <OurImpact />
  </v-sheet>


</template>

<script setup>
import DailyCleanupLocations from "@/components/DailyCleanupLocations";
import OurImpact from "@/sections/OurImpact";
import Card from "@/components/Card";
import Calendar from "@/components/Calendar";
import EventList from "@/components/EventList";

useHead({
  title: 'How You Can Help - DOERs',

  meta: [
    { hid: 'description', name: 'description', content: 'You can help us at DOERS by volunteering with us, sending us a donation, or becoming our partner.' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph (Facebook, LinkedIn, etc.)
    { property: 'og:title', content: 'How You Can Help - DOERs' },
    { property: 'og:description', content: 'You can help us at DOERS by volunteering with us, sending us a donation, or becoming our partner.' },
    { property: 'og:image', content: 'https://doers-web.vercel.app/images/meta/get-involved.jpg' }, // full URL required
    { property: 'og:url', content: 'https://doers-web.vercel.app/get-involved' },
    { property: 'og:type', content: 'article' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'How You Can Help - DOERs' },
    { name: 'twitter:description', content: 'You can help us at DOERS by volunteering with us, sending us a donation, or becoming our partner.' },
    { name: 'twitter:image', content: 'https://doers-web.vercel.app/images/meta/get-involved.jpg' }

  ]
})

const items = [
  {
    image: '/images/get-involved/volunteer.jpg',
    title: 'Volunteer with Us',
    description: 'Lend your time and energy to our clean-ups, tree planting, and community projects. Together, we can make a real difference.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeuu7zi5QiPs7Cytt5fEeO9xAHnpNsQMvcT-qlgfPl3-OK1cg/viewform',
    link_text: 'Volunteer',
  },
  {
    image: '/images/get-involved/donate.jpg',
    title: 'Send a Donation',
    description: 'As a non-profit, we rely on your generosity. Every donation—cash or in kind—supports our mission to protect the environment and uplift communities.',
    link: '#',
    link_text: 'Donate',
  },
  {
    image: '/images/get-involved/collaborate.jpg',
    title: 'Collaborate with Us',
    description: 'Partner with us in creating sustainable programs and community-driven initiatives. Let’s build impact side by side.',
    link: '#',
    link_text: 'Collaborate',
  },
  {
    image: '/images/get-involved/buy-doers-merch.jpg',
    title: 'Buy DOERs Merch',
    description: 'Support our cause by purchasing our merchandise. Every item helps fund our projects and spreads our message.',
    link: '/merch',
    link_text: 'Shop',
  },
];

const events = [ 
  { 
    title: 'Plogging in celebration of world ozone day | BJMP Brgy. Pias, San Fernando La Union | Sept 13, 6:00am', 
    start: new Date(2025, 8, 13, 6, 0), 
    end: new Date(2025, 8, 13, 7, 30), 
    color: 'blue', 
  }, 

]
</script>