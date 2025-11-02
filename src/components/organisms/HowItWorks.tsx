import { motion } from 'framer-motion';
import { UserPlus, CalendarCheck, CheckCircle, TrendingUp } from 'lucide-react';
import { Typography } from '../atoms/Typography.tsx';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: 'Sign Up',
    description: 'Join the waitlist and get early access when we launch in your city.',
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: 'Set Your Schedule',
    description: 'Define your availability, services, and pricing in minutes.',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Start Accepting Bookings',
    description: 'Clients can book appointments online, and you manage everything from your dashboard.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Grow Your Business',
    description: 'Use insights and tools to optimize your operations and build your client base.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {step.icon}
              </motion.div>
              <Typography variant="h4" className="mb-3">
                {step.title}
              </Typography>
              <Typography variant="body" className="text-gray-600">
                {step.description}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

