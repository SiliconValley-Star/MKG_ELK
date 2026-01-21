import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, ArrowUpRight, Cpu, Globe, Zap, Layers, Activity, Lock, Play, Clock, ShieldCheck, BarChart3, Radio, Server, Network } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

const HomePage: React.FC = () => {
    const isMobile = useIsMobile();

    // Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MKG Elektromekanik Otomasyon",
        "alternateName": "MKG Elektromekanik",
        "url": "https://mkgelektromekanik.com",
        "logo": "https://mkgelektromekanik.com/logo.png",
        "description": "Endüstriyel otomasyon, elektrik mühendisliği ve akıllı bina sistemleri konusunda uzman. 2008'den beri Türkiye genelinde orta gerilim, alçak gerilim, BMS, SCADA ve güvenlik sistemleri kuruyoruz.",
        "foundingDate": "2008",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR",
            "addressLocality": "İstanbul"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": "TR",
            "availableLanguage": ["Turkish", "English"]
        },
        "sameAs": [
            "https://www.linkedin.com/company/mkg-elektromekanik"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "28"
        }
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "MKG Elektromekanik Otomasyon",
        "image": "https://mkgelektromekanik.com/logo.png",
        "url": "https://mkgelektromekanik.com",
        "description": "Türkiye'nin önde gelen endüstriyel elektrik ve otomasyon çözümleri firması. Trafo merkezi, BMS, SCADA, güvenlik sistemleri ve akıllı bina otomasyonu alanlarında uzman kadro.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "TR",
            "addressLocality": "İstanbul"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.1828",
            "longitude": "29.0665"
        },
        "priceRange": "$$$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "28"
        }
    };

    // WebSite Schema with SearchAction
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "MKG Elektromekanik Otomasyon",
        "url": "https://mkgelektromekanik.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mkgelektromekanik.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    // Combine all schemas
    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [organizationSchema, localBusinessSchema, websiteSchema]
    };

    return (
        <div className="bg-transparent text-white overflow-x-hidden">
            <SEOHead
                title="MKG Elektromekanik Otomasyon | Endüstriyel Elektrik & Otomasyon Çözümleri"
                description="2008'den beri Türkiye genelinde endüstriyel otomasyon, orta-alçak gerilim sistemleri, BMS, SCADA, trafo merkezi ve akıllı bina çözümleri. 28+ başarılı proje, 10 yıl tecrübe."
                keywords="endüstriyel otomasyon, elektrik mühendisliği, trafo merkezi, BMS, SCADA, orta gerilim, alçak gerilim, akıllı bina, güvenlik sistemleri, enerji yönetimi"
                type="website"
                schema={combinedSchema}
            />
            <HeroSection />
            <BrandTicker isMobile={isMobile} />
            <CorporateIntro isMobile={isMobile} />
            <EcosystemGrid isMobile={isMobile} />
            <StrategicValues />
            <InfiniteGallery />
            <LiveTelemetry />
            <CTASection />
        </div>
    );
};

