import type { Meta, StoryObj } from '@storybook/react-vite';
import { Gallery } from './Gallery.tsx';

const meta = {
  title: 'Organisms/Gallery',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
