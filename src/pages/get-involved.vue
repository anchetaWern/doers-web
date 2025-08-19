<template>
    <section>
        <h1>How You Can Help</h1>
        <span class="text-red">WIP. Pero ang plan ay expound lang ung "join our efforts" section sa homepage.</span>

        <v-container>
          <v-row justify="space-between">
            <v-col cols="12" md="4" v-for="item in items">
              <Card :item="item" />
            </v-col>

           
          </v-row>

        </v-container>
        
        

        

        
    </section>
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
    link: '#',
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