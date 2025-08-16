<template>
  <v-table fixed-header class="px-5">
    <thead>
      <tr>
        <th class="text-center">Name</th>
        <th class="text-left">{{ heading }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>
          <v-avatar size="32" class="mr-2">
            <img style="width: 25px;" :src="item.avatar" alt="avatar" />
          </v-avatar>
          {{ item.name }}
        </td>
        <td class="text-center">{{ item.activities }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "LeadersTable",
  props: {
    heading: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
