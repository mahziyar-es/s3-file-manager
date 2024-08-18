import type { Meta, StoryObj } from '@storybook/react';
import { FolderForm } from './folder-form';

const meta = {
  component: FolderForm,
  tags: ['autodocs'],
} satisfies Meta<typeof FolderForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {};

export const Update: Story = {
  args: {
    folder: {
      id: 1,
      name: 'test-folder-1',
      created_at: '2024',
    },
  },
};
