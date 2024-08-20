import { FoldersSidebarContent } from '@/components/folders-sidebar-content';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChevronRight } from 'lucide-react';

export default async function Page({
  searchParams,
}: {
  searchParams?: { folder_search_query?: string };
}) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/4 lg:w-1/5 border-e border-border h-full bg-background overflow-hidden p-4">
        <FoldersSidebarContent
          folderSearchQuery={searchParams?.folder_search_query}
        />
      </div>
      <div className="flex md:hidden  border-b border-border  bg-background text-foreground cursor-pointer">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center text-sm px-4 py-2 gap-2 focus:ring-0 focus-visible:ring-0 "
            >
              Folders
              <ChevronRight className="text-muted-foreground w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="border-border h-full overflow-hidden flex flex-col"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>Folders</SheetTitle>
              <SheetDescription />
            </SheetHeader>
            <div className="mt-4 flex-1 overflow-hidden">
              <FoldersSidebarContent
                folderSearchQuery={searchParams?.folder_search_query}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 h-full p-4 bg-background flex"></div>
    </div>
  );
}
