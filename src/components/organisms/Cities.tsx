import { Typography } from '../atoms/Typography.tsx';
import { CityBadge } from '../molecules/CityBadge.tsx';

export const Cities = () => {
  return (
    <section id="cities" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <Typography variant="h2" className="mb-4">
          Launching soon
        </Typography>
        <Typography
          variant="body"
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          We're starting with Boston and NYC to ensure we build the best
          platform for barbers. More cities coming soon.
        </Typography>

        <div className="flex justify-center gap-4 mb-12">
          <CityBadge city="Boston" size="md" />
          <CityBadge city="NYC" size="md" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 border-2 border-gray-200 rounded-lg">
            <CityBadge city="Boston" size="sm" className="mb-4" />
            <Typography variant="body" className="text-gray-600">
              Launching in Boston Q1 2025. Join the waitlist to be among the
              first barbers to experience Guile.
            </Typography>
          </div>
          <div className="p-6 border-2 border-gray-200 rounded-lg">
            <CityBadge city="NYC" size="sm" className="mb-4" />
            <Typography variant="body" className="text-gray-600">
              Launching in NYC Q1 2025. Get early access and help shape the
              future of barbershop management.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

