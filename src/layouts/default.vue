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
      <slot />
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
.btn.active {
  border-bottom-color: #26A9E0; /* your highlight color */
}

.social-icon {
  color: #666766;
}

.social-link:hover .social-icon {
  color: #26A9E0; 
}
</style>