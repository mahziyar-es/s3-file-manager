import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './theme-switcher';

const meta = {
  component: ThemeSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
