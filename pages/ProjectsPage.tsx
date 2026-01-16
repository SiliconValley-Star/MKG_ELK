import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, ArrowRight, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState("all"); // Changed initial filter to "all"

    // Updated categories structure
    const categories = [
        { id: 'all', label: 'Tümü' },
        { id: 'automation', label: 'Otomasyon' },
        { id: 'power', label: 'Güç' },
        { id: 'robotics', label: 'Robotik' },
        { id: 'digital', label: 'Dijital İkiz' },
        { id: 'process', label: 'Proses' }, // Added 'process' category
    ];

    // Updated projects array with Turkish content and new fields
    const projects = [
        {
            id: 1,
            title: "Batarya Gigafactory",
            cat: "automation",
            img: "https://images.unsplash.com/photo-1620283085439-386280b2d69f?q=80&w=2600",
            loc: "Berlin, DE",
            scope: "Tam montaj hattı SCADA'sı",
            size: "large" // Added size property
        },
        {
            id: 2,
            title: "İlaç Fabrikası",
            cat: "process",
            img: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?q=80&w=2600",
            loc: "İstanbul, TR",
            scope: "HVAC kontrolü & FDA uyumluluğu",
            size: "small" // Added size property
        },
        {
            id: 3,
            title: "Lojistik Merkezi",
            cat: "robotics",
            img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2600",
            loc: "Dubai, BAE",
            scope: "Ayrıştırıcı PLC mantığı",
            size: "small" // Added size property
        },
        {
            id: 4,
            title: "Veri Merkezi Gücü",
            cat: "power",
            img: "https://images.unsplash.com/photo-1558494949-ef2a0de49341?q=80&w=2600",
            loc: "Frankfurt, DE",
            scope: "20MW OG Dağıtımı",
            size: "large" // Added size property
        },
        {
            id: 5,
            title: "Gıda Paketleme",
            cat: "robotics",
            img: "https://images.unsplash.com/photo-1622675363311-ac60ee2c2cb9?q=80&w=2600",
            loc: "Bursa, TR",
            scope: "Delta Robot Hattı",
            size: "small" // Added size property
        },
        {
            id: 6,
            title: "Montaj Hattı İkizi",
            cat: "digital",
            img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2600",
            loc: "İzmir, TR",
            scope: "NX MCD Simülasyonu",
            size: "small" // Added size property
        }
    ];

    // Updated filter logic to use 'cat' property and 'id' from categories
    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.cat === filter);

    // Helper to get category label
    const getCategoryLabel = (catId: string) => {
        const category = categories.find(c => c.id === catId);
        return category ? category.label : catId;
    };

    return (
        <div className="min-h-screen bg-transparent pt-32 px-6 flex flex-col">
            <div className="max-w-7xl mx-auto mb-20 flex-grow">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Seçilmiş Projeler</h1>
                        <p className="text-slate-400 max-w-xl text-lg">
                            Yüksek etkili endüstriyel tesisler için sistem mimarisi ve yazılım çözümleri.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800 w-full sm:w-auto justify-center sm:justify-start">
                        {categories.map((cat) => (
                            <button
                                key={cat.id} // Use cat.id for key
                                onClick={() => setFilter(cat.id)} // Set filter to cat.id
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === cat.id // Compare with cat.id
                                    ? 'bg-white text-black shadow-lg'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {cat.label} {/* Display cat.label */}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((p) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={p.id}
                                className={`group relative flex flex-col gap-4 ${p.size === 'large' ? 'md:col-span-2' : 'col-span-1'}`}
                            >
                                {/* Image Container */}
                                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[4/3] md:aspect-auto md:h-[400px]">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                                    />
                                    {/* Overlay Button */}
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-orange hover:border-brand-orange">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-xs font-mono text-white uppercase tracking-wider">
                                        {getCategoryLabel(p.cat)} {/* Display category label */}
                                    </div>
                                </div>

                                {/* Metadata Below Image (Cleaner Look) */}
                                <div className="flex justify-between items-start px-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{p.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-500 font-mono">
                                            <span>{p.loc}</span> {/* Changed to p.loc */}
                                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                                            <span>{p.scope}</span> {/* Changed to p.scope */}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center text-slate-500 font-mono">
                        Bu kategoride proje bulunamadı.
                    </div>
                )}

            </div>

            {/* --- BOLD ORANGE CTA: BUILD YOUR LEGACY --- */}
            <section className="w-full py-16 sm:py-24 bg-brand-orange relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

                <NavLink to="/contact" className="block relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="font-mono text-black/60 font-bold tracking-widest mb-4">BENZER BİR ÇÖZÜM MÜ ARIYORSUNUZ?</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500">
                            PROJENİZİ TARTIŞALIM
                        </h2>
                        <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold">
                            TOPLANTI PLANLAYIN <Calendar size={18} />
                        </div>
                    </div>
                </NavLink>
            </section>

        </div>
    );
};

export default ProjectsPage;