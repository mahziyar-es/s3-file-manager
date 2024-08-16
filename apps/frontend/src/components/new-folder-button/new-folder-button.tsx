import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const NewFolderButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="text-xs">
          New folder
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create folder</DialogTitle>
        {/*  */}
      </DialogContent>
    </Dialog>
  );
};
