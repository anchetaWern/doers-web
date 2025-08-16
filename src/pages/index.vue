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

          <v-row align="center">
            <v-col cols="12" md="3">
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

            <v-col cols="12" md="9">
           
              <v-container class="mt-5 overflow-y-auto" id="activities-container">

                  <v-row dense justify="center">
                    <v-col
                      v-for="card in cards"
                      :key="card.title"
                      cols="12" sm="6" md="4"
                    >
                      <v-card>

                        <div class="relative" style="height: 200px; overflow: hidden;">
                          <img
                            :src="card.src"
                            :alt="card.title"
                            class="w-full h-full object-cover"
                            style="object-fit: cover; object-position: center; height: 200px; width: 100%;"
                          />
                        
                          <div
                            class="px-4 py-2"
                            style="position: absolute; bottom: 0; width: 100%; background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));"
                          >
                            <span class="text-white text-body-2">{{ card.title }}</span>
                          </div>
                        </div>

                      </v-card>
                    </v-col>
                  </v-row>

                </v-container>



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

const cards = [
  {
    title: 'Coastal Cleanups',
    src: '/images/home/daily-coastal-cleanup.jpg'
  },
  {
    title: 'Brigada Eskwela',
    src: '/images/home/brigada-eskwela.jpg'
  },
  {
    title: 'Ridge to Reef',
    src: '/images/home/plogging.jpg'
  },
  {
    title: 'Blood Donation Campaign',
    src: '/images/home/medical-mission.jpg'
  },
  {
    title: 'Tree Planting & Parenting',
    src: '/images/home/mangrove.jpg'
  },
  {
    title: 'Speaking Engagements',
    src: '/images/home/radio-guestings.jpg'
  }
];
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