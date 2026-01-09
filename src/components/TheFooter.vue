<script setup>
import { content } from '../data/content.js'
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">{{ content.site.name }}</h3>
          <p class="footer-description">
            {{ content.site.tagline }} in our peaceful campsite surrounded by stunning waterfalls.
          </p>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Contact Us</h4>
          <div class="contact-info">
            <p class="contact-item">
              <span class="contact-label">Phone (David):</span>
              <a :href="`tel:${content.contact.davidPhoneRaw}`" class="contact-link">
                {{ content.contact.davidPhone }}
              </a>
            </p>
            <p class="contact-item">
              <span class="contact-label">Phone (Samuel):</span>
              <a :href="`tel:${content.contact.samuelPhoneRaw}`" class="contact-link">
                {{ content.contact.samuelPhone }}
              </a>
            </p>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Opening Hours</h4>
          <p class="hours-text">
            <strong>Check-in:</strong> {{ content.hours.checkIn }}<br>
            <strong>Check-out:</strong> {{ content.hours.checkOut }}<br>
            <strong>Reception:</strong> {{ content.hours.reception }}
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} {{ content.site.name }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 3rem 1rem 2rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--color-accent);
}

.footer-description {
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.footer-heading {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: var(--color-accent);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.6;
}

.contact-label {
  font-weight: 600;
  margin-right: 0.5rem;
}

.contact-link {
  color: var(--color-light);
  text-decoration: none;
  transition: color 0.2s;
}

.contact-link:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

.hours-text {
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 0;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.copyright {
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.8;
}

/* Tablet and above */
@media (min-width: 768px) {
  .footer {
    padding: 4rem 1rem 2rem;
  }

  .footer-content {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .footer-content {
    gap: 4rem;
  }
}
</style>
