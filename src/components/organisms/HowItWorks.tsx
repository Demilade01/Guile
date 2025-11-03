import { motion } from 'framer-motion';
import { UserPlus, CalendarCheck, CheckCircle, TrendingUp } from 'lucide-react';
import { Typography } from '../atoms/Typography.tsx';
import { HOW_IT_WORKS_STEPS, type StepItem } from '../../constants/index.ts';

const stepIconMap: Record<StepItem['icon'], React.ComponentType<{ className?: string }>> = {
  userPlus: UserPlus,
  calendarCheck: CalendarCheck,
  checkCircle: CheckCircle,
  trendingUp: TrendingUp,
};

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
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-transparent">
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
            className="text-center mb-12 max-w-2xl mx-auto"
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
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = stepIconMap[step.icon];
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <Typography variant="h4" className="mb-3">
                  {step.title}
                </Typography>
                <Typography variant="body" className="">
                  {step.description}
                </Typography>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

