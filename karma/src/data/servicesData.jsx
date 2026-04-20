import { FiMonitor, FiSmartphone, FiPenTool } from 'react-icons/fi';

export const servicesData = {
  web: {
    id: 'web',
    title: 'Web Development',
    icon: <FiMonitor size={48} />,
    colorClass: 'text-electric-purple',
    bgClass: 'bg-electric-purple',
    description: "We build fast, modern, and scalable websites and web applications that convert visitors into customers.",
    whatWeBuild: [
      "Landing Pages & Portfolio Sites",
      "Business & Corporate Websites",
      "E-Commerce Stores (Online Shopping)",
      "Web Applications & SaaS Products",
      "3D Interactive Websites",
      "CMS & WordPress Development",
      "Admin Dashboards & Portals",
      "API Development & Integration"
    ],
    techWeUse: [
      "React, Next.js, Node.js",
      "MongoDB, PostgreSQL",
      "Three.js, GSAP, Framer Motion",
      "Tailwind CSS, WordPress"
    ],
    startingPrice: '₹10,000'
  },
  app: {
    id: 'app',
    title: 'App Development',
    icon: <FiSmartphone size={48} />,
    colorClass: 'text-cyber-blue',
    bgClass: 'bg-cyber-blue',
    description: "We develop powerful, user-friendly mobile applications for iOS and Android that your users will love.",
    whatWeBuild: [
      "Android Apps (Google Play Store)",
      "iOS Apps (Apple App Store)",
      "Cross-Platform Apps (Both in one)",
      "E-Commerce Shopping Apps",
      "Food Delivery Apps",
      "On-Demand Service Apps",
      "Social Media & Chat Apps",
      "Business Management Apps"
    ],
    techWeUse: [
      "React Native, Flutter",
      "Firebase, Node.js",
      "MongoDB, REST APIs",
      "Push Notifications, Maps"
    ],
    startingPrice: '₹30,000'
  },
  design: {
    id: 'design',
    title: 'Graphic Design',
    icon: <FiPenTool size={48} />,
    colorClass: 'text-coral-red',
    bgClass: 'bg-coral-red',
    description: "We create stunning visuals, brand identities, and designs that make your business look professional and stand out from the competition.",
    whatWeBuild: [
      "Logo & Brand Identity",
      "Social Media Posts & Stories",
      "Brochures, Flyers & Posters",
      "UI/UX Design for Web & App",
      "Product Packaging & Labels",
      "Business Cards & Stationery",
      "Motion Graphics & Animations",
      "Presentation Decks & Pitch Decks"
    ],
    techWeUse: [
      "Adobe Photoshop & Illustrator",
      "Figma, Adobe After Effects",
      "Canva Pro, Blender",
      "LottieFiles"
    ],
    startingPrice: '₹3,000'
  }
};
