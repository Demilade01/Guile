import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
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
          className="w-full py-16 px-4 md:px-8 bg-transparent"
        >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-4"
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-white" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Typography variant="h2" className="mb-4">
              You're on the list!
            </Typography>
          </motion.div>
          <Typography variant="body" className="">
            We'll notify you when Guile launches in {formData.city}.
          </Typography>
        </motion.div>
      </section>
    );
  }

        return (
          <section id="waitlist-form" className="w-full py-16 px-4 md:px-8 bg-transparent">
            <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" className="mb-2 text-center">
            Join the waitlist
          </Typography>
          <Typography
            variant="body"
            className="text-center mb-8"
          >
            Be the first to know when we launch
          </Typography>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-sm"
        >
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
            <label className="block text-sm font-medium text-white mb-2">
              City <span className="text-gray-400 ml-1">*</span>
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
                <div className="border border-white/20 rounded-lg p-4 text-center transition-all peer-checked:border-white peer-checked:bg-white/20 backdrop-blur-sm hover:border-white/40 bg-white/5 text-white">
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
                <div className="border border-white/20 rounded-lg p-4 text-center transition-all peer-checked:border-white peer-checked:bg-white/20 backdrop-blur-sm hover:border-white/40 bg-white/5 text-white">
                  <span className="font-medium">NYC</span>
                </div>
              </label>
            </div>
            {errors.city && (
              <Typography variant="small" className="text-red-400 font-medium">
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
              </motion.form>
      </div>
    </section>
  );
};

