import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-black/90 overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-orange rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] bg-white rounded-full blur-[90px] mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 text-center px-6 mix-blend-difference">
                <span className="font-mono text-[10px] sm:text-xs text-white tracking-[0.3em] sm:tracking-[0.5em] mb-4 block group-hover:tracking-[0.6em] sm:group-hover:tracking-[1em] transition-all duration-700">MKG ELEKTROMEKANİK</span>
                <h2 className="text-[10vw] sm:text-[8vw] text-white font-medium tracking-tighter leading-none mb-6 sm:mb-8">
                    PROJENİZİ<br />KONUŞALIM
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-6 sm:mb-8">
                    Yüksek Gerilim'den Zayıf Akım'a, projelendirmeden anahtar teslim uygulamaya kadar yanınızdayız.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/#/contact" className="inline-block bg-brand-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                        Teklif Talep Edin
                    </a>
                    <a href="/#/corporate" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                        Hakkımızda
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;