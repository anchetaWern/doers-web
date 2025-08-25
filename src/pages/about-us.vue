<template>

 <v-sheet>
    <section>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <h1 class="text-h3 font-weight-bold mt-5">Who we are</h1>
            <span class="text-red">Content suggestion: Org chart, vision & mission, awards, accreditations, being sec registered</span>
            <p class="mt-5 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, 
            perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, 
            voluptatum culpa velit eligendi quidem?</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <section>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12" md="6">
              <v-responsive width="350">
                <h2 class="text-h4 font-weight-medium">
                  Daily coastal cleanups
                </h2>
                <div class="mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?
                </div>
              </v-responsive>
            </v-col>

            <v-col cols="12" md="6" class="d-flex justify-end justify-md-start">
              <v-img
                src="/images/home/daily-coastal-cleanup.jpg"
                class="w-100 w-md-auto"
                max-width="600"
              />
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-container>
        <v-divider class="my-12" />
      </v-container>

      <section id="controls">
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-responsive width="350">
                <h2 class="text-h4 font-weight-medium">
                  Plogging
                </h2>
                <div class="mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?
                </div>
              </v-responsive>
            </v-col>

            <v-col cols="12" md="6" class="d-flex justify-end justify-md-start">
              <v-img
                max-width="600"
                src="/images/home/plogging.jpg"
              />
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-container>
        <v-divider class="my-12" />
      </v-container>

      <section id="grid">
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-responsive width="350">
                <h2 class="text-h4 font-weight-medium">
                  Health and wellness
                </h2>
                <div class="mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?
                </div>

                
              </v-responsive>
            </v-col>

            <v-col cols="12" md="6" class="d-flex justify-end justify-md-start">
              <v-img
                max-width="600"
                src="/images/home/health-and-wellness.jpg"
              />
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-container>
        <v-divider class="my-12" />
      </v-container>

      <section>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12" md="6">
              <v-responsive width="350">
                <h2 class="text-h4 font-weight-medium">
                  Blood Donation Drive
                </h2>
                <div class="mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores, perspiciatis praesentium, obcaecati tenetur aliquam ea, voluptatum culpa velit eligendi quidem?
                </div>
              </v-responsive>
            </v-col>

            <v-col cols="12" md="6" class="d-flex justify-end justify-md-start">
              <v-img
                src="/images/home/medical-mission.jpg"
                class="w-100 w-md-auto"
                max-width="600"
              />
            </v-col>
          </v-row>
        </v-container>
      </section>

      <v-container>
        <v-divider class="my-12" />
      </v-container>


      <section>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12" md="6">
              <v-responsive width="350">
                <h2 class="text-h4 font-weight-medium">
                  Org Chart
                </h2>
                
              </v-responsive>
            </v-col>

          </v-row>

          <v-row>
            <v-col cols="12">
              <OrgChart />
            </v-col>
          </v-row>
        </v-container>
      </section>


    </v-sheet>

    

</template>

<script setup>
import OrgChart from '@/components/OrgChart';

useHead({
  title: 'About Us - DOERs',

  meta: [
    { hid: 'description', name: 'description', content: 'About Us at DOERS. We are dedicated to protecting the environment and uplifting the community through daily coastal cleanups, tree planting and care, and volunteer-driven initiatives..' },
    { name: 'robots', content: 'index, follow' }
  ]

})
</script>