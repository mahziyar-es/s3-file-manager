'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Check, Delete, Loader, Plus, Upload } from 'lucide-react';
import { useRef, useState } from 'react';
import { createFile, updateFile } from '@/actions/files.action';
import { FileStatus } from '@/types/file.type';

export type FormFile = {
  data: File;
  id: number;
  status: 'pending' | 'uploading' | 'uploaded';
};

export const FileForm = ({ folderId }: { folderId: number }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FormFile[]>([]);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const formSchema = z.object({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilesList = e.target.files;

    if (!newFilesList) {
      return;
    }

    const newFilesData: typeof files = [...newFilesList].map((file) => ({
      data: file,
      id: Math.random(),
      status: 'pending',
    }));

    setFiles((currentFiles) => [...currentFiles, ...newFilesData]);
  };

  const removeFile = (fileIndex: number) => {
    setFiles((files) => files.filter((file, index) => index !== fileIndex));
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!files || files.length === 0) {
      setError('Select files');
      return;
    }

    setError('');

    setUploading(true);

    for (const file of files) {
      setFiles((state) => {
        return state.map((f) => {
          if (f.id === file.id) f.status = 'uploading';
          return f;
        });
      });

      await uploadProcess(file.data);

      setFiles((state) => {
        return state.map((f) => {
          if (f.id === file.id) f.status = 'uploaded';
          return f;
        });
      });
    }

    setUploading(false);
  };

  const uploadProcess = async (selectedFileObject: File) => {
    const { file, upload_presigned_url } = await createFile({
      name: selectedFileObject.name,
      type: selectedFileObject.type,
      size: selectedFileObject.size,
      folder_id: folderId,
    });

    console.log(upload_presigned_url);

    if (!upload_presigned_url) {
      throw new Error('No pre-signed URL found');
    }

    const response = await fetch(upload_presigned_url, {
      method: 'PUT',
      body: selectedFileObject,
    });

    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    await updateFile(file.id, {
      status: FileStatus.READY,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div
          className="flex items-center border gap-1 text-sm p-2 rounded-lg cursor-pointer border-border text-muted-foreground"
          onClick={() => inputFileRef.current?.click()}
        >
          <Plus className="w-[20px]" />
          <div>Pick files</div>
          <input
            type="file"
            ref={inputFileRef}
            className="hidden"
            multiple={true}
            onChange={handleFileChange}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-2">
          {files.map((file, index) => (
            <div
              key={file.id}
              className="flex items-center justify-between border gap-1 text-sm p-2 rounded-lg border-border text-muted-foreground"
            >
              <div>{file.data.name}</div>
              <div>
                {file.status === 'pending' &&
                  (uploading ? (
                    <Loader className="text-gray-500 animate-spin" />
                  ) : (
                    <Delete
                      className="text-red-500 cursor-pointer"
                      onClick={() => removeFile(index)}
                    />
                  ))}
                {file.status === 'uploading' && (
                  <Upload className="text-yellow-400 animate-bounce" />
                )}
                {file.status === 'uploaded' && (
                  <Check className="text-green-400" />
                )}
              </div>
            </div>
          ))}
        </div>

        <Button type="submit" className="rounded-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
