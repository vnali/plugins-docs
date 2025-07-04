<script setup>
import { inject, onMounted, ref } from 'vue'
import { TOP_PAGES_QUERY } from '../queries/top-pages.mjs';
import { useGraphQL } from '../composables/useGraphQL'

const topPagesData = ref({
})

const counterData = inject('counterData')

onMounted(() => {
  topPagesCounter();
})

const topPagesCounter = async () => {
  // Function to generate a random value
  function getRandomValue() {
    return (Math.random() + 1).toString(36).substring(7); // Generates a random number between 0 and 1
  }

  // Generate a new random value for each request
  const randomValue = getRandomValue();
  const graphql = useGraphQL();

  try {
    const result = await graphql.query(TOP_PAGES_QUERY, {
      t: randomValue, // Pass the random value as a variable
    }, {
      private: true
    });
    topPagesData.value = result
  } catch (err) {
    console.error('Error fetching globals:', err);
  }
};

</script>

<template>
  Today’s page views: {{ counterData.pageVisits.today == 0 ? 1 : counterData.pageVisits.today }}
  <br>
  Today’s site views: {{ counterData.counter.visits == 0 ? 1 : counterData.counter.visits}}
  <br>
  This week’s top pages:
    <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Visits</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in topPagesData.topPages" :key="i">
        <td><a :href="item.page" target="_blank">{{ item.page }}</a></td>
        <td>{{ item.visits }}</td>
      </tr>
    </tbody>
  </table>
</template>
