export enum FileStatus {
  PENDING = 'pending',
  READY = 'ready',
}

export type File = {
  id: number;
  name: string;
  size: number;
  type: string;
  storage_key: string;
  status: FileStatus;
  created_at: string;
  url?: string;
};

export type CreateFileDto = {
  name: string;
  size: number;
  type: string;
  folder_id: number;
};

export type UpdateFileDto = {
  name?: string;
  status?: FileStatus;
};
