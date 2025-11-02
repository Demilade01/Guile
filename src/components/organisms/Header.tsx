import { Logo } from '../atoms/Logo.tsx';

export const Header = () => {
  return (
    <header className="w-full py-4 md:py-6 px-4 md:px-8 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="shrink-0">
          <Logo size="md" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
          >
            Features
          </a>
          <a
            href="#cities"
            className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
          >
            Cities
          </a>
          <a
            href="#waitlist"
            className="text-gray-700 hover:text-black transition-colors font-medium text-sm"
          >
            Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
};

