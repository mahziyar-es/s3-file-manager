import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './search-input';
import { fn } from '@storybook/test';

const meta = {
  component: SearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: fn(),
  },
};

export const WithDefaultValue: Story = {
  args: {
    onChange: fn(),
    defaultValue: 'search query',
  },
};
