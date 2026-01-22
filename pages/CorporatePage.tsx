import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Shield, Award, History, UserCheck, ArrowRight, Zap, Hash, Globe, TrendingUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { PROJECTS } from '../data/projectsData';

const CorporatePage: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <SEOHead
        title="Kurumsal - MKG Elektromekanik Otomasyon"
        description="2015'ten beri endüstriyel dönüşümün mimarı. Şensoy Elektrik Grubu bünyesinde 10+ yıl deneyim, 28 başarılı proje, ISO 45001 sertifikalı. Tarihçemiz, değerlerimiz ve yönetim kadromuz."
        keywords="MKG elektromekanik hakkında, Şensoy Elektrik Grubu, endüstriyel otomasyon şirketi, ISO 45001, kurumsal değerler, yönetim kadrosu, tarihçe"
        type="website"
      />
      <div className="bg-transparent min-h-screen pt-24 sm:pt-28 md:pt-32 flex flex-col font-sans text-white overflow-hidden">
        <HeroSection isMobile={isMobile} />
        <ManifestoSection isMobile={isMobile} />
        <GlobalStats isMobile={isMobile} />
        <LegacyTimeline isMobile={isMobile} />
        <ExecutiveDossier isMobile={isMobile} />
        <ComplianceVault isMobile={isMobile} />
        <CTASection />
      </div>
    </>
  );
};

// --- 1. HERO: THE MONOLITH ---
const HeroSection: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 border-b border-white/10">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
            </div>

            <div className="relative z-10 max-w-[1920px] mx-auto w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.6 : 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                         <div className="w-12 sm:w-16 h-[2px] bg-brand-orange"></div>
                         <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-brand-orange">2015'TEN BERİ // ŞENSOY ELEKTRİK GRUBU</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-8 sm:mb-12 mix-blend-difference">
                        ENDÜSTRİYEL <br/> 
                        <span className="text-zinc-700">DÖNÜŞÜMÜN MİMARI.</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 border-t border-white/20 pt-6 sm:pt-8">
                    <div className="hidden md:block">
                        <p className="font-mono text-[10px] text-zinc-500 max-w-[200px] leading-relaxed">
                            // SYS_ID: MKG_CORP<br/>
                            // EST: 2015<br/>
                            // STATUS: OPERATIONAL
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-300 font-light leading-snug">
                            2015 yılında <span className="text-white font-medium">Mustafa Şensoy</span> tarafından kurulan MKG Elektromekanik Otomasyon, Şensoy Elektrik Grubu bünyesinde endüstriyel altyapı ve otomasyon çözümlerinin <span className="text-white font-medium">öncüsüdür</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 2. MANIFESTO: SCROLLYTELLING ---
