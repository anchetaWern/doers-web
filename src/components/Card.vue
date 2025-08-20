<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      height="200px"
      :src="item.image"
      cover
    ></v-img>

    <v-card-title class="font-weight-medium">
      {{ item.title }}
    </v-card-title>

    <v-card-subtitle class="wrap-subtitle h-50">
      {{ item.description }}
    </v-card-subtitle>

    <v-card-actions class="mt-3">
      <v-btn
        color="orange-lighten-1"
        :text="item.link_text"
        :href="item.link"
        variant="flat"
        target="_blank"
        block
      ></v-btn>

      <v-spacer></v-spacer>

    </v-card-actions>

    
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    show: false
  })
}
</script>

<style scoped>
.wrap-subtitle {
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
}
</style>