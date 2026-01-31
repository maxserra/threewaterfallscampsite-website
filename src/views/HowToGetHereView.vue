<script setup>
import { content } from '../data/content.js'

// Campsite location coordinates
const campsiteCoordinates = {
  dms: '1°03\'38.9"N 34°13\'09.7"E',
  decimal: '1.060806, 34.219361'
}

// Direction images
const directionImages = [
  {
    src: `${import.meta.env.BASE_URL}images/directions/from_mbale_maps.png`,
    alt: 'Route from Mbale showing the washed out bridge to avoid',
    caption: 'Overview map from Mbale marking the route and washed out bridge'
  },
  {
    src: `${import.meta.env.BASE_URL}images/directions/final_approach_satellite.png`,
    alt: 'Satellite view of campsite location',
    caption: 'Satellite view showing exact location of the campsite'
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
        <h2 class="section-title centered">Instructions and Recommendations</h2>

        <div class="directions-content">
          <div class="route-description">
            <h3 class="route-heading">From Mbale to Three Waterfalls Campsite</h3>
            <p class="route-text">
              We assume you are starting from Mbale town. From there, you can use your navigation app
              to reach our exact coordinates:
            </p>
            <div class="coordinates-box">
              <div class="coordinate-item">
                <strong>DMS:</strong> {{ campsiteCoordinates.dms }}
              </div>
              <div class="coordinate-item">
                <strong>Decimal:</strong> {{ campsiteCoordinates.decimal }}
              </div>
            </div>
            <p class="route-text">
              Follow the route along the <strong>Busamaga Wanale Road</strong>. This is the recommended
              and safest route to reach the campsite.
            </p>
            <div class="warning-box">
              <div class="warning-icon">⚠️</div>
              <div class="warning-content">
                <h4 class="warning-heading">Important: Avoid Bungokho Road</h4>
                <p class="warning-text">
                  Do <strong>NOT take the Bungokho Road</strong> route. The bridge downstream of Zesui is washed out,
                  and the crossing is not safe. Please stick to the <strong>Busamaga Wanale Road</strong> for your safety.
                </p>
              </div>
            </div>
          </div>

          <div class="maps-container">
            <div
              v-for="(image, index) in directionImages"
              :key="index"
              class="map-item"
            >
              <div class="map-image-wrapper">
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="map-image"
                />
              </div>
              <p class="map-caption">{{ image.caption }}</p>
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

.directions-content {
  max-width: 900px;
  margin: 0 auto;
}

.route-description {
  background-color: var(--color-light);
  padding: 2.5rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.route-heading {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: var(--color-dark);
}

.route-text {
  font-size: 1.125rem;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
  color: var(--color-text);
}

.coordinates-box {
  background-color: var(--color-background);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
  margin: 1.5rem 0;
}

.coordinate-item {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
}

.coordinate-item strong {
  color: var(--color-dark);
  margin-right: 0.5rem;
}

.warning-box {
  background-color: #fff3cd;
  border-left: 4px solid #ff9800;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.warning-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.warning-content {
  flex: 1;
}

.warning-heading {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: #8b5a00;
}

.warning-text {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #664d00;
}

.maps-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.map-item {
  background-color: var(--color-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.map-image-wrapper {
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
}

.map-caption {
  padding: 1.5rem 2rem;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: var(--color-text);
  text-align: center;
  font-style: italic;
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
  .route-description {
    padding: 3rem;
  }
}
</style>
