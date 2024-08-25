'use client';
import { EllipsisVertical, Trash } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ConfirmationDialog } from '../ui/confirmation-dialog';
import { toast } from 'sonner';
import { File } from '@/types/file.type';
import { deleteFile } from '@/actions/files.action';

export const FileListItemActions = ({ file }: { file: File }) => {
  const deleteFileConfirmationHandler = async () => {
    try {
      await deleteFile(file.id);
      toast.success('File deleted');
    } catch (error: unknown) {
      toast.error(
        (error as Error).message ?? 'Something went wrong, try again!',
      );
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <EllipsisVertical className="text-muted-foreground  w-5 h-5" />
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-2">
        <div className="flex gap-4">
          <ConfirmationDialog
            trigger={
              <Button className="p-0" variant="ghost">
                <Trash className="text-red-400 cursor-pointer" />
              </Button>
            }
            title="Delete"
            description="Are you sure?"
            confirmHandler={deleteFileConfirmationHandler}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
