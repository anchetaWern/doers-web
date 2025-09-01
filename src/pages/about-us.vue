<template>

 <v-sheet>
    <section>
      <v-container>
        <v-row justify="space-between">
          <v-col cols="12">
            <h1 class="text-h3 font-weight-bold mt-5">Who we are</h1>
      
            <p class="mt-5 mb-5">Dalumpinas Oeste Eco Rangers (DOERs) is a non profit organization dedicated in ensuring the cleanliness of our roads and beaches, protecting sea turtle nests & hatchlings, conducting feeding programs, tree planting & parenting, blood drives and medical missions.</p>
          </v-col>
        </v-row>


        <v-row justify="space-between">
          <v-col cols="12">
            
      
        
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <h2 class="text-h4 font-weight-bold mt-3 ml-4">DOERS</h2>
              <v-list>

                <v-list-item
                  v-for="(item, index) in doers_list"
                  :key="index"
                >
                  <v-list-item-content>
                      <v-list-item-title class="text-wrap">
                        <strong class="text-h5 font-weight-bold">{{ item.value }}</strong> {{ item.title.substr(1) }}
                      </v-list-item-title>
                      
                    </v-list-item-content>
                </v-list-item>
                
              </v-list>
            </v-card>

          </v-col>
        </v-row>


        <v-row justify="space-between">
          <v-col cols="12">
      
            <v-card
              class="mx-auto px-3 py-3"
              max-width="500"
            >
              <h2 class="text-h4 font-weight-bold mb-2">Vision</h2>
              <div>
              Conserve and preserve the environment by promoting awareness and building linkages not only in the local but also in the international stage.
              </div>
            </v-card>

          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="12">
      
            <v-card
              class="mx-auto px-3 py-3"
              max-width="500"
            >
              <h2 class="text-h4 font-weight-bold mb-2">Mission</h2>
              <div>
              The Dalumpinas Oeste Eco Rangers (DOERs) as steward of Mother Earth envisions a sustained green and safe environment and community.
              </div>
            </v-card>

          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="12">
            
            <v-card
              class="mx-auto py-3"
              max-width="500"
            >
              <v-list>
                <h2 class="text-h4 font-weight-bold ml-3">Core Values</h2>
                <v-list-item
                  v-for="(item, index) in core_values"
                  :key="index"
                >
                  <v-list-item-content>
                      <v-list-item-title class="text-wrap">
                        <strong class="text-h5 font-weight-bold">{{ item.value }}</strong> {{ item.title.substr(1) }}
                      </v-list-item-title>
                      
                    </v-list-item-content>
                </v-list-item>
                
              </v-list>
            </v-card>

          </v-col>
        </v-row>


      </v-container>
    </section>

    
      <section>
        <v-container>
          <v-divider />
        </v-container>

        <v-container>
          <v-row justify="space-between">
            <v-col cols="12">
              <h1 class="text-h3 font-weight-bold mt-5">What we do</h1>
        
              <p class="mt-5 mb-5">We turn compassion into action. Through beach clean-ups, sea turtle nesting and patrol, blood donations, tree planting, and other volunteer efforts, we care for people, communities, and the environment. Guided by the spirit of volunteerism, we believe small acts—done together—can create a cleaner, greener, and more compassionate world.</p>
            </v-col>
          </v-row>


          <v-row justify="space-between">
            <v-col cols="12" md="6" v-for="(item, index) in what_we_do" :class="{ 'mx-auto': index === what_we_do.length - 1 }">
              <Card :item="item" height="400px" />
            </v-col>

          </v-row>
        
        </v-container>
      </section>

      <v-container>
        <v-divider />
      </v-container>

      <section>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-responsive>
                <h2 class="text-h3 font-weight-bold">
                  Awards and Features
                </h2>
                <div class="mt-5">
                  Every recognition we receive is a reflection of the kindness, hard work, and dedication of our volunteers and partners. These awards are not just ours—they belong to everyone who has joined us in cleaning beaches, planting trees, donating blood, supporting schools, and serving communities. Each honor is a reminder that together, we can create change worth celebrating.
                </div>
                
              </v-responsive>
            </v-col>

          </v-row>

          <v-row justify="space-between">
            <v-col cols="12">
              
              <v-card
                class="mx-auto"
              >
                <v-expansion-panels>
                  <template v-for="(item, index) in awards" :key="index">
                    <v-expansion-panel>
                      <v-expansion-panel-title>
                        <div class="d-flex flex-column">
                          <strong class="text-h6 font-weight-bold">{{ item.value }}</strong>
                          <div>{{ item.title }}</div>
                        </div>
                      </v-expansion-panel-title>

                      <v-expansion-panel-text>
                        <!-- Expanded content goes here -->

                        <v-carousel v-if="item.images">
                          <v-carousel-item
                            v-for="(img, i) in item.images"
                            :key="i"
                            :src="img.image"
                            contain
                          ></v-carousel-item>
                        </v-carousel>


                      </v-expansion-panel-text>
                    
                    </v-expansion-panel>
                  </template>
                </v-expansion-panels>

              </v-card>

            </v-col>
          </v-row>



        </v-container>
      </section>

      <v-container>
        <v-divider />
      </v-container>


      <section>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-responsive>
                <h2 class="text-h3 font-weight-bold">
                  Achievements in 2024
                </h2>
                <div class="mt-5">
                 Our achievements are more than numbers—they are stories of people coming together to make a difference. From leading daily beach clean-ups and planting trees, to joining Brigada Eskwela, blood donation drives, and community projects, each activity reflects the power of volunteerism in action. Every milestone we reach is proof that when we unite for a common purpose, we can build cleaner shores, greener spaces, healthier communities, and a brighter future for all.
                </div>
                
              </v-responsive>

            </v-col>

            

          </v-row>

          <v-row justify="space-between">
            <v-col cols="12">
              
              <v-card
                class="mx-auto"
              >
                <v-list>
                  <template v-for="(item, index) in accomplishments" :key="index">
                    <v-list-item :min-height="60" :class="[
                      $vuetify.display.smAndDown ? 'py-4' : 'py-2'
                    ]">
                      <v-list-item-content>
                        
                        <v-list-item-title class="text-wrap">
                         <div style="display:inline-block; width: 50px; text-align: right;"><strong class="text-h6 font-weight-bold">{{ item.value }}</strong></div> {{ item.title }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider v-if="index < accomplishments.length - 1" />
                  </template>
                </v-list>

              </v-card>

            </v-col>
          </v-row>

        </v-container>
      </section>

      <v-container>
        <v-divider />
      </v-container>
      
      <section>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-responsive>
                <h2 class="text-h3 font-weight-bold">
                  Org Chart
                </h2>
                <div class="mt-5">
                  Behind every project and activity is a team of passionate individuals working together with one vision—to serve communities and protect the environment. Our organizational chart shows how we are united by roles, but driven by the same purpose: creating positive change through volunteerism and collective effort.
                </div>
                
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
    { name: 'robots', content: 'index, follow' },


    // Open Graph (Facebook, LinkedIn, etc.)
    { property: 'og:title', content: 'About Us - DOERs' },
    { property: 'og:description', content: 'About Us at DOERS. We are dedicated to protecting the environment and uplifting the community through daily coastal cleanups, tree planting and care, and volunteer-driven initiatives..' },
    { property: 'og:image', content: 'https://doers-web.vercel.app/images/meta/about-us.jpg' }, // full URL required
    { property: 'og:url', content: 'https://doers-web.vercel.app/about-us' },
    { property: 'og:type', content: 'article' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'About Us - DOERs' },
    { name: 'twitter:description', content: 'About Us at DOERS. We are dedicated to protecting the environment and uplifting the community through daily coastal cleanups, tree planting and care, and volunteer-driven initiatives..' },
    { name: 'twitter:image', content: 'https://doers-web.vercel.app/images/meta/about-us.jpg' }

  ]

})

