<script setup>
import { content } from '../data/content.js'
import ImageCarousel from '../components/ImageCarousel.vue'

// Historic photos for the carousel
const historicPhotos = [
  {
    src: `${import.meta.env.BASE_URL}images/history/1.jpg`,
    alt: 'Historic photo 1'
  },
  {
    src: `${import.meta.env.BASE_URL}images/history/2.jpg`,
    alt: 'Historic photo 2'
  },
  {
    src: `${import.meta.env.BASE_URL}images/history/3.jpg`,
    alt: 'Historic photo 3'
  },
  {
    src: `${import.meta.env.BASE_URL}images/history/4.jpg`,
    alt: 'Historic photo 4'
  },
  {
    src: `${import.meta.env.BASE_URL}images/history/5.jpg`,
    alt: 'Historic photo 5'
  }
]
</script>

<template>
  <div class="about">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">About {{ content.site.name }}</h1>
        <p class="page-subtitle">
          Discover our story and what makes our campsite a special place
        </p>
      </div>
    </section>

    <!-- History Section -->
    <section class="content-section">
      <div class="container">
        <div class="content-layout">
          <div class="content-block">
            <h2 class="section-title">Our History</h2>
            <p class="content-text">
              The story of Three Waterfalls Campsite begins with tragedy and transforms into hope.
              After a devastating landslide left many orphans in the area, David moved to this region
              to help where he could. He found himself drawn to this beautiful place, where nature's
              power and beauty coexist.
            </p>
            <p class="content-text">
              One day, a Dutch visitor came to Mbale and went on a hike with David. As they walked
              through the hills and waterfalls, David shared his story and his dream of supporting
              the local orphans. Moved by David's dedication and vision, the Dutch man decided to
              help, and together they came up with the idea of starting a campsite.
            </p>
            <p class="content-text">
              The project started well, with guests coming to enjoy the natural beauty and supporting
              the community. Then COVID-19 came, and visitors stopped coming. The once-planned
              restaurant now feels far from reachable. Yet David continues, hosting guests when they
              come and employing vulnerable community members and orphans at the campsite. They work
              as night guards and guide guests on waterfall hikes, earning income while learning
              valuable skills and gaining dignity through honest work.
            </p>
          </div>

          <ImageCarousel
            :images="historicPhotos"
            height="450px"
          />
        </div>
      </div>
    </section>

    <!-- Natural Features Section -->
    <section class="content-section alt-bg">
      <div class="container">
        <h2 class="section-title centered">Natural Features</h2>
        <div class="features-list">
          <div class="feature-block">
            <h3 class="feature-heading">Mount Elgon National Park</h3>
            <p class="content-text">
              Our campsite is located at the edge of Mount Elgon National Park, offering direct
              access to one of Uganda's most spectacular natural areas. The park is home to diverse
              wildlife, ancient forests, and stunning volcanic landscapes. Wake up to the sounds of
              the forest and enjoy pristine wilderness right at your doorstep.
            </p>
          </div>
          <div class="feature-block">
            <h3 class="feature-heading">Wanale Ridge</h3>
            <p class="content-text">
              Just a 15-minute walk from the campsite, the Wanale Ridge offers breathtaking views
              and excellent hiking opportunities. The ridge trail is perfect for sunrise or sunset
              walks, providing panoramic views of the surrounding valleys and Mount Elgon. Our guides
              can show you the best routes and hidden viewpoints.
            </p>
          </div>
          <div class="feature-block">
            <h3 class="feature-heading">Proximity to Mbale</h3>
            <p class="content-text">
              We're conveniently located near Mbale town, where you'll find groceries, shops, markets,
              and other amenities. Stock up on supplies, explore local culture, or simply enjoy the
              convenience of having a town nearby while still being immersed in nature. The best of
              both worlds - wilderness adventure with urban accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainability Section -->
    <section class="content-section">
      <div class="container">
        <div class="content-block centered-content">
          <h2 class="section-title">Our Commitment to Nature and our Community</h2>
          <p class="content-text">
            We're committed to sustainable camping practices that preserve this beautiful
            environment for future generations.
          </p>
          <p class="content-text">
            We encourage all our guests to practice Leave No Trace principles and help us
            maintain the pristine condition of our natural surroundings.
          </p>
          <p class="content-text">
            We also encourage all our guests to explore the Community around the campsite and 
            engage with our neighbors to support local businesses and cultural events.
          </p>
          <h2 class="section-title">Begging</h2>
          <p class="content-text">
            We advise our guests to not support begging in the local community, as it can
            perpetuate cycles of poverty and exploitation. Instead, we recommend contributing via
            local charities or community projects that work towards sustainable development.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
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
}

.content-section.alt-bg {
  background-color: var(--color-background);
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}

.content-block {
  max-width: 800px;
}

.content-block.centered-content {
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: var(--color-dark);
}

.section-title.centered {
  text-align: center;
  margin-bottom: 2.5rem;
}

.content-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0 0 1rem 0;
  color: var(--color-text);
}

.image-placeholder {
  background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
  border-radius: 8px;
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
  font-style: italic;
  margin: 0;
}

.facilities-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.facility-item {
  background-color: var(--color-light);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.facility-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: var(--color-dark);
}

.facility-text {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: var(--color-text);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.feature-block {
  background-color: var(--color-light);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature-heading {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: var(--color-primary);
}

/* Tablet and above */
@media (min-width: 768px) {
  .page-title {
    font-size: 3rem;
  }

  .page-subtitle {
    font-size: 1.5rem;
  }

  .content-layout {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .facilities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .facilities-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
