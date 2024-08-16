'use client';
import { Folder } from '@/types/folder.type';
import { FolderListItem } from '../folder-list-item';

type FoldersListProps = {
  folders: Folder[];
};

export const FoldersList = ({ folders }: FoldersListProps) => {
  return (
    <>
      {folders.length === 0 ? (
        <div className="text-muted-foreground text-center">No records</div>
      ) : (
        <div className="space-y-4">
          {folders.map((folder) => (
            <div key={folder.id}>
              <FolderListItem folder={folder} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
