'use client';
import { SearchInput } from '../search-input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const FoldersSearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchQueryChange = (searchQuery: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set('folder_search_query', searchQuery);
    } else {
      params.delete('folder_search_query');
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <SearchInput
      defaultValue={searchParams.get('folder_search_query') ?? ''}
      onChange={handleSearchQueryChange}
    />
  );
};
