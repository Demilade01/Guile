import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../atoms/Logo.tsx';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full py-3 md:py-4 px-4 md:px-8 border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Logo size="sm" />
        </motion.div>
        <nav className="hidden md:flex items-center gap-8">
          <motion.a
            href="#features"
            className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
            whileHover={{ y: -2 }}
          >
            Features
          </motion.a>
          <motion.a
            href="#cities"
            className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
            whileHover={{ y: -2 }}
          >
            Cities
          </motion.a>
          <motion.a
            href="#waitlist"
            className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
            whileHover={{ y: -2 }}
          >
            Waitlist
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};

