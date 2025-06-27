import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 px-6 py-8 mt-12 text-white z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Left: Copyright */}
        <div className="text-white/70 text-center md:text-left">
          © {new Date().getFullYear()} Hire a Tutor. All rights reserved.
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-6 text-white/80">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/tutors" className="hover:underline">
            Tutors
          </Link>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
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
    </footer>
  );
};

export default Footer;

