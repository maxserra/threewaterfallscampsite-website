// Accommodation options data
// Edit this file to update accommodation information

import { content } from './content.js'

export const accommodations = [
  {
    id: 'tent-sites',
    name: 'Ground and Rooftop Tent',
    icon: '⛺',
    description: 'Good old camping at its best. The leveled grassy ground is perfect for pitching your tent or setting up your rooftop tent, surrounded by peaceful nature, with great view of the surroundings. Perfect for experiencing camping in its purest form.',
    price: 'From 25000UGX per person per night',
    features: [
      'Level, grassy ground',
      'Covered picnic table and seats',
      'Access to electricity'
    ],
    image: '/images/tent-site.jpg'
  },
  {
    id: 'cabins',
    name: 'Camping Cabin',
    icon: '🏠',
    description: 'For those who want a roof over their head, our cozy cabin offers comfortable accommodation with the camping atmosphere. Bring your own bedding and enjoy a home away from home.',
    price: 'From 60000UGX per cabin per night',
    features: [
      'Sleeps up to 2 persons',
      'One large double bed',
      'Access to electricity',
      'Outdoor deck with seating',
      'Lockable door'
    ],
    image: '/images/cabin.jpg'
  }
]

// Included features - same for all accommodations
export const includedFeatures = [
  'Access to showers and bathrooms',
  'Camp kitchen facilities',
  'Free parking'
]

// Important info - references content.js for single source of truth
export const importantInfo = [
  `Check-in: ${content.hours.checkIn}`,
  `Check-out: ${content.hours.checkOut}`,
  `Quiet hours: ${content.hours.quietHours}`
]

export default accommodations
