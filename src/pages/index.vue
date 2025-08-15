<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-img
              src="/images/doers-full-logo.png"
              max-width="100"
            />
          </div>
        </v-app-bar-title>

        <v-spacer />

     
        <div v-if="$vuetify.display.mdAndUp">
          <v-btn text class="text-none" to="/">Home</v-btn>
          <v-btn text class="text-none" to="/about-us">About Us</v-btn>
          <v-btn text class="text-none" to="/contact-us">Contact Us</v-btn>
          <v-btn text class="text-none" to="/get-involved">Get Involved</v-btn>
          <v-btn color="#26A9E0" class="ml-2" variant="elevated">Donate</v-btn>
        </div>

 
        <v-menu
          v-if="$vuetify.display.smAndDown"
          offset-y
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <v-app-bar-nav-icon v-bind="props" />
          </template>
          <v-list>
            <v-list-item to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/about-us">
              <v-list-item-title>About Us</v-list-item-title>
            </v-list-item>
            <v-list-item to="/contact-us">
              <v-list-item-title>Contact Us</v-list-item-title>
            </v-list-item>
            <v-list-item to="/get-involved">
              <v-list-item-title>Get Involved</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-btn block color="primary" class="mt-2">Donate</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>

    <v-main>
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
                  About DOERs
                </h2>
                <div class="mt-5">
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
                <h2 class="text-h3 text-center">The Numbers</h2>
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

      <v-sheet class="py-16">
        <section>
          <v-container>
            <v-row justify="space-between">
              <v-col cols="12" md="6">
                <v-responsive width="350">
                  <h2 class="text-h4">
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
                  <h2 class="text-h4">
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
                  <h2 class="text-h4">
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
                  <h2 class="text-h4">
                    Medical Missions
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

      </v-sheet>

    </v-main>

    <v-footer>
      <v-container class="text-overline d-flex align-center justify-space-between">
        <div>
          Copyright &copy; 2020-{{ (new Date()).getFullYear() }} Dalumpinas Oeste Eco Rangers
        </div>

        <div class="d-flex align-center" style="gap: 16px;">
          <a href="https://www.facebook.com/DOERsInAction" target="_blank" rel="noopener" class="social-link">
            <Icon name="mdi:facebook" size="32" class="social-icon" />
          </a>

          <a href="https://www.instagram.com/doerslaunion/" target="_blank" rel="noopener" class="social-link">
            <Icon name="mdi:instagram" size="32" class="social-icon" />
          </a>
          <a href="https://www.threads.com/@doerslaunion" target="_blank" rel="noopener" class="social-link">
            <Icon name="simple-icons:threads" size="32" class="social-icon" />
          </a>

          <a href="https://www.tiktok.com/@doerslaunion" target="_blank" rel="noopener" class="social-link">
            <Icon name="mdi:tiktok" size="32" class="social-icon" />
          </a>
        </div>
        
      </v-container>
    </v-footer>
  </v-app>
</template>



<style scoped>
.stats-row {
  justify-content: center;
}

@media (min-width: 960px) {
  .stats-row {
    justify-content: space-between !important;
  }
}

.social-icon {
  color: #666766;
}

.social-link:hover .social-icon {
  color: #26A9E0; 
}
</style>