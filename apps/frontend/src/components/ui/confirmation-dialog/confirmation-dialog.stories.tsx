import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useArgs } from '@storybook/preview-api';
import { ConfirmationDialog } from './confirmation-dialog';
import { Button } from '@/components/ui/button';

const meta = {
  component: ConfirmationDialog,
  tags: ['autodocs'],
} satisfies Meta<typeof ConfirmationDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Are you sure?',
    description: 'This action is permanent',
    isOpen: false,
    confirmHandler: fn(),
    closeHandler: fn(),
  },
  render: function Render(args) {
    const [{ isOpen }, updateArgs] = useArgs();

    function toggle() {
      updateArgs({ isOpen: !isOpen });
    }

    return (
      <div>
        <Button onClick={toggle}>Open Confirmation</Button>
        <ConfirmationDialog
          {...args}
          isOpen={isOpen}
          confirmHandler={toggle}
          closeHandler={toggle}
        />
      </div>
    );
  },
};
