import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Settings, Zap, Database, PenTool, Cpu, Gauge, Factory, Network, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ServicesPage: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(0);

    const services = [
        {
            id: 0,
            title: "Fabrika Otomasyonu",
            code: "AUT-01",
            icon: Factory,
            desc: "Kapsamlı PLC & SCADA mimari tasarımı. Akıllı mantık ve yüksek hızlı iletişim protokolleri ile döngü sürelerini azaltma ve OEE'yi (Genel Ekipman Verimliliği) optimize etme konusunda uzmanız.",
            specs: ["Siemens TIA Portal", "Beckhoff TwinCAT", "Omron Sysmac", "Safety PLC"]
        },
        {
            id: 1,
            title: "Güç Dağıtımı",
            code: "PWR-02",
            icon: Zap,
            desc: "Uçtan uca AG/OG pano mühendisliği. EPLAN şematik tasarımından saha kurulumuna ve harmonik analize kadar. Kritik operasyonlar için stabil enerji altyapısı sağlıyoruz.",
            specs: ["EPLAN Pro Panel", "IEC 61439 Uyumluluğu", "Termal Analiz", "Yük Dengeleme"]
        },
        {
            id: 2,
            title: "Robotik Hücreler",
            code: "ROB-03",
            icon: PenTool,
            desc: "Kaynak, paletleme ve montaj için anahtar teslim robotik entegrasyonu. Maksimum hassasiyet için özel kol ucu takımları (EOAT) tasarlıyor ve karmaşık kinematik yolları programlıyoruz.",
            specs: ["KUKA Sim Pro", "ABB RobotStudio", "Fanuc Roboguide", "Özel EOAT"]
        },
        {
            id: 3,
            title: "Dijital İkiz & IoT",
            code: "DGT-04",
            icon: Network,
            desc: "Makineyi üretmeden önce kodu fizik tabanlı bir 3D modele karşı test etmemizi sağlayan sanal devreye alma (VC) hizmetleri. Saha devreye alma süresini önemli ölçüde azaltır.",
            specs: ["Siemens NX MCD", "Emulate3D", "MQTT / OPC-UA", "Bulut Paneller"]
        },
    ];

    return (
        <div className="min-h-screen bg-transparent pt-32 px-6 flex flex-col">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-20 text-center flex-grow">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Yetenekler</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Mekanik donanım ve akıllı yazılım arasındaki boşluğu dolduran çok disiplinli mühendislik çözümleri sunuyoruz.
                </p>
            </div>

            <div className="max-w-7xl mx-auto mb-32">

                {/* Top Bento Grid - "Focus Areas" */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-none sm:grid-rows-2 gap-4 h-auto mb-16 sm:mb-24">

                    {/* Main Feature - Large */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group border border-slate-800 bg-slate-900/40 backdrop-blur-md">
                        <div className="absolute top-6 left-6 z-20 bg-brand-orange/90 text-black text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                            AMİRAL GEMİSİ
                        </div>
                        <img src="https://images.unsplash.com/photo-1565514020176-892eb5badeef?q=80&w=2070" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <h3 className="text-3xl font-display font-bold text-white mb-2">Proses Kontrolü</h3>
                            <p className="text-slate-300 text-sm">Kimya ve ilaç fabrikaları için gelişmiş DCS uygulamaları.</p>
                        </div>
                    </div>

                    {/* Secondary - Wide */}
                    <div className="md:col-span-2 relative rounded-3xl overflow-hidden group border border-slate-800 bg-slate-900/60 backdrop-blur-md p-8 flex flex-col justify-between hover:border-slate-600 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-slate-800 rounded-xl text-white"><Cpu size={24} /></div>
                            <ArrowUpRightIcon />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Endüstriyel BT</h3>
                            <p className="text-slate-400 text-sm">OT ağları için sunucu kurulumu, sanallaştırma ve siber güvenlik.</p>
                        </div>
                    </div>

                    {/* Tertiary - Box 1 */}
                    <div className="relative rounded-3xl overflow-hidden group border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center hover:bg-slate-800/80 transition-colors">
                        <Gauge size={40} className="text-brand-orange mb-4" />
                        <h3 className="text-lg font-bold text-white">Verimlilik</h3>
                        <div className="text-3xl font-mono font-bold text-slate-500 mt-2">+35%</div>
                    </div>

                    {/* Tertiary - Box 2 */}
                    <div className="relative rounded-3xl overflow-hidden group border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center hover:bg-slate-800/80 transition-colors">
                        <Database size={40} className="text-brand-orange mb-4" />
                        <h3 className="text-lg font-bold text-white">Veri</h3>
                        <div className="text-3xl font-mono font-bold text-slate-500 mt-2">10TB+</div>
                    </div>
                </div>

                {/* Technical Specification List (Accordion) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h3 className="text-2xl font-bold text-white mb-4 sticky top-32">Teknik Özellikler</h3>
                        <p className="text-slate-400 text-sm sticky top-44">
                            Özel araç setlerimizi ve metodolojilerimizi görüntülemek için bir disiplin seçin. Tüm teslimatlarda IEC ve ISO standartlarına bağlı kalıyoruz.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="border-t border-slate-800">
                            {services.map((s) => (
                                <div key={s.id} className="border-b border-slate-800">
                                    <button
                                        onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                                        className={`w-full py-8 flex justify-between items-center text-left group transition-all duration-300 px-6 ${expanded === s.id ? 'bg-slate-900/80 backdrop-blur-md' : 'hover:bg-slate-900/30'}`}
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`font-mono text-xs ${expanded === s.id ? 'text-brand-orange' : 'text-slate-600'}`}>
                                                {s.code}
                                            </div>
                                            <h2 className={`text-xl md:text-3xl font-display font-bold transition-colors ${expanded === s.id ? 'text-white' : 'text-slate-400'}`}>
                                                {s.title}
                                            </h2>
                                        </div>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${expanded === s.id ? 'border-brand-orange bg-brand-orange text-black' : 'border-slate-700 text-slate-500'}`}>
                                            {expanded === s.id ? <Minus size={16} /> : <Plus size={16} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {expanded === s.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-slate-900"
                                            >
                                                <div className="pb-10 pt-2 px-6 pl-6 md:pl-[88px] pr-6 md:pr-20">
                                                    <p className="text-lg text-slate-300 font-light leading-relaxed mb-8">
                                                        {s.desc}
                                                    </p>

                                                    <div>
                                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Çekirdek Teknolojiler</h4>
                                                        <div className="flex flex-wrap gap-3">
                                                            {s.specs.map((t, i) => (
                                                                <span key={i} className="text-xs font-mono border border-slate-700 bg-slate-950 text-slate-300 px-3 py-1.5 rounded flex items-center gap-2">
                                                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* --- BOLD ORANGE CTA: REQUEST AUDIT --- */}
            <section className="w-full py-16 sm:py-24 bg-brand-orange relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

                <NavLink to="/contact" className="block relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="font-mono text-black/60 font-bold tracking-widest mb-4">NETLİĞE Mİ İHTİYACINIZ VAR?</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500">
                            DENETİM TALEP EDİN
                        </h2>
                        <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md border border-black/20 text-white px-8 py-4 rounded-full font-bold">
                            TEKNİK DANIŞMANLIK <Settings className="animate-spin-slow" size={18} />
                        </div>
                    </div>
                </NavLink>
            </section>

        </div>
    );
};

const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
)

export default ServicesPage;