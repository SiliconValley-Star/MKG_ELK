import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 px-6 pb-24">
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-12 pb-8 border-b border-slate-800">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-slate-400">Version 1.2</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <h3 className="text-white font-bold text-2xl mt-8 mb-4">1. Agreement to Terms</h3>
            <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and MKG Elektromekanik (“we,” “us” or “our”), concerning your access to and use of our website.
            </p>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">2. Intellectual Property Rights</h3>
            <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">3. User Representations</h3>
            <p>
                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise.
            </p>

            <h3 className="text-white font-bold text-2xl mt-12 mb-4">4. Limitations of Liability</h3>
            <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
            </p>
            
            <h3 className="text-white font-bold text-2xl mt-12 mb-4">5. Governing Law</h3>
            <p>
                These Terms shall be governed by and defined following the laws of Turkiye. MKG Elektromekanik and yourself irrevocably consent that the courts of Turkiye shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;