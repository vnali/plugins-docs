// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { onMounted, watch, provide, ref } from 'vue'
import { useRoute } from 'vitepress'
import { useGraphQL } from '../composables/useGraphQL'
import { SITE_PAGE_VISITS_QUERY } from '../queries/site-page-visits.mjs';
import './custom.css'

const counterData = ref({
  pageVisits: {
    today: '📊'
  }, 
  counter: {
    visits: '📊'
  }
})

export default {
  ...DefaultTheme,
  Layout,
  setup() {
    const route = useRoute()

    const count =  async () => {

      const api = import.meta.env.VITE_COUNTER_API
      const token = import.meta.env.VITE_COUNTER_TOKEN
      const CRAFT_API_URL = import.meta.env.VITE_CRAFT_API_URL
      let sessionInfoUrl = `${CRAFT_API_URL}/actions/users/session-info`

      if (token) {
        //  todo: implement remote csrf
        const csrfResponse = await fetch(sessionInfoUrl, {
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
            }
        }); // Or your custom endpoint
        const csrfToken = await csrfResponse.json();
        
        const data = {
          pageUrl: decodeURIComponent(window.location.href),
          headlessToken: token, // Add/modify data
        };
        data[csrfToken.csrfTokenName] = csrfToken.csrfTokenValue;
        fetch(api + "?t=" + new Date().getTime(), {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          credentials: "include",
        }).then(
          () => {
            //counter(); // now it runs after fetch completes
          }
        ).
        catch(error => {
          console.error('Error sending counter data:', error);
        });
      }
  };

    async function counter(path) {
      // Function to generate a random value
      function getRandomValue() {
        return (Math.random() + 1).toString(36).substring(7); // Generates a random number between 0 and 1
      }
    
      // Generate a new random value for each request
      const randomValue = getRandomValue();
      const graphql = useGraphQL();

      try {
        const result = await graphql.query(SITE_PAGE_VISITS_QUERY, {
          t: randomValue, // Pass the random value as a variable
          page: decodeURIComponent(window.location.href)
        }, {
          private: true
        });
        if (path === latestPath) {
          counterData.value = result
        } else {
          console.log(path + '-' + latestPath);
        }
      } catch (err) {
        console.error('Error fetching globals:', err);
      }
    };
    
    let latestPath = ''
    onMounted(() => {
      counterData.value.pageVisits.today = '📊'
      counterData.value.counter.visits = '📊'
      // Run JS on initial page load
      count();
      const currentPath = route.path
      latestPath = currentPath
      counter(currentPath);
    })

    watch(
      () => route.path,
      () => {
        counterData.value.pageVisits.today = '📊'
        counterData.value.counter.visits = '📊'
        count();
        const currentPath = route.path
        latestPath = currentPath
        counter(currentPath);
      }
    )

    provide('counterData', counterData)
  }
}