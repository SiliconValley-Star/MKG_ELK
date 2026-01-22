import React, { useState, useEffect, useCallback, memo } from 'react';
import { Logo } from './Logo';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { subscribeNewsletter } from '../services/emailService';
import { PROJECTS } from '../data/projectsData';
import { SERVICES_DATA } from '../data/servicesData';
import { blogPosts } from '../data/blogPosts';

// --- GLOBAL STATS DATA ---
const GLOBAL_STATS = [
    { label: "Şebeke", value: "50.00Hz" },
    { label: "Aktif Proje", value: PROJECTS.length.toString() },
    { label: "Hizmet Kapasitesi", value: SERVICES_DATA.length.toString() + " Alan" },
    { label: "Lokasyon", value: "İstanbul / TR" },
    { label: "Uptime", value: "99.99%" },
    { label: "Sistem Durumu", value: "Optimal" },
];

// Separate LiveClock component to prevent Footer re-renders
const LiveClock = memo(() => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('tr-TR'));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('tr-TR'));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col gap-1 ml-auto pl-8 border-l border-white/10">
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                YEREL SAAT (IST)
            </span>
            <span className="font-mono text-xs text-brand-orange animate-pulse">
                {time}
            </span>
        </div>
    );
});

LiveClock.displayName = 'LiveClock';

