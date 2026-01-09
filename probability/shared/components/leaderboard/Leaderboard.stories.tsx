import type { Meta, StoryObj } from '@storybook/react';
import Leaderboard from '@components/leaderboard/Leaderboard';

const meta: Meta = {
  title: 'Components/Leaderboard',
  component: Leaderboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Leaderboard>;

export const EmptyLeaderboard: Story = {
  args: {
    courseId: 'linalg',
  },
};

export const LoadingLeaderboard: Story = {
  args: {
    courseId: 'linalg',
  },
};

export const PopulatedLeaderboard: Story = {
  args: {
    courseId: 'linalg',
  },
};