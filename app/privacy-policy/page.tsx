import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Parth Jariwala',
  description: 'Privacy policy and data collection practices for Parth Jariwala\'s website',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link 
        href="/" 
        className="text-indigo-600 dark:text-indigo-400 hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <p className="mb-4">
          This website uses Google Analytics to understand how visitors interact with its content. 
          We are committed to protecting your privacy and ensuring transparency about our data collection practices.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">The following information may be collected through Google Analytics:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Pages visited and time spent on each page</li>
          <li>Time spent on the website</li>
          <li>Approximate geographic location (country/city level)</li>
          <li>Browser and device information</li>
          <li>How you arrived at our website</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use This Information</h2>
        <p className="mb-4">
          We use this information to:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Improve our website content and user experience</li>
          <li>Understand which pages are most popular</li>
          <li>Analyze user behavior and preferences</li>
          <li>Make informed decisions about website improvements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Protection</h2>
        <p className="mb-4">
          We take your privacy seriously and have implemented several measures to protect your data:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>IP addresses are anonymized</li>
          <li>No personally identifiable information is collected</li>
          <li>Data is only used for analytics purposes</li>
          <li>You can opt-out of analytics tracking at any time</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
        <p className="mb-4">
          Analytics data is retained for a maximum of 14 months. After this period, 
          or when you clear your cookies, your data is automatically deleted from our analytics.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Opt-out of analytics tracking through the cookie consent banner</li>
          <li>Clear your browser cookies at any time</li>
        </ul>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 