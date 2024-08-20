import type { Meta, StoryObj } from '@storybook/react';
import { FoldersList } from './folders-list';

const meta = {
  component: FoldersList,
  tags: ['autodocs'],
} satisfies Meta<typeof FoldersList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    folders: [
      {
        id: 1,
        name: 'test-folder-1',
        created_at: '2024',
      },
      {
        id: 2,
        name: 'test-folder-2',
        created_at: '2024',
      },
      {
        id: 3,
        name: 'test-folder-3',
        created_at: '2024',
      },
    ],
  },
};
