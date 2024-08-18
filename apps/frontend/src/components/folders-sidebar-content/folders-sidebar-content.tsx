import { FoldersListContainer } from '../folders-list-container';
import { FoldersSearchInput } from '../folders-search-input';
import { NewFolderButton } from '../new-folder-button';

export const FoldersSidebarContent = ({
  folderSearchQuery,
}: {
  folderSearchQuery?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <NewFolderButton />
      <FoldersSearchInput />
      <FoldersListContainer searchQuery={folderSearchQuery} />
    </div>
  );
};
