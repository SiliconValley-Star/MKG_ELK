import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Automation", "Energy", "Robotics", "Infrastructure"];

    const projects = [
        { id: 1, title: "GigaFactory Alpha", category: "Automation", client: "Tesla Inc.", year: "2023", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070", size: "large" },
        { id: 2, title: "Solar Array V", category: "Energy", client: "GreenGrid", year: "2022", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070", size: "small" },
        { id: 3, title: "Hydro Logic", category: "Energy", client: "City Water", year: "2021", img: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=2070", size: "small" },
        { id: 4, title: "AutoLine X", category: "Robotics", client: "BMW Group", year: "2023", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2095", size: "large" },
        { id: 5, title: "Data Center One", category: "Infrastructure", client: "Google", year: "2020", img: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=2070", size: "small" },
        { id: 6, title: "Pharma Clean Room", category: "Automation", client: "Pfizer", year: "2022", img: "https://images.unsplash.com/photo-1613632826230-09e39f730634?q=80&w=2070", size: "small" },
    ];

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="min-h-screen bg-transparent pt-32 px-6 flex flex-col">
            <div className="max-w-7xl mx-auto mb-20 flex-grow">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Selected Works</h1>
                        <p className="text-slate-400 max-w-xl text-lg">
                            A collection of our most significant engineering challenges and the solutions we engineered to overcome them.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800 w-full sm:w-auto justify-center sm:justify-start">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-white text-black shadow-lg'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {cat}
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
                                        {p.category}
                                    </div>
                                </div>

                                {/* Metadata Below Image (Cleaner Look) */}
                                <div className="flex justify-between items-start px-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{p.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-500 font-mono">
                                            <span>{p.client}</span>
                                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                                            <span>{p.year}</span>
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
                        No projects found in this category.
                    </div>
                )}

            </div>

            {/* --- BOLD ORANGE CTA: BUILD YOUR LEGACY --- */}
            <section className="w-full py-16 sm:py-24 bg-brand-orange relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

                <NavLink to="/contact" className="block relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="font-mono text-black/60 font-bold tracking-widest mb-4">MAKE AN IMPACT</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500">
                            BUILD YOUR LEGACY
                        </h2>
                        <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold">
                            START A PROJECT <ArrowRight size={18} />
                        </div>
                    </div>
                </NavLink>
            </section>

        </div>
    );
};

export default ProjectsPage;