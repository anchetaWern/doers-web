<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  
  <v-app>
    <Analytics mode="production" />
    <v-app-bar>
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
           
            <a href="/">
              <v-img
                src="/images/doers-full-logo.png"
                width="100"
              />
            </a>

          </div>
        </v-app-bar-title>

        <v-spacer />

     
        <div v-if="$vuetify.display.mdAndUp">
          <v-btn text class="text-none" to="/">Home</v-btn>
          <v-btn text class="text-none" to="/about-us">About Us</v-btn>
          <v-btn text class="text-none" to="/contact-us">Contact Us</v-btn>
          <v-btn text class="text-none" to="/get-involved">Get Involved</v-btn>
          <v-btn text class="text-none" to="/merch">Merch</v-btn>
          <v-btn color="#26A9E0" class="ml-2" href="https://docs.google.com/forms/d/e/1FAIpQLSeuu7zi5QiPs7Cytt5fEeO9xAHnpNsQMvcT-qlgfPl3-OK1cg/viewform" target="_blank" variant="elevated">Collaborate</v-btn>
        </div>

 
        <v-menu
          v-if="$vuetify.display.smAndDown"
          offset-y
          :close-on-content-click="true"
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
            <v-list-item to="/merch">
              <v-list-item-title>Merch</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-btn block color="#26A9E0" class="mt-2" href="https://docs.google.com/forms/d/e/1FAIpQLSeuu7zi5QiPs7Cytt5fEeO9xAHnpNsQMvcT-qlgfPl3-OK1cg/viewform" target="_blank">Collaborate</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer class="footer">
      <v-container class="text-overline d-flex align-center justify-space-between">
   
        <v-row class="space-between align-center mt-5 mb-5">
          <v-col cols="12" md="6">
            <div>
              <div>
                <v-img
                  src="/images/doers-full-logo.png"
                  max-width="100"
                />
              </div>

              <div class="text-none">
              Brgy. Dalumpinas Oeste, San Fernando City, La Union, Philippines 2500
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="d-flex justify-md-end">
            <div>
              <h2>Get in Touch</h2>
              <div class="text-none">
                doerslaunion2023@gmail.com
              </div>
              <div>
                +63 920 659 9877
              </div>
              <div class="d-flex mt-5">
                <div class="px-2">
                  <a href="https://www.facebook.com/DOERsInAction" target="_blank" rel="noopener" class="social-link">
                    <Icon name="mdi:facebook" size="32" class="social-icon" />
                  </a>
                </div>

                <div class="px-2">
                  <a href="https://www.instagram.com/doerslaunion/" target="_blank" rel="noopener" class="social-link">
                    <Icon name="mdi:instagram" size="32" class="social-icon" />
                  </a>
                </div>

                <div class="px-2">
                  <a href="https://www.threads.com/@doerslaunion" target="_blank" rel="noopener" class="social-link">
                    <Icon name="simple-icons:threads" size="32" class="social-icon" />
                  </a>
                </div>

                <div class="px-2">
                  <a href="https://www.tiktok.com/@doerslaunion" target="_blank" rel="noopener" class="social-link">
                    <Icon name="fa6-brands:tiktok" size="30" class="social-icon" />
                  </a>
                </div>
              </div>

            </div>
          </v-col>


        </v-row>
        

        
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
.btn.active {
  border-bottom-color: #26A9E0; /* your highlight color */
}

.social-icon {
  color: #666766;
}

.social-link:hover .social-icon {
  color: #26A9E0; 
}

.footer {
  background-color: #e7e7e7;
}
</style>