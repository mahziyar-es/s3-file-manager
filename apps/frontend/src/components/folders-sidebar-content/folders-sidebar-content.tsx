import { NewFolderButton } from '../new-folder-button';
import { FoldersListWithSearchContainer } from '../folders-list-with-search-container';

export const FoldersSidebarContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <NewFolderButton />
      <FoldersListWithSearchContainer />
    </div>
  );
};
