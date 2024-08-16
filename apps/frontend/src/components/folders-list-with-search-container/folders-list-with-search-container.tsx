import { Folder } from '@/types/folder.type';
import { FoldersList } from '../folders-list/folders-list';
import { Input } from '../ui/input';

export const FoldersListWithSearchContainer = async () => {
  const folders: Folder[] = [
    {
      id: 1,
      name: 'folder 1',
      created_at: '2024',
    },
    {
      id: 2,
      name: 'folder 2',
      created_at: '2024',
    },
    {
      id: 3,
      name: 'folder 3',
      created_at: '2024',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Input className="rounded-lg" placeholder="Search among folders..." />
      <FoldersList folders={folders} />
    </div>
  );
};
