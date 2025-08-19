<template>
  <v-sheet>
    <section>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <h1 class="text-h3 mt-5">How You Can Help</h1>
            <span class="text-red">Content suggestion: activity calendar</span>
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
  </v-sheet>

</template>

<script setup>
import Card from "@/components/Card";

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