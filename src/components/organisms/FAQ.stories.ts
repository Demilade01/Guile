import type { Meta, StoryObj } from '@storybook/react-vite';
import { FAQ } from './FAQ.tsx';

const meta = {
  title: 'Organisms/FAQ',
  component: FAQ,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

