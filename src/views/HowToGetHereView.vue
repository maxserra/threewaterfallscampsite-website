<script setup>
import { content } from '../data/content.js'

// Direction steps will be imported from data file later
const directionSteps = [
  {
    id: 1,
    title: 'From Kampala',
    description: 'Take the main highway from Kampala towards Mbale. The journey is approximately 245km and takes about 4-5 hours.',
    image: '/images/directions/from-kampala.jpg',
    details: [
      'Follow signs to Jinja',
      'Continue through Jinja towards Mbale',
      'The road is mostly paved and in good condition'
    ]
  },
  {
    id: 2,
    title: 'Arriving in Mbale',
    description: 'Once in Mbale town, head towards the foothills of Mount Elgon.',
    image: '/images/directions/mbale-town.jpg',
    details: [
      'Look for signs to Wanale',
      'Ask locals for "Three Waterfalls Campsite"',
      'Stock up on supplies if needed - this is your last chance'
    ]
  },
  {
    id: 3,
    title: 'Final Approach',
    description: 'Follow the road towards Wanale Ridge. The campsite is located along this route.',
    image: '/images/directions/final-approach.jpg',
    details: [
      'The road becomes unpaved but is manageable',
      'Look for our signage',
      'Call us if you need assistance: David or Samuel'
    ]
  }
]
</script>

<template>
  <div class="how-to-get-here">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">How to Get Here</h1>
        <p class="page-subtitle">
          Directions to reach {{ content.site.name }} by road
        </p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <p class="intro-text">
            Our campsite is located at the edge of Mount Elgon National Park, near Mbale in Eastern Uganda.
            The journey offers beautiful scenery as you travel through the countryside. Follow these directions
            to reach us safely.
          </p>
          <div class="contact-box">
            <h3 class="contact-heading">Need Help Finding Us?</h3>
            <p>Call us if you get lost or need directions:</p>
            <p><strong>David:</strong> <a :href="`tel:${content.contact.davidPhoneRaw}`">{{ content.contact.davidPhone }}</a></p>
            <p><strong>Samuel:</strong> <a :href="`tel:${content.contact.samuelPhoneRaw}`">{{ content.contact.samuelPhone }}</a></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Directions Steps Section -->
    <section class="directions-section">
      <div class="container">
        <h2 class="section-title centered">Step-by-Step Directions</h2>

        <div class="steps-container">
          <div
            v-for="step in directionSteps"
            :key="step.id"
            class="direction-step"
          >
            <div class="step-header">
              <span class="step-number">Step {{ step.id }}</span>
              <h3 class="step-title">{{ step.title }}</h3>
            </div>

            <div class="step-image-placeholder">
              <div class="placeholder-content">
                <span class="placeholder-icon">🗺️</span>
                <p class="placeholder-text">Map/Photo: {{ step.title }}</p>
                <p class="placeholder-hint">Image path: {{ step.image }}</p>
              </div>
            </div>

            <div class="step-content">
              <p class="step-description">{{ step.description }}</p>
              <ul class="step-details">
                <li v-for="(detail, index) in step.details" :key="index">
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="tips-section">
      <div class="container">
        <h2 class="section-title centered">Travel Tips</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <div class="tip-icon">⏰</div>
            <h3 class="tip-title">Best Time to Arrive</h3>
            <p class="tip-text">
              Aim to arrive in the early afternoon to settle in before sunset,
              maybe you have time for an afternoon in the Wanale Ridge.
            </p>
          </div>
          <div class="tip-card">
            <div class="tip-icon">🚗</div>
            <h3 class="tip-title">Vehicle Recommendations</h3>
            <p class="tip-text">
              While a 4x4 is not strictly necessary, it's recommended during rainy days.
              The final approach road can be muddy.
            </p>
          </div>
          <div class="tip-card">
            <div class="tip-icon">⛽</div>
            <h3 class="tip-title">Fuel & Supplies</h3>
            <p class="tip-text">
              Although not critical, consider filling up fuel in Mbale. There are small
              shops near the campsite where you can get basic supplies.
            </p>
          </div>
          <div class="tip-card">
            <div class="tip-icon">📱</div>
            <h3 class="tip-title">Mobile Network</h3>
            <p class="tip-text">
              Mobile network coverage is at the campsite. But consider saving our
              contact numbers before you leave.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.how-to-get-here {
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

.intro-section {
  padding: 4rem 1rem;
  background-color: var(--color-light);
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
}

.intro-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0 0 2rem 0;
  color: var(--color-text);
}

.contact-box {
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
}

.contact-heading {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: var(--color-dark);
}

.contact-box p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.contact-box a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.contact-box a:hover {
  text-decoration: underline;
}

.directions-section {
  padding: 4rem 1rem;
  background-color: var(--color-background);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 3rem 0;
  color: var(--color-dark);
}

.section-title.centered {
  text-align: center;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.direction-step {
  background-color: var(--color-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.step-header {
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-number {
  background-color: var(--color-accent);
  color: var(--color-dark);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.step-image-placeholder {
  background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.placeholder-content {
  text-align: center;
}

.placeholder-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.placeholder-text {
  color: #666;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.placeholder-hint {
  color: #999;
  font-size: 0.875rem;
  font-style: italic;
  margin: 0;
}

.step-content {
  padding: 2rem;
}

.step-description {
  font-size: 1.125rem;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  color: var(--color-text);
}

.step-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.step-details li {
  padding: 0.75rem 0 0.75rem 2rem;
  position: relative;
  color: var(--color-text);
  line-height: 1.6;
}

.step-details li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: 700;
  font-size: 1.25rem;
}

.tips-section {
  padding: 4rem 1rem;
  background-color: var(--color-light);
}

.tips-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.tip-card {
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.tip-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.tip-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tip-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: var(--color-dark);
}

.tip-text {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: var(--color-text);
}

/* Tablet and above */
@media (min-width: 768px) {
  .page-title {
    font-size: 3rem;
  }

  .page-subtitle {
    font-size: 1.5rem;
  }

  .tips-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .step-header {
    padding: 2rem 3rem;
  }

  .step-content {
    padding: 3rem;
  }
}
</style>
