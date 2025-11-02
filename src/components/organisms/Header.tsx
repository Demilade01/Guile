import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '../atoms/Logo.tsx';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`w-full py-3 md:py-4 px-4 md:px-8 border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 rounded-b-2xl ${
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
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
            whileHover={{ y: -2 }}
          >
            Login
          </motion.button>
          <motion.button
            className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Sign Up
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-200"
          >
            <nav className="flex flex-col gap-4">
              <motion.a
                href="#features"
                className="text-gray-700 hover:text-black transition-colors font-medium text-sm py-2"
                whileHover={{ x: 4 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </motion.a>
              <motion.a
                href="#cities"
                className="text-gray-700 hover:text-black transition-colors font-medium text-sm py-2"
                whileHover={{ x: 4 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cities
              </motion.a>
              <motion.a
                href="#waitlist"
                className="text-gray-700 hover:text-black transition-colors font-medium text-sm py-2"
                whileHover={{ x: 4 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Waitlist
              </motion.a>
              <div className="flex flex-col gap-3 pt-2">
                <motion.button
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors text-left"
                  whileHover={{ x: 4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </motion.button>
                <motion.button
                  className="w-full px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

