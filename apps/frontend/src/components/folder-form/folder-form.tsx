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
import { Folder } from '@/types/folder.type';
import { createFolder, updateFolder } from '@/actions/folders.action';
import { toast } from 'sonner';

export const FolderForm = ({ folder }: { folder?: Folder }) => {
  const formSchema = z.object({
    name: z.string().min(3),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: folder?.name ?? '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (folder?.id) {
        await updateFolder(folder.id, values);
        toast.success('Folder updated');
      } else {
        await createFolder(values);
        form.reset();
        toast.success('Folder created');
      }
    } catch (error: unknown) {
      toast.error((error as Error).message ?? 'Something went wrong');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
