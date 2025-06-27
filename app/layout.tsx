// app/layout.tsx

import '../styles/globals.css';
import Head from 'next/head'; // ✅ Import Head for manual meta tag
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hire a Tutor | Elite Discord-Based Tutoring',
  description: 'Get real-time, expert help through our verified Discord tutor network. Trusted globally.',
  icons: {
    icon: '/favicon.ico',
  },
  // ✅ Removed `other` as it's unreliable for Bing verification
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <Head>
        {/* ✅ Manually add Bing verification meta tag */}
        <meta name="msvalidate.01" content="16822ECC461C2545289B082943C89638" />
      </Head>
      <body className="bg-black text-white font-sans overflow-x-hidden h-full">
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}



