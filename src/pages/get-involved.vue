<template>
  <v-sheet>
    <section>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <h1 class="text-h3 mt-5 font-weight-bold">How You Can Help</h1>
            <div class="text-red">Content suggestion: activity calendar, past activities, partners/collaborations.</div>
            <div class="text-red">Note: maybe we need a separate google form for donations and partners.</div> 
            <p class="mt-5 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, 
            perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, 
            voluptatum culpa velit eligendi quidem?</p>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row justify="space-between">
          <v-col cols="12" md="4" v-for="item in items">
            <Card :item="item" />
          </v-col>

          
        </v-row>

      </v-container>

    </section>


    <section>
    
      <v-container>
        <v-divider class="my-12" />
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="auto">
            <h4 class="text-h4 font-weight-medium">Event Calendar</h4>
          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="12">

          
            <Calendar />
           

          </v-col>
        </v-row>
      </v-container>
      
    </section>
    

    
    <section>
      <v-container>
        <v-divider class="my-12" />
      </v-container>

      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <v-responsive>
              <h2 class="text-h4 font-weight-bold">
                Daily Cleanup Locations
              </h2>
              <span class="text-red">not sure ung sa squareville kung may daily tayo doon</span>
              
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

useHead({
  title: 'How You Can Help - DOERs'
})

const items = [
  {
    image: '/images/get-involved/volunteer.jpg',
    title: 'Volunteer with Us',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeuu7zi5QiPs7Cytt5fEeO9xAHnpNsQMvcT-qlgfPl3-OK1cg/viewform',
    link_text: 'Volunteer',
  },
  {
    image: '/images/get-involved/donate.jpg',
    title: 'Send a Donation',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?',
    link: '#',
    link_text: 'Donate',
  },
  {
    image: '/images/get-involved/collaborate.jpg',
    title: 'Collaborate with Us',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?',
    link: '#',
    link_text: 'Collaborate',
  },
];
</script>