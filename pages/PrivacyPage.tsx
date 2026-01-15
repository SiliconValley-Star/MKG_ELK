import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 px-6 pb-24">
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-12 pb-8 border-b border-slate-800">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-400">Effective Date: January 1, 2024</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p>
                MKG Elektromekanik ("Company", "we", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.
            </p>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">1. Collection of Data</h3>
            <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you fill out a contact form.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">2. Use of Your Information</h3>
            <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Compile anonymous statistical data and analysis for use internally.</li>
                <li>Respond to customer service requests and project inquiries.</li>
                <li>Send you a newsletter (only if opted in).</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">3. Disclosure of Your Information</h3>
            <p>
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">4. Security of Your Information</h3>
            <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">5. Contact Us</h3>
            <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic bg-slate-900 p-6 rounded-xl border border-slate-800 mt-4">
                <strong>MKG Elektromekanik</strong><br />
                Nilufer Org. Ind. Zone<br />
                Bursa, 16000<br />
                Turkiye<br />
                Email: legal@mkg.com
            </address>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;