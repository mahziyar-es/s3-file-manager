'use client';

import { Input } from '@/components/ui/input';
import { useRef } from 'react';

export const SearchInput = ({
  onChange,
  defaultValue,
}: {
  onChange: (value: string) => void;
  defaultValue?: string;
}) => {
  const bouncerTimeout = useRef<any>();

  const handleSearchQueryChange = (searchQuery: string) => {
    if (bouncerTimeout.current) {
      clearTimeout(bouncerTimeout.current);
    }

    bouncerTimeout.current = setTimeout(() => {
      bouncerTimeout.current = undefined;

      onChange(searchQuery);
    }, 500);
  };

  return (
    <Input
      placeholder="Search..."
      defaultValue={defaultValue ?? ''}
      onChange={(e) => handleSearchQueryChange(e.target.value)}
      className="text-foreground focus-visible:ring-0"
    />
  );
};
