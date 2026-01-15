import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, FileCheck, Eye, Key } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SecurityPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent pt-32 px-6 pb-24">

            {/* Hero */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-brand-orange/10 border border-brand-orange/30 rounded-2xl flex items-center justify-center text-brand-orange mx-auto mb-8"
                >
                    <ShieldCheck size={40} />
                </motion.div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6">Security & <br />Compliance</h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    At MKG, we treat data integrity and system security with the same rigor as our engineering projects.
                    We adhere to global standards to ensure your intellectual property remains protected.
                </p>
            </div>

            {/* SSL & Encryption Section */}
            <div className="max-w-5xl mx-auto mb-24">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <Lock className="text-green-500" size={24} />
                                <span className="text-green-500 font-mono font-bold tracking-widest">SSL SECURE</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">End-to-End Encryption</h2>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                All data transmitted between your browser and our servers is encrypted using
                                <strong> TLS 1.3 (Transport Layer Security)</strong> protocols with 256-bit AES encryption keys.
                                This ensures that sensitive project data, schematics, and contact information cannot be intercepted.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    Valid Wildcard SSL Certificate (2024-2025)
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    HSTS (Strict Transport Security) Enabled
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                                    DDoS Protection via Cloudflare Edge
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-950 p-10 flex items-center justify-center relative overflow-hidden">
                            {/* Abstract Lock Visual */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
                            <img
                                src="https://img.icons8.com/fluency/240/null/fingerprint-scan.png"
                                alt="Security Scan"
                                className="relative z-10 opacity-80 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Standards Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <Server className="text-brand-orange mb-6" size={32} />
                    <h3 className="text-xl font-bold text-white mb-3">ISO 27001</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Information Security Management System (ISMS) certified. We maintain strict controls over data access, asset management, and physical security at our facilities.
                    </p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <FileCheck className="text-brand-orange mb-6" size={32} />
                    <h3 className="text-xl font-bold text-white mb-3">GDPR & KVKK</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Fully compliant with European General Data Protection Regulation and Turkish Personal Data Protection Law. Your data rights are respected and automated.
                    </p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-orange/30 transition-colors">
                    <Key className="text-brand-orange mb-6" size={32} />
                    <h3 className="text-xl font-bold text-white mb-3">IEC 62443</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Industrial communication networks network and system security. We apply these standards to every automation project we deliver to prevent cyber-physical attacks.
                    </p>
                </div>
            </div>

            {/* Vulnerability Disclosure */}
            <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">Responsible Disclosure</h3>
                    <p className="text-slate-400">
                        If you believe you have found a security vulnerability in any MKG system or website, please report it to our security team immediately.
                    </p>
                </div>
                <a href="mailto:security@mkg.com" className="whitespace-nowrap px-6 py-3 border border-slate-600 rounded-lg text-white hover:bg-white hover:text-black transition-colors font-mono text-sm">
                    security@mkg.com
                </a>
            </div>

        </div>
    );
};

export default SecurityPage;