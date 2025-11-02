import { motion } from 'framer-motion';
import { Calendar, Users, Bell, BarChart } from 'lucide-react';
import { Typography } from '../atoms/Typography.tsx';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Easy Booking Management',
    description: 'Manage all your appointments in one place. Accept, decline, or reschedule with just a few clicks.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Client Database',
    description: 'Keep track of your clients, their preferences, and booking history all in one organized system.',
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: 'Automated Reminders',
    description: 'Reduce no-shows with automatic SMS and email reminders sent to your clients before appointments.',
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Analytics & Insights',
    description: 'Understand your business better with detailed analytics on bookings, revenue, and client trends.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Features = () => {
  return (
    <section id="features" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-6 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="mb-4 text-black">{feature.icon}</div>
              <Typography variant="h4" className="mb-3">
                {feature.title}
              </Typography>
              <Typography variant="body" className="text-gray-600">
                {feature.description}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