// --- 1. HERO SECTION: TECHNICAL HUD STYLE ---
const heroSlides = [
    {
        id: "01",
        img: "/images/projects/vakifbank-hq.jpg",
        title: "KURUMSAL\nALTYAPI",
        subtitle: "FİNANS SEKTÖRÜ ÇÖZÜM ORTAKLIĞI",
        desc: "VakıfBank ile 2015'ten beri 30+ lokasyonda kesintisiz enerji ve data altyapısı kuruyoruz."
    },
    {
        id: "02",
        img: "/images/projects/okyanus-aluminyum.jpg",
        title: "ENDÜSTRİYEL\nGÜÇ",
        subtitle: "OG/AG SİSTEMLERİ & BUSBAR",
        desc: "2500 kVA trafo merkezleri ve busbar enerji dağıtımı ile modern üretim tesisleri inşa ediyoruz."
    },
    {
        id: "03",
        img: "/images/projects/celal-tekstil.jpg",
        title: "AKILLI\nOTOMASYON",
        subtitle: "BMS & ENERJI YÖNETİMİ",
        desc: "DALI/KNX tabanlı akıllı aydınlatma ve enerji takip sistemleri ile verimliliği maksimize ediyoruz."
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
            <div className="absolute inset-0 z-0">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[6000ms] ease-out"
                            style={{
                                backgroundImage: `url(${slide.img})`,
                                transform: !isMobile && index === current ? 'scale(1.1)' : 'scale(1.0)'
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                    </div>
                ))}
            </div>

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
                    Teknoloji Ortaklarımız
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

// --- 3. CORPORATE INTRO (2 COLUMN LAYOUT) ---
const CorporateIntro: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return (
        <section className="py-20 sm:py-24 md:py-32 bg-zinc-950 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
                <motion.div
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={isMobile ? { duration: 0.01 } : { duration: 0.4 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                        <span className="font-mono text-xs text-brand-orange uppercase tracking-widest">MKG Elektromekanik Hakkında</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 sm:mb-8 leading-tight">
                        Modern üretimin <br/> nabzını belirliyoruz.
                    </h2>
                    <div className="flex flex-col gap-6">
                        <div className="pl-6 border-l-2 border-white/20">
                            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                                2008'den beri, MKG elektrik mühendisliği ile dijital zeka arasındaki köprüde yer alıyor. Sadece komponent tedarik etmiyoruz; fabrikaların, veri merkezlerinin ve enerji santrallerinin sinir sistemlerini tasarlıyoruz.
                            </p>
                        </div>
                        <div className="pl-6 border-l-2 border-brand-orange">
                            <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                                Misyonumuz, sıkı kod, sağlam donanım ve öngörülü analizlerle duruş sürelerini ortadan kaldırmak ve verimliliği maksimize etmek.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-12 flex items-center gap-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-bold text-white">10+</span>
                            <span className="text-xs font-mono text-zinc-500 uppercase mt-1">Yıl Tecrübe</span>
                        </div>
                        <div className="w-px h-12 bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-bold text-white">Türkiye</span>
                            <span className="text-xs font-mono text-zinc-500 uppercase mt-1">Çapında Hizmet</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={isMobile ? { duration: 0.01 } : { duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <p className="text-zinc-500 mb-8 font-mono text-sm leading-7">
                        // PROTOKOL_BAŞLATILIYOR: <br/>
                        MKG'de gerçek otomasyonun görünmez olduğuna inanıyoruz. Arka planda sorunsuz çalışır, güvenlik, kalite ve hızı garanti eder. Birleştiriyoruz:
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 group">
                            <div className="p-2 bg-white/5 border border-white/10 rounded group-hover:bg-brand-orange group-hover:text-black transition-colors flex-shrink-0">
                                <Cpu size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1 text-base">Gelişmiş Lojik Kontrolü</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed">Yüksek hızlı çalıştırma ve karmaşık kinematik için özel PLC algoritmaları.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 group">
                            <div className="p-2 bg-white/5 border border-white/10 rounded group-hover:bg-brand-orange group-hover:text-black transition-colors flex-shrink-0">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1 text-base">Entegre Güvenlik</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed">Robotik verimlilikle birlikte insan güvenliğini sağlayan SIL3 / PLe uyumlu mimariler.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 group">
                            <div className="p-2 bg-white/5 border border-white/10 rounded group-hover:bg-brand-orange group-hover:text-black transition-colors flex-shrink-0">
                                <Globe size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1 text-base">Uzaktan Telemetri</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed">7/24 uzaktan izleme ve anlık arıza teşhisi için güvenli VPN tünelleri.</p>
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}

// --- 4. VISUAL CAPABILITIES (UPGRADED CARDS) ---
const EcosystemGrid: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const caps = [
        {
            title: "Otelcilik & Konaklama",
            img: "/images/projects/movenpick-bosphorus.jpg",
            desc: "5 yıldızlı oteller için BMS, GRMS ve enerji yönetimi sistemleri. Konfor ve verimliliği bir arada sunuyoruz.",
            features: ["Oda Otomasyon", "Merkezi İzleme", "Enerji Tasarrufu"]
        },
        {
            title: "Premium Konut Projeleri",
            img: "/images/projects/florya-villalari.jpg",
            desc: "Lüks villa ve rezidanslar için akıllı ev sistemleri, güvenlik ve enerji yönetimi çözümleri.",
            features: ["Smart Home KNX", "Güvenlik Entegrasyonu", "Aydınlatma Kontrolü"]
        },
        {
            title: "Ticari & Rezidans",
            img: "/images/projects/alkent-2000.jpg",
            desc: "Karma kullanımlı kompleksler için elektrik altyapısı, jeneratör sistemleri ve bina otomasyonu.",
            features: ["Güç Dağıtımı", "AGF/DGF Sistemleri", "BMS Entegrasyonu"]
        }
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-black">
            <div className="max-w-[1920px] mx-auto mb-12 sm:mb-16 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-4">Temel Yetenekler</h2>
                    <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
                        Teknik uzmanlığımız, elektromekanik mühendisliğin tam spektrumunu kapsar.
                    </p>
                </div>
                <NavLink to="/services" className="text-brand-orange font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors tap-target mt-4 md:mt-0">
                    Tüm Spesifikasyonları Görüntüle <ChevronRight size={14}/>
                </NavLink>
            </div>

            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {caps.map((c, i) => (
                    <motion.div
                        key={i}
                        className="group relative bg-zinc-900 border border-white/10 overflow-hidden flex flex-col hover:border-brand-orange/30 transition-colors"
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={isMobile ? { duration: 0.01 } : { duration: 0.5, delay: i * 0.1 }}
                    >
                        {/* Image */}
                        <div className="h-64 relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                style={{ backgroundImage: `url(${c.img})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                        </div>
                        
                        {/* Content - Overlapping Card */}
                        <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between relative bg-zinc-900 z-10 -mt-12 mx-4 mb-4 border border-white/5 shadow-2xl">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">{c.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{c.desc}</p>
                            </div>
                            
                            <ul className="space-y-2 border-t border-white/10 pt-4">
                                {c.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                                        <div className="w-1 h-1 bg-brand-orange rounded-full flex-shrink-0"></div> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- 5. STRATEGIC VALUES (NEW SECTION) ---
const StrategicValues = () => {
    const isMobile = useIsMobile();
    
    return (
        <section className="py-20 sm:py-24 md:py-32 bg-zinc-950 border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={isMobile ? { duration: 0.01 } : { duration: 0.4 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">Neden Lider Firmalar MKG'yi Seçiyor</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Sadece donanım sunmuyoruz. Kesinlik sunuyoruz. Mühendislik felsefemiz üç tartışmasız sütun üzerine inşa edilmiştir.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        {
                            icon: Clock,
                            title: "Pazara Hız",
                            desc: "Yazılım mantığının %95'ini sahada kurulumdan önce doğrulamak için Sanal Devreye Alma (Dijital İkiz) teknolojisini kullanıyoruz. Bu, devreye alma süresini haftalarca azaltır ve üretime daha erken başlamanızı sağlar."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Standartlara Uyum",
                            desc: "Her panel ve kod satırı IEC, ISO ve CE düzenlemelerine uygundur. Uluslararası uyumluluğun karmaşık ortamında gezinerek tesisinizdeki denetim hazırlığını sağlıyoruz."
                        },
                        {
                            icon: BarChart3,
                            title: "Ölçeklenebilir Mimari",
                            desc: "Yarın için tasarlıyoruz. Modüler kod yapılarımız (standart kütüphaneler kullanarak) yeni istasyonlar eklemeyi, yeni robotları entegre etmeyi veya çekirdek sistemi yeniden yazmadan üretim hatlarını genişletmeyi kolaylaştırır."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-6 sm:p-8 bg-black border border-white/10 hover:border-brand-orange transition-colors duration-300 group"
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={isMobile ? { duration: 0.01 } : { duration: 0.4, delay: i * 0.1 }}
                        >
                            <item.icon className="text-brand-orange mb-6 group-hover:scale-110 transition-transform" size={32} />
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 6. INFINITE GALLERY ---
const InfiniteGallery = () => {
    const isMobile = useIsMobile();

    const images = [
        { img: "/images/projects/biancho-pera.jpg", title: "Biancho Pera Hotel", id: "01" },
        { img: "/images/projects/alkent-2000.jpg", title: "Alkent 2000 Residence", id: "02" },
        { img: "/images/projects/aksa-gida.jpg", title: "Aksa Gıda Tesisi", id: "03" },
        { img: "/images/projects/enviropet.jpg", title: "Enviropet Üretim", id: "04" },
        { img: "/images/projects/incirli-myo.jpg", title: "İncirli MYO Kampüs", id: "05" },
        { img: "/images/projects/kultur-koleji.jpg", title: "Kültür Koleji", id: "06" },
        { img: "/images/projects/otto-atasehir.jpg", title: "Otto Ataşehir AVM", id: "07" },
        { img: "/images/projects/pelican-hill.jpg", title: "Pelican Hill Resort", id: "08" },
        { img: "/images/projects/roche-bobois.jpg", title: "Roche Bobois Showroom", id: "09" },
        { img: "/images/projects/vera-clinic.jpg", title: "Vera Clinic", id: "10" },
        { img: "/images/projects/yali-atakoy.jpg", title: "Yalı Ataköy", id: "11" },
        { img: "/images/projects/yelken-kalip.jpg", title: "Yelken Kalıp Sanayi", id: "12" },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-zinc-950 overflow-hidden relative">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 mb-8 sm:mb-10 md:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">Proje Arşivi</h2>
                    <p className="text-zinc-400 text-xs sm:text-sm">Gerçekleştirdiğimiz 28+ başarılı projeden görsel kayıtlar.</p>
                </div>
                <div className="text-brand-orange font-mono text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-2">
                    <Play size={12} className="fill-current"/> Canlı Proje Akışı
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-20 sm:w-32 md:w-48 lg:w-64 h-full bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 sm:w-32 md:w-48 lg:w-64 h-full bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-10 pointer-events-none"></div>

            {/* Slider Track */}
            <div className="flex w-full overflow-hidden">
                <div className={`flex w-max items-center gap-4 sm:gap-5 md:gap-6 ${isMobile ? '' : 'animate-marquee hover:pause'}`}>
                    {[...images, ...images].map((item, i) => (
                        <div key={i} className="relative w-[320px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[320px] lg:w-[550px] lg:h-[350px] flex-shrink-0 group overflow-hidden border border-white/10 bg-black">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-brand-orange font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-1 sm:mb-1.5">PROJE_#{item.id}</span>
                                <span className="text-white font-bold text-base sm:text-lg md:text-xl">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 7. LIVE TELEMETRY (STATS SECTION) ---
const LiveTelemetry = () => {
    const isMobile = useIsMobile();
    
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-black border-t border-white/10">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
                    initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={isMobile ? { duration: 0.01 } : { duration: 0.6 }}
                >
                    {[
                        { label: "Başarılı Proje", val: "28" },
                        { label: "Uzmanlık Alanı", val: "10" },
                        { label: "Yıl Deneyim", val: "10+" },
                        { label: "Güvenlik Skoru", val: "A+" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center md:text-left border-l-2 border-white/10 pl-6 sm:pl-8"
                            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={isMobile ? { duration: 0.01 } : { duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-2">{stat.val}</div>
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HomePage;