import { Header } from './organisms/Header.tsx';
import { Hero } from './organisms/Hero.tsx';
import { Features } from './organisms/Features.tsx';
import { HowItWorks } from './organisms/HowItWorks.tsx';
import { Cities } from './organisms/Cities.tsx';
import { FAQ } from './organisms/FAQ.tsx';
import { WaitlistForm } from './organisms/WaitlistForm.tsx';
import { Footer } from './organisms/Footer.tsx';

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Cities />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

