import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, Briefcase, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const CorporatePage: React.FC = () => {
    return (
        <div className="bg-transparent min-h-screen pt-32 px-6 overflow-hidden flex flex-col">

            {/* --- HERO SECTION --- */}
            <div className="max-w-7xl mx-auto mb-32 relative flex-grow">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="h-[1px] w-8 bg-brand-orange"></span>
                            <span className="text-brand-orange font-mono text-sm tracking-widest uppercase">Our DNA</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 sm:mb-8 leading-tight"
                        >
                            Engineering <br /> <span className="text-slate-500">Integrity.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg"
                        >
                            We don't just build systems; we architect the backbone of modern industry.
                            Founded in 2008, MKG has evolved from a local automation firm to a global engineering partner.
                        </motion.p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-8">
                            {[
                                { label: "Founded", val: "2008" },
                                { label: "Engineers", val: "45+" },
                                { label: "Patents", val: "12" }
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
                                    <div className="text-xs text-slate-500 font-mono uppercase">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group"
                    >
                        <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                            alt="Engineering Team"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </div>

            {/* --- MANIFESTO / VISION --- */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="bg-slate-900/50 border border-slate-800 p-12 md:p-20 rounded-3xl relative overflow-hidden text-center backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50"></div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">The Mission</h2>
                    <p className="text-lg md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                        "To accelerate the world's transition to autonomous manufacturing by providing
                        <span className="text-white font-semibold"> intelligent, scalable, and sustainable</span> engineering solutions that stand the test of time."
                    </p>
                </div>
            </div>

            {/* --- VALUES GRID --- */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-6">
                    <h2 className="text-3xl font-display font-bold text-white">Core Values</h2>
                    <p className="text-slate-500 mt-2 md:mt-0">The principles that guide every decision.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Precision", icon: Target, desc: "We measure twice, cut once. Accuracy is not optional; it is our signature." },
                        { title: "Innovation", icon: Lightbulb, desc: "We challenge the status quo, leveraging Digital Twins and AI before they were trends." },
                        { title: "Safety", icon: Award, desc: "Human life comes first. Our systems are designed with redundant safety protocols." }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 p-10 rounded-2xl hover:border-brand-orange/50 transition-colors group">
                            <div className="w-14 h-14 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-black/20">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- TIMELINE SECTION --- */}
            <div className="max-w-4xl mx-auto mb-32">
                <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">Our Journey</h2>
                <div className="space-y-12 relative border-l border-slate-800 ml-6 md:ml-0">
                    {[
                        { year: "2008", title: "Inception", desc: "Founded in Bursa with a focus on textile machinery automation." },
                        { year: "2012", title: "Expansion", desc: "Opened Istanbul office and entered the Automotive sector." },
                        { year: "2018", title: "Global Reach", desc: "First turnkey project delivered in Germany. Team grew to 20 engineers." },
                        { year: "2023", title: "Digital Era", desc: "Launched dedicated R&D department for Digital Twin technologies." },
                    ].map((item, i) => (
                        <div key={i} className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 md:gap-12 items-center group">
                            {/* Dot */}
                            <div className="absolute left-[-5px] top-2 w-3 h-3 bg-slate-700 rounded-full border border-slate-900 md:left-auto md:right-[-6px] md:col-start-3 md:col-end-3 md:mx-auto group-hover:bg-brand-orange transition-colors"></div>

                            {/* Date (Left on Desktop) */}
                            <div className="md:col-span-2 md:text-right mb-2 md:mb-0">
                                <span className="text-3xl font-display font-bold text-slate-700 group-hover:text-white transition-colors">{item.year}</span>
                            </div>

                            {/* Content (Right on Desktop) */}
                            <div className="md:col-span-2 md:col-start-4">
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- BOLD ORANGE CTA: JOIN THE VANGUARD --- */}
            <section className="w-full py-16 sm:py-24 bg-brand-orange relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

                <NavLink to="/contact" className="block relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="font-mono text-black/60 font-bold tracking-widest mb-4">GROW WITH US</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500">
                            JOIN THE VANGUARD
                        </h2>
                        <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold">
                            CAREERS & PARTNERSHIPS <Briefcase size={18} />
                        </div>
                    </div>
                </NavLink>
            </section>

        </div>
    );
};

export default CorporatePage;