const doers_list = [
  {
    title: 'Dedicated and commitedly conducting regular ridge to reef activities such as coastal cleanup, plogging, tree planting and parenting',
    value: 'D'
  },
  {
    title: 'Obediently observe laws and practices on Pawikan Conservation',
    value: 'O'
  },
  {
    title: 'Excellently disseminate and inform community on global environmental challenges and awareness',
    value: 'E'
  },
  {
    title: 'Responsibly build local and international linkages; and',
    value: 'R'
  },
  {
    title: 'Sustainably and efficiently develop, manage and assess projects, programs and activities, resources on environmental conservation and protection',
    value: 'S'
  }
];

const core_values = [
  {
    title: 'Excellent',
    value: 'E'
  },
  {
    title: 'Active and',
    value: 'A'
  },
  {
    title: 'Responsible organization',
    value: 'R'
  },
  {
    title: 'Towards a',
    value: 'T'
  },
  {
    title: 'Harmonious and safe Mother Earth.',
    value: 'H'
  }
];

const awards = [
 
  {
    title: 'Together with CURMA and other volunteers, we were featured by the Oceanic Society on their social media accounts for the International Coastal Cleanup day last Sept 2024.',
    value: 'September 2024',
    images: null
  },

  {
    title: 'Twice featured by the PIA La Union for the pawikan hatchling release last January 2024 and the pawikan mural last September 2024.',
    value: 'September 2024',
    images: null,
  },

  {
    title: 'Recognized as the Lifetime Service partner and Hall of Fame for 2022-2023 by the Innerwheel Club of San Fernando, La Union District 379.',
    value: 'June 2024',
    images: [
      {
        image: '/images/features/inner-wheel-partner/certificate-of-appreciation.jpg',
      },
      {
        image: '/images/features/inner-wheel-partner/certificate-of-recognition.jpg',
      },
      {
        image: '/images/features/inner-wheel-partner/inner-wheel-plaque.jpg',
      },
      {
        image: '/images/features/inner-wheel-partner/inner-wheel-award.jpg',
      }
    ],
  },
  
  {
    title: 'Recognized as one of the invaluable partner stakeholders of the Air Installation and Base Development Command (Philippine Air Force) and by the Civil Military Operations Unit- Northern Luzon (Philippine Navy).',
    value: 'February 2024',
    images: [
      {
        image: '/images/features/base-development-partner/base-development-plaque.jpg'
      },
      {
        image: '/images/features/base-development-partner/base-development-award.jpg'
      }
    ],
  },

   {
    title: 'Featured by the North Magazine for the January to March 2024 issue with a topic of Uniting Communities for coastal conservation and regeneration in La Union.',
    value: 'January 2024',
    images: [
      {
        image: '/images/features/northstar/north-star.jpg'
      },
      {
        image: '/images/features/northstar/north-star-inside.jpg'
      },
      {
        image: '/images/features/northstar/north-star-doers.jpg'
      },
      {
        image: '/images/features/northstar/north-star-people.jpg'
      },
    ]
  },

  {
    title: 'Featured on the Hello Surftown’s third issue as the DOERs of Good.',
    value: 'December 2023',
    images: [
      {
        image: '/images/features/hello-surftown/hello-surftown-cover.jpg'
      },
      {
        image: '/images/features/hello-surftown/hello-surftown-doers.jpg'
      },
      {
        image: '/images/features/hello-surftown/hello-surftown-doers2.jpg'
      },
    ],
  },
  {
    title: 'Received the Kapakanan “kaagapay sa pag-aalaga ng kalikasan natin” award from Philippine Coastguard (national award).',
    value: 'June 2023',
    images: [
      {
        image: '/images/features/kapakanan/kapakanan-award-plaque.jpg'
      },
      {
        image: '/images/features/kapakanan/kapakanan-award.jpg'
      },
    ],
  },
  {
    title: 'Have numerous features by the City Government of San Fernando, La Union focusing on the activities done by the group to promote a healthier and cleaner ocean.',
    value: 'May 2023',
    images: [
      {
        image: '/images/features/city-govt/doers-feature.png',
        type: 'contain',
      }
    ],
  },
  {
    title: 'Recipient of the City Service Award last March 2023 with the resolution no. 23-198 (city award).',
    value: 'March 2023',
    images: null,
  },
];

