<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    // Expected format: [{ src: string, alt: string, caption: string }]
  },
  height: {
    type: String,
    default: '400px'
  },
  showArrows: {
    type: Boolean,
    default: true
  }
})

const scrollContainer = ref(null)
const showModal = ref(false)
const currentImageIndex = ref(0)
const currentScrollIndex = ref(0)
const isAtStart = ref(true)
const isAtEnd = ref(false)

const updateScrollPosition = () => {
  if (!scrollContainer.value) return

  const container = scrollContainer.value
  const scrollLeft = container.scrollLeft
  const itemWidth = container.offsetWidth
  const index = Math.round(scrollLeft / itemWidth)

  currentScrollIndex.value = index
  isAtStart.value = index === 0
  isAtEnd.value = index >= props.images.length - 1
}

const scroll = (direction) => {
  if (!scrollContainer.value) return

  const scrollAmount = scrollContainer.value.offsetWidth
  const scrollLeft = scrollContainer.value.scrollLeft

  scrollContainer.value.scrollTo({
    left: direction === 'left'
      ? scrollLeft - scrollAmount
      : scrollLeft + scrollAmount,
    behavior: 'smooth'
  })

  // Update position after a short delay for smooth scroll
  setTimeout(updateScrollPosition, 300)
}

const openModal = (index) => {
  currentImageIndex.value = index
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
}

const navigateModal = (direction) => {
  if (direction === 'prev' && currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else if (direction === 'next' && currentImageIndex.value < props.images.length - 1) {
    currentImageIndex.value++
  }
}

const handleKeydown = (e) => {
  if (!showModal.value) return

  if (e.key === 'Escape') {
    closeModal()
  } else if (e.key === 'ArrowLeft') {
    navigateModal('prev')
  } else if (e.key === 'ArrowRight') {
    navigateModal('next')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', updateScrollPosition)
    updateScrollPosition() // Initial state
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', updateScrollPosition)
  }
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="image-carousel">
    <div
      ref="scrollContainer"
      class="carousel-container"
      :style="{ height }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item"
        @click="openModal(index)"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="carousel-image"
        />
        <div v-if="image.caption" class="carousel-caption">
          <p class="caption-text">{{ image.caption }}</p>
        </div>
      </div>
    </div>

    <button
      v-if="showArrows && images.length > 1 && !isAtStart"
      class="carousel-arrow arrow-left"
      @click="scroll('left')"
      aria-label="Previous image"
    >
      ‹
    </button>
    <button
      v-if="showArrows && images.length > 1 && !isAtEnd"
      class="carousel-arrow arrow-right"
      @click="scroll('right')"
      aria-label="Next image"
    >
      ›
    </button>

    <!-- Modal for full image view -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="modal-overlay"
        @click.self="closeModal"
      >
        <div class="modal-content">
          <button
            class="modal-close"
            @click="closeModal"
            aria-label="Close"
          >
            ✕
          </button>

          <img
            :src="images[currentImageIndex].src"
            :alt="images[currentImageIndex].alt"
            class="modal-image"
          />

          <div v-if="images[currentImageIndex].caption" class="modal-caption">
            <p class="modal-caption-text">{{ images[currentImageIndex].caption }}</p>
          </div>

          <button
            v-if="currentImageIndex > 0"
            class="modal-arrow modal-arrow-left"
            @click="navigateModal('prev')"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            v-if="currentImageIndex < images.length - 1"
            class="modal-arrow modal-arrow-right"
            @click="navigateModal('next')"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.image-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.carousel-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.carousel-container::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  cursor: pointer;
}

.carousel-item:hover {
  opacity: 0.95;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem 1.5rem 1rem 1.5rem;
  color: white;
  pointer-events: none;
}

.caption-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--color-dark);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
}

.carousel-arrow:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
}

.carousel-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.arrow-left {
  left: 1rem;
}

.arrow-right {
  right: 1rem;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.modal-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Portrait screens (height > width): use vertical rectangle */
@media (max-aspect-ratio: 1/1) {
  .modal-content {
    width: 85vw;
    height: 85vh;
  }
}

/* Landscape screens (width > height): use square */
@media (min-aspect-ratio: 1/1) {
  .modal-content {
    width: min(85vh, 85vw);
    height: min(85vh, 85vw);
  }
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--color-dark);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  padding: 0;
  z-index: 10;
}

.modal-close:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.modal-caption {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  color: var(--color-dark);
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75rem 1rem;
  border-radius: 6px;
}

.modal-caption-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.modal-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--color-dark);
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  font-size: 2.5rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  padding: 0;
}

.modal-arrow:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
}

.modal-arrow:active {
  transform: translateY(-50%) scale(0.95);
}

.modal-arrow-left {
  left: 1rem;
}

.modal-arrow-right {
  right: 1rem;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .carousel-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .arrow-left {
    left: 0.5rem;
  }

  .arrow-right {
    right: 0.5rem;
  }

  .carousel-caption {
    padding: 1.5rem 1rem 0.75rem 1rem;
  }

  .caption-text {
    font-size: 0.875rem;
  }

  .modal-overlay {
    padding: 0.5rem;
  }

  .modal-arrow-left {
    left: 0.5rem;
  }

  .modal-arrow-right {
    right: 0.5rem;
  }

  .modal-arrow {
    width: 44px;
    height: 44px;
    font-size: 2rem;
  }

  .modal-close {
    top: 0.5rem;
    right: 0.5rem;
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }

  .modal-caption {
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem 0.75rem;
  }

  .modal-caption-text {
    font-size: 0.875rem;
  }
}
</style>
