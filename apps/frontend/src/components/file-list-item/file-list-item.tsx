import { File } from '@/types/file.type';
import { FileListItemActions } from '../file-list-item-actions';

export const FileListItem = ({ file }: { file: File }) => {
  return (
    <div className="border border-border p-2 rounded-lg" title={file.name}>
      {file.type.includes('image') && (
        <img src={file.url} className="rounded-lg" />
      )}

      <div className="flex items-center justify-between">
        <p className="flex-1 mt-2 text-muted-foreground text-sm truncate">
          {file.name}
        </p>
        <FileListItemActions file={file} />
      </div>
    </div>
  );
};
