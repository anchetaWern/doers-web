<template>
    
    <section id="hero">

      <v-sheet
        class="d-flex align-center pb-16"
        color="grey-darken-3"
        height="800"
        style="background-image: url('/images/home/sunrise-cleanup.jpg'); background-size: cover; background-position: center;"
      >
        <v-container class="text-center">
          <v-responsive class="mx-auto" width="500">
            
            <v-sheet
              class="pa-6 mx-auto"
              color="rgba(0, 0, 0, 0.5)"
              elevation="0"
              rounded="lg"
            >
              <h3 class="text-h3 text-white">
                Become a DOER!
              </h3>

              <div class="mt-4 mb-2 text-white">
                Join us in our daily efforts to protect the environment & support our community through coastal cleanups, tree planting, medical missions, and more meaningful initiatives.
              </div>

              <v-btn block href="https://forms.gle/jh4Es4TMAhEV2YB59" target="_blank">
              Support Us
              </v-btn>

            </v-sheet>
          </v-responsive>
        </v-container>
      </v-sheet>
    </section>

    <section>
      <v-container>
        <v-row justify="space-between mt-5 mb-5">
          <v-col cols="12" md="6">
            <v-responsive width="350">
              <h2 class="text-h4">
                Who we are
              </h2>
              <div class="mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, 
                modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, 
                perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?
              </div>
            </v-responsive>
          </v-col>

          <v-col cols="12" md="6" class="d-flex justify-end justify-md-start">
            <v-img
              src="/images/home/sunset-plogging.jpg"
              class="w-100 w-md-auto"
              max-width="600"
              rounded="circle"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-sheet class="py-16" color="#181818">
      <section id="grid">
        <v-container>
          <!-- Title Section -->
          <v-row justify="center">
            <v-col cols="12" md="auto">
              <h2 class="text-h3 text-center">Our Impact</h2>
              <h3 class="text-h5 text-center">Since 2020</h3>
            </v-col>
          </v-row>

          <!-- First Stats Row -->
          <v-row class="stats-row mt-5">
            <v-col cols="12" md="auto" class="text-center mb-4 mb-md-0">
              <h2 class="text-h3">5,000+</h2>
              <h3 class="text-h5">Clean-up volunteers</h3>
            </v-col>

            <v-col cols="12" md="auto" class="text-center mb-4 mb-md-0">
              <h2 class="text-h3">100+</h2>
              <h3 class="text-h5">Blood bags donated</h3>
            </v-col>

            <v-col cols="12" md="auto" class="text-center">
              <h2 class="text-h3">2,000+ kg</h2>
              <h3 class="text-h5">Garbage collected</h3>
            </v-col>
          </v-row>

          <!-- Second Stats Row -->
          <v-row justify="center" class="mt-5">
            <v-col cols="12" md="auto" class="text-center">
              <h2 class="text-h3">1,000+</h2>
              <h3 class="text-h5">Mangroves Planted & Parented</h3>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-sheet>

    <v-sheet class="py-8">
      <section>
        <v-container>
          <v-row>
            <v-col cols="12" md="auto">
              <h2 class="text-h3">Join Our Efforts</h2>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, 
              modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, 
              perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?
              caecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?
              <div>
                <v-btn class="mt-3" size="large" color="primary" href="https://forms.gle/jh4Es4TMAhEV2YB59" target="_blank">
                Get Involved
                </v-btn>
              </div>
            </v-col>

            <v-col cols="9">
           
    <v-img
  src="/images/home/daily-coastal-cleanup.jpg"
  class="w-250 w-md-auto"
  max-width="250"
  rounded="circle"
>
   <template v-slot:default>
    <div
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.5);
        padding: 8px 12px;
        border-radius: 8px;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
      "
    >
      Coastal Cleanups
    </div>
  </template>
</v-img>


            </v-col>
            
          </v-row>

        </v-container>

        <v-container>
          <v-divider class="my-3" />
        </v-container>

      </section>
    </v-sheet>

    <v-sheet class="py-8">
      <section>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="auto">
              <h2 class="text-h3 text-center">2025 Leaderboard</h2>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="auto">
              <Leaderboard />
            </v-col>
            
          </v-row>

        </v-container>

        <v-container>
          <v-divider class="my-3" />
        </v-container>

      </section>
    </v-sheet>

    <v-sheet>
      <section>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="auto">
              <h2 class="text-h3 text-center">Our Partners</h2>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="auto">
              TODO: logo ng partners?
            </v-col>
            
          </v-row>

        </v-container>

        <v-container>
          <v-divider class="my-3" />
        </v-container>

      </section>
    </v-sheet>

   

</template>

<script setup>
import Leaderboard from '@/components/Leaderboard';

useHead({
  title: 'DOERs | Dalumpinas Oeste Eco Rangers'
})
</script>

<style scoped>
.stats-row {
  justify-content: center;
}

@media (min-width: 960px) {
  .stats-row {
    justify-content: space-between !important;
  }
}

.v-img__img--contain {
  opacity: 0.5;
}
</style>