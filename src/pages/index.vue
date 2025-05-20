<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar
              class="me-3"
              image="/images/doers.jpg"
              rounded="0"
            />

            Dalumpinas Oeste Eco Rangers
          </div>
        </v-app-bar-title>

        <v-spacer />

        <v-btn-alt
          append-icon="mdi-open-in-new"
          href="https://vuetifyjs.com/components/all/"
          rel="noopener noreferrer"
          target="_blank"
          text="Vuetify Documentation"
        />
      </v-container>
    </v-app-bar>

    <v-main>
      <section id="hero">
        <v-sheet
          class="d-flex align-center pb-16"
          color="grey-darken-3"
          height="800"
          style="background-image: url('/images/home/sunset-plogging.jpg'); background-size: cover; background-position: center;"
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
              Join
              </v-btn>

              </v-sheet>
            </v-responsive>
          </v-container>
        </v-sheet>
      </section>

      <v-sheet class="py-16">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">
                    Daily coastal cleanups
                  </h2>
                 
                </v-responsive>
              </v-col>

              <v-img
                max-width="600"
                src="/images/home/daily-coastal-cleanup.jpg"
              />
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
                  <h2 class="text-h4">
                    Plogging
                  </h2>

                
                </v-responsive>
              </v-col>

              <v-img
                max-width="600"
                src="/images/home/plogging.jpg"
              />
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
                  <h2 class="text-h4">
                    Health and wellness
                  </h2>

                 
                </v-responsive>
              </v-col>

              <v-img
                max-width="600"
                src="/images/home/health-and-wellness.jpg"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>

      <v-sheet
        class="py-16"
        color="#181818"
      >
        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive
                  class="overflow-visible"
                  width="350"
                >
                  <h2 class="text-h4">
                    Medical missions
                  </h2>

                
                </v-responsive>
              </v-col>

              <v-img
                max-width="600"
                src="/images/home/medical-mission.jpg"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-main>

    <v-footer>
      <v-container class="text-overline d-flex align-center justify-space-between">
        <div>
          Copyright &copy; 2020-{{ (new Date()).getFullYear() }} DOERs
        </div>

        <v-icon :icon="mdiInstagram" size="32" color="black" />
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiInstagram } from '@mdi/js';


</script>
