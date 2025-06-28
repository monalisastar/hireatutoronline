// app/page.tsx

export const metadata = {
  title: "Hire a Tutor Now – Global Tutoring, Essays, Math & Programming Help",
  description:
    "Top-rated online tutoring for students in California, New York, and Minnesota. Also serving Canada, the UK, Europe, and China. Get expert help with math, essay writing, programming, assignments, homework solutions, and test prep from trusted tutors worldwide.",
  keywords: [
    // Regional + Local SEO
    "hire a tutor USA",
    "California online tutor",
    "New York math help",
    "Minnesota essay assistance",
    "essay help UK",
    "online math tutor Canada",
    "programming help Europe",
    "homework help China",
    "essay help New York",
    "programming tutor Minnesota",
    "Python tutor California",
    "SAT prep New York",
    "assignment help Minnesota",
    "calculus tutoring USA",

    // General Services (retained + updated)
    "hire a tutor",
    "essayhelp",
    "mathhelp",
    "assignmenthelp",
    "homework",
    "homework solutions",
    "programmingtutoring",
    "Python tutor online",
    "SAT test prep tutor",
    "college essay writing help",
    "assignment support global"
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://hireatutornow.com',
  },
  openGraph: {
    title: 'Hire A Tutor | Essay Help, Python & Programming Tutors Online',
    description: 'Get real-time help with essays, assignments, Python, programming, and more. Connect with expert tutors trusted by 2,000+ students.',
    url: 'https://hireatutornow.com',
    siteName: 'Hire A Tutor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire A Tutor | Essay, Python & Programming Help',
    description: 'Expert help for essays, Python, programming, exams & assignments. Trusted by students worldwide.',
    creator: '@HireATutorNow',
  },
};

import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import MeetOurTutors from '@/components/MeetOurTutors';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <>
      {/* FAQ Schema */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What subjects can I get help with?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'You can get help in essays, programming, Python, math, science, economics, exam preparation, and more.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How do I connect with a tutor?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'You simply browse tutors, view profiles, and request help or chat directly with the tutor you choose.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Do you offer real-time tutoring?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes, we offer live tutoring sessions in subjects like math, programming, writing, and test prep.'
              }
            }
          ]
        })
      }} />

      {/* Tutor Schema */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Alliasgher',
          'jobTitle': 'Biology Tutor',
          'image': 'https://hireatutornow.com/images/Alliasgher.jpeg',
          'description': 'Experienced Biology tutor with a strong background in genetics, microbiology, and exam coaching.',
          'url': 'https://hireatutornow.com/tutors/alliasgher',
          'affiliation': {
            '@type': 'Organization',
            'name': 'Hire A Tutor'
          }
        })
      }} />

      {/* Organization Schema */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Hire A Tutor',
          url: 'https://hireatutornow.com',
          logo: 'https://hireatutornow.com/images/logo.png',
          sameAs: [
            'https://twitter.com/HireATutorNow',
            'https://www.linkedin.com/company/hire-a-tutor',
            'https://www.facebook.com/hireatutornow'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-555-5555',
            contactType: 'Customer Support',
            areaServed: 'US',
            availableLanguage: ['English']
          }
        })
      }} />

      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
      <Pricing />
      <MeetOurTutors />
      <HowItWorks />
      <FAQ />
    </>
  );
}

