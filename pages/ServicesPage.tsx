import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Settings, Zap, Database, PenTool, Cpu, Gauge, Factory, Network, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ServicesPage: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(0);

    const services = [
        {
            id: 0,
            title: "Factory Automation",
            code: "AUT-01",
            icon: Factory,
            desc: "Comprehensive PLC & SCADA architecture design. We specialize in reducing cycle times and optimizing OEE (Overall Equipment Effectiveness) through intelligent logic and high-speed communication protocols.",
            specs: ["Siemens TIA Portal", "Beckhoff TwinCAT", "Omron Sysmac", "Safety PLC"]
        },
        {
            id: 1,
            title: "Power Distribution",
            code: "PWR-02",
            icon: Zap,
            desc: "End-to-end LV/MV panel engineering. From EPLAN schematic design to field installation and harmonic analysis. We ensure stable energy infrastructure for mission-critical operations.",
            specs: ["EPLAN Pro Panel", "IEC 61439 Compliance", "Thermal Analysis", "Load Balancing"]
        },
        {
            id: 2,
            title: "Robotic Cells",
            code: "ROB-03",
            icon: PenTool,
            desc: "Turnkey robotic integration for welding, palletizing, and assembly. We design custom end-of-arm tooling (EOAT) and program complex kinematic paths for maximum precision.",
            specs: ["KUKA Sim Pro", "ABB RobotStudio", "Fanuc Roboguide", "Custom EOAT"]
        },
        {
            id: 3,
            title: "Digital Twin & IoT",
            code: "DGT-04",
            icon: Network,
            desc: "Virtual commissioning services (VC) allowing us to test code against a physics-based 3D model before building the machine. Drastically reduces onsite commissioning time.",
            specs: ["Siemens NX MCD", "Emulate3D", "MQTT / OPC-UA", "Cloud Dashboards"]
        },
    ];

    return (
        <div className="min-h-screen bg-transparent pt-32 px-6 flex flex-col">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-20 text-center flex-grow">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Capabilities</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    We deliver multidisciplinary engineering solutions, bridging the gap between mechanical hardware and intelligent software.
                </p>
            </div>

            <div className="max-w-7xl mx-auto mb-32">

                {/* Top Bento Grid - "Focus Areas" */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-none sm:grid-rows-2 gap-4 h-auto mb-16 sm:mb-24">

                    {/* Main Feature - Large */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group border border-slate-800 bg-slate-900">
                        <div className="absolute top-6 left-6 z-20 bg-brand-orange/90 text-black text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                            FLAGSHIP
                        </div>
                        <img src="https://images.unsplash.com/photo-1565514020176-892eb5badeef?q=80&w=2070" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <h3 className="text-3xl font-display font-bold text-white mb-2">Process Control</h3>
                            <p className="text-slate-300 text-sm">Advanced DCS implementations for chemical and pharmaceutical plants.</p>
                        </div>
                    </div>

                    {/* Secondary - Wide */}
                    <div className="md:col-span-2 relative rounded-3xl overflow-hidden group border border-slate-800 bg-slate-900 p-8 flex flex-col justify-between hover:border-slate-600 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-slate-800 rounded-xl text-white"><Cpu size={24} /></div>
                            <ArrowUpRightIcon />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Industrial IT</h3>
                            <p className="text-slate-400 text-sm">Server setup, virtualization, and cyber-security for OT networks.</p>
                        </div>
                    </div>

                    {/* Tertiary - Box 1 */}
                    <div className="relative rounded-3xl overflow-hidden group border border-slate-800 bg-slate-900 p-6 flex flex-col justify-center items-center text-center hover:bg-slate-800 transition-colors">
                        <Gauge size={40} className="text-brand-orange mb-4" />
                        <h3 className="text-lg font-bold text-white">Efficiency</h3>
                        <div className="text-3xl font-mono font-bold text-slate-500 mt-2">+35%</div>
                    </div>

                    {/* Tertiary - Box 2 */}
                    <div className="relative rounded-3xl overflow-hidden group border border-slate-800 bg-slate-900 p-6 flex flex-col justify-center items-center text-center hover:bg-slate-800 transition-colors">
                        <Database size={40} className="text-brand-orange mb-4" />
                        <h3 className="text-lg font-bold text-white">Data</h3>
                        <div className="text-3xl font-mono font-bold text-slate-500 mt-2">10TB+</div>
                    </div>
                </div>

                {/* Technical Specification List (Accordion) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <h3 className="text-2xl font-bold text-white mb-4 sticky top-32">Technical Specs</h3>
                        <p className="text-slate-400 text-sm sticky top-44">
                            Select a discipline to view our specific toolsets and methodologies. We adhere to IEC and ISO standards in all deliverables.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="border-t border-slate-800">
                            {services.map((s) => (
                                <div key={s.id} className="border-b border-slate-800">
                                    <button
                                        onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                                        className={`w-full py-8 flex justify-between items-center text-left group transition-all duration-300 px-6 ${expanded === s.id ? 'bg-slate-900' : 'hover:bg-slate-900/50'}`}
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
                                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Technologies</h4>
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
                        <p className="font-mono text-black/60 font-bold tracking-widest mb-4">NEED CLARITY?</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500">
                            REQUEST AN AUDIT
                        </h2>
                        <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold">
                            TECHNICAL CONSULTATION <Settings className="animate-spin-slow" size={18} />
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