import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cities } from './Cities.tsx';

const meta = {
  title: 'Organisms/Cities',
  component: Cities,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cities>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

