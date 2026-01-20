import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import CTASection from '../components/CTASection';

// --- SUB-COMPONENTS ---

const ServiceRow: React.FC<{ item: ServiceItem; index: number; isDark?: boolean; onClick: () => void }> = ({ item, index, isDark = false, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={onClick}
            className={`service-row group relative border-t ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'} transition-colors duration-500 py-8 sm:py-12 md:py-16 overflow-hidden cursor-pointer`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start pointer-events-none">

                <div className="md:col-span-2 flex flex-col justify-between">
                    <div className="mb-2 sm:mb-4">
                        <span className={`block font-mono text-[10px] tracking-widest mb-1 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                            {item.id}
                        </span>
                        <div className={`text-[10px] uppercase font-bold tracking-wider inline-block px-2 py-1 rounded ${isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
                            {item.category}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-6 pr-0 md:pr-8">
                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-3 sm:mb-6 text-white group-hover:text-brand-orange transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-lg text-white opacity-90">
                        {item.description}
                    </p>
                </div>

                <div className="md:col-span-4 mt-4 md:mt-0 flex flex-col justify-between">
                    <div>
                        <div className={`text-[10px] font-mono tracking-widest mb-2 sm:mb-4 uppercase ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            Teknik Özellikler
                        </div>
                        <ul className="space-y-1 sm:space-y-3">
                            {item.specs.map((spec, i) => (
                                <li key={i} className="flex items-center gap-2 sm:gap-3">
                                    <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-brand-orange' : 'bg-black'} opacity-50`}></div>
                                    <span className={`font-mono text-[10px] sm:text-xs ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                                        {spec}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4 sm:mt-8 flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-orange">Detayları Gör</span>
                        <span className="text-brand-orange">→</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 opacity-50"></div>
        </motion.div>
    );
};

const SectionHeader: React.FC<{ title: string; subtitle: string; isDark?: boolean }> = ({ title, subtitle, isDark }) => (
    <div className={`px-4 sm:px-6 max-w-7xl mx-auto mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between border-b ${isDark ? 'border-white/20 pb-6 sm:pb-8' : 'border-white/10 pb-6 sm:pb-8'}`}>
        <div>
            <span className={`block font-mono text-[10px] sm:text-xs tracking-[0.2em] mb-2 uppercase text-brand-orange`}>
                {subtitle}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                {title}
            </h2>
        </div>
        <div className="mt-4 md:mt-0 font-mono text-[10px] sm:text-xs text-gray-400">
            DETAY İÇİN TIKLAYIN
        </div>
    </div>
);

// --- MAIN PAGE ---

const ServicesPage: React.FC = () => {
    const navigate = useNavigate();

    const group1 = SERVICES_DATA.slice(0, 3); // Güç Sistemleri
    const group2 = SERVICES_DATA.slice(3, 6); // Altyapı (Dark)
    const group3 = SERVICES_DATA.slice(6, 10); // Zayıf Akım

    const handleServiceClick = (slug: string) => {
        navigate(`/services/${slug}`);
    };

    return (
        <main className="w-full bg-transparent min-h-screen pt-24 overflow-x-hidden relative">
            
            {/* HERO */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto mb-12 sm:mb-14 md:mb-16 border-b border-white/10 pb-6 sm:pb-8 px-4 sm:px-6"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-2 mb-3 sm:mb-4"
                        >
                            <Database size={14} className="text-brand-orange"/>
                            <span className="font-mono text-xs text-brand-orange tracking-widest uppercase">Hizmet Kataloğu</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold text-white leading-[0.9]"
                        >
                            Mühendislik <br/> Çözümlerimiz
                        </motion.h1>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3 sm:gap-4 w-full md:w-auto">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-zinc-400 md:text-right max-w-md text-sm sm:text-base"
                        >
                            Temel topraklamadan akıllı bina otomasyonuna kadar elektrik mühendisliğinin her alanında profesyonel hizmet.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-left md:text-right"
                        >
                            <div className="font-mono text-[10px] sm:text-xs text-gray-400">HİZMET KAPASİTESİ</div>
                            <div className="text-2xl sm:text-3xl font-light text-white">{SERVICES_DATA.length} Alan</div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* GRUP 1: GÜÇ SİSTEMLERİ */}
            <section className="mb-0 pb-12 sm:pb-20 bg-transparent mt-16 sm:mt-20 md:mt-24">
                <SectionHeader title="GÜÇ SİSTEMLERİ" subtitle="Faz 01 — Kuvvetli Akım" />
                {group1.map((item, i) => (
                    <ServiceRow key={item.id} item={item} index={i} onClick={() => handleServiceClick(item.slug)} />
                ))}
            </section>

            {/* GRUP 2: ALTYAPI SİSTEMLERİ */}
            <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 sm:py-24 md:py-32 relative">
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#475569_1px,transparent_1px),linear-gradient(to_bottom,#475569_1px,transparent_1px)] bg-[size:60px_60px]"></div>

                <div className="relative z-10">
                    <SectionHeader title="ALTYAPI" subtitle="Faz 02 — Otomasyon & Topraklama" isDark={true} />
                    {group2.map((item, i) => (
                        <ServiceRow key={item.id} item={item} index={i + 3} isDark={true} onClick={() => handleServiceClick(item.slug)} />
                    ))}
                </div>
            </section>

            {/* GRUP 3: ZAYIF AKIM SİSTEMLERİ */}
            <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 bg-transparent">
                <SectionHeader title="ZAYIF AKIM" subtitle="Faz 03 — Güvenlik & İletişim" />
                {group3.map((item, i) => (
                    <ServiceRow key={item.id} item={item} index={i + 6} onClick={() => handleServiceClick(item.slug)} />
                ))}
            </section>

            {/* HİZMET ALANLARI */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-12">
                        <div>
                            <span className="font-mono text-[10px] sm:text-xs text-brand-orange mb-3 sm:mb-4 block">/// SEKTÖRLER</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">HİZMET VERDİĞİMİZ ALANLAR</h2>
                        </div>
                        <span className="font-mono text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-0">13+ SEKTÖR</span>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        {[
                            "İş Merkezleri", "Yönetim Binaları", "Fabrikalar", "Endüstriyel Tesisler",
                            "Banka Genel Müdürlükleri", "Sağlık Kuruluşları", "Eğitim Kurumları", "Oteller",
                            "Residanslar", "Konut Siteleri", "Villalar", "Yalılar", "Malikeneler"
                        ].map((area, idx) => (
                            <span key={idx} className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-200 font-medium border border-white/20 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all cursor-default">
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <CTASection />

        </main>
    );
};

export default ServicesPage;