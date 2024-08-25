import { ModuleErrorObjects } from 'src/common/errors/module-error-objects.type';

export enum FoldersErrorCodes {
  NAME_UNIQUE_CONSTRAINT_VIOLATION = 'folder_001',
}

export const foldersErrorObjects: ModuleErrorObjects<typeof FoldersErrorCodes> =
  {
    NAME_UNIQUE_CONSTRAINT_VIOLATION: {
      message: 'Folder name must be unique',
      code: FoldersErrorCodes.NAME_UNIQUE_CONSTRAINT_VIOLATION,
    },
  };
