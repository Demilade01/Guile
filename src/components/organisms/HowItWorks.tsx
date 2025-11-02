import { Typography } from '../atoms/Typography.tsx';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Join the waitlist and get early access when we launch in your city.',
  },
  {
    number: '2',
    title: 'Set Your Schedule',
    description: 'Define your availability, services, and pricing in minutes.',
  },
  {
    number: '3',
    title: 'Start Accepting Bookings',
    description: 'Clients can book appointments online, and you manage everything from your dashboard.',
  },
  {
    number: '4',
    title: 'Grow Your Business',
    description: 'Use insights and tools to optimize your operations and build your client base.',
  },
];

export const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Typography variant="h2" className="text-center mb-4">
          How it works
        </Typography>
        <Typography
          variant="body"
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Getting started with Guile is simple. Follow these steps to transform
          how you manage your barbershop.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-4 font-bold text-xl">
                {step.number}
              </div>
              <Typography variant="h4" className="mb-3">
                {step.title}
              </Typography>
              <Typography variant="body" className="text-gray-600">
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

