import { FoldersListContainer } from '../folders-list-container';
import { FoldersSearchInput } from '../folders-search-input';
import { NewFolderButton } from '../new-folder-button';

export const FoldersSidebarContent = ({
  folderSearchQuery,
}: {
  folderSearchQuery?: string;
}) => {
  return (
    <div className="flex flex-col gap-4 h-full overflow-hidden">
      <NewFolderButton />
      <FoldersSearchInput />
      <div className="flex-1 overflow-hidden">
        <FoldersListContainer searchQuery={folderSearchQuery} />
      </div>
    </div>
  );
};
