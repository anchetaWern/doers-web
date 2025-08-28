<template>
  <v-card class="mx-auto">
    <v-img
      :height="height"
      :src="item.image"
      cover
      :position="$vuetify.display.smAndDown ? 'top center' : 'center'"
    ></v-img>

    <v-card-title class="font-weight-medium">
      {{ item.title }}
    </v-card-title>

    <v-card-subtitle class="wrap-subtitle h-50 pb-3">
      {{ item.description }}
    </v-card-subtitle>

    <v-card-actions class="mt-3" v-if="item.link">
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
    },
    height: {
      type: String,
      required: true,
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