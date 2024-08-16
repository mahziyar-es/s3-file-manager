import { ThemeSwitcher } from '@/components/theme-switcher';

export const RootLayoutHeader = () => {
  return (
    <div className="h-[50px] p-4 flex items-center justify-between bg-primary dark:bg-background dark:border-b border-border">
      <div className="text-primary-foreground dark:text-foreground">
        File Manager
      </div>
      <ThemeSwitcher />
    </div>
  );
};
