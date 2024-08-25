import { ModuleErrorObjects } from 'src/common/errors/module-error-objects.type';

export enum FilesErrorCodes {
  FILE_NOT_FOUND = 'file_001',
  FOLDER_RELATION_FK_VIOLATION = 'file_002',
}

export const filessErrorObjects: ModuleErrorObjects<typeof FilesErrorCodes> = {
  FILE_NOT_FOUND: {
    message: 'File not found',
    code: FilesErrorCodes.FILE_NOT_FOUND,
  },
  FOLDER_RELATION_FK_VIOLATION: {
    message: 'Folder does not exist',
    code: FilesErrorCodes.FOLDER_RELATION_FK_VIOLATION,
  },
};
