export const projectsList = [
  { id: '1', title: 'WashOnWheels', category: 'Web', img: 'washonwheels.png' },
  { id: '2', title: 'Digital-seva', category: 'Web', img: 'digital-seva-1.png', color: 'cyber-blue' },
  { id: '3', title: 'FoodieExpress App', category: 'App', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80', color: 'coral-red' },
  { id: '4', title: 'CafeBliss Brand', category: 'Design', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80', color: 'electric-purple' },
  { id: '5', title: 'FitTrack App', category: 'App', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80', color: 'cyber-blue' },
  { id: '6', title: 'StyleCart Socials', category: 'Design', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80', color: 'coral-red' },
];

export const projectDetailsMap = {
  '1': {
    id: '1',
    title: 'WashOnWheels',
    category: 'Web',
    heroImg: 'washonwheels.png',
    images: [
      'washonwheels.png',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
    ],
    github: 'https://github.com/gautamv8484/washonwheels',
    liveUrl: 'https://washonwheels.vercel.app',
    client: 'EcoWash Solutions',
    timeline: '4 Weeks',
    role: 'Full Stack Development',
    problem: 'The client needed a modern, eco-friendly themed platform to allow users to book mobile car wash services directly to their doorsteps, complete with scheduling and payment integrations.',
    solution: 'We built a sleek, high-conversion React single-page application with a Node.js/Express backend capable of handling real-time booking dispatch and fully integrated Stripe payments.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe API']
  },
  '2': {
    id: '2',
    title: 'Digital-seva',
    category: 'Web',
    heroImg: 'https://images.unsplash.com/photo-1503376712341-ea1d17d84f88?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80'
    ],
    github: 'https://github.com/gautamv8484/digital-seva',
    liveUrl: 'https://digital-seva.vercel.app',
    client: 'AutoVerse',
    timeline: '6 Weeks',
    role: 'Frontend 3D Engineering',
    problem: 'An automotive dealer wanted a premium, highly interactive 3D web experience where potential buyers could customize car colors, rims, and interior textures directly in the browser.',
    solution: 'Engineered a highly optimized WebGL 3D interface using React Three Fiber. Users can smoothly rotate, zoom, and customize the vehicle with real-time lighting and reflection processing.',
    techStack: ['React', 'Three.js', 'React Three Fiber', 'GSAP', 'Framer Motion', 'Zustand']
  },
  '3': {
    id: '3',
    title: 'BrickBazaar Plateform',
    category: 'Web',
    heroImg: 'BRIck',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80'
    ],
    github: 'https://github.com/karmatech/foodieexpress',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.foodieexpress',
    client: 'FoodieExpress Delivery',
    timeline: '8 Weeks',
    role: 'Mobile Architecture & UI',
    problem: 'A local startup needed a cross-platform food delivery app to compete with giants. They required a fast, bug-free UX, real-time Google Maps driver tracking, and instant push notifications.',
    solution: 'Developed a robust cross-platform app using React Native and Firebase. It features sub-second load times, real-time geolocation syncing, and an intuitive, mouth-watering user interface.',
    techStack: ['React Native', 'Firebase', 'Google Maps API', 'Node.js', 'Redux', 'Push Notifications']
  },
  '4': {
    id: '4',
    title: 'CafeBliss Brand Identity',
    category: 'Design',
    heroImg: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80'
    ],
    github: null,
    liveUrl: 'https://behance.net/gallery/cafebliss',
    client: 'CafeBliss Roasters',
    timeline: '2 Weeks',
    role: 'Lead Branding & Packaging',
    problem: 'A new artisanal coffee shop needed a complete brand identity—from logo design to coffee cup packaging—that resonated with a youthful, modern aesthetic while looking premium.',
    solution: 'Delivered a comprehensive brand book featuring a custom minimalist typography logo, vibrant complementary color palettes, and print-ready modern packaging designs.',
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Blender (3D Mockups)']
  },
  '5': {
    id: '5',
    title: 'FitTrack App',
    category: 'App',
    heroImg: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1526506118221-1d70a3c26786?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
    ],
    github: 'https://github.com/karmatech/fittrack',
    liveUrl: 'https://apps.apple.com/app/fittrack',
    client: 'FitLife Inc.',
    timeline: '5 Weeks',
    role: 'Frontend Mobile Development',
    problem: 'Users were abandoning their current fitness app because it was too complex. They needed a clean, gamified dashboard to track daily workouts, steps, and calories.',
    solution: 'Designed and built a sleek Flutter application featuring beautiful interactive charts, gamification badges, and seamless data syncing with Apple Health and Google Fit.',
    techStack: ['Flutter', 'Dart', 'Firebase Auth', 'GraphQL', 'Lottie Animations']
  },
  '6': {
    id: '6',
    title: 'StyleCart Socials',
    category: 'Design',
    heroImg: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1515347619253-ab05b22572d4?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80'
    ],
    github: null,
    liveUrl: 'https://instagram.com/stylecart',
    client: 'StyleCart Boutique',
    timeline: 'Ongoing',
    role: 'Social Media Management',
    problem: 'An emerging fashion boutique was struggling to maintain a cohesive, high-converting aesthetic grid on Instagram and Facebook.',
    solution: 'Created a dynamic library of reusable social media templates, animated story graphics, and carousel posts that increased follower engagement by 250%.',
    techStack: ['Adobe After Effects', 'Canva Pro', 'Figma', 'Adobe Premiere Pro']
  }
};