const accomplishments = [
  { "value": 742, "title": "daily clean-ups (simultaneously at Dalumpinas Oeste, San Francisco and some other parts of La Union)" },
  { "value": 26, "title": "tree planting activities while 97 days of tree growing and monitoring" },
  { "value": 13, "title": "plogging activities at San Fernando and San Juan, La Union" },
  { "value": 7, "title": "turtle releases and 124 days of turtle patrolling" },
  { "value": 35, "title": "online and face to face speaking engagements" },
  { "value": 23, "title": "program planning with various environmental groups" },
  { "value": 26, "title": "bloodletting activities" },
  { "value": 48, "title": "acudetox and meditation sessions" },
  { "value": 54, "title": "various activities focused on health (e.g. medical missions, awareness campaigns, health caravans etc.)" },
  { "value": 15, "title": "fun runs/run with a cause and zumba sessions" },
  { "value": 12, "title": "gift giving and feeding sessions" },
  { "value": 9, "title": "various capacity building trainings attended" },
  { "value": 16, "title": "awards and recognitions received from different organizations" }
];


const what_we_do = [
  {
    image: '/images/about/trash-hunt.jpg',
    title: 'Trash hunts & plogging',
    description: 'Our cleanup drive spans from coastal areas to highways, highlighting the importance of cleanliness. We strive to educate individuals and organizations on maintaining clean environments, no matter the scale of effort required.',

  },
  {
    image: '/images/about/tree-planting-activity.jpg',
    title: 'Tree Planting',
    description: 'One of our goals is to create more natural infrastructures to establish safety in our coastal communities in La Union and other areas via planting more Mangrove Trees.',
   
  },
  {
    image: '/images/about/turtle-releasing.jpg',
    title: 'Sea turtle nesting and patrol',
    description: 'We also conduct beach patrolling for turtles at night to check if there are turtles establishing a nest and ensuring the safety of the hatchlings for their upcoming new journey in life.',
  
  },
  {
    image: '/images/about/blood-donation.jpg',
    title: 'Volunteer Activities',
    description: 'The organization delves not only on environmental matters but also links with other organizations which are into other aspects like health, feeding programs, blood letting, medical missions, awareness campaigns.',
   
  },
];

</script>