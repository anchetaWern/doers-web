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
import { ref } from 'vue'
import { useDate } from 'vuetify'

// ✅ accept events as a prop
const props = defineProps({
  events: {
    type: Array,
    required: true,
    default: () => []
  }
})

const type = ref('month')
const weekday = ref([0, 1, 2, 3, 4, 5, 6])
const value = ref([new Date()])

const adapter = useDate()

// menu state
const menu = ref(false)
const selectedTitle = ref('')
const selectedTime = ref('')
const selectedAddress = ref('')
const menuActivator = ref(null)

function onEventClick(e) {
  const split = e.target.innerText.split('|')
  selectedTitle.value = split[0]
  selectedAddress.value = split[1]
  selectedTime.value = split[2]
  menuActivator.value = e.target // anchor menu to clicked element
  menu.value = true
}
</script>
