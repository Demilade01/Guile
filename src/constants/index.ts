export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How much does Guile cost?',
    answer:
      'Pricing details will be announced closer to launch. Join the waitlist to be notified first and get early access pricing.',
  },
  {
    question: 'When will Guile launch?',
    answer:
      "We're launching in Boston and NYC in Q1 2025. More cities will follow based on demand.",
  },
  {
    question: 'What makes Guile different from other booking apps?',
    answer:
      'Guile is built specifically for barbers with features tailored to barbershop operations, client management, and the unique needs of the barbering industry.',
  },
  {
    question: 'Do I need any technical knowledge to use Guile?',
    answer:
      'Not at all! Guile is designed to be intuitive and easy to use. If you can use a smartphone, you can use Guile.',
  },
  {
    question: "Can I use Guile if I'm not in Boston or NYC?",
    answer:
      "Initially, Guile will launch in Boston and NYC. However, you can join the waitlist from anywhere, and we'll notify you when we expand to your city.",
  },
];

export type FeatureIconKey = 'calendar' | 'users' | 'bell' | 'barChart';
export interface FeatureItem {
  icon: FeatureIconKey;
  title: string;
  description: string;
}

export const FEATURES: FeatureItem[] = [
  {
    icon: 'calendar',
    title: 'Easy Booking Management',
    description: 'Manage all your appointments in one place. Accept, decline, or reschedule with just a few clicks.',
  },
  {
    icon: 'users',
    title: 'Client Database',
    description: 'Keep track of your clients, their preferences, and booking history all in one organized system.',
  },
  {
    icon: 'bell',
    title: 'Automated Reminders',
    description: 'Reduce no-shows with automatic SMS and email reminders sent to your clients before appointments.',
  },
  {
    icon: 'barChart',
    title: 'Analytics & Insights',
    description: 'Understand your business better with detailed analytics on bookings, revenue, and client trends.',
  },
];

export type StepIconKey = 'userPlus' | 'calendarCheck' | 'checkCircle' | 'trendingUp';
export interface StepItem {
  icon: StepIconKey;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    icon: 'userPlus',
    title: 'Sign Up',
    description: 'Join the waitlist and get early access when we launch in your city.',
  },
  {
    icon: 'calendarCheck',
    title: 'Set Your Schedule',
    description: 'Define your availability, services, and pricing in minutes.',
  },
  {
    icon: 'checkCircle',
    title: 'Start Accepting Bookings',
    description: 'Clients can book appointments online, and you manage everything from your dashboard.',
  },
  {
    icon: 'trendingUp',
    title: 'Grow Your Business',
    description: 'Use insights and tools to optimize your operations and build your client base.',
  },
];

export type ServiceIconKey = 'scissors' | 'beard' | 'sparkles' | 'heart';
export interface ServiceItem {
  icon: ServiceIconKey;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  { icon: 'scissors', title: 'Precision Haircut', description: 'Tailored cuts and fades crafted to your look.' },
  { icon: 'beard', title: 'Beard Trim & Shape', description: 'Sharp lines and conditioning for a refined beard.' },
  { icon: 'sparkles', title: 'Luxury Grooming', description: 'Hot towel, steam, and premium product ritual.' },
  { icon: 'heart', title: 'Facial Treatment', description: 'Deep cleanse and tone for healthy, fresh skin.' },
];

export interface TestimonialItem {
  name: string;
  quote: string;
  avatar?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Mark Johnson',
    quote:
      'Hands down the best cut I have had. Attention to detail and a relaxing experience throughout.',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Darren Cole',
    quote:
      'The beard trim and hot towel ritual are next level. I left feeling brand new.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Omar G.',
    quote:
      'Luxury vibe with real craft. Booking again for next month already.',
    avatar: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=200&auto=format&fit=crop',
  },
];

// Extend IMAGES
export const IMAGES = {
  // Royalty-free Unsplash sources (can be replaced later)
  heroBg:
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=Mnwx',
  featuresBg:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  howItWorksBg:
    'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  citiesBg:
    'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  faqBg:
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  waitlistBg:
    'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  aboutImg:
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
  ctaBg:
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
  gallery: [
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
  ],
} as const;
