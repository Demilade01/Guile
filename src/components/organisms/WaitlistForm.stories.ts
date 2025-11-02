import type { Meta, StoryObj } from '@storybook/react-vite';
import { WaitlistForm } from './WaitlistForm.tsx';

const meta = {
  title: 'Organisms/WaitlistForm',
  component: WaitlistForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WaitlistForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

