import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, ArrowUpRight, Database } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import CTASection from '../components/CTASection';

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState("Tümü");

    const categories = ["Tümü", "Banka & Finans", "Endüstriyel Tesis", "Eğitim & Kampüs", "Otel & Turizm", "Lüks Konut & Villa"];

    const filteredProjects = filter === "Tümü" ? PROJECTS : PROJECTS.filter(project => project.category === filter);

    return (
        <div className="min-h-screen bg-transparent pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 flex flex-col pb-16 sm:pb-20 md:pb-24">
            
            {/* --- HEADER --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[1920px] mx-auto w-full mb-12 sm:mb-14 md:mb-16 border-b border-white/10 pb-6 sm:pb-8"
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
                            <span className="font-mono text-xs text-brand-orange tracking-widest uppercase">Proje Portföyü</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold text-white leading-[0.9]"
                        >
                            Referans <br/> Projelerimiz
                        </motion.h1>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3 sm:gap-4 w-full md:w-auto">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-zinc-400 md:text-right max-w-md text-sm sm:text-base hidden md:block"
                        >
                            Türkiye'nin dört bir yanında gerçekleştirdiğimiz elektrik, otomasyon ve enerji yönetimi projeleri.
                        </motion.p>
                        {/* Tech Filter Tabs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="relative overflow-x-auto scrollbar-hide w-full md:w-auto"
                        >
                            <div className="flex flex-nowrap gap-1 bg-zinc-900/50 p-1 rounded-lg border border-white/10 min-w-max">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap tap-target ${
                                            filter === cat
                                            ? 'bg-brand-orange text-black font-bold shadow-[0_0_15px_rgba(255,59,0,0.3)]'
                                            : 'text-zinc-500 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* --- GRID --- */}
            <div className="max-w-[1920px] mx-auto w-full mb-12">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                className={`group relative flex flex-col bg-zinc-950 border border-white/10 overflow-hidden hover:border-brand-orange/50 transition-colors ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'col-span-1'}`}
                            >
                                {/* Image Area */}
                                <NavLink to={`/projects/${project.slug}`} className={`relative w-full overflow-hidden cursor-pointer ${project.size === 'large' ? 'h-[350px] sm:h-[400px] md:h-full' : 'h-56 sm:h-64'}`}>
                                    <div className="absolute inset-0 bg-zinc-900 z-0"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                    
                                    {/* Overlay Badge */}
                                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                                        <div className="px-2.5 sm:px-3 py-1 bg-black/50 backdrop-blur border border-white/10 text-[10px] font-mono text-brand-orange uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></span>
                                            {project.category}
                                        </div>
                                    </div>
                                </NavLink>

                                {/* Content Area */}
                                <div className={`relative z-10 flex flex-col justify-between p-5 sm:p-6 ${project.size === 'large' ? 'md:absolute md:bottom-0 md:left-0 md:w-full md:bg-gradient-to-t md:from-black md:to-transparent md:pt-20 lg:pt-24' : 'bg-zinc-950 border-t border-white/10'}`}>
                                    <div>
                                        <NavLink to={`/projects/${project.slug}`}>
                                            <h3 className={`font-display font-bold text-white mb-2 group-hover:text-brand-orange transition-colors ${project.size === 'large' ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-lg sm:text-xl'}`}>
                                                {project.title}
                                            </h3>
                                        </NavLink>
                                        <p className="text-zinc-400 text-sm mb-4 sm:mb-6 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Meta Info Grid */}
                                    <div className="grid grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-2 text-[10px] font-mono text-zinc-500 uppercase border-t border-white/10 pt-3 sm:pt-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={12} className="text-zinc-600 shrink-0"/>
                                            <span className="truncate">{project.year}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={12} className="text-zinc-600 shrink-0"/>
                                            <span className="truncate">{project.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 col-span-2">
                                            <span className="truncate">{project.id}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Interaction */}
                                <NavLink to={`/projects/${project.slug}`} className="absolute top-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-orange text-black flex items-center justify-center tap-target">
                                        <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
                                    </div>
                                </NavLink>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="py-16 sm:py-20 text-center border border-dashed border-zinc-800 rounded-xl">
                        <div className="text-zinc-500 font-mono mb-2 text-xs sm:text-sm">SYSTEM ALERT</div>
                        <div className="text-white text-lg sm:text-xl font-display">Bu kategoride proje bulunamadı.</div>
                    </div>
                )}

            </div>

            {/* --- CTA --- */}
            <CTASection />

        </div>
    );
};

export default ProjectsPage;