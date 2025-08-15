<template>
  <v-table fixed-header>
    <thead>
      <tr>
        <th class="text-center">Name</th>
        <th class="text-left">Activities Joined</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in leaders" :key="item.name">
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
  data() {
    return {
      leaders: [
        {
          name: 'Ferdinand Nones',
          activities: 250,
          avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        },
        {
          name: 'Miguel Vargas',
          activities: 190,
          avatar: 'https://cdn-icons-png.flaticon.com/512/616/616432.png',
        },
        {
          name: 'Rone Beltran',
          activities: 120,
          avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
        },
        {
          name: 'Joseph Ferrer',
          activities: 70,
          avatar: 'https://cdn-icons-png.flaticon.com/512/616/616485.png',
        },
        {
          name: 'Chris',
          activities: 65,
          avatar: 'https://cdn-icons-png.flaticon.com/512/616/616426.png',
        },
      ],
    };
  },
};
</script>
