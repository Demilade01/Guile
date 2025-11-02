import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer.tsx';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

