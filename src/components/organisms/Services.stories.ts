import type { Meta, StoryObj } from '@storybook/react-vite';
import { Services } from './Services.tsx';

const meta = {
  title: 'Organisms/Services',
  component: Services,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
