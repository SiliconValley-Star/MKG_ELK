import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, FileCheck, Eye, Key } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SecurityPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent pt-32 px-6 pb-24">

            {/* Hero */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-brand-orange/10 border border-brand-orange/30 rounded-2xl flex items-center justify-center text-brand-orange mx-auto mb-8"
                >
                    <ShieldCheck size={40} />
                </motion.div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6">Güvenlik & <br />Uyumluluk</h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    MKG olarak, veri bütünlüğüne ve sistem güvenliğine mühendislik projelerimizle aynı titizlikle yaklaşıyoruz.
                    Fikri mülkiyetinizin korunmasını sağlamak için küresel standartlara bağlı kalıyoruz.
                </p>
            </div>

            {/* SSL & Encryption Section */}
            <div className="max-w-5xl mx-auto mb-24">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <Lock className="text-green-500" size={24} />
                                <span className="text-green-500 font-mono font-bold tracking-widest">SSL GÜVENLİ</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Uçtan Uca Şifreleme</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Tarayıcınız ile sunucularımız arasında iletilen tüm veriler, 256-bit AES şifreleme anahtarları ile
                                <strong> TLS 1.3 (Taşıma Katmanı Güvenliği)</strong> protokolleri kullanılarak şifrelenir.
                                Bu, hassas proje verilerinin, şemaların ve iletişim bilgilerinin ele geçirilememesini sağlar.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    Geçerli Wildcard SSL Sertifikası (2024-2025)
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    HSTS (Katı Taşıma Güvenliği) Etkin
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    Cloudflare Edge ile DDOS Koruması
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-950 p-10 flex items-center justify-center relative overflow-hidden">
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
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <Server className="text-brand-orange mb-6" size={32} />
                    <h3 className="text-xl font-bold text-white mb-3">ISO 27001</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Bilgi Güvenliği Yönetim Sistemi (BGYS) sertifikalıdır. Tesislerimizdeki veri erişimi, varlık yönetimi ve fiziksel güvenlik üzerinde sıkı kontroller uyguluyoruz.
                    </p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <FileCheck className="text-brand-orange mb-6" size={32} />
                    <h3 className="text-xl font-bold text-white mb-3">GDPR & KVKK</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Avrupa Genel Veri Koruma Tüzüğü ve Türk Kişisel Verileri Koruma Kanunu ile tam uyumludur. Veri haklarınıza saygı duyulur ve otomatize edilmiştir.
                    </p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <Key className="text-brand-orange mb-6" size={32} />
                    <h3 className="text-xl font-bold text-white mb-3">IEC 62443</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Endüstriyel iletişim ağları ağ ve sistem güvenliği. Siber-fiziksel saldırıları önlemek için teslim ettiğimiz her otomasyon projesine bu standartları uyguluyoruz.
                    </p>
                </div>
            </div>

            {/* Vulnerability Disclosure */}
            <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">Sorumlu Bildirim</h3>
                    <p className="text-slate-400">
                        Herhangi bir MKG sisteminde veya web sitesinde bir güvenlik açığı bulduğunuza inanıyorsanız, lütfen bunu derhal güvenlik ekibimize bildirin.
                    </p>
                </div>
                <a href="mailto:security@mkg.com" className="whitespace-nowrap px-6 py-3 border border-slate-600 rounded-lg text-white hover:bg-white hover:text-black transition-colors font-mono text-sm">
                    security@mkg.com
                </a>
            </div>

        </div>
    );
};

export default SecurityPage;