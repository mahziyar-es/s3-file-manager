import { File } from '@/types/file.type';
import { FileListItem } from '../file-list-item';

export const FolderFilesList = ({ files }: { files: File[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </div>
  );
};
