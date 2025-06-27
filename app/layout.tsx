// app/layout.tsx

import '../styles/globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hire a Tutor | Elite Discord-Based Tutoring',
  description: 'Get real-time, expert help through our verified Discord tutor network. Trusted globally.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
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


