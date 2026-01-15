import React from 'react';
import { Cookie, Info } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 px-6 pb-24">
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-12 pb-8 border-b border-slate-800">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-slate-400">Last Updated: October 24, 2023</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p className="lead text-xl text-white mb-8">
                MKG Elektromekanik ("we", "us", or "our") uses cookies and similar tracking technologies to enhance your experience on our website.
            </p>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">1. What are Cookies?</h3>
            <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">2. How We Use Cookies</h3>
            <p>
                We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., security, network management).</li>
                <li><strong>Performance Cookies:</strong> To analyze how visitors use our website (e.g., Google Analytics).</li>
                <li><strong>Functional Cookies:</strong> To remember your preferences (e.g., language selection).</li>
            </ul>

            <h3 className="text-white font-bold text-2xl mt-12 mb-6">3. Cookies We Use</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-slate-700 text-sm font-mono">
                    <thead className="bg-slate-900">
                        <tr>
                            <th className="border border-slate-700 p-4 text-white">Name</th>
                            <th className="border border-slate-700 p-4 text-white">Type</th>
                            <th className="border border-slate-700 p-4 text-white">Duration</th>
                            <th className="border border-slate-700 p-4 text-white">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-700 p-4">_session_id</td>
                            <td className="border border-slate-700 p-4">Essential</td>
                            <td className="border border-slate-700 p-4">Session</td>
                            <td className="border border-slate-700 p-4">Maintains user session state.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 p-4">_ga</td>
                            <td className="border border-slate-700 p-4">Analytics</td>
                            <td className="border border-slate-700 p-4">2 years</td>
                            <td className="border border-slate-700 p-4">Used by Google Analytics to distinguish users.</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 p-4">cookie_consent</td>
                            <td className="border border-slate-700 p-4">Functional</td>
                            <td className="border border-slate-700 p-4">1 year</td>
                            <td className="border border-slate-700 p-4">Stores your cookie consent preferences.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">4. Managing Cookies</h3>
            <p>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
            </p>
        </div>

      </div>
    </div>
  );
};

export default CookiePolicyPage;