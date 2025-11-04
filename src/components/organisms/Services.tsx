import { motion } from 'framer-motion';
import { Scissors, Sparkles, HeartPulse, User } from 'lucide-react';
import { Typography } from '../atoms/Typography.tsx';
import { SERVICES, type ServiceItem } from '../../constants/index.ts';

const iconMap: Record<ServiceItem['icon'], React.ComponentType<{ className?: string }>> = {
  scissors: Scissors,
  beard: User,
  sparkles: Sparkles,
  heart: HeartPulse,
};

export const Services = () => {
  return (
    <section id="services" className="w-full py-20 md:py-28 px-4 md:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <Typography variant="h2" className="text-center mb-12">
          Services
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-6 rounded-xl border border-white/15 bg-white/8 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-white/30 transition-all"
              >
                <Icon className="w-7 h-7 mb-4 text-white" />
                <Typography variant="h4" className="mb-2">
                  {s.title}
                </Typography>
                <Typography variant="body">{s.description}</Typography>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
