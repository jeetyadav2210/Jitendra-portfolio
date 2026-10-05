import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jitendra Yaduvanshi | Senior Backend Engineer',
  description:
    'Portfolio of Jitendra Yaduvanshi, a software engineer with 4+ years of experience specializing in Node.js, TypeScript, NestJS, REST APIs, microservices, and databases.',
  keywords: [
    'Jitendra Yaduvanshi',
    'Node.js Developer',
    'Backend Developer',
    'Software Engineer',
    'TypeScript',
    'NestJS',
    'Indore',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F8FAFC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}
