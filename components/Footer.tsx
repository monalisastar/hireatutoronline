import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 px-6 py-10 mt-12 text-white z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Left: Copyright */}
        <div className="text-white/70 text-center md:text-left">
          © {new Date().getFullYear()} Hire a Tutor. All rights reserved.
        </div>

        {/* Right: Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-white/80">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <a href="mailto:info@hireatutornow.com" className="hover:underline">
            Contact
          </a>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <a href="https://twitter.com/HireATutorNow" target="_blank" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="https://facebook.com/HireATutorNow" target="_blank" className="hover:text-blue-400">
            Facebook
          </a>
          <a
            href="https://discord.gg/tWXsGZrUX9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Discord
          </a>
        </div>
      </div>

      {/* SEO Callout (Discreet) */}
      <p className="text-center text-[11px] text-gray-400 mt-6">
        🌍 Serving students in California, New York, Minnesota, Canada, the UK, Europe, and China.
      </p>

      {/* Payment & Trust Info */}
      <p className="text-center text-[11px] text-gray-400 mt-2">
        💳 Secure payments via PayPal, Stripe, and cryptocurrency. Trusted globally.
      </p>

      {/* Trustpilot Widget */}
      <div id="trustpilot-widget" className="mt-6 flex justify-center">
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="685efedc8bd00641e4910f8c"
          data-style-height="52px"
          data-style-width="100%"
        >
          <a
            href="https://www.trustpilot.com/review/hireatutornow.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

