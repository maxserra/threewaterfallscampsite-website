<script setup>
import { content } from '../data/content.js'

const emit = defineEmits(['navigate'])

function navigateTo(view) {
  emit('navigate', view)
}
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to {{ content.site.name }}</h1>
        <p class="hero-subtitle">
          Discover the perfect escape in nature, surrounded by breathtaking waterfalls and pristine wilderness
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary" @click="navigateTo('about')">Learn More About Us</button>
          <button class="btn btn-secondary" @click="navigateTo('accommodation')">Explore Accommodation</button>
          <button class="btn btn-secondary" @click="navigateTo('directions')">See How to Get Here</button>
        </div>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <!-- Welcome Section -->
    <section class="welcome-section">
      <div class="container">
        <div class="welcome-content">
          <h2 class="section-title">Experience Nature at Its Finest</h2>
          <p class="section-text">
            Nestled in the heart of a pristine natural valley, Three Waterfalls Campsite offers
            a unique opportunity to reconnect with nature. Our site is home to three stunning
            waterfalls, each with its own character and beauty.
          </p>
          <p class="section-text">
            Whether you're seeking adventure, relaxation, or quality time with family and friends,
            our campsite provides the perfect setting. Wake up to the sound of flowing water, spend
            your days exploring scenic trails, and end your evenings under a canopy of stars.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title centered">What Makes Us Special</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3 class="feature-title">Supporting Local Orphans</h3>
            <p class="feature-text">
              Our campsite provides employment and opportunities for local orphans, helping them build a brighter future while serving our guests
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚓</div>
            <h3 class="feature-title">Anchor for the Community</h3>
            <p class="feature-text">
              We employ vulnerable community members, providing stable income and supporting families in the local area
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌿</div>
            <h3 class="feature-title">Surrounded by Nature</h3>
            <p class="feature-text">
              Located at the edge of Mount Elgon National Park with the Wanale Ridge just a 15-minute walk away, immerse yourself in pristine wilderness
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3 class="feature-title">Great Activities</h3>
            <p class="feature-text">
              Enjoy guided waterfall hikes, nature walks, and explore the stunning landscapes with knowledgeable local guides
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to visit us?</h2>
          <p class="cta-text">
            Explore our accommodation options and plan your perfect getaway
          </p>
          <div class="hero-actions">
            <button class="btn btn-secondary" @click="navigateTo('accommodation')">Explore Accommodation</button>
            <button class="btn btn-secondary" @click="navigateTo('directions')">See How to Get Here</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.hero {
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: var(--color-light);
  padding: 2rem 1rem;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.welcome-section {
  padding: 4rem 1rem;
  background-color: var(--color-light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-content {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: var(--color-dark);
}

.section-title.centered {
  text-align: center;
}

.section-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0 0 1rem 0;
  color: var(--color-text);
}

.features-section {
  padding: 4rem 1rem;
  background-color: var(--color-background);
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background-color: var(--color-light);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: var(--color-dark);
}

.feature-text {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: var(--color-text);
}

.cta-section {
  padding: 4rem 1rem;
  background-color: var(--color-primary);
  color: var(--color-light);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.cta-text {
  font-size: 1.125rem;
  margin: 0 0 2rem 0;
  opacity: 0.95;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  min-height: 44px;
  font-family: inherit;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-dark);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-light);
  border: 2px solid var(--color-light);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Tablet and above */
@media (min-width: 768px) {
  .hero {
    min-height: 600px;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
