import type { Meta, StoryObj } from '@storybook/react-vite';
import { Testimonials } from './Testimonials.tsx';

const meta = {
  title: 'Organisms/Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
