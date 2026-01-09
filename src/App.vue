<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import AccommodationView from './views/AccommodationView.vue'
import HowToGetHereView from './views/HowToGetHereView.vue'

// Simple navigation state management
const currentView = ref('home')

function navigateTo(view) {
  currentView.value = view
  // Scroll to top when navigating
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div id="app">
    <TheHeader :current-view="currentView" @navigate="navigateTo" />

    <main class="main-content">
      <HomeView v-if="currentView === 'home'" @navigate="navigateTo" />
      <AboutView v-else-if="currentView === 'about'" @navigate="navigateTo" />
      <AccommodationView v-else-if="currentView === 'accommodation'" @navigate="navigateTo" />
      <HowToGetHereView v-else-if="currentView === 'directions'" @navigate="navigateTo" />
    </main>

    <TheFooter />
  </div>
</template>

<style>
/* Global styles will be imported in main.js */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
