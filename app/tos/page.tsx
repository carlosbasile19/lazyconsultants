import Link from "next/link";
import { getSEOTags } from "@/lib/seo";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | Lazy Consultants`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for Lazy Consultants
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms of Service
Last Updated: March 31, 2024

Welcome to lazyconsultants.com! These Terms of Service ("Terms") govern your access to and use of our website located at https://lazyconsultants.com (the "Website") and our AI Automation SaaS services (the "Services") provided by lazyconsultants.com ("we," "us," or "our").

By accessing or using our Website and Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use our Website or Services.

1. Ownership and Usage Rights:
When you purchase a package from us, you are granted the right to use our Services. You own the right to use the app in a safe manner, without overcharging the AI tool or sharing credentials. You may request a full refund within 30 days of purchase if you are not satisfied with our Services.

2. User Data:
We collect and process certain personal data, including your name, email, and payment information, in accordance with our Privacy Policy. By using our Website and Services, you consent to such collection and processing of your personal data.

3. Non-Personal Data:
We may also collect non-personal data through the use of web cookies. This data helps us improve our Services and enhance your user experience. By using our Website and Services, you consent to the use of cookies in accordance with our Cookie Policy.

4. Governing Law:
These Terms are governed by the laws of Italy. Any disputes arising out of or relating to these Terms or our Services will be subject to the exclusive jurisdiction of the courts of Italy.

5. Updates to Terms:
We may update these Terms from time to time. Any changes will be effective immediately upon posting the updated Terms on our Website. We will notify you of any material changes to these Terms via email. Continued use of our Website or Services after any such changes constitutes your acceptance of the updated Terms.

For more information about how we collect, use, and protect your data, please review our Privacy Policy at https://lazyconsultants.com/privacy-policy.

If you have any questions or concerns about these Terms, please contact us at support@lazyconsultants.com.

Thank you for using lazyconsultants.com!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
