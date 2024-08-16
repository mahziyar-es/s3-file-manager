import { FoldersSidebarContent } from '@/components/folders-sidebar-content';

export default async function Page({}: {}) {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/4 lg:w-1/5 border-e border-border h-full bg-background overflow-auto p-4">
        <FoldersSidebarContent />
      </div>
      <div className="flex md:hidden  border border-border  bg-background text-foreground cursor-pointer"></div>
      <div className="w-full md:w-3/4 lg:w-4/5 h-full p-4 bg-background flex"></div>
    </div>
  );
}
