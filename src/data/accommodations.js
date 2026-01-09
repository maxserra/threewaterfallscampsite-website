// Accommodation options data
// Edit this file to update accommodation information

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

export const includedFeatures = [
  'Access to showers and bathrooms',
  'Camp kitchen facilities',
  'Free parking'
]

export const importantInfo = [
  'Check-in: 2:00 PM',
  'Check-out: 11:00 AM',
  'Quiet hours: 10:00 PM - 7:00 AM'
]

export default accommodations
