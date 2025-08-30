<template>
  <v-sheet>
    <section>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <h1 class="text-h3 mt-5 font-weight-bold">Contact Us</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" class="text-red">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vitae. Hic odio officia maiores. sit amet consectetur adipisicing elit. Fugit, modi quasi recusandae sapiente temporibus vita</p>
          </v-col>
        </v-row>

      </v-container>

      <v-container>
        <v-row justify="space-between">
          <v-col cols="12" md="6">
            <HQLocation />


            <v-container>

              <v-row justify="space-between">

                <v-col cols="12" md="6">
                  <h3 class="text-h5 mt-5 mb-3 font-weight-medium">Where to Find Us</h3>
                  <div class="py-1">
                    DOER's Headquarters
                  </div>
                  <div class="py-1">
                  Brgy. Dalumpinas Oeste, San Fernando City, La Union, Philippines 2500
                  </div>
                  <div class="py-1">5am to 5pm</div>
                </v-col>
                

                <v-col cols="12" md="6">
                  <h3 class="text-h5 mt-5 mb-3 font-weight-medium">Connect with Us</h3>

                  <div class="py-1">
                    doerslaunion2023@gmail.com
                  </div>
                  <div class="py-1">
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

                </v-col>

              </v-row>

            </v-container>

          </v-col>
        </v-row>

        

      </v-container>

    </section>
  </v-sheet>

</template>

<script setup>
import HQLocation from '@/components/HQLocation';

useHead({
  title: 'Contact Us - DOERs',

  meta: [
    { hid: 'description', name: 'description', content: 'Contact Us at DOERS. Interested in volunteering with us, collaborate with us, or just wanted to reach out? Send us a message through any of our social links, phone number or email.' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph (Facebook, LinkedIn, etc.)
    { property: 'og:title', content: 'Contact Us - DOERs' },
    { property: 'og:description', content: 'Contact Us at DOERS. Interested in volunteering with us, collaborate with us, or just wanted to reach out? Send us a message through any of our social links, phone number or email.' },
 
    { property: 'og:url', content: 'https://doers-web.vercel.app/contact-us' },
    { property: 'og:type', content: 'article' },

    // Twitter Card
    { name: 'twitter:title', content: 'Contact Us - DOERs' },
    { name: 'twitter:description', content: 'Contact Us at DOERS. Interested in volunteering with us, collaborate with us, or just wanted to reach out? Send us a message through any of our social links, phone number or email.' },
   

  ]
})
</script>

<style scoped>
.social-icon {
  color: #666766;
}

.social-link:hover .social-icon {
  color: #26A9E0; 
}
</style>