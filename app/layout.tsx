// app/layout.tsx

import '../styles/globals.css';
import Head from 'next/head';
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
      <Head>
        {/* Bing Site Verification */}
        <meta name="msvalidate.01" content="16822ECC461C2545289B082943C89638" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HireATutorNow" />
        <meta name="twitter:title" content="Hire a Tutor – Expert Academic Help On Demand" />
        <meta name="twitter:description" content="Connect instantly with expert tutors for assignments, live help, and exam prep." />
        <meta name="twitter:image" content="https://hireatutornow.com/images/cover-fallback.jpg" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hire a Tutor – Instant Academic Help Online" />
        <meta property="og:description" content="Get live tutoring, assignment help, and test prep from qualified experts. Trusted by 2,000+ students worldwide." />
        <meta property="og:url" content="https://hireatutornow.com/" />
        <meta property="og:image" content="https://hireatutornow.com/images/cover-fallback.jpg" />
        <meta property="og:site_name" content="Hire a Tutor" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://hireatutornow.com/" />

        {/* Preload Font (example) */}
        <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Organization JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hire a Tutor",
            "url": "https://hireatutornow.com",
            "logo": "https://hireatutornow.com/images/logo.png",
            "sameAs": [
              "https://twitter.com/HireATutorNow",
              "https://www.facebook.com/HireATutorNow"
            ],
            "description": "Hire a Tutor offers live academic help, assignments, tutoring, and test prep from expert tutors across disciplines.",
            "founder": {
              "@type": "Person",
              "name": "Brian Njata"
            }
          })
        }} />

        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BE1QZRHVC2"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BE1QZRHVC2');
          `
        }} />
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



