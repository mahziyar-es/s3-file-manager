'use client';
import { ReactNode } from 'react';
import { RootLayoutHeader } from '@/components/root-layout-header';

export const RootLayoutComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <RootLayoutHeader />
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
};
