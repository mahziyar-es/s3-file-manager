'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error',
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex items-center">
      <div className="m-auto text-2xl">Somethig went wrong!</div>
      <div className="m-auto text-2xl">{error.message}</div>
    </div>
  );
}
