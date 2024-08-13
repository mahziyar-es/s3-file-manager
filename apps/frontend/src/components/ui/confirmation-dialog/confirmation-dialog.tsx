import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ConfirmationDialogProps } from '@/types/component-props/confirmation-dialog-props.type';

export const ConfirmationDialog = ({
  trigger,
  isOpen,
  title,
  description,
  confirmButtonText,
  closeButtonText,
  confirmHandler,
  closeHandler,
}: ConfirmationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeHandler}>
      <DialogTrigger asChild>
        <div>{trigger}</div>
      </DialogTrigger>
      <DialogContent className="w-[250px]">
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="text-center mt-4">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="mt-4 flex w-full items-center justify-center gap-4">
            <DialogClose
              onClick={closeHandler}
              className="text-muted-foreground block"
            >
              {closeButtonText || 'Close'}
            </DialogClose>
            <DialogClose
              onClick={confirmHandler}
              className="bg-primary text-primary-foreground block p-2 rounded-full"
            >
              {confirmButtonText || 'Confirm'}
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
