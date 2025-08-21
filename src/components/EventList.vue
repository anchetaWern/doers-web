<template>
  <h5 class="text-h5">{{ title }}</h5>
  <v-list lines="two">
    <v-list-item
      v-for="(event, index) in events"
      :key="index"
    >
      <template v-slot:prepend>
        <v-avatar>
          <v-icon color="#26A9E0" icon="mdi-calendar"></v-icon>
        </v-avatar>
      </template>

      <v-list-item-title>{{ getTitle(event) }}</v-list-item-title>
      <v-list-item-subtitle>
        {{ getDetails(event) }}
      </v-list-item-subtitle>

      
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useDate } from 'vuetify'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  events: {
    type: Array,
    required: true,
    default: () => []
  }
})

const adapter = useDate()

function getTitle(event) {
  return event.title.split('|')[0] || event.title
}

function getDetails(event) {
  // extract address + time if formatted like "Title | Address | Time"
  const parts = event.title.split('|')
  if (parts.length >= 3) {
    return `${parts[1].trim()} — ${parts[2].trim()}`
  }

  // fallback: show formatted date
  return `${adapter.format(event.start, 'short')} - ${adapter.format(event.end, 'short')}`
}
</script>
