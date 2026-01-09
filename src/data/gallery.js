// Image gallery data
// Edit this file to add or update gallery images
// Images should be placed in the public/images/ directory

export const galleryImages = {
  waterfalls: [
    {
      id: 1,
      src: '/images/waterfall-1.jpg',
      alt: 'Morning Mist Falls',
      caption: 'Morning Mist Falls - 45 feet of cascading beauty'
    },
    {
      id: 2,
      src: '/images/waterfall-2.jpg',
      alt: 'Whisper Falls',
      caption: 'Whisper Falls - A peaceful retreat'
    },
    {
      id: 3,
      src: '/images/waterfall-3.jpg',
      alt: 'Echo Falls',
      caption: 'Echo Falls - Nature\'s symphony'
    }
  ],

  campsite: [
    {
      id: 4,
      src: '/images/campsite-1.jpg',
      alt: 'Tent camping area',
      caption: 'Spacious tent sites surrounded by nature'
    },
    {
      id: 5,
      src: '/images/campsite-2.jpg',
      alt: 'Powered caravan sites',
      caption: 'Modern powered sites for caravans and RVs'
    },
    {
      id: 6,
      src: '/images/campsite-3.jpg',
      alt: 'Camping cabins',
      caption: 'Cozy cabins for a comfortable stay'
    }
  ],

  activities: [
    {
      id: 7,
      src: '/images/hiking-trail.jpg',
      alt: 'Hiking trail',
      caption: 'Scenic trails through pristine forest'
    },
    {
      id: 8,
      src: '/images/campfire.jpg',
      alt: 'Evening campfire',
      caption: 'Gather around the campfire under the stars'
    }
  ]
}

// All images combined for easy iteration
export const allImages = [
  ...galleryImages.waterfalls,
  ...galleryImages.campsite,
  ...galleryImages.activities
]

export default galleryImages
