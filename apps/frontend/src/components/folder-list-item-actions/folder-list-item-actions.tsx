'use client';
import { Edit, EllipsisVertical, Trash } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ConfirmationDialog } from '../ui/confirmation-dialog';
import { Folder } from '@/types/folder.type';

type FolderListItemActions = {
  folder: Folder;
};

export const FolderListItemActions = ({ folder }: FolderListItemActions) => {
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
            confirmHandler={() => {
              // TODO
            }}
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="p-0" variant="ghost">
                <Edit className="text-yellow-400 cursor-pointer" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Edit folder</DialogTitle>
              {/* TODO */}
            </DialogContent>
          </Dialog>
        </div>
      </PopoverContent>
    </Popover>
  );
};
