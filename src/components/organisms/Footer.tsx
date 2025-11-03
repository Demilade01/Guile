import { Logo } from '../atoms/Logo.tsx';
import { Typography } from '../atoms/Typography.tsx';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-4 md:px-8 border-t border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo size="sm" />
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-center md:text-left">
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#cities"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cities
            </a>
            <a
              href="#waitlist"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Waitlist
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <Typography variant="small">
            © {currentYear} Guile. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

