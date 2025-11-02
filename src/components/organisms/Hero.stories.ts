import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hero } from './Hero.tsx';

const meta = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

