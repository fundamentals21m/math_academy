import type { Meta, StoryObj } from '@storybook/react';
import AuthModal from '@components/auth/AuthModal';

const meta: Meta = {
  title: 'Components/AuthModal',
  component: AuthModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof AuthModal>;

export const LoggedOut: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};

export const Connecting: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};

export const Connected: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};