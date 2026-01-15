import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, ArrowUpRight, Cpu, Globe, Zap, Layers, Activity, Lock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="bg-transparent text-white overflow-x-hidden">
            <HeroSection />
            <BrandTicker />
            <ManifestoSection />
            <EcosystemGrid />
            <BlueprintSlider />
            <GlobalImpact />
            <FinalCTA />
        </div>
    );
};

// --- 1. HERO SECTION: TECHNICAL HUD STYLE ---
const heroSlides = [
    {
        id: "01",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600",
        title: "INTELLIGENT\nAUTOMATION",
        subtitle: "SYSTEMS ARCHITECTURE",
        desc: "Deploying self-optimizing robotic cells for the Industry 4.0 era."
    },
    {
        id: "02",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2600",
        title: "ENERGY\nRESILIENCE",
        subtitle: "HIGH VOLTAGE INFRASTRUCTURE",
        desc: "Designing grid-scale power distribution with zero-failure tolerance."
    },
    {
        id: "03",
        img: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=2600",
        title: "DIGITAL\nTWINS",
        subtitle: "VIRTUAL COMMISSIONING",
        desc: "Simulating physics-based factory environments before physical build."
    }
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroSlides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-950">
            <AnimatePresence mode="wait">
                <motion.div
                    key={heroSlides[current].id}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src={heroSlides[current].img}
                        alt="Hero"
                        className="w-full h-full object-cover opacity-60"
                        loading="eager"
                    />
                    {/* Gradient Overlays for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                    {/* Grid Overlay Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-20">
                <div className="max-w-5xl border-l-2 border-brand-orange/50 pl-8 md:pl-16 relative">
                    {/* Decorator Line */}
                    <div className="absolute top-0 left-[-2px] w-[2px] h-24 bg-brand-orange"></div>

                    <motion.div
                        key={current + "text"}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono tracking-widest uppercase rounded">
                                {heroSlides[current].subtitle}
                            </span>
                            <span className="text-slate-500 font-mono text-xs">EST. 2008</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-6 sm:mb-8 whitespace-pre-line drop-shadow-2xl">
                            {heroSlides[current].title}
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light mb-6 sm:mb-10">
                            {heroSlides[current].desc}
                        </p>

                        <NavLink to="/services">
                            <button className="group relative overflow-hidden bg-white text-slate-950 px-10 py-4 rounded-none skew-x-[-10deg] hover:bg-brand-orange transition-colors duration-300">
                                <div className="skew-x-[10deg] font-bold tracking-widest flex items-center gap-3">
                                    DISCOVER SOLUTIONS <ArrowRight size={18} />
                                </div>
                            </button>
                        </NavLink>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Status Bar (HUD) */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-slate-950/50 backdrop-blur-md px-6 md:px-20 py-6 flex justify-between items-center z-20">
                <div className="flex items-center gap-8">
                    <div className="text-xs font-mono text-slate-500">
                        SYSTEM STATUS: <span className="text-green-500">ONLINE</span>
                    </div>
                    <div className="text-xs font-mono text-slate-500 hidden md:block">
                        LOC: 40.1828° N, 29.0665° E
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className="font-mono text-xl font-bold text-white">0{current + 1}</span>
                    <div className="w-32 h-[2px] bg-slate-800 relative overflow-hidden">
                        <motion.div
                            key={current}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 7, ease: "linear" }}
                            className="absolute top-0 left-0 h-full bg-brand-orange"
                        />
                    </div>
                    <span className="font-mono text-sm text-slate-500">03</span>
                </div>
            </div>
        </section>
    );
};

