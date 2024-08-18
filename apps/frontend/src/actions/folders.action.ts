'use server';

import { CreateFolderDto, Folder, UpdateFolderDto } from '@/types/folder.type';
import { httpRequest } from './request';
import { addQueryParamsToUrl } from '@/lib/utils';
import { revalidateTag } from 'next/cache';

export const fetchFolders = async (params?: { query?: string }) => {
  const url = addQueryParamsToUrl('folders', params);

  const response = await httpRequest(url, {
    next: { tags: ['folders'] },
  });

  return response as Folder[];
};

export const createFolder = async (folderDto: CreateFolderDto) => {
  const response = await httpRequest('folders', {
    method: 'POST',
    body: JSON.stringify(folderDto),
  });

  revalidateTag('folders');

  return response as Folder;
};

export const updateFolder = async (id: number, folderDto: UpdateFolderDto) => {
  await httpRequest(`folders/${id}`, {
    method: 'PUT',
    body: JSON.stringify(folderDto),
  });

  revalidateTag('folders');
};

export const deleteFolder = async (id: number) => {
  await httpRequest(`folders/${id}`, {
    method: 'DELETE',
  });

  revalidateTag('folders');
};
