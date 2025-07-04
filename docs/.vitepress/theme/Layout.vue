<script setup>
import { inject } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { computed, watch, onMounted, ref } from 'vue'

const route = useRoute()
const counterData = inject('counterData')
const { page } = useData()
const showLogo = ref(true) // default to true to attempt loading

// Dynamically determine the title based on the route
const customSiteTitle = computed(() => {
  if (route.path.startsWith('/counter/')) {
    return 'Counter'
  } else {
    return 'Vnali'
  }
})

// Dynamically determine the logo based on the route
const customSiteLogo = computed(() => {
  if (route.path.startsWith('/counter')) {
    showLogo.value = true;
    return '/counter-logo.svg'
  } else {
    return ''
  }
})

const fullTitle = computed(() => {
  const pageTitle = page.value?.title || ''
  return pageTitle
    ? `${pageTitle} | ${customSiteTitle.value}` + ' Plugin for Craft CMS'
    : customSiteTitle.value + ' Plugin for Craft CMS'
})

// Update the HTML <title> tag dynamically
onMounted(() => {
  watch(
    () => route.path,
    () => {
      document.title = fullTitle.value
    },
    { immediate: true }
  )
})

function onImageError() {
  showLogo.value = false // hide image if load fails
}
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-title-after>
      <img 
        v-show="showLogo"
        style="float:left;height: 1.5rem;padding-right:5px" :src="customSiteLogo" alt="Logo" 
        @error="() => { showLogo = false }"
      />
      <span style="font-weight: bold;">
        {{ customSiteTitle }}
      </span>
    </template>
    <template #doc-before>
      <div class="statistics">
        views: {{ counterData.pageVisits.today == 0 ? 1 : counterData.pageVisits.today }}
      </div> 
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
</style>
