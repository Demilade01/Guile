import { Header } from './organisms/Header.tsx';
import { Hero } from './organisms/Hero.tsx';
import { WaitlistForm } from './organisms/WaitlistForm.tsx';
import { Footer } from './organisms/Footer.tsx';

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

