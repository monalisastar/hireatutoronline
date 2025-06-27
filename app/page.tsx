// app/page.tsx

import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import MeetOurTutors from '@/components/MeetOurTutors';
import FAQ from '@/components/FAQ'; // ✅ import FAQ

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
      <Pricing />
      <MeetOurTutors />
      <HowItWorks />
      <FAQ /> {/* ✅ now correctly placed AFTER How It Works */}
    </>
  );
}

