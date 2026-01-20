import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, ArrowUpRight, Cpu, Globe, Zap, Layers, Activity, Lock } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
    const isMobile = useIsMobile();

    return (
        <div className="bg-transparent text-white overflow-x-hidden">
            <HeroSection />
            <BrandTicker isMobile={isMobile} />
            <ManifestoSection isMobile={isMobile} />
            <EcosystemGrid isMobile={isMobile} />
            <BlueprintSlider />
            <GlobalImpact isMobile={isMobile} />
            <CTASection />
        </div>
    );
};

// --- 1. HERO SECTION: TECHNICAL HUD STYLE ---
const heroSlides = [
    {
        id: "01",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600",
        title: "AKILLI\nOTOMASYON",
        subtitle: "SİSTEM MİMARİSİ",
        desc: "Endüstri 4.0 çağı için kendi kendini optimize eden robotik hücreler kuruyoruz."
    },
    {
        id: "02",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2600",
        title: "ENERJİ\nDAYANIKLILIĞI",
        subtitle: "YÜKSEK GERİLİM ALTYAPISI",
        desc: "Sıfır hata toleranslı şebeke ölçeğinde güç dağıtımı tasarlıyoruz."
    },
    {
        id: "03",
        img: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=2600",
        title: "DİJİTAL\nİKİZLER",
        subtitle: "SANAL DEVREYE ALMA",
        desc: "Fiziksel kurulumdan önce fizik tabanlı fabrika ortamlarını simüle ediyoruz."
    }
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);
    const isMobile = useIsMobile();

    useEffect(() => {
        // Mobilde daha yavaş slideshow (15 saniye), desktop'ta normal (7 saniye)
        const intervalTime = isMobile ? 15000 : 7000;
        
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, intervalTime);
        return () => clearInterval(timer);
    }, [isMobile]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-transparent">
            <AnimatePresence mode="wait">
                <motion.div
                    key={heroSlides[current].id}
                    className="absolute inset-0 z-0"
                    initial={isMobile ? { opacity: 1 } : { opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={isMobile ? { opacity: 1 } : { opacity: 0 }}
                    transition={isMobile ? { duration: 0.01 } : { duration: 0.7 }}
                >
                    <img
                        src={heroSlides[current].img}
                        alt="Hero"
                        className="w-full h-full object-cover opacity-60"
                        loading="eager"
                        decoding="async"
                    />
                    {/* Gradient Overlays for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                    {/* Grid Overlay Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="max-w-5xl border-l-2 border-brand-orange/50 pl-4 sm:pl-6 md:pl-12 lg:pl-16 relative">
                    {/* Decorator Line */}
                    <div className="absolute top-0 left-[-2px] w-[2px] h-16 sm:h-20 md:h-24 bg-brand-orange"></div>

                    <motion.div
                        key={current + "text"}
                        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={isMobile ? { duration: 0.01 } : { duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                            <span className="px-2 sm:px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] sm:text-xs font-mono tracking-widest uppercase rounded">
                                {heroSlides[current].subtitle}
                            </span>
                            <span className="text-slate-500 font-mono text-[10px] sm:text-xs">EST. 2008</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-4 sm:mb-6 md:mb-8 whitespace-pre-line drop-shadow-2xl">
                            {heroSlides[current].title}
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-xl leading-relaxed font-light mb-5 sm:mb-6 md:mb-10">
                            {heroSlides[current].desc}
                        </p>

                        <NavLink to="/services">
                            <button className="group relative overflow-hidden bg-white text-slate-950 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-none skew-x-[-10deg] hover:bg-brand-orange transition-colors duration-300 tap-target">
                                <div className="skew-x-[10deg] font-bold tracking-widest flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
                                    ÇÖZÜMLERİ KEŞFET <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                                </div>
                            </button>
                        </NavLink>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Status Bar (HUD) */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-slate-950/50 backdrop-blur-md px-4 sm:px-6 md:px-12 lg:px-20 py-3 sm:py-4 md:py-6 flex justify-between items-center z-20">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
                    <div className="text-[10px] sm:text-xs font-mono text-slate-500">
                        <span className="hidden sm:inline">SİSTEM DURUMU: </span><span className="text-green-500">ÇEVRİMİÇİ</span>
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono text-slate-500 hidden lg:block">
                        LOC: 40.1828° N, 29.0665° E
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <span className="font-mono text-base sm:text-lg md:text-xl font-bold text-white">0{current + 1}</span>
                    <div className="w-16 sm:w-24 md:w-32 h-[2px] bg-slate-800 relative overflow-hidden">
                        {!isMobile && (
                            <motion.div
                                key={current}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 7, ease: "linear" }}
                                className="absolute top-0 left-0 h-full bg-brand-orange"
                            />
                        )}
                    </div>
                    <span className="font-mono text-xs sm:text-sm text-slate-500">03</span>
                </div>
            </div>
        </section>
    );
};

