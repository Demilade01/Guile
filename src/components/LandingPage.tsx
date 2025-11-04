import { Header } from './organisms/Header.tsx';
import { Hero } from './organisms/Hero.tsx';
import { About } from './organisms/About.tsx';
import { Services } from './organisms/Services.tsx';
import { Gallery } from './organisms/Gallery.tsx';
import { Testimonials } from './organisms/Testimonials.tsx';
import { Features } from './organisms/Features.tsx';
import { HowItWorks } from './organisms/HowItWorks.tsx';
import { Cities } from './organisms/Cities.tsx';
import { FAQ } from './organisms/FAQ.tsx';
import { CTA } from './organisms/CTA.tsx';
import { WaitlistForm } from './organisms/WaitlistForm.tsx';
import { Footer } from './organisms/Footer.tsx';

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Glass overlay effect for black background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <section id="home"><Hero /></section>
          <About />
          <section id="services"><Services /></section>
          <section id="gallery"><Gallery /></section>
          <section id="testimonials"><Testimonials /></section>
          <Features />
          <HowItWorks />
          <Cities />
          <FAQ />
          <CTA />
          <WaitlistForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