const ManifestoSection: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const text = "Hassasiyet İnovasyon ve Güvenilirlik Şematik tasarım ve mantık akışında sıfır hata toleransı Dijital İkiz ve Endüstri 4.0 teknolojilerinde öncü Şeffaf protokoller ve IEC standartlarına tam uyum Her detay mükemmellik için optimize edilir";
    const words = text.split(" ");

    return (
        <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-black/30 backdrop-blur-sm relative">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 sm:mb-16 text-center">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">Stratejik Değerlerimiz</h2>
                    <p className="text-zinc-500 font-mono text-xs uppercase">Temel İlkeler</p>
                </div>
                <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 justify-center">
                    {words.map((word, i) => (
                        <Word key={i} word={word} index={i} isMobile={isMobile} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Word = ({ word, index, isMobile }: { word: string, index: number, isMobile: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

    return (
        <span 
            ref={ref}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold transition-colors duration-1000 ${isInView ? 'text-white' : 'text-zinc-800'}`}
        >
            {word}
        </span>
    );
};

// --- 3. GLOBAL STATS: DATA GRID ---
const GlobalStats: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return (
        <section className="border-y border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
                {[
                    { label: "Yıl Deneyim", val: "10", unit: "+", icon: Zap },
                    { label: "Başarılı Proje", val: "28", unit: "+", icon: Hash },
                    { label: "Uzmanlık Alanı", val: "10", unit: "Alan", icon: Globe },
                    { label: "Müşteri Memnuniyeti", val: "A", unit: "+", icon: TrendingUp },
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: isMobile ? 0.4 : 0.6, delay: i * 0.1 }}
                        className="p-8 sm:p-10 md:p-12 group hover:bg-white/5 transition-colors relative overflow-hidden"
                    >
                        <stat.icon size={isMobile ? 18 : 20} className="text-zinc-600 mb-6 sm:mb-8 group-hover:text-brand-orange transition-colors" />
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-2">{stat.val}</h3>
                        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500">{stat.label} <span className="text-brand-orange">[{stat.unit}]</span></p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- 4. LEGACY TIMELINE: STRUCTURAL ---
const LegacyTimeline: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    // Proje datasından dinamik milestone oluştur
    const generateMilestones = () => {
        const yearMap: Record<string, {categories: Set<string>, projects: string[], count: number}> = {};
        
        PROJECTS.forEach(project => {
            const year = project.year.split('-')[0]; // "2024" veya "2015-2023" gibi durumlar için ilk yılı al
            
            if (!yearMap[year]) {
                yearMap[year] = {
                    categories: new Set(),
                    projects: [],
                    count: 0
                };
            }
            
            yearMap[year].categories.add(project.category);
            yearMap[year].projects.push(project.title);
            yearMap[year].count++;
        });
        
        // Milestone açıklamalarını oluştur
        const milestones: Array<{year: string, title: string, desc: string}> = [];
        
        // 2025 - Gelecek vizyonu
        milestones.push({
            year: "2025",
            title: "Endüstri 4.0 Dönüşümü",
            desc: "IoT tabanlı enerji izleme sistemleri ve yapay zeka destekli bakım çözümleri portföye eklendi."
        });
        
        // 2024
        if (yearMap["2024"]) {
            const cats = Array.from(yearMap["2024"].categories);
            milestones.push({
                year: "2024",
                title: cats.join(" & "),
                desc: `${yearMap["2024"].count} büyük ölçekli proje tamamlandı. Endüstriyel üretim tesislerinde OG/AG sistemleri uzmanlığı.`
            });
        }
        
        // 2023
        if (yearMap["2023"]) {
            const cats = Array.from(yearMap["2023"].categories);
            milestones.push({
                year: "2023",
                title: cats.join(" & "),
                desc: `${yearMap["2023"].count} proje ile metal ve tekstil sektöründe uzmanlaşma. Kurulu güç kapasitesi 15 MVA'yı aştı.`
            });
        }
        
        // 2022
        if (yearMap["2022"]) {
            const cats = Array.from(yearMap["2022"].categories);
            milestones.push({
                year: "2022",
                title: cats.join(" & "),
                desc: `${yearMap["2022"].count} proje ile geri dönüşüm, gıda ve lüks konut segmentlerinde büyüme.`
            });
        }
        
        // 2021
        if (yearMap["2021"]) {
            const cats = Array.from(yearMap["2021"].categories);
            milestones.push({
                year: "2021",
                title: "Akıllı Binalar & Kurumsal",
                desc: `${yearMap["2021"].count} proje: BMS, KNX otomasyonu ve Legrand gibi global markalarla işbirlikleri başladı.`
            });
        }
        
        // 2020
        if (yearMap["2020"]) {
            milestones.push({
                year: "2020",
                title: "Çok Sektörlü Genişleme",
                desc: `${yearMap["2020"].count} proje ile eğitim, sağlık ve lüks konut segmentlerinde başarılı işler. COVID-19'a rağmen kesintisiz hizmet.`
            });
        }
        
        // 2019
        if (yearMap["2019"]) {
            milestones.push({
                year: "2019",
                title: "Mega Projeler",
                desc: `İstanbul Havalimanı ve Mövenpick gibi prestijli projeler. ${yearMap["2019"].count} büyük ölçekli işbirliği.`
            });
        }
        
        // 2018
        if (yearMap["2018"]) {
            milestones.push({
                year: "2018",
                title: "Otel & Sağlık Sektörü",
                desc: `${yearMap["2018"].count} proje ile otel otomasyonu (GRMS) ve medikal elektrik altyapılarında uzmanlık.`
            });
        }
        
        // 2017
        if (yearMap["2017"]) {
            milestones.push({
                year: "2017",
                title: "Finans & Premium Ofis",
                desc: `${yearMap["2017"].count} proje ile banka şubeleri ve A+ ofis segmentlerinde genişleme.`
            });
        }
        
        // 2016
        if (yearMap["2016"]) {
            milestones.push({
                year: "2016",
                title: "Finans Sektörü Girişi",
                desc: "İlk kurumsal proje VakıfBank. Finans ve banka altyapılarında uzmanlık başladı."
            });
        }
        
        // 2015
        milestones.push({
            year: "2015",
            title: "Kuruluş",
            desc: "MKG Elektromekanik Otomasyon, Mustafa Şensoy tarafından Şensoy Elektrik Grubu bünyesinde kuruldu."
        });
        
        return milestones;
    };
    
    const milestones = generateMilestones();

    return (
        <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-transparent overflow-hidden">
            <div className="max-w-[1920px] mx-auto">
                <div className="mb-16 sm:mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 sm:pb-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2">Tarihçemiz</h2>
                        <p className="text-zinc-400 text-sm sm:text-base">Kuruluşumuzdan bu yana gerçekleştirdiğimiz büyüme ve teknolojik dönüşüm.</p>
                    </div>
                    <div className="text-zinc-500 font-mono text-[10px] sm:text-xs">Timeline: 2015 — 2025</div>
                </div>

                <div className="relative">
                    {/* Horizontal Line */}
                    <div className="absolute top-[50%] left-0 w-full h-[1px] bg-zinc-800 hidden lg:block"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 md:gap-12 relative z-10">
                        {milestones.map((m, i) => (
                            <motion.div 
                                key={i} 
                                className="group relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: isMobile ? 0.4 : 0.6, delay: i * 0.05 }}
                            >
                                {/* Year Marker */}
                                <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-zinc-800 group-hover:text-white transition-colors duration-500 mb-4 sm:mb-6 bg-transparent inline-block pr-4">
                                    {m.year}
                                </div>
                                {/* Dot */}
                                <div className="w-3 h-3 bg-zinc-800 rounded-full mb-4 sm:mb-6 group-hover:bg-brand-orange transition-colors duration-300"></div>
                                {/* Content */}
                                <div className="border-l border-zinc-800 pl-4 lg:border-0 lg:pl-0">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{m.title}</h3>
                                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{m.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 5. EXECUTIVE DOSSIER: LIST VIEW ---
const ExecutiveDossier: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const [hoveredExec, setHoveredExec] = useState<number | null>(null);

    const executives = [
        { id: 1, name: "Emrullah Malkoç", role: "Operasyon Müdürü", img: "/images/team/emrullah-malkoc.jpg", bio: "15+ yıllık deneyimle operasyonel mükemmelliği yönetiyor." },
        { id: 2, name: "Tuncer Beyazoğlu", role: "Elektrik Sistemleri Direktörü", img: "/images/team/tuncer-beyazoglu.jpg", bio: "Tüm elektrik altyapısı koordinatörü ve proje mühendisi." },
        { id: 3, name: "Berhudan Başcan", role: "Bilgisayar Mühendisi", img: "/images/team/berhudan-bascan.jpg", bio: "Otomasyon yazılımları ve dijital dönüşüm proje mühendisi." },
    ];

    return (
        <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-zinc-900/30 backdrop-blur-sm border-y border-white/10 relative">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
                
                {/* Left: Header */}
                <div className="lg:col-span-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 sm:mb-8">Yönetim Kadromuz</h2>
                    <p className="text-zinc-400 mb-8 sm:mb-12 text-sm sm:text-base leading-relaxed">
                        Endüstriyel mükemmelliğin mimarları. Liderlik ekibimiz, derin teknik uzmanlık ve global stratejik vizyonu bir araya getiriyor.
                    </p>
                    <NavLink to="/contact">
                        <button className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors tap-target">
                            İletişime Geçin
                        </button>
                    </NavLink>
                </div>

                {/* Right: Executive Cards - Grid on Mobile, List on Desktop */}
                <div className="lg:col-span-8 relative">
                    {/* Mobile: Grid with Photos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
                        {executives.map((exec, i) => (
                            <motion.div
                                key={exec.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group bg-zinc-950/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-brand-orange/50 transition-colors"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img src={exec.img} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={exec.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                                    <div className="absolute top-3 left-3">
                                        <span className="font-mono text-xs text-brand-orange">0{exec.id}</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-display font-bold text-white mb-2">{exec.name}</h3>
                                    <p className="text-brand-orange font-mono text-[10px] uppercase mb-3">{exec.role}</p>
                                    <p className="text-zinc-400 text-xs leading-relaxed">{exec.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop: Interactive List */}
                    <div className="hidden lg:flex flex-col">
                        {executives.map((exec) => (
                            <motion.div
                                key={exec.id}
                                className="group relative border-b border-white/10 py-8 flex justify-between items-center cursor-pointer overflow-hidden"
                                onMouseEnter={() => setHoveredExec(exec.id)}
                                onMouseLeave={() => setHoveredExec(null)}
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1, paddingLeft: '20px' }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center gap-6 relative z-10">
                                    <span className="font-mono text-xs text-zinc-600">0{exec.id}</span>
                                    <h3 className="text-4xl font-display font-bold text-white group-hover:text-brand-orange transition-colors">{exec.name}</h3>
                                </div>
                                <div className="flex items-center gap-12 relative z-10">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{exec.role}</span>
                                    <ArrowRight className="text-zinc-700 group-hover:text-brand-orange opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" size={20} />
                                </div>
                                
                                {/* Background Highlight */}
                                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating Image Preview (Desktop only) */}
                    {hoveredExec && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="hidden lg:block absolute top-0 -left-[300px] w-[280px] h-[360px] bg-zinc-900/80 backdrop-blur-md border border-white/20 pointer-events-none z-20 overflow-hidden"
                        >
                            <img
                                src={executives.find(e => e.id === hoveredExec)?.img}
                                className="w-full h-full object-cover filter grayscale contrast-125"
                                alt="Executive"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-4 border-t border-white/10">
                                <p className="text-xs text-zinc-300 font-mono">
                                    {executives.find(e => e.id === hoveredExec)?.bio}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

// --- 6. COMPLIANCE VAULT: CARDS ---
const ComplianceVault: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white/95 backdrop-blur-xl text-black">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 border-b border-black/10 pb-6 sm:pb-8 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <Shield size={isMobile ? 16 : 20} className="text-brand-orange"/>
                            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500">Sertifikasyon & Uyumluluk</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">Kalite Güvencesi</h2>
                    </div>
                    <div className="max-w-md md:text-right">
                        <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                            Operasyonlarımız yıllık olarak uluslararası kurumlar tarafından denetlenir. Kalite bir söz değil, dokümante edilmiş bir gerçektir.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { title: "ISO 45001", subtitle: "İş Sağlığı & Güvenliği", desc: "Yüksek voltaj sahalarında sıfır zarar protokolleri." },
                        { title: "CE Uyumlu", subtitle: "Avrupa Standartları", desc: "Tüm sistemlerimiz CE direktiflerine tam uyumludur." },
                        { title: "ATEX", subtitle: "Patlayıcı Ortamlar", desc: "Ex bölgelerinde çalışma yetkilendirmesi mevcuttur." },
                        { title: "IEC 61439", subtitle: "Tip Test Edilmiş", desc: "Alçak gerilim pano montaj standartları sertifikası." },
                    ].map((cert, i) => (
                        <motion.div 
                            key={i} 
                            className="group border border-black/10 p-6 sm:p-8 hover:bg-black hover:text-white transition-all duration-500 cursor-default"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: isMobile ? 0.4 : 0.6, delay: i * 0.1 }}
                        >
                            <div className="flex justify-between items-start mb-8 sm:mb-12">
                                <Award size={isMobile ? 20 : 24} className="text-zinc-400 group-hover:text-brand-orange transition-colors" />
                                <span className="font-mono text-[9px] sm:text-[10px] uppercase border border-black/20 group-hover:border-white/20 px-2 py-1 rounded">
                                    Sertifikalı
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{cert.title}</h3>
                            <h4 className="font-mono text-[10px] sm:text-xs uppercase text-zinc-500 group-hover:text-zinc-400 mb-4 sm:mb-6">{cert.subtitle}</h4>
                            <p className="text-xs sm:text-sm text-zinc-600 group-hover:text-zinc-400 leading-relaxed border-t border-black/10 group-hover:border-white/10 pt-4">
                                {cert.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporatePage;