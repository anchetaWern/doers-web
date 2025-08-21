<template>
  <div class="px-2">
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view="type"
        :weekdays="weekday"
        @click:event="onEventClick"
      />

      <v-menu
        v-model="menu"
        :activator="menuActivator"
        location="top"
        :close-on-content-click="false"
      >
        <v-card min-width="250">
          <v-card-title class="text-wrap">
            {{ selectedTitle }}
          </v-card-title>
          <v-card-text>
            <ul class="ml-5">
              <li>Where: {{ selectedAddress }}</li>
              <li>When: {{ selectedTime }}</li>
            </ul>
            
          </v-card-text>
        </v-card>
      </v-menu>

    </v-sheet>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDate } from 'vuetify'

const type = ref('month')
const weekday = ref([0, 1, 2, 3, 4, 5, 6])
const value = ref([new Date()])
const events = ref([])

const adapter = useDate()

//
const menu = ref(false)
const selectedTitle = ref('')
const selectedTime = ref('')
const selectedAddress = ref('');
const menuActivator = ref(null)

function onEventClick(e) {
  const split = e.target.innerText.split('|');
  selectedTitle.value = split[0];
  selectedAddress.value = split[1];
  selectedTime.value = split[2];
  menuActivator.value = e.target // anchor menu to clicked element
  menu.value = true
}
//

function getEvents() {
  events.value = [
    {
      title: 'Trash hunt with Philippine Navy | HQ to Lingsat SFC | Aug 19, 5:30am',
      start: new Date(2025, 7, 19, 5, 30),
      end: new Date(2025, 7, 19, 6, 30),
      color: 'blue',
    },
    {
      title: 'Coastal cleanup | Brgy Cabarsican, Bacnotan LU | Aug 19, 6:00am',
      start: new Date(2025, 7, 19, 6, 0),
      end: new Date(2025, 7, 19, 7, 0),
      color: 'red',
      allDay: true,
    },
    {
      title: 'Tree Planting | Luna LU | Aug 24, 6:30am',
      start: new Date(2025, 7, 24, 6, 30),
      end: new Date(2025, 7, 24, 8, 0),
      color: 'red',
      allDay: true,
    },
    {
      title: 'Blood letting | Mess Hall, Wallace Air Station, Poro SFC | Aug 29, 8:00am to 12:00pm',
      start: new Date(2025, 7, 29, 8, 0),
      end: new Date(2025, 7, 29, 12, 0),
      color: 'green',
      allDay: true,
    },
  ]
}

onMounted(() => {
  getEvents()
})

</script>
