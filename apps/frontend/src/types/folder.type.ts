export type Folder = {
  id: number;
  name: string;
  created_at: string;
};

export type CreateFolderDto = {
  name: string;
};

export type UpdateFolderDto = {
  name?: string;
};
