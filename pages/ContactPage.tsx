import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Globe, Clock, Terminal, Briefcase, Headphones, FileText, ArrowUpRight, Copy } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { sendContactEmail } from '../services/emailService';
import { useIsMobile } from '../hooks/useIsMobile';
import CTASection from '../components/CTASection';

const ContactPage: React.FC = () => {
    const isMobile = useIsMobile();
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const { values, errors, isSubmitting, submitSuccess, handleChange, handleBlur, handleSubmit } = useForm(
        {
            name: '',
            company: '',
            email: '',
            message: '',
        },
        {
            name: {
                required: true,
                minLength: 2,
                message: 'Lütfen adınızı ve soyadınızı girin',
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Geçerli bir e-posta adresi girin',
            },
            message: {
                required: true,
                minLength: 10,
                message: 'Lütfen en az 10 karakter uzunluğunda bir mesaj girin',
            },
        },
        async (formData) => {
            await sendContactEmail({
                ...formData,
                department: selectedDepartment,
            });
        }
    );

    return (
        <div className="bg-transparent min-h-screen pt-32 px-6 pb-24 flex flex-col">
            
            {/* --- HEADER --- */}
            <div className="max-w-[1920px] mx-auto w-full mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 bg-brand-orange rounded-full ${isMobile ? '' : 'animate-pulse'}`}></span>
                        <span className="font-mono text-xs text-brand-orange tracking-widest uppercase">Sistem Aktif</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-bold text-white">İletişim</h1>
                </div>
                <p className="text-zinc-400 max-w-xl text-right text-lg hidden md:block">
                    Mühendislik ve ticari departmanlarımıza doğrudan ulaşın. <br/>
                    Protokolü başlatmak için aşağıdan bir kanal seçin.
                </p>
            </div>

            {/* --- BENTO GRID LAYOUT --- */}
            <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {/* BLOCK 1: GLOBAL MAP VISUAL (Spans 2 cols, 2 rows on large) */}
                <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-2 bg-zinc-800 border border-white/10 relative overflow-hidden group min-h-[400px]">
                    {/* Map Graphic */}
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center opacity-100 invert brightness-[1000] saturate-0 contrast-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/20 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-6 left-6">
                        <div className="flex items-center gap-2 mb-1">
                            <Globe size={16} className="text-white"/>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Küresel Operasyonlar</span>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500">GERÇEK ZAMANLI AKTİF NOKTALAR</div>
                    </div>

                    {/* Map Pins */}
                    <div className="absolute top-[35%] left-[55%] flex flex-col items-center group/pin cursor-pointer">
                        {!isMobile && <div className="w-3 h-3 bg-brand-orange rounded-full animate-ping absolute"></div>}
                        <div className="w-3 h-3 bg-brand-orange rounded-full relative z-10 border border-black"></div>
                        <div className="mt-2 bg-black/80 backdrop-blur border border-white/20 px-3 py-1 rounded text-[10px] text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                            <span className="text-brand-orange font-bold">MERKEZ:</span> Bursa, TR
                        </div>
                    </div>

                    <div className="absolute top-[28%] left-[51%] flex flex-col items-center group/pin cursor-pointer">
                        <div className="w-2 h-2 bg-white rounded-full relative z-10"></div>
                        <div className="mt-2 bg-black/80 backdrop-blur border border-white/20 px-3 py-1 rounded text-[10px] text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                            <span className="text-zinc-400 font-bold">Ar-Ge:</span> Berlin, DE
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-white/10 pt-4">
                        <div>
                            <div className="text-2xl font-bold text-white">Genel Merkez</div>
                            <div className="text-sm text-zinc-400">Nilüfer Organize Sanayi Bölgesi</div>
                            <div className="text-sm text-zinc-500 font-mono mt-1">Bursa / TÜRKİYE</div>
                        </div>
                        <div className="text-right hidden sm:block">
                            <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Şu Anki Saat</div>
                            <div className="text-xl font-mono text-brand-orange flex items-center gap-2 justify-end">
                                {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', hour12: false })} <Clock size={16}/>
                            </div>
                            <div className="text-xs text-zinc-600">GMT+3</div>
                        </div>
                    </div>
                </div>

                {/* BLOCK 2: NEW BUSINESS (Sales) */}
                <div className="col-span-1 md:col-span-1 bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-orange/50 transition-colors">
                    <div>
                        <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                            <Briefcase size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Yeni Projeler</h3>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                            Teklif talepleri, fizibilite çalışmaları ve otomasyon & enerji konusunda ortaklık sorguları için.
                        </p>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Direkt Hat</div>
                        <a href="mailto:satis@mkg.com" className="text-lg text-white font-mono hover:text-brand-orange transition-colors flex items-center gap-2">
                            satis@mkg.com <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                {/* BLOCK 3: TECHNICAL SUPPORT */}
                <div className="col-span-1 md:col-span-1 bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-orange/50 transition-colors">
                    <div>
                        <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                            <Headphones size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Destek & SLA</h3>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                            Mevcut müşteriler için 7/24 teknik yardım ve kritik duruş bildirimleri.
                        </p>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Öncelikli Kanal</div>
                        <a href="mailto:destek@mkg.com" className="text-lg text-white font-mono hover:text-brand-orange transition-colors flex items-center gap-2">
                            destek@mkg.com <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                {/* BLOCK 4: CONTACT FORM (The Terminal) */}
                <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-2 bg-black border border-white/10 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Terminal size={200} className="text-zinc-500" strokeWidth={0.5} />
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-brand-orange"></span>
                            Talep Başlat
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {submitSuccess && (
                                <motion.div
                                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={isMobile ? { duration: 0.01 } : { duration: 0.3 }}
                                    className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-500 text-sm"
                                >
                                    ✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                                </motion.div>
                            )}

                            {errors.submit && (
                                <motion.div
                                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={isMobile ? { duration: 0.01 } : { duration: 0.3 }}
                                    className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-500 text-sm"
                                >
                                    {errors.submit}
                                </motion.div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2">Kimlik / Ad Soyad</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full bg-zinc-900 border text-white p-4 focus:border-brand-orange focus:outline-none focus:bg-zinc-900/80 transition-all font-mono text-sm ${
                                            errors.name ? 'border-red-500' : 'border-zinc-800'
                                        }`}
                                        placeholder="TAM_ADINIZ_SOYADINIZ" 
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div className="group">
                                    <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2">Organizasyon</label>
                                    <input 
                                        type="text"
                                        name="company"
                                        value={values.company}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-zinc-800 text-white p-4 focus:border-brand-orange focus:outline-none focus:bg-zinc-900/80 transition-all font-mono text-sm"
                                        placeholder="ŞIRKET_LTD" 
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2">Dönüş Adresi / E-posta</label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full bg-zinc-900 border text-white p-4 focus:border-brand-orange focus:outline-none focus:bg-zinc-900/80 transition-all font-mono text-sm ${
                                        errors.email ? 'border-red-500' : 'border-zinc-800'
                                    }`}
                                    placeholder="kullanici@domain.com" 
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2">Konu Sektörü</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {['Otomasyon', 'Enerji', 'Yazılım', 'Genel'].map((opt) => (
                                        <label key={opt} className="cursor-pointer">
                                            <input 
                                                type="radio" 
                                                name="topic"
                                                value={opt}
                                                checked={selectedDepartment === opt}
                                                onChange={(e) => setSelectedDepartment(e.target.value)}
                                                className="peer sr-only" 
                                            />
                                            <div className="text-center py-3 border border-zinc-800 bg-zinc-900 text-zinc-500 text-xs font-mono uppercase peer-checked:bg-white peer-checked:text-black peer-checked:font-bold transition-all hover:bg-zinc-800">
                                                {opt}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-mono uppercase text-zinc-500 mb-2">İletim Verisi</label>
                                <textarea 
                                    rows={4}
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full bg-zinc-900 border text-white p-4 focus:border-brand-orange focus:outline-none focus:bg-zinc-900/80 transition-all font-mono text-sm ${
                                        errors.message ? 'border-red-500' : 'border-zinc-800'
                                    }`}
                                    placeholder="Proje parametrelerini veya özel gereksinimlerinizi açıklayın..."
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand-orange text-black font-bold py-4 hover:bg-white transition-all duration-300 flex justify-center items-center gap-2 uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        {isMobile ? (
                                            <Send size={16} />
                                        ) : (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            >
                                                <Send size={16} />
                                            </motion.div>
                                        )}
                                        VERİ İLETİLİYOR...
                                    </>
                                ) : (
                                    <>
                                        VERİYİ İLET <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* BLOCK 5: CAREERS (HR) */}
                <div className="col-span-1 md:col-span-1 bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-orange/50 transition-colors">
                    <div>
                        <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                            <FileText size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Kariyer</h3>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                            Öncü kadromuz katılın. CV ve portföyünüzü İK departmanımıza gönderin.
                        </p>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">İnsan Kaynakları</div>
                        <a href="mailto:kariyer@mkg.com" className="text-lg text-white font-mono hover:text-brand-orange transition-colors flex items-center gap-2">
                            kariyer@mkg.com <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                {/* BLOCK 6: GENERAL INFO */}
                <div className="col-span-1 md:col-span-1 bg-zinc-900 border border-white/10 p-8 flex flex-col justify-between group hover:border-brand-orange/50 transition-colors">
                    <div>
                        <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                            <Phone size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Santral</h3>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                            Genel sorular ve resepsiyon. 09:00 - 18:00 (GMT+3) saatleri arası müsait.
                        </p>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Merkez Hat</div>
                        <a href="tel:+902245550100" className="text-lg text-white font-mono hover:text-brand-orange transition-colors flex items-center gap-2">
                            +90 224 555 0100
                        </a>
                    </div>
                </div>

                {/* BLOCK 7: FAQ LINK (Full Width Bottom) */}
                <NavLink to="/faq" className="col-span-1 md:col-span-3 lg:col-span-4 bg-zinc-950 border border-white/10 p-6 flex items-center justify-between hover:bg-zinc-900 transition-colors group">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-zinc-900 rounded-lg text-brand-orange border border-zinc-800"><Copy size={20}/></div>
                        <div>
                            <h4 className="text-white font-bold">Genel sorularınız mı var?</h4>
                            <p className="text-xs text-zinc-500">Standart protokoller için bilgi tabanımıza erişin.</p>
                        </div>
                    </div>
                    <div className="text-xs font-mono text-brand-orange uppercase flex items-center gap-2">
                        Veritabanını Aç <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                    </div>
                </NavLink>

            </div>

            {/* CTA SECTION */}
            <CTASection />
        </div>
    );
};

export default ContactPage;