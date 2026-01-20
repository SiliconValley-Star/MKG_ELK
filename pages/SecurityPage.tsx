import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, FileCheck, Eye, Key } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import CTASection from '../components/CTASection';

const SecurityPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">

            {/* Hero */}
            <div className="max-w-7xl mx-auto text-center mb-16 sm:mb-18 md:mb-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-brand-orange/10 border border-brand-orange/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-orange mx-auto mb-6 sm:mb-8"
                >
                    <ShieldCheck size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </motion.div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold text-white mb-3 sm:mb-4 md:mb-6 break-words">Güvenlik & <br />Uyumluluk</h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-4">
                    MKG olarak, veri bütünlüğüne ve sistem güvenliğine mühendislik projelerimizle aynı titizlikle yaklaşıyoruz.
                    Fikri mülkiyetinizin korunmasını sağlamak için küresel standartlara bağlı kalıyoruz.
                </p>
            </div>

            {/* SSL & Encryption Section */}
            <div className="max-w-5xl mx-auto mb-20 sm:mb-24">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                                <Lock className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                                <span className="text-green-500 font-mono font-bold tracking-widest text-xs sm:text-sm">SSL GÜVENLİ</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 break-words">Uçtan Uca Şifreleme</h2>
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                                Tarayıcınız ile sunucularımız arasında iletilen tüm veriler, 256-bit AES şifreleme anahtarları ile
                                <strong> TLS 1.3 (Taşıma Katmanı Güvenliği)</strong> protokolleri kullanılarak şifrelenir.
                                Bu, hassas proje verilerinin, şemaların ve iletişim bilgilerinin ele geçirilememesini sağlar.
                            </p>
                            <ul className="space-y-2.5 sm:space-y-3">
                                <li className="flex items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    Geçerli Wildcard SSL Sertifikası (2024-2025)
                                </li>
                                <li className="flex items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    HSTS (Katı Taşıma Güvenliği) Etkin
                                </li>
                                <li className="flex items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    Cloudflare Edge ile DDOS Koruması
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-950 p-6 sm:p-8 md:p-10 flex items-center justify-center relative overflow-hidden min-h-[200px] sm:min-h-[250px]">
                            {/* Abstract Lock Visual */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
                            <img
                                src="https://img.icons8.com/fluency/240/null/fingerprint-scan.png"
                                alt="Security Scan"
                                className="relative z-10 opacity-80 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Standards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-14 sm:mb-18 md:mb-24">
                <div className="bg-slate-900/50 border border-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <Server className="text-brand-orange mb-5 sm:mb-6" size={28} />
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 break-words">ISO 27001</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        Bilgi Güvenliği Yönetim Sistemi (BGYS) sertifikalıdır. Tesislerimizdeki veri erişimi, varlık yönetimi ve fiziksel güvenlik üzerinde sıkı kontroller uyguluyoruz.
                    </p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <FileCheck className="text-brand-orange mb-5 sm:mb-6" size={28} />
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 break-words">GDPR & KVKK</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        Avrupa Genel Veri Koruma Tüzüğü ve Türk Kişisel Verileri Koruma Kanunu ile tam uyumludur. Veri haklarınıza saygı duyulur ve otomatize edilmiştir.
                    </p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <Key className="text-brand-orange mb-5 sm:mb-6" size={28} />
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 break-words">IEC 62443</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        Endüstriyel iletişim ağları ağ ve sistem güvenliği. Siber-fiziksel saldırıları önlemek için teslim ettiğimiz her otomasyon projesine bu standartları uyguluyoruz.
                    </p>
                </div>
            </div>

            {/* Vulnerability Disclosure */}
            <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
                <div className="flex-grow min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 break-words">Sorumlu Bildirim</h3>
                    <p className="text-slate-400 text-sm sm:text-base">
                        Herhangi bir MKG sisteminde veya web sitesinde bir güvenlik açığı bulduğunuza inanıyorsanız, lütfen bunu derhal güvenlik ekibimize bildirin.
                    </p>
                </div>
                <a href="mailto:security@mkg.com" className="w-full md:w-auto whitespace-nowrap px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-600 rounded-lg text-white hover:bg-white hover:text-black transition-colors font-mono text-xs sm:text-sm text-center tap-target">
                    security@mkg.com
                </a>
            </div>

            {/* CTA SECTION */}
            <CTASection />
        </div>
    );
};

export default SecurityPage;