// --- 2. BRAND TICKER ---
const BrandTicker: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const brands = [
        "SIEMENS", "ABB", "SCHNEIDER ELECTRIC", "KUKA", "FANUC",
        "MITSUBISHI ELECTRIC", "OMRON", "BECKHOFF", "ROCKWELL AUTOMATION", "PHOENIX CONTACT"
    ];

    return (
        <section className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 bg-black/40 backdrop-blur-md border-y border-white/10 relative flex flex-col items-center justify-center">

            {/* Label - Now inside flow with proper spacing */}
            <div className="mb-4 sm:mb-5 md:mb-6 z-20 bg-black px-4 sm:px-5 md:px-6 py-1 sm:py-1.5 border border-white/10 rounded-full shadow-lg">
                <span className="text-[9px] sm:text-[10px] font-mono text-brand-orange tracking-widest uppercase flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-brand-orange rounded-full animate-pulse"></div>
                    Teknoloji Ekosistemi
                </span>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-20 sm:w-32 md:w-48 lg:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 sm:w-32 md:w-48 lg:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="flex w-full overflow-hidden">
                <div className={`flex w-max items-center ${isMobile ? '' : 'animate-marquee'}`}>
                    {/* Quadruple the list to ensure seamless looping on large screens */}
                    {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
                        <div key={i} className="flex items-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 group cursor-default select-none">
                            <span className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-display font-bold text-slate-800 group-hover:text-white transition-colors duration-500 uppercase tracking-tight whitespace-nowrap">
                                {b}
                            </span>
                            {/* Technical Separator */}
                            <div className="ml-4 sm:ml-6 md:ml-8 lg:ml-12 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-slate-800 rounded-full group-hover:bg-brand-orange transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- 3. MANIFESTO (TEXT HEAVY) ---
const ManifestoSection: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-slate-950/80 backdrop-blur-sm relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={isMobile ? { duration: 0.01 } : { duration: 0.4 }}
                >
                    <h2 className="text-[10px] sm:text-xs md:text-sm font-mono text-brand-orange tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-6 sm:mb-8">
                        MKG Metodolojisi
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-white leading-tight mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
                        <span className="text-slate-600">Mekanik kısıtlamalar</span> ile <span className="text-white border-b-2 border-brand-orange">dijital olanaklar</span> arasındaki boşluğu kapatıyoruz.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-left mt-12 sm:mt-16 md:mt-20">
                        <div className="border-l border-slate-800 pl-4 sm:pl-5 md:pl-6">
                            <Layers className="text-brand-orange mb-3 sm:mb-4" size={24} />
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Ölçeklenebilir Sistemler</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed"> Üretim kapasitenizle birlikte büyüyen modüler mimariler.</p>
                        </div>
                        <div className="border-l border-slate-800 pl-4 sm:pl-5 md:pl-6">
                            <Activity className="text-brand-orange mb-3 sm:mb-4" size={24} />
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Gerçek Zamanlı Veri</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed"> Ham sensör verilerini anında işlenebilir iş zekasına dönüştürüyoruz.</p>
                        </div>
                        <div className="border-l border-slate-800 pl-4 sm:pl-5 md:pl-6">
                            <Lock className="text-brand-orange mb-3 sm:mb-4" size={24} />
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Siber-Fiziksel Güvenlik</h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed"> OT ağının her katmanına entegre edilmiş IEC 62443 uyumlu güvenlik protokolleri.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// --- 4. ECOSYSTEM BENTO GRID ---
const EcosystemGrid: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-slate-950/60 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">MKG <span className="text-slate-600">Ekosistemi</span></h2>
                    <NavLink to="/services" className="text-brand-orange font-mono text-xs sm:text-sm hover:underline tap-target">TÜM YETENEKLERİ GÖRÜNTÜLE &rarr;</NavLink>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 sm:gap-5 md:gap-6 h-auto md:h-[700px]">

                    {/* Item 1: Large Video/Image */}
                    <div className="md:col-span-2 md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden relative group border border-slate-800 bg-slate-900/40 backdrop-blur-md min-h-[300px] md:min-h-0">
                        <img src="https://images.unsplash.com/photo-1535378437327-10ff28d45777?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Robotik Entegrasyon</h3>
                            <p className="text-slate-300 text-xs sm:text-sm max-w-sm">İnsan ve makine arasında sorunsuz işbirliği. Güvenlik dereceli, yüksek hızlı ve hassas.</p>
                        </div>
                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                            <ArrowUpRight className="text-white" size={18} />
                        </div>
                    </div>

                    {/* Item 2: Stat Card */}
                    <div className="md:col-span-1 md:row-span-1 rounded-2xl md:rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-orange/50 transition-colors group min-h-[180px]">
                        <Cpu className="text-brand-orange mb-3 sm:mb-4 group-hover:scale-110 transition-transform" size={32} />
                        <div>
                            <div className="text-3xl sm:text-4xl font-mono font-bold text-white mb-2">15ms</div>
                            <div className="text-xs sm:text-sm text-slate-400">Ortalama Döngü Süresi</div>
                        </div>
                    </div>

                    {/* Item 3: Service Card */}
                    <div className="md:col-span-1 md:row-span-1 rounded-2xl md:rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 sm:p-8 relative overflow-hidden group min-h-[180px]">
                        <div className="absolute -right-4 -top-4 w-20 h-20 sm:w-24 sm:h-24 bg-brand-orange/20 rounded-full blur-2xl group-hover:bg-brand-orange/40 transition-colors"></div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 relative z-10">Elektrik <br />Mühendisliği</h3>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400 relative z-10">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-orange flex-shrink-0"></div> EPLAN Pro Panel</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-orange flex-shrink-0"></div> UL/CSA Standartları</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-orange flex-shrink-0"></div> Termal Analiz</li>
                        </ul>
                    </div>

                    {/* Item 4: Wide Card */}
                    <div className="md:col-span-2 md:row-span-1 rounded-2xl md:rounded-3xl bg-slate-800/60 backdrop-blur-md border border-slate-700 relative overflow-hidden group min-h-[200px]">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670" className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity" loading="lazy" />
                        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Dijital İkiz Laboratuvarı</h3>
                            <p className="text-slate-300 text-xs sm:text-sm max-w-md">Şirket içi Ar-Ge tesisimiz, tek bir kablo döşenmeden üretim hattınızın tamamını simüle eder.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

// --- 5. BLUEPRINT SLIDER (SECTORS) ---
const BlueprintSlider = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const sectors = [
        { id: "SEC-01", title: "Otomotiv", desc: "Montaj & Boya", img: "https://images.unsplash.com/photo-1613632826230-09e39f730634?q=80&w=800" },
        { id: "SEC-02", title: "Yiyecek & İçecek", desc: "Hijyenik Kontrol", img: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=800" },
        { id: "SEC-03", title: "Lojistik", desc: "Ayrıştırma & AGV", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" },
        { id: "SEC-04", title: "Enerji", desc: "Şebeke Dağıtımı", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800" },
    ];

    const scroll = (offset: number) => {
        if (scrollRef.current) scrollRef.current.scrollLeft += offset;
    }

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-slate-900/80 backdrop-blur-sm border-y border-slate-800 relative">
            <div className="px-4 sm:px-6 md:px-12 lg:px-20 mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">Sektörler</h2>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-base">Endüstriye özel mühendislik uzmanlığı.</p>
                </div>
                <div className="hidden sm:flex gap-3 md:gap-4">
                    <button onClick={() => scroll(-400)} className="p-2.5 md:p-3 border border-slate-700 rounded-full hover:bg-white hover:text-black transition-colors text-white tap-target" aria-label="Önceki"><ChevronLeft size={20} /></button>
                    <button onClick={() => scroll(400)} className="p-2.5 md:p-3 border border-slate-700 rounded-full hover:bg-white hover:text-black transition-colors text-white tap-target" aria-label="Sonraki"><ChevronRight size={20} /></button>
                </div>
            </div>

            <div ref={scrollRef} className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-8 sm:pb-10 md:pb-12 no-scrollbar snap-x snap-mandatory">
                {sectors.map((s, i) => (
                    <div key={i} className="min-w-[280px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[400px] sm:h-[450px] md:h-[500px] bg-slate-950 border border-slate-800 p-2 relative group snap-center cursor-pointer">
                        {/* Blueprint Decoration */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 text-[9px] sm:text-[10px] font-mono text-brand-orange border border-brand-orange px-1 bg-slate-900">
                            {s.id}
                        </div>

                        <div className="w-full h-3/4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src={s.img} className="w-full h-full object-cover" loading="lazy" />
                            {/* Crosshairs */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-white"></div>
                                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-white"></div>
                            </div>
                        </div>

                        <div className="h-1/4 p-4 sm:p-5 md:p-6 flex flex-col justify-center bg-slate-900">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{s.title}</h3>
                            <p className="text-slate-400 font-mono text-[10px] sm:text-xs">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

// --- 6. GLOBAL IMPACT (MAP) ---
const GlobalImpact: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
            {/* Abstract Map Background */}
            <div className="absolute inset-0 opacity-10 sm:opacity-15 md:opacity-20 pointer-events-none">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" className="w-full h-full object-cover md:object-contain invert" alt="" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 sm:mb-8">
                        Küresel <br /> Ayak İzi.
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-md mb-8 sm:mb-10 md:mb-12">
                        Almanya'daki otomotiv hatlarından Türkiye'deki tekstil fabrikalarına kadar, sistemlerimiz 3 kıtada 7/24 çalışıyor.
                    </p>
                    <NavLink to="/projects">
                        <button className="text-brand-orange font-bold font-mono border-b border-brand-orange pb-1 hover:text-white hover:border-white transition-colors text-sm sm:text-base tap-target">
                            BAŞARI HİKAYELERİNİ GÖR
                        </button>
                    </NavLink>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {[
                        { val: "500+", label: "Tamamlanan Projeler" },
                        { val: "12", label: "Hizmet Verilen Ülkeler" },
                        { val: "45", label: "Uzman Mühendisler" },
                        { val: "7/24", label: "Destek Kapsamı" }
                    ].map((s, i) => (
                        <div key={i} className="bg-slate-900/80 backdrop-blur-sm p-3 sm:p-4 md:p-6 border-l-2 border-brand-orange">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-1 sm:mb-2">{s.val}</div>
                            <div className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomePage;