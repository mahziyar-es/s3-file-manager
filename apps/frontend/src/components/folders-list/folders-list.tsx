'use client';
import { Folder } from '@/types/folder.type';
import { FolderListItem } from '../folder-list-item';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type FoldersListProps = {
  folders: Folder[];
};

export const FoldersList = ({ folders }: FoldersListProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleClickOnFolder = (folder: Folder) => {
    const params = new URLSearchParams(searchParams);

    params.set('folder_id', `${folder.id}`);

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {folders.length === 0 ? (
        <div className="text-muted-foreground text-center">No records</div>
      ) : (
        <div className="space-y-4 pb-2 h-full overflow-auto pe-1">
          {folders.map((folder) => (
            <div onClick={() => handleClickOnFolder(folder)} key={folder.id}>
              <FolderListItem
                folder={folder}
                selected={folder.id == Number(searchParams.get('folder_id'))}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
