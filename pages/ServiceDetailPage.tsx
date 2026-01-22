import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../data/servicesData';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const service = SERVICES_DATA.find(s => s.slug === slug);

    if (!service) {
        navigate('/hizmetler');
        return null;
    }

    // Service Schema.org JSON-LD
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.metaDescription || service.description,
        "image": `https://mkgelektromekanik.com${service.image}`,
        "url": `https://mkgelektromekanik.com/services/${service.slug}`,
        "serviceType": service.category,
        "provider": {
            "@type": "Organization",
            "name": "MKG Elektromekanik Otomasyon",
            "url": "https://mkgelektromekanik.com",
            "logo": "https://mkgelektromekanik.com/logo.png",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
            }
        },
        "areaServed": {
            "@type": "Country",
            "name": "Turkey"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": service.title,
            "itemListElement": service.features?.map((feature, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": feature
                }
            })) || []
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "1"
        }
    };

    return (
        <div className="w-full bg-[#050505] min-h-screen relative z-[999] text-white">
            <SEOHead
                title={`${service.title} | MKG Elektromekanik Hizmetler`}
                description={service.metaDescription || service.description}
                keywords={service.keywords?.join(', ')}
                image={service.ogImage || service.image}
                type="website"
                schema={serviceSchema}
            />
            {/* CLOSE BUTTON */}
            <button
                onClick={() => navigate(-1)}
                className="fixed top-32 right-4 sm:top-32 sm:right-8 z-[1000] w-10 h-10 sm:w-12 sm:h-12 border border-white/20 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md hover:bg-white hover:text-black transition-all group"
            >
                <span className="group-hover:rotate-90 transition-transform duration-300 text-base sm:text-lg">✕</span>
            </button>

            {/* HERO SECTION */}
            <div className="relative w-full h-screen">
                <img
                    src={service.image}
                    className="w-full h-full object-cover opacity-60"
                    alt={service.title}
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:40px_40px] pointer-events-none"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-16">
                    <div className="max-w-[1920px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap gap-4 mb-6 sm:mb-8"
                        >
                            <span className="font-mono text-brand-orange text-[10px] sm:text-xs tracking-widest uppercase border border-brand-orange/30 px-2 py-1 rounded bg-brand-orange/10">
                                {service.category}
                            </span>
                            <span className="font-mono text-gray-400 text-[10px] sm:text-xs tracking-widest uppercase border border-white/10 px-2 py-1 rounded backdrop-blur-sm">
                                {service.id}
                            </span>
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl sm:text-[7vw] font-bold tracking-tighter leading-[0.95] mb-8 sm:mb-12 mix-blend-screen text-white break-words"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-8"
                        >
                            <div>
                                <span className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">Kapsam</span>
                                <span className="text-xl sm:text-2xl font-light font-mono text-brand-orange">{service.scope}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">Süre</span>
                                <span className="text-xl sm:text-2xl font-light font-mono text-brand-orange">{service.deployment_time}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">Alan</span>
                                <span className="text-xl sm:text-2xl font-light font-mono text-brand-orange">{service.capacity_level}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">Durum</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className={`w-2 h-2 rounded-full animate-pulse ${service.status === 'AKTİF' ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : service.status === 'PREMIUM' ? 'bg-orange-500 shadow-[0_0_10px_#f97316]' : 'bg-blue-500 shadow-[0_0_10px_#3b82f6]'}`}></span>
                                    <span className="text-xs sm:text-sm font-bold tracking-wider">{service.status}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 md:py-32">
                <div className="grid grid-cols-1 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-6 block">01 — Hizmet Detayı</span>
                        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 text-white leading-tight">
                            {service.description}
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-12 whitespace-pre-line">
                            {service.full_details}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* TEKNİK ÖZELLİKLER VE KAPSAM */}
            <section className="bg-[#0A0A0A] py-20 border-t border-white/5">
                <div className="px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold mb-12 flex items-center gap-4"
                    >
                        <span className="w-8 h-[2px] bg-brand-orange"></span>
                        Hizmet Kapsamı ve Özellikler
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.features?.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="p-6 bg-[#111] rounded-lg border border-white/5 hover:border-brand-orange/50 transition-colors group"
                            >
                                <div className="text-brand-orange mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    ✦
                                </div>
                                <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                                    {feature}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEKNİK SPEKTLER */}
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
                <div className="flex flex-wrap gap-4 justify-center">
                    {service.specs.map((spec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-mono text-sm hover:bg-white/10 transition-colors cursor-default"
                        >
                            {spec}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FULL WIDTH IMAGE */}
            <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden relative">
                <img
                    src={service.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={service.title}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[15vw] font-bold text-white/5 tracking-tighter select-none">MKG</span>
                </div>
            </div>

            {/* CTA */}
            <CTASection />

            {/* FOOTER NAV */}
            <div className="border-t border-white/10 bg-black py-8 px-6 md:px-12 flex justify-between items-center">
                <button
                    onClick={() => navigate('/hizmetler')}
                    className="text-gray-500 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                >
                    <span>←</span><span className="hidden sm:inline"> Tüm Hizmetler</span>
                </button>
            </div>

        </div>
    );
};

export default ServiceDetailPage;