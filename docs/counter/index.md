---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Counter Plugin for Craft CMS"
  tagline: Site and Page Visits Statistics
  image:
    light:
      src: /max-online-light.png
      alt: Counter Light
    dark:
      src: /max-online-dark.png
      alt: Counter Dark
  actions:
    - theme: brand
      text: Documentation
      link: /counter/introduction
    - theme: alt
      text: Showcase
      link: /counter/showcase
features:
- title: Easy Setup
  details: Automatic and manual counting
- title: Site and Page Statistics
  details: Fetch data using Twig and GraphQL in frontend
- title: Beautiful Widgets
  details: Visit charts and reports in control panel
---
<script setup>
import HomeCounter from '../.vitepress/components/HomeCounter.vue'
</script>
<HomeCounter />