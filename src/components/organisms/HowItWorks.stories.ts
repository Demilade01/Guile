import type { Meta, StoryObj } from '@storybook/react-vite';
import { HowItWorks } from './HowItWorks.tsx';

const meta = {
  title: 'Organisms/HowItWorks',
  component: HowItWorks,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HowItWorks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

