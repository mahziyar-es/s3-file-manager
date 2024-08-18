import { FoldersList } from '../folders-list/folders-list';
import { fetchFolders } from '@/actions/folders.action';
import { Folder } from '@/types/folder.type';

export const FoldersListContainer = async ({
  searchQuery,
}: {
  searchQuery?: string;
}) => {
  let folders: Folder[] = [];
  try {
    folders = await fetchFolders({
      query: searchQuery,
    });
  } catch (error: unknown) {
    return (
      <div className="text-muted-foreground">
        Failed to fetch folders, please try again!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <FoldersList folders={folders} />
    </div>
  );
};