const Footer: React.FC = memo(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Geçerli bir e-posta adresi girin');
            return;
        }

        setIsSubmitting(true);
        try {
            await subscribeNewsletter({ email });
            setSuccess(true);
            setEmail('');
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsSubmitting(false);
        }
    }, [email]);

    const handleNavigation = useCallback((path: string) => {
        if (path.startsWith('http')) {
            window.open(path, '_blank');
        } else {
            navigate(path);
        }
    }, [navigate]);

    // VİTRİN PROJELERİ - Featured projects selection
    const FEATURED_TITLES = [
        "VakıfBank",
        "Mövenpick Hotel",
        "Okyanus Alüminyum",
        "Kültür Üniversitesi",
        "Florya",
        "Vera Clinic"
    ];

    const featuredProjects = FEATURED_TITLES.map(title => {
        return PROJECTS.find(p => p.title.toLowerCase().includes(title.toLowerCase()));
    }).filter(p => p !== undefined);

    const displayProjects = featuredProjects.length > 0 ? featuredProjects : PROJECTS.slice(0, 6);

    // Dinamik Footer Link Matrix
    const FOOTER_LINKS = [
        {
            title: "GÜÇ SİSTEMLERİ",
            items: SERVICES_DATA.slice(0, 3).map(s => ({ label: s.title, path: `/hizmetler/${s.slug}` }))
        },
        {
            title: "ALTYAPI & OTOMASYON",
            items: SERVICES_DATA.slice(3, 8).map(s => ({ label: s.title, path: `/hizmetler/${s.slug}` }))
        },
        {
            title: "VİTRİN PROJELER",
            items: [
                ...displayProjects.map(p => ({
                    label: p!.title.length > 25 ? p!.title.substring(0, 25) + '...' : p!.title,
                    path: `/projeler/${p!.slug}`
                })),
                { label: "Proje Arşivi →", path: "/projeler" }
            ]
        },
        {
            title: "BİLGİ MERKEZİ",
            items: blogPosts.slice(0, 5).map(a => ({
                label: a.title.length > 25 ? a.title.substring(0, 25) + '...' : a.title,
                path: `/blog/${a.slug}`
            }))
        },
        {
            title: "KURUMSAL",
            items: [
                { label: "Hakkımızda", path: "/kurumsal" },
                { label: "Vizyon & Değerler", path: "/kurumsal" },
                { label: "Başarı Hikayeleri", path: "/projeler" },
                { label: "SSS", path: "/sss" },
                { label: "Güvenlik & Uyum", path: "/guvenlik" },
            ]
        },
        {
            title: "İLETİŞİM",
            items: [
                { label: "Bize Ulaşın", path: "/iletisim" },
                { label: "Teklif Talep Et", path: "/iletisim" },
                { label: "Kariyer Fırsatları", path: "/iletisim" },
                { label: "E-Posta", path: "mailto:info@mkgelektromekanik.com" },
            ]
        }
    ];

    return (
        <footer role="contentinfo" className="bg-transparent text-white border-t border-white/10 relative z-20 overflow-hidden font-sans">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            {/* Massive Background Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
                <div className="text-[18vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap translate-y-[20%] select-none" aria-hidden="true">
                    MKG ELEKTROMEKANİK
                </div>
            </div>

            <div className="max-w-[1920px] mx-auto relative z-10">

                {/* ROW 1: HEADER & NEWSLETTER */}
                <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
                    
                    {/* Branding Area */}
                    <div className="lg:col-span-4 p-8 md:p-12 lg:border-r border-white/10 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <NavLink to="/" className="inline-block mb-6 select-none">
                                <div className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-brand-orange/50 transition-colors duration-300 inline-flex">
                                    <Logo variant="light" showText={true} className="h-10 md:h-12" />
                                </div>
                            </NavLink>
                            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
                                Geleceğin endüstriyel altyapısını inşa ediyoruz. Orta gerilimden zayıf akıma, 
                                akıllı binalardan Endüstri 5.0'a kadar uçtan uca mühendislik çözümleri.
                            </p>
                        </div>
                        <a
                            href="https://www.google.com/maps/search/MKG+Elektromekanik+ve+Otomasyon+DAP+Vadisi+Merkez+A+Blok+Ofis+No+49+34406+Kağıthane+İstanbul"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-12 block group cursor-pointer hover:scale-[1.02] transition-transform"
                            aria-label="Google Maps'te Adresimizi Görüntüle"
                        >
                            <span className="font-mono text-[10px] text-brand-orange tracking-widest uppercase block mb-2 group-hover:text-white transition-colors">MERKEZ OFİS</span>
                            <p className="text-sm font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
                                DAP Vadisi A Blok, Ofis No: 49<br />
                                Kağıthane / İstanbul / TÜRKİYE
                            </p>
                        </a>
                    </div>

                    {/* Newsletter Area */}
                    <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                        <span className="font-mono text-xs text-brand-orange tracking-widest mb-4 block">/// SİSTEME BAĞLANIN</span>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8 max-w-2xl">
                            Endüstri 5.0 ve otomasyon trendlerini takip edin.
                        </h2>
                        
                        {success ? (
                            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-lg px-6 py-4 max-w-3xl">
                                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                <p className="text-green-500 text-sm font-medium">
                                    Başarıyla abone oldunuz! Bültenimizi e-posta adresinize göndereceğiz.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="max-w-3xl">
                                <div className="flex flex-col md:flex-row gap-0">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setError('');
                                        }}
                                        placeholder="E-POSTA ADRESİNİZ"
                                        disabled={isSubmitting}
                                        className={`w-full bg-white/5 border border-r-0 rounded-l-md px-6 py-4 text-sm font-mono text-white focus:outline-none focus:border-brand-orange focus:bg-white/10 transition-all uppercase placeholder-gray-600 disabled:opacity-50 ${
                                            error ? 'border-red-500' : 'border-white/10'
                                        }`}
                                    />
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors duration-300 rounded-r-md whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={14} className="animate-spin" />
                                                GÖNDERILIYOR
                                            </>
                                        ) : (
                                            'ABONE OL'
                                        )}
                                    </button>
                                </div>
                                {error && (
                                    <p className="text-red-500 text-xs mt-2 font-mono">{error}</p>
                                )}
                                <p className="text-xs text-gray-600 mt-4 max-w-lg">
                                    Bültenimize abone olarak KVKK kapsamında verilerinizin işlenmesini kabul etmiş olursunuz.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* ROW 2: MASSIVE LINK MATRIX (6 COLUMNS) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-white/10">
                    {FOOTER_LINKS.map((section, i) => (
                        <section 
                            key={i} 
                            className={`p-8 md:p-10 border-b lg:border-b-0 border-white/10 ${i !== FOOTER_LINKS.length - 1 ? 'lg:border-r' : ''}`}
                        >
                            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.items.map((item, idx) => {
                                    const isActive = location.pathname === item.path;
                                    const isExternal = item.path.startsWith('http') || item.path.startsWith('mailto:');
                                    
                                    return (
                                        <li key={idx}>
                                            {isExternal ? (
                                                <a
                                                    href={item.path}
                                                    target={item.path.startsWith('http') ? '_blank' : undefined}
                                                    rel={item.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    className="text-xs text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 tracking-tight flex items-center gap-2 group"
                                                >
                                                    <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-brand-orange transition-colors flex-shrink-0"></span>
                                                    <span className="truncate">{item.label}</span>
                                                </a>
                                            ) : (
                                                <NavLink
                                                    to={item.path}
                                                    className={`text-xs hover:translate-x-1 transition-all duration-300 tracking-tight flex items-center gap-2 group ${
                                                        isActive ? 'text-brand-orange' : 'text-gray-400 hover:text-white'
                                                    }`}
                                                >
                                                    <span className={`w-1 h-1 rounded-full transition-colors flex-shrink-0 ${
                                                        isActive ? 'bg-brand-orange' : 'bg-gray-700 group-hover:bg-brand-orange'
                                                    }`}></span>
                                                    <span className="truncate">{item.label}</span>
                                                </NavLink>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    ))}
                </div>

                {/* ROW 3: TELEMETRY BAR & COPYRIGHT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80px]">

                    {/* Copyright */}
                    <div className="lg:col-span-4 p-6 lg:border-r border-white/10 flex flex-col justify-center">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-gray-600 uppercase">
                                © 2015-{new Date().getFullYear()} MKG Elektromekanik Otomasyon
                            </span>
                            <span className="text-[10px] font-mono text-gray-700 uppercase flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                Tüm sistemler aktif. ISO 9001:2015 Sertifikalı.
                            </span>
                        </div>
                    </div>

                    {/* Live Stats Ticker */}
                    <div className="lg:col-span-8 p-6 flex flex-wrap items-center justify-between gap-6 overflow-x-auto">
                        {GLOBAL_STATS.map((stat, i) => (
                            <div key={i} className="flex flex-col gap-1 min-w-[100px]">
                                <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                                    {stat.label}
                                </span>
                                <span className={`font-mono text-xs ${
                                    stat.label.includes('Sistem') ? 'text-green-500' :
                                    stat.label.includes('Uptime') ? 'text-green-500' :
                                    'text-gray-300'
                                }`}>
                                    {stat.value}
                                </span>
                            </div>
                        ))}

                        {/* Real-time Clock - Separate component to prevent Footer re-renders */}
                        <LiveClock />
                    </div>

                </div>

                {/* ROW 4: DEVELOPER CREDIT - CENTERED */}
                <div className="border-t border-white/10">
                    <div className="p-4 text-center">
                        <span className="text-[10px] text-gray-600">
                            Designed & Developed by{' '}
                            <a
                                href="https://futurewavee.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-brand-orange transition-colors font-medium"
                            >
                                FutureWave
                            </a>
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;