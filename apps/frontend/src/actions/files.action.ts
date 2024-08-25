'use server';

import { httpRequest } from './request';
import { addQueryParamsToUrl } from '@/lib/utils';
import { revalidateTag } from 'next/cache';
import { CreateFileDto, File, UpdateFileDto } from '@/types/file.type';

export const fetchFiles = async (params?: { folder_id?: number }) => {
  const url = addQueryParamsToUrl('files', params);

  const response = await httpRequest(url, {
    next: { tags: ['files'] },
  });

  (response as File[]).forEach(
    (file) =>
      (file.url = process.env.FILE_STORAGE_BASE_URL + '/' + file.storage_key),
  );

  return response as File[];
};

export const createFile = async (fileDto: CreateFileDto) => {
  const response = await httpRequest('files', {
    method: 'POST',
    body: JSON.stringify(fileDto),
  });

  revalidateTag('files');

  return response as { file: File; upload_presigned_url: string };
};

export const updateFile = async (id: number, fileDto: UpdateFileDto) => {
  await httpRequest(`files/${id}`, {
    method: 'PUT',
    body: JSON.stringify(fileDto),
  });

  revalidateTag('files');
};

export const deleteFile = async (id: number) => {
  await httpRequest(`files/${id}`, {
    method: 'DELETE',
  });

  revalidateTag('files');
};
