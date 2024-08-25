import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Folder } from '@/types/folder.type';
import { DialogDescription } from '@radix-ui/react-dialog';
import { FileForm } from '../file-form';
import { FolderFilesList } from '../folder-files-list';
import { fetchFolder } from '@/actions/folders.action';
import { fetchFiles } from '@/actions/files.action';

export const FolderContents = async ({ folderId }: { folderId: number }) => {
  const folder = await fetchFolder(folderId);
  const files = await fetchFiles({ folder_id: folderId });

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-[50px] flex items-center justify-between">
        <h1 className="text-2xl text-foreground">{folder.name}</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Upload</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Upload files</DialogTitle>
            <DialogDescription />
            <FileForm folderId={folder.id} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-4 overflow-hidden flex-1">
        <FolderFilesList files={files} />
      </div>
    </div>
  );
};
