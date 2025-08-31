<template>
    <section id="grid">
        <v-container>
            <!-- Title Section -->
            <v-row justify="center">
            <v-col cols="12" md="auto">
                <h2 class="text-h3 font-weight-bold text-center">Our Impact</h2>
                <h3 class="text-h5 text-center">Since 2024</h3>
            </v-col>
            </v-row>

            <!-- First Stats Row -->
            <v-row class="stats-row mt-5">
            <v-col cols="12" md="auto" class="text-center mb-4 mb-md-0">
                <h2 class="text-h3">742</h2>
                <h3 class="text-h5">Daily beach clean ups</h3>
            </v-col>

            <v-col cols="12" md="auto" class="text-center mb-4 mb-md-0">
                <h2 class="text-h3">26</h2>
                <h3 class="text-h5">Blood letting activities</h3>
            </v-col>

            <v-col cols="12" md="auto" class="text-center">
                <h2 class="text-h3">124</h2>
                <h3 class="text-h5">Turtle patrolling days</h3>
            </v-col>
            </v-row>

            <!-- Second Stats Row -->
            <v-row justify="center" class="mt-5">
            <v-col cols="12" md="auto" class="text-center">
                <h2 class="text-h3">26</h2>
                <h3 class="text-h5">Tree planting activities</h3>
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