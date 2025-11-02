import { Typography } from '../atoms/Typography.tsx';
import { CityBadge } from '../molecules/CityBadge.tsx';
import { Button } from '../atoms/Button.tsx';

export const Hero = () => {
  const scrollToWaitlist = () => {
    const form = document.getElementById('waitlist-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-3 mb-6">
          <CityBadge city="Boston" />
          <CityBadge city="NYC" />
        </div>
        <Typography variant="h1" className="mb-6">
          A better booking app.
          <br />
          Just for barbers.
        </Typography>
        <Typography variant="body" className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our waitlist now! We're launching in Boston and NYC to start. Get
          early access to the booking platform designed specifically for barbers.
        </Typography>
        <Button
          variant="primary"
          size="lg"
          onClick={scrollToWaitlist}
        >
          Join Waitlist
        </Button>
      </div>
    </section>
  );
};

