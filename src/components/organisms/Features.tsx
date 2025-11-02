import { Typography } from '../atoms/Typography.tsx';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Easy Booking Management',
    description: 'Manage all your appointments in one place. Accept, decline, or reschedule with just a few clicks.',
  },
  {
    title: 'Client Database',
    description: 'Keep track of your clients, their preferences, and booking history all in one organized system.',
  },
  {
    title: 'Automated Reminders',
    description: 'Reduce no-shows with automatic SMS and email reminders sent to your clients before appointments.',
  },
  {
    title: 'Analytics & Insights',
    description: 'Understand your business better with detailed analytics on bookings, revenue, and client trends.',
  },
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Typography variant="h2" className="text-center mb-4">
          Built for barbers, by barbers
        </Typography>
        <Typography
          variant="body"
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Everything you need to run your barbershop efficiently, all in one
          platform.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-black transition-colors"
            >
              <Typography variant="h4" className="mb-3">
                {feature.title}
              </Typography>
              <Typography variant="body" className="text-gray-600">
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

