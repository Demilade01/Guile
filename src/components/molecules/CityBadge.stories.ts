import type { Meta, StoryObj } from '@storybook/react-vite';
import { CityBadge } from './CityBadge.tsx';

const meta = {
  title: 'Molecules/CityBadge',
  component: CityBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    city: {
      control: 'select',
      options: ['Boston', 'NYC'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
} satisfies Meta<typeof CityBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Boston: Story = {
  args: {
    city: 'Boston',
  },
};

export const NYC: Story = {
  args: {
    city: 'NYC',
  },
};

export const Small: Story = {
  args: {
    city: 'Boston',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    city: 'NYC',
    size: 'md',
  },
};

