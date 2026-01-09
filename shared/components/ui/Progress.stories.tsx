import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showLabel: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    value: 60,
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    value: 25,
    variant: 'error',
  },
};

export const Small: Story = {
  args: {
    value: 45,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    value: 45,
    size: 'lg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Progress value={45} size="sm" />
      <Progress value={45} size="md" />
      <Progress value={45} size="lg" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Progress value={25} variant="default" />
      <Progress value={50} variant="success" />
      <Progress value={75} variant="warning" />
      <Progress value={90} variant="error" />
    </div>
  ),
};

export const ProgressSteps: Story = {
  render: () => (
    <div className="w-[300px] space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 1 of 4</span>
          <span>25%</span>
        </div>
        <Progress value={25} size="sm" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 2 of 4</span>
          <span>50%</span>
        </div>
        <Progress value={50} size="sm" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Step 3 of 4</span>
          <span>75%</span>
        </div>
        <Progress value={75} size="sm" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Complete</span>
          <span>100%</span>
        </div>
        <Progress value={100} size="sm" variant="success" />
      </div>
    </div>
  ),
};
