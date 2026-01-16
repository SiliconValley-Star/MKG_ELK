import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Globe, Clock, MessageSquare, Headphones, ShieldAlert, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-transparent min-h-screen pt-32 px-6 flex flex-col">
            <div className="max-w-7xl mx-auto flex-grow mb-32">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
                            <span className="text-brand-orange font-mono text-xs uppercase tracking-widest">Yeni Projeler İçin Müsait</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                        >
                            Çözümü Birlikte <br /> Tasarlayalım.
                        </motion.h1>
                    </div>
                    <p className="text-slate-400 text-lg max-w-md text-right hidden md:block">
                        Ekibimiz teknik danışmanlık ve fizibilite çalışmaları sağlamak için hazır.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Column: Form (Span 7) */}
                    <div className="lg:col-span-7">
                        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                <MessageSquare className="text-brand-orange" /> Proje Sorgusu
                            </h3>

                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-mono uppercase text-slate-500 mb-2 group-focus-within:text-brand-orange transition-colors">Ad Soyad</label>
                                        <input type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-white focus:border-brand-orange focus:outline-none transition-all placeholder:text-slate-700" placeholder="John Doe" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-mono uppercase text-slate-500 mb-2 group-focus-within:text-brand-orange transition-colors">Şirket</label>
                                        <input type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-white focus:border-brand-orange focus:outline-none transition-all placeholder:text-slate-700" placeholder="Organization Ltd." />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-mono uppercase text-slate-500 mb-2 group-focus-within:text-brand-orange transition-colors">E-posta Adresi</label>
                                    <input type="email" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-white focus:border-brand-orange focus:outline-none transition-all placeholder:text-slate-700" placeholder="john@example.com" />
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-mono uppercase text-slate-500 mb-2 group-focus-within:text-brand-orange transition-colors">Departman</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {['Satış', 'Destek', 'Mühendislik', 'Diğer'].map((opt) => (
                                            <label key={opt} className="cursor-pointer">
                                                <input type="radio" name="dept" className="peer sr-only" />
                                                <div className="text-center py-3 rounded-lg border border-slate-800 bg-slate-900/80 backdrop-blur-md text-slate-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:font-bold transition-all hover:bg-slate-900/50">
                                                    {opt}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-xs font-mono uppercase text-slate-500 mb-2 group-focus-within:text-brand-orange transition-colors">Proje Detayları</label>
                                    <textarea rows={5} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-white focus:border-brand-orange focus:outline-none transition-all placeholder:text-slate-700" placeholder="Gereksinimlerinizi tanımlayın..."></textarea>
                                </div>

                                <button type="button" className="w-full bg-brand-orange text-white font-bold py-5 rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-brand-orange/20">
                                    MESAJ GÖNDER <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Info (Span 5) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Main HQ Card */}
                        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-800 pb-4">Genel Merkez</h4>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Bursa, Türkiye</p>
                                        <p className="text-slate-500 text-sm leading-relaxed">Nilüfer Org. San. Böl.,<br />123 Otomasyon Cad, 16000</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">+90 224 555 0100</p>
                                        <p className="text-slate-500 text-sm">Pzt-Cum, 09:00 - 18:00</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white shrink-0">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">info@mkg.com</p>
                                        <p className="text-slate-500 text-sm">Genel Sorular</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Preview */}
                        <div className="h-64 rounded-3xl overflow-hidden border border-slate-800 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074"
                                alt="Map"
                                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-brand-orange p-3 rounded-full shadow-xl shadow-brand-orange/30 animate-bounce">
                                    <MapPin className="text-white" size={24} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Technical Support Strip */}
            <div className="w-full bg-[#0a0a0a]/90 backdrop-blur-md border-t border-slate-800 py-8 sm:py-12 mb-0">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
                    <div className="flex items-center gap-6">
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-full text-brand-orange">
                            <Headphones size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Mevcut Müşteri misiniz?</h3>
                            <p className="text-slate-500 text-sm">Acil durum destek veya SLA sorguları için direkt hattı kullanın.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
                        <button className="px-4 sm:px-6 py-3 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:border-white transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                            <ShieldAlert size={16} /> ACİL DURUM HATTI
                        </button>
                        <button className="px-6 py-3 bg-slate-800 rounded-lg text-white hover:bg-slate-700 transition-colors">
                            MÜŞTERİ PORTALI GİRİŞİ
                        </button>
                    </div>
                </div>
            </div>

            {/* --- BOLD ORANGE CTA: SEE OUR IMPACT --- */}
            <section className="w-full py-16 sm:py-24 bg-brand-orange relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>

                <NavLink to="/projects" className="block relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="font-mono text-black/60 font-bold tracking-widest mb-4">HENÜZ EMİN DEĞİL MİSİNİZ?</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-500">
                            ETKİMİZİ GÖRÜN
                        </h2>
                        <div className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold">
                            BAŞARI HİKAYELERİNİ İNCELE <ArrowRight size={18} />
                        </div>
                    </div>
                </NavLink>
            </section>

        </div>
    );
};

export default ContactPage;