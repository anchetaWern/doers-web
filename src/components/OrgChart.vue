<template>
  <div class="org-chart">

    <!-- Top Level: Founder + Co-Founder -->
    <div class="org-children">
      <div class="org-node" v-for="person in founders" :key="person.id">
        <v-card class="pa-0" color="#FDBF12" dark>
          <v-card-title class="text-body-1">{{ person.name }}</v-card-title>
          <v-card-subtitle>{{ person.title }}</v-card-subtitle>
        </v-card>
      </div>
    </div>

    <!-- Level 2: President + Vice President -->
    <div class="org-children">
      <div class="org-node" v-for="person in executives" :key="person.id">
        <v-card class="pa-0" color="#26A9E0" dark>
          <v-card-title class="text-body-1">{{ person.name }}</v-card-title>
          <v-card-subtitle>{{ person.title }}</v-card-subtitle>
        </v-card>
      </div>
    </div>

    <!-- Level 3: Secretary -->
    <div class="org-children">
      <div class="org-node">
        <v-card class="pa-0" color="#71A374" dark>
          <v-card-title class="text-body-1">Chris G.</v-card-title>
          <v-card-subtitle>Secretary</v-card-subtitle>
        </v-card>
      </div>
    </div>

  </div>
</template>

<script setup>
const founders = [
  { id: 1, title: "Founder", name: "Miguel Vargas" },
  { id: 2, title: "Co-Founder", name: "Angelyka Siggaoat" }
]

const executives = [
  { id: 3, title: "President", name: "Ferdinand Nones" },
  { id: 4, title: "Vice President", name: "Rone Beltran" }
]
</script>

<style scoped>
.org-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Shared styles for all nodes */
.org-node {
  position: relative;
  margin: 0 5px;
}

/* Children container */
.org-children {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 40px; /* space for connectors */
}

/* Horizontal line between siblings */
.org-children::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  border-top: 2px solid #ccc;
}

/* Vertical line for each child */
.org-children .org-node::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 20px;
  border-left: 2px solid #ccc;
}

/* Remove horizontal line when only 1 child */
.org-children:only-child::before {
  display: none;
}
</style>
