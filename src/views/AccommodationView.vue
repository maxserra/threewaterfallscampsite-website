<script setup>
import { accommodations, includedFeatures, importantInfo } from '../data/accommodations.js'
import { content } from '../data/content.js'
import ImageCarousel from '../components/ImageCarousel.vue'

// Campsite images
const campsiteImages = [
  {
    src: `${import.meta.env.BASE_URL}images/campsite/1.jpg`,
    alt: 'Campsite view 1',
    caption: 'Spacious camping area'
  },
  {
    src: `${import.meta.env.BASE_URL}images/campsite/2.jpg`,
    alt: 'Campsite view 2',
    caption: 'Perfect spots for tents and rooftop setups'
  },
  {
    src: `${import.meta.env.BASE_URL}images/campsite/3.jpg`,
    alt: 'Campsite view 3'
  },
  {
    src: `${import.meta.env.BASE_URL}images/campsite/4.jpg`,
    alt: 'Campsite view 4'
  }
]

// Cabin images
const cabinImages = [
  {
    src: `${import.meta.env.BASE_URL}images/cabin/1.jpg`,
    alt: 'Cabin view',
    caption: 'Cabin with double bed'
  }
]
</script>

<template>
  <div class="accommodation">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Accommodation at {{ content.site.name }}</h1>
        <p class="page-subtitle">
          Choose the perfect camping experience for your adventure
        </p>
      </div>
    </section>

    <!-- Accommodation Options -->
    <section class="content-section">
      <div class="container">
        <div class="accommodation-grid">
          <!-- Dynamic accommodation cards from data -->
          <div
            v-for="accommodation in accommodations"
            :key="accommodation.id"
            :class="['accommodation-card', { featured: accommodation.featured }]"
          >
            <div v-if="accommodation.featured" class="featured-badge">Most Popular</div>
            <ImageCarousel
              v-if="accommodation.id === 'tent-sites'"
              :images="campsiteImages"
              height="300px"
            />
            <ImageCarousel
              v-else-if="accommodation.id === 'cabins'"
              :images="cabinImages"
              height="300px"
            />
            <div class="card-content">
              <h2 class="card-title">{{ accommodation.name }}</h2>
              <p class="card-description">
                {{ accommodation.description }}
              </p>
              <ul class="features-list">
                <li v-for="(feature, index) in accommodation.features" :key="index">
                  {{ feature }}
                </li>
              </ul>
              <div class="card-footer">
                <p class="price">{{ accommodation.price }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- General Information -->
    <section class="info-section">
      <div class="container">
        <h2 class="section-title centered">What's Included</h2>
        <div class="info-grid">
          <div class="info-item">
            <h3 class="info-title">✓ All Sites Include</h3>
            <ul class="info-list">
              <li v-for="(feature, index) in includedFeatures" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="info-item">
            <h3 class="info-title">⚠️ Important Information</h3>
            <ul class="info-list">
              <li v-for="(info, index) in importantInfo" :key="index">
                {{ info }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2 class="section-title">Ready to visit us?</h2>
          <p class="contact-text">
            Get in touch with us to check availability and make your reservation.
            We're here to help you.
          </p>
          <div class="contact-details">
            <p class="contact-item">
              <strong>Phone (David):</strong> <a :href="`tel:${content.contact.davidPhoneRaw}`">{{ content.contact.davidPhone }}</a>
            </p>
            <p class="contact-item">
              <strong>Phone (Samuel):</strong> <a :href="`tel:${content.contact.samuelPhoneRaw}`">{{ content.contact.samuelPhone }}</a>
            </p>
            <p class="contact-item">
              <strong>Hours:</strong> Daily {{ content.hours.reception }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.accommodation {
  width: 100%;
}

.page-header {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: var(--color-light);
  padding: 3rem 1rem;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.page-subtitle {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.95;
}

.content-section {
  padding: 4rem 1rem;
  background-color: var(--color-background);
}

.accommodation-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.accommodation-card {
  background-color: var(--color-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
}

.accommodation-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.accommodation-card.featured {
  border: 2px solid var(--color-accent);
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-accent);
  color: var(--color-dark);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
  z-index: 10;
}

.image-placeholder {
  background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content {
  text-align: center;
}

.placeholder-icon {
  font-size: 5rem;
}

.card-content {
  padding: 2rem;
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: var(--color-dark);
}

.card-description {
  font-size: 1.0625rem;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  color: var(--color-text);
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.features-list li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
  color: var(--color-text);
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 700;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-primary);
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

.info-section {
  padding: 4rem 1rem;
  background-color: var(--color-light);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  color: var(--color-dark);
}

.section-title.centered {
  text-align: center;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.info-item {
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: 8px;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: var(--color-dark);
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  padding: 0.5rem 0;
  color: var(--color-text);
  line-height: 1.6;
}

.contact-section {
  padding: 4rem 1rem;
  background-color: var(--color-primary);
  color: var(--color-light);
}

.contact-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.contact-text {
  font-size: 1.125rem;
  line-height: 1.7;
  margin: 0 0 2rem 0;
  opacity: 0.95;
}

.contact-details {
  text-align: center;
}

.contact-item {
  font-size: 1.125rem;
  margin: 0.75rem 0;
}

.contact-item a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
}

.contact-item a:hover {
  text-decoration: underline;
}

/* Tablet and above */
@media (min-width: 768px) {
  .page-title {
    font-size: 3rem;
  }

  .page-subtitle {
    font-size: 1.5rem;
  }

  .accommodation-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .accommodation-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