// --- 2. BRAND TICKER ---
const BrandTicker = () => {
    const brands = ["SIEMENS", "ABB", "SCHNEIDER", "KUKA", "FANUC", "MITSUBISHI", "OMRON", "BECKHOFF", "ROCKWELL"];
    return (
        <div className="bg-slate-900 border-b border-slate-800 py-10 overflow-hidden relative">
            <div className="absolute inset-0 bg-slate-900/50 z-10 pointer-events-none"></div>
            <div className="flex w-max animate-marquee whitespace-nowrap opacity-40">
                {[...brands, ...brands, ...brands].map((b, i) => (
                    <span key={i} className="mx-12 text-4xl md:text-6xl font-display font-bold text-transparent stroke-text hover:text-white transition-colors cursor-default select-none" style={{ WebkitTextStroke: '1px #475569' }}>
                        {b}
                    </span>
                ))}
            </div>
        </div>
    )
}

// --- 3. MANIFESTO (TEXT HEAVY) ---
const ManifestoSection = () => {
    return (
        <section className="py-32 px-6 bg-slate-950 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-sm font-mono text-brand-orange tracking-[0.5em] uppercase mb-8">
                        The MKG Methodology
                    </h2>
                    <p className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-12">
                        We bridge the gap between <span className="text-slate-600">mechanical limitations</span> and <span className="text-white border-b-2 border-brand-orange">digital possibilities.</span>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-20">
                        <div className="border-l border-slate-800 pl-6">
                            <Layers className="text-brand-orange mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-2">Scalable Systems</h3>
                            <p className="text-slate-400 text-sm leading-relaxed"> Modular architectures designed to grow with your production capacity, not constrain it.</p>
                        </div>
                        <div className="border-l border-slate-800 pl-6">
                            <Activity className="text-brand-orange mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-2">Real-time Data</h3>
                            <p className="text-slate-400 text-sm leading-relaxed"> Transforming raw sensor output into actionable business intelligence instantly.</p>
                        </div>
                        <div className="border-l border-slate-800 pl-6">
                            <Lock className="text-brand-orange mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-2">Cyber-Physical Safety</h3>
                            <p className="text-slate-400 text-sm leading-relaxed"> IEC 62443 compliant security protocols integrated into every layer of the OT network.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// --- 4. ECOSYSTEM BENTO GRID ---
const EcosystemGrid = () => {
    return (
        <section className="py-24 px-6 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">MKG <span className="text-slate-600">Ecosystem</span></h2>
                    <NavLink to="/services" className="text-brand-orange font-mono text-sm hover:underline hidden md:block">VIEW ALL CAPABILITIES &rarr;</NavLink>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">

                    {/* Item 1: Large Video/Image */}
                    <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group border border-slate-800">
                        <img src="https://images.unsplash.com/photo-1535378437327-10ff28d45777?q=80&w=2070" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                            <h3 className="text-3xl font-bold text-white mb-2">Robotic Integration</h3>
                            <p className="text-slate-300 text-sm max-w-sm">Seamless cooperation between humans and machines. Safety rated, high-speed, and precise.</p>
                        </div>
                        <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                            <ArrowUpRight className="text-white" />
                        </div>
                    </div>

                    {/* Item 2: Stat Card */}
                    <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between hover:border-brand-orange/50 transition-colors group">
                        <Cpu className="text-brand-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <div>
                            <div className="text-4xl font-mono font-bold text-white mb-2">15ms</div>
                            <div className="text-sm text-slate-400">Average Loop Cycle Time</div>
                        </div>
                    </div>

                    {/* Item 3: Service Card */}
                    <div className="md:col-span-1 md:row-span-1 rounded-3xl bg-slate-900 border border-slate-800 p-8 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl group-hover:bg-brand-orange/40 transition-colors"></div>
                        <h3 className="text-xl font-bold text-white mb-4 relative z-10">Electrical <br />Engineering</h3>
                        <ul className="space-y-2 text-sm text-slate-400 relative z-10">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-orange"></div> EPLAN Pro Panel</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-orange"></div> UL/CSA Standards</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-orange"></div> Thermal Analysis</li>
                        </ul>
                    </div>

                    {/* Item 4: Wide Card */}
                    <div className="md:col-span-2 md:row-span-1 rounded-3xl bg-slate-800 border border-slate-700 relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670" className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity" loading="lazy" />
                        <div className="absolute inset-0 flex flex-col justify-center px-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Digital Twin Lab</h3>
                            <p className="text-slate-300 text-sm max-w-md">Our in-house R&D facility simulates your entire production line before a single cable is laid.</p>
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
        { id: "SEC-01", title: "Automotive", desc: "Assembly & Paint", img: "https://images.unsplash.com/photo-1613632826230-09e39f730634?q=80&w=800" },
        { id: "SEC-02", title: "F&B Process", desc: "Hygienic Control", img: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=800" },
        { id: "SEC-03", title: "Logistics", desc: "Sorting & AGV", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" },
        { id: "SEC-04", title: "Energy", desc: "Grid Distribution", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800" },
    ];

    const scroll = (offset: number) => {
        if (scrollRef.current) scrollRef.current.scrollLeft += offset;
    }

    return (
        <section className="py-24 bg-slate-900 border-y border-slate-800 relative">
            <div className="px-6 md:px-20 mb-12 flex justify-between items-center">
                <div>
                    <h2 className="text-4xl font-display font-bold text-white">Sectors</h2>
                    <p className="text-slate-500">Industry-specific engineering expertise.</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => scroll(-400)} className="p-3 border border-slate-700 rounded-full hover:bg-white hover:text-black transition-colors text-white"><ChevronLeft /></button>
                    <button onClick={() => scroll(400)} className="p-3 border border-slate-700 rounded-full hover:bg-white hover:text-black transition-colors text-white"><ChevronRight /></button>
                </div>
            </div>

            <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-6 md:px-20 pb-12 no-scrollbar snap-x snap-mandatory">
                {sectors.map((s, i) => (
                    <div key={i} className="min-w-[300px] md:min-w-[400px] h-[500px] bg-slate-950 border border-slate-800 p-2 relative group snap-center cursor-pointer">
                        {/* Blueprint Decoration */}
                        <div className="absolute top-4 left-4 z-20 text-[10px] font-mono text-brand-orange border border-brand-orange px-1 bg-slate-900">
                            {s.id}
                        </div>

                        <div className="w-full h-3/4 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src={s.img} className="w-full h-full object-cover" loading="lazy" />
                            {/* Crosshairs */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white"></div>
                                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white"></div>
                            </div>
                        </div>

                        <div className="h-1/4 p-6 flex flex-col justify-center bg-slate-900">
                            <h3 className="text-2xl font-bold text-white mb-1">{s.title}</h3>
                            <p className="text-slate-400 font-mono text-xs">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

// --- 6. GLOBAL IMPACT (MAP) ---
const GlobalImpact = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Abstract Map Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" className="w-full h-full object-cover md:object-contain invert" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
                        Global <br /> Footprint.
                    </h2>
                    <p className="text-slate-400 text-lg max-w-md mb-12">
                        From automotive lines in Germany to textile plants in Turkey, our systems are running 24/7 across 3 continents.
                    </p>
                    <NavLink to="/projects">
                        <button className="text-brand-orange font-bold font-mono border-b border-brand-orange pb-1 hover:text-white hover:border-white transition-colors">
                            VIEW CASE STUDIES
                        </button>
                    </NavLink>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {[
                        { val: "500+", label: "Projects Delivered" },
                        { val: "12", label: "Countries Served" },
                        { val: "45", label: "Expert Engineers" },
                        { val: "24/7", label: "Support Coverage" }
                    ].map((s, i) => (
                        <div key={i} className="bg-slate-900/80 backdrop-blur-sm p-6 border-l-2 border-brand-orange">
                            <div className="text-4xl font-display font-bold text-white mb-2">{s.val}</div>
                            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- 7. FINAL CTA ---
const FinalCTA = () => {
    return (
        <section className="py-16 sm:py-24 bg-brand-orange relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

            <NavLink to="/contact" className="block relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="font-mono text-black/60 font-bold tracking-widest mb-4">READY TO SCALE?</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500">
                        START YOUR PROJECT
                    </h2>
                    <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold">
                        CONTACT ENGINEERING <ArrowRight size={18} />
                    </div>
                </div>
            </NavLink>
        </section>
    )
}

export default HomePage;