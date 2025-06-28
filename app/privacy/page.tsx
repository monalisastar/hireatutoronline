// app/privacy/page.tsx

export const metadata = {
  title: "Privacy Policy – Hire a Tutor",
  description: "Learn how Hire a Tutor collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how Hire a Tutor ("we", "us", or "our") collects, uses, and
        protects the personal information of users who access our website at{" "}
        <a href="https://hireatutornow.com" className="underline text-blue-400">
          hireatutornow.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Personal identifiers (name, email address, contact information)</li>
        <li>Assignment or tutoring-related content shared with tutors</li>
        <li>Browser data (IP address, device type, operating system, etc.)</li>
        <li>Usage analytics (via Google Analytics, Plausible, etc.)</li>
        <li>Trustpilot reviews and feedback (optional)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>To connect students with verified tutors</li>
        <li>To respond to inquiries or support requests</li>
        <li>To improve our platform and services</li>
        <li>To analyze site usage trends</li>
        <li>To maintain compliance with legal or regulatory requirements</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies and Tracking</h2>
      <p className="mb-4">
        We use cookies and tracking technologies to improve user experience and understand traffic
        patterns. You may disable cookies in your browser settings at any time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We may share limited user data with trusted third-party providers solely for functionality,
        analytics, or payment processing. These include:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Google Analytics</li>
        <li>Trustpilot (for reviews)</li>
        <li>Discord (for chat-based support)</li>
        <li>Payment processors (Stripe, PayPal)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Protection and Security</h2>
      <p className="mb-4">
        We implement reasonable administrative, technical, and physical safeguards to protect your
        data. However, no method of online transmission is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Children's Privacy</h2>
      <p className="mb-4">
        We take additional precautions to protect users under the age of 18. Parents or guardians
        must approve tutoring interactions for minors.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Access the personal data we hold about you</li>
        <li>Request corrections or deletion of your data</li>
        <li>Withdraw consent or request data portability</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Data Retention</h2>
      <p className="mb-4">
        We retain user information only as long as necessary for the purposes outlined in this
        policy, or as required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Updates to This Policy</h2>
      <p className="mb-4">
        This policy may be updated from time to time. Changes will be posted on this page with a
        revised effective date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p className="mb-4">
        For any questions about this Privacy Policy or your personal data, please contact us at:{" "}
        <a href="mailto:info@hireatutornow.com" className="underline text-blue-400">
          info@hireatutornow.com
        </a>
        .
      </p>

      <p className="text-sm text-gray-400">Last updated: June 28, 2025</p>
    </div>
  );
}

