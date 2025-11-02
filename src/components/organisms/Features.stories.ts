import type { Meta, StoryObj } from '@storybook/react-vite';
import { Features } from './Features.tsx';

const meta = {
  title: 'Organisms/Features',
  component: Features,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

