import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'S3 file Manager',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="default">
      <body className={`${inter.className} w-screen h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
