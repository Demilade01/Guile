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
