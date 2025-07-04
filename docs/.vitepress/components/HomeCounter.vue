<script setup>
import { inject, onMounted, ref } from 'vue'
import { HOME_QUERY } from '../queries/home.mjs';
import { useGraphQL } from '../composables/useGraphQL'

const homeData = ref({ 
  counter: {
    visits: '📊',
    onlineVisitors: '📊'
  }
})

onMounted(() => {
  homeCounter();
})

const homeCounter = async () => {
  // Function to generate a random value
  function getRandomValue() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  // Generate a new random value for each request
  const randomValue = getRandomValue();
  const graphql = useGraphQL();

  try {
    const result = await graphql.query(HOME_QUERY, {
      t: randomValue, // Pass the random value as a variable so we dont get cached results
    }, {
      private: true
    });
    homeData.value = result
  } catch (err) {
    console.error('Error fetching globals:', err);
  }
};
</script>

<template>
  <br>
  <div style="font-size:12px;text-align:center"><b>Live in action -> </b>This week visits: {{ homeData.counter.visits == 0 ? 1 : homeData.counter.visits }} - Online Visitors: {{ homeData.counter.onlineVisitors == 0 ? 1 : homeData.counter.onlineVisitors }}</div>
</template>
