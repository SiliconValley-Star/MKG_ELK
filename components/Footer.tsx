import React from 'react';
import { Logo } from './Logo';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-20 border-t border-white/10 bg-slate-950/80 backdrop-blur-md text-white pt-24 pb-12 overflow-hidden">

            {/* Optional: A very subtle top highlight to give 'weight' without solid color */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Top Grid: Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-24">

                    {/* Column 1: Brand (Span 4) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Brand Logo & Desc */}
                        <div>
                            <NavLink to="/" className="inline-block mb-6 group">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 group-hover:border-brand-orange/50 transition-colors duration-300">
                                    <Logo variant="light" showText={true} className="h-12" />
                                </div>
                            </NavLink>

                            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
                                MKG Electromechanical Automation is a global engineering partner for the world's most demanding industries. We build the systems of tomorrow, today.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 text-slate-400 group">
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links (Span 2) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="font-display font-bold text-white text-lg tracking-wide">Corporate</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><NavLink to="/corporate" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">About Us</NavLink></li>
                            <li><NavLink to="/projects" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">Case Studies</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">Careers</NavLink></li>
                            <li><NavLink to="/faq" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">FAQ</NavLink></li>
                            <li><NavLink to="/security" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">Security & Compliance</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Capabilities (Span 2) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="font-display font-bold text-white text-lg tracking-wide">Expertise</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><NavLink to="/services" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">Factory Automation</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">Power Distribution</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">Robotic Cells</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">Digital Twin</NavLink></li>
                            <li><NavLink to="/services" className="hover:text-brand-orange hover:pl-2 transition-all duration-300 block">Functional Safety</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Contact (Span 4) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <h4 className="font-bold text-white text-lg mb-2">Industry Insights</h4>
                            <p className="text-xs text-slate-400 mb-4">Join 2,000+ engineers receiving our whitepapers.</p>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors placeholder:text-slate-600"
                                />
                                <button className="absolute right-1 top-1 bottom-1 px-4 bg-brand-orange rounded-md text-white font-bold hover:bg-white hover:text-black transition-colors">
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-slate-400 font-mono">
                            <div className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                                <MapPin size={16} className="text-brand-orange mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                <span>Nilufer Org. Ind. Zone, 123 Automation Ave,<br />Bursa / TURKIYE 16000</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                                <Phone size={16} className="text-brand-orange shrink-0 group-hover:scale-110 transition-transform" />
                                <span>+90 224 555 0100</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                                <Mail size={16} className="text-brand-orange shrink-0 group-hover:scale-110 transition-transform" />
                                <span>hello@mkg-engineering.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent w-full mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs text-slate-500 font-mono text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-brand-orange" />
                        <p>© {new Date().getFullYear()} MKG Elektromekanik. ISO 9001:2015 Certified.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                        <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
                        <NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink>
                        <NavLink to="/cookies" className="hover:text-white transition-colors">Cookies</NavLink>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;