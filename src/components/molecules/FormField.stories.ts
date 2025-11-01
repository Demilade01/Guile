import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './FormField.tsx';

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'tel', 'password'],
    },
    required: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Phone',
    type: 'tel',
    placeholder: '(555) 123-4567',
    helperText: "We'll never share your phone number",
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'your@email.com',
    errorMessage: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
  },
};

