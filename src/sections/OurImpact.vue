<template>
    <section id="grid">
        <v-container>
            <!-- Title Section -->
            <v-row justify="center">
            <v-col cols="12" md="auto">
                <h2 class="text-h3 font-weight-bold text-center">Our Impact</h2>
                <div class="text-red">What other stats do we need to highlight here?</div>
                <h3 class="text-h5 text-center">Since 2020</h3>
            </v-col>
            </v-row>

            <!-- First Stats Row -->
            <v-row class="stats-row mt-5">
            <v-col cols="12" md="auto" class="text-center mb-4 mb-md-0">
                <h2 class="text-h3">500+</h2>
                <h3 class="text-h5">Clean-up volunteers</h3>
            </v-col>

            <v-col cols="12" md="auto" class="text-center mb-4 mb-md-0">
                <h2 class="text-h3">100+</h2>
                <h3 class="text-h5">Blood bags donated</h3>
            </v-col>

            <v-col cols="12" md="auto" class="text-center">
                <h2 class="text-h3">2,000+ kg</h2>
                <h3 class="text-h5">Garbage collected</h3>
            </v-col>
            </v-row>

            <!-- Second Stats Row -->
            <v-row justify="center" class="mt-5">
            <v-col cols="12" md="auto" class="text-center">
                <h2 class="text-h3">1,000+</h2>
                <h3 class="text-h5">Mangroves Planted & Parented</h3>
            </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style>
.stats-row {
  justify-content: center;
}

@media (min-width: 960px) {
  .stats-row {
    justify-content: space-between !important;
  }
}
</style>