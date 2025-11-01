import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography.tsx';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'small', 'label'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'label'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'A better booking app. Just for barbers.',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Join the waitlist',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Now launching in Boston and NYC',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'This is body text that provides information about the product and its features.',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'This is small text for captions or secondary information.',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Email Address',
  },
};

