<template>
  <GMapMap
    :center="{ lat: 16.6520451, lng: 120.3143263 }"
    :zoom="12"
    style="width: 100%; height: 400px"
  >
    <GMapMarker
      v-for="(marker, index) in markers"
      :key="index"
      :position="marker.position"
      :clickable="true"
      :draggable="false"
      @click="openInfoWindow(index)"
    >
      <GMapInfoWindow :options="{ content: marker.info }" v-if="activeMarker === index" />
    </GMapMarker>
  </GMapMap>
</template>

<script setup>
import { ref } from "vue";

const markers = ref([
  {
    position: { lat: 16.6520451, lng: 120.3143263 },
    info: "<strong>DOERs HQ</strong>",
  },
  {
    position: { lat: 16.5978622, lng: 120.2984543 },
    info: "<strong>Acapulco Beach</strong>",
  },
  {
    position: { lat: 16.6445247, lng: 120.3077909 },
    info: "<strong>Squareville</strong>",
  },
 
]);

const activeMarker = ref(null);

function openInfoWindow(index) {
  activeMarker.value = index;
}
</script>

<style>
.gm-style-iw {
  padding-top: 0 !important;
}
.gm-style-iw-d {
  margin-top: 0 !important;
}

.gm-style-iw button.gm-ui-hover-effect {
  display: none !important;
}

</style>
