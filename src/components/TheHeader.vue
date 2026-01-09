<script setup>
import { ref } from 'vue'
import { content } from '../data/content.js'

const props = defineProps({
  currentView: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['navigate'])

const mobileMenuOpen = ref(false)

function handleNavigation(view) {
  emit('navigate', view)
  mobileMenuOpen.value = false
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="header-content">
        <div class="logo">
          <h1 @click="handleNavigation('home')" class="logo-text">
            {{ content.site.name }}
          </h1>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop">
          <button
            @click="handleNavigation('home')"
            :class="['nav-link', { active: currentView === 'home' }]"
          >
            Home
          </button>
          <button
            @click="handleNavigation('about')"
            :class="['nav-link', { active: currentView === 'about' }]"
          >
            About Us
          </button>
          <button
            @click="handleNavigation('accommodation')"
            :class="['nav-link', { active: currentView === 'accommodation' }]"
          >
            Accommodation
          </button>
          <button
            @click="handleNavigation('directions')"
            :class="['nav-link', { active: currentView === 'directions' }]"
          >
            How to Get Here
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="mobile-menu-button"
          @click="toggleMobileMenu"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="mobileMenuOpen" class="nav-mobile">
        <button
          @click="handleNavigation('home')"
          :class="['nav-link-mobile', { active: currentView === 'home' }]"
        >
          Home
        </button>
        <button
          @click="handleNavigation('about')"
          :class="['nav-link-mobile', { active: currentView === 'about' }]"
        >
          About Us
        </button>
        <button
          @click="handleNavigation('accommodation')"
          :class="['nav-link-mobile', { active: currentView === 'accommodation' }]"
        >
          Accommodation
        </button>
        <button
          @click="handleNavigation('directions')"
          :class="['nav-link-mobile', { active: currentView === 'directions' }]"
        >
          How to Get Here
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--color-primary);
  color: var(--color-light);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
}

.logo {
  flex: 1;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  color: var(--color-light);
  transition: opacity 0.2s;
}

.logo-text:hover {
  opacity: 0.9;
}

.nav-desktop {
  display: none;
  gap: 2rem;
}

.nav-link {
  background: none;
  border: none;
  color: var(--color-light);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: opacity 0.2s;
  font-family: inherit;
}

.nav-link:hover {
  opacity: 0.8;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-accent);
}

.mobile-menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-light);
  cursor: pointer;
  padding: 0.5rem;
  min-width: 44px;
  min-height: 44px;
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-link-mobile {
  background: none;
  border: none;
  color: var(--color-light);
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.75rem 1rem;
  text-align: left;
  transition: background-color 0.2s;
  border-radius: 4px;
  font-family: inherit;
  min-height: 44px;
}

.nav-link-mobile:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link-mobile.active {
  background-color: rgba(255, 255, 255, 0.15);
  font-weight: 600;
}

/* Tablet and above */
@media (min-width: 768px) {
  .logo-text {
    font-size: 1.75rem;
  }

  .nav-desktop {
    display: flex;
  }

  .mobile-menu-button {
    display: none;
  }

  .nav-mobile {
    display: none;
  }
}
</style>
