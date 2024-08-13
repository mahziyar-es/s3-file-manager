import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="m-auto text-2xl">404 | Page not found</div>
    </div>
  );
}
