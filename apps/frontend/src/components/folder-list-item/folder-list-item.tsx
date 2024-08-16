import { cn } from '@/lib/utils';
import { Folder } from '@/types/folder.type';
import { FolderListItemActions } from '../folder-list-item-actions';

type FolderListItemProps = {
  folder: Folder;
  selected?: boolean;
};

export const FolderListItem = ({ folder, selected }: FolderListItemProps) => {
  return (
    <div
      title={folder.name}
      className={cn([
        'relative group h-full p-4 w-full transition cursor-pointer rounded-lg border border-border bg-card  hover:shadow-sm hover:shadow-muted-foreground dark:hover:shadow-accent',
        `${selected ? 'border-primary text-foreground shadow-sm shadow-muted-foreground' : 'text-muted-foreground hover:text-foreground'}`,
      ])}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 right-2"
      >
        <FolderListItemActions folder={folder} />
      </div>
      <div className="truncate break-all">{folder.name}</div>
    </div>
  );
};
