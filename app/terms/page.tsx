// app/terms/page.tsx

export const metadata = {
  title: "Terms of Service – Hire a Tutor",
  description: "Read the terms and conditions of using Hire a Tutor's services and platform.",
};

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        These Terms of Service ("Terms") govern your access to and use of the Hire a Tutor platform
        (“we”, “us”, or “our”) available at{" "}
        <a href="https://hireatutornow.com" className="underline text-blue-400">
          hireatutornow.com
        </a>
        . By using our services, you agree to these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Platform</h2>
      <p className="mb-4">
        You may use Hire a Tutor to connect with independent tutors for academic assistance. You
        agree not to use the platform for cheating, exam fraud, or any activity that violates your
        school’s academic integrity policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Accounts and Eligibility</h2>
      <p className="mb-4">
        Users must be 13 years or older. Users under 18 must have permission from a parent or
        guardian. You agree to provide accurate information and keep your account secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Tutor Independence</h2>
      <p className="mb-4">
        Tutors are independent contractors, not employees of Hire a Tutor. We do not guarantee any
        specific academic outcomes or grades as a result of tutoring sessions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Payments and Refunds</h2>
      <p className="mb-4">
        Payments are processed via Stripe, PayPal, or other approved gateways. We reserve the right
        to charge fees and update pricing. Refunds may be issued under specific dispute
        circumstances reviewed by our support team.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Prohibited Conduct</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Plagiarism or assignment submission fraud</li>
        <li>Harassment of tutors or students</li>
        <li>Attempting to bypass the platform for off-platform payments</li>
        <li>Uploading harmful, illegal, or copyrighted materials</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Intellectual Property</h2>
      <p className="mb-4">
        All content and branding on Hire a Tutor, including logos, interfaces, and lesson materials,
        are the property of Hire a Tutor or its licensors and may not be reused without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Disclaimers</h2>
      <p className="mb-4">
        We provide the platform “as is” without warranties of any kind. We are not liable for tutor
        performance, content accuracy, or platform downtime.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your account for violation of these Terms or
        any misuse of the platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Changes to These Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Continued use of the site after changes means
        you accept the revised Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact</h2>
      <p className="mb-4">
        For any questions about these Terms, contact us at:{" "}
        <a href="mailto:info@hireatutornow.com" className="underline text-blue-400">
          info@hireatutornow.com
        </a>
        .
      </p>

      <p className="text-sm text-gray-400">Last updated: June 28, 2025</p>
    </div>
  );
}

