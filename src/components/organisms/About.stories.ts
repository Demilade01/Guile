import type { Meta, StoryObj } from '@storybook/react-vite';
import { About } from './About.tsx';

const meta = {
  title: 'Organisms/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
