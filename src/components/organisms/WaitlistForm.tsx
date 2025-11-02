import { useState, type FormEvent } from 'react';
import { FormField } from '../molecules/FormField.tsx';
import { Button } from '../atoms/Button.tsx';
import { Typography } from '../atoms/Typography.tsx';

export const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.city) {
      newErrors.city = 'Please select a city';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section
        id="waitlist-form"
        className="w-full py-16 px-4 md:px-8 bg-gray-50"
      >
        <div className="max-w-2xl mx-auto text-center">
          <Typography variant="h2" className="mb-4">
            You're on the list! 🎉
          </Typography>
          <Typography variant="body" className="text-gray-600">
            We'll notify you when Guile launches in {formData.city}.
          </Typography>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <Typography variant="h2" className="mb-2 text-center">
          Join the waitlist
        </Typography>
        <Typography
          variant="body"
          className="text-center text-gray-600 mb-8"
        >
          Be the first to know when we launch
        </Typography>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Name"
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            errorMessage={errors.name}
          />

          <FormField
            label="Email"
            type="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            errorMessage={errors.email}
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-black mb-2">
              City <span className="text-gray-500 ml-1">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block cursor-pointer">
                <input
                  type="radio"
                  name="city"
                  value="Boston"
                  checked={formData.city === 'Boston'}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="sr-only peer"
                />
                <div className="border-2 border-gray-300 rounded-lg p-4 text-center transition-all peer-checked:border-black peer-checked:bg-gray-50 hover:border-gray-400">
                  <span className="font-medium">Boston</span>
                </div>
              </label>
              <label className="block cursor-pointer">
                <input
                  type="radio"
                  name="city"
                  value="NYC"
                  checked={formData.city === 'NYC'}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="sr-only peer"
                />
                <div className="border-2 border-gray-300 rounded-lg p-4 text-center transition-all peer-checked:border-black peer-checked:bg-gray-50 hover:border-gray-400">
                  <span className="font-medium">NYC</span>
                </div>
              </label>
            </div>
            {errors.city && (
              <Typography variant="small" className="text-gray-700 font-medium">
                {errors.city}
              </Typography>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </form>
      </div>
    </section>
  );
};

