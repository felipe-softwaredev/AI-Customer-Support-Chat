'use client';

import './globals.css';
import Script from 'next/script';
import { AuthProvider } from '@/firebase/authProvider';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const path = usePathname();

  const paths = ['/login', '/register'];

  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/739a42caa2.js"
        crossOrigin="anonymous"
      ></Script>
      <body
        suppressHydrationWarning={true}
        className="bg-[url('/images/chatbot.avif')] bg-cover bg-no-repeat"
      >
        <AuthProvider>
          {paths.includes(path) && (
            <h2 className="text-2xl md:text-4xl font-bold text-center translate-y-20 px-1 md:translate-y-28 text-white">
              Welcome to{' '}
              <span className="text-purple-700 font-extrabold">
                Code Genius
              </span>
              . Instant answers to all your coding questions
            </h2>
          )}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
