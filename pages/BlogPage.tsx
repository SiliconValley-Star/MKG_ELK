import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Filter logic
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
        return matchesSearch && matchesTag;
    });

    // Extract all unique tags
    const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

    return (
        <div className="min-h-screen bg-transparent pt-32 px-6 flex flex-col">
            <div className="max-w-7xl mx-auto w-full mb-32 flex-grow">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                    >
                        MKG <span className="text-slate-600">İçgörüleri</span>
                    </motion.h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        Endüstriyel otomasyon, dijital dönüşüm ve mühendislik dünyasından en son haberler ve teknik makaleler.
                    </p>

                    {/* Search & Filter Bar */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
                        <div className="relative w-full md:w-2/3">
                            <input
                                type="text"
                                placeholder="Makale ara..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-slate-900/50 backdrop-blur-md border border-slate-700 rounded-full py-3 px-6 pl-12 text-white placeholder:text-slate-500 focus:border-brand-orange focus:outline-none transition-colors"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        </div>

                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                            <button
                                onClick={() => setSelectedTag(null)}
                                className={`px-4 py-3 rounded-full text-sm font-medium whitespace-nowrap border transition-all ${!selectedTag ? 'bg-white text-black border-white' : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500'}`}
                            >
                                Hepsi
                            </button>
                            {allTags.slice(0, 4).map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                    className={`px-4 py-3 rounded-full text-sm font-medium whitespace-nowrap border transition-all ${tag === selectedTag ? 'bg-brand-orange text-white border-brand-orange' : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredPosts.map((post) => (
                        <NavLink
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            className="block"
                        >
                            <article
                                className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden group hover:border-brand-orange/50 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 flex flex-col h-full cursor-pointer will-change-transform"
                            >
                                {/* Image - Clickable */}
                                <div className="h-48 sm:h-52 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                        {post.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] font-bold bg-black/70 text-brand-orange px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                                                {tag.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-3 right-3 text-xs font-mono text-white/70 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                        {post.readTime}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-mono">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="w-1 h-1 bg-slate-600 rounded-full" />
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                    </div>

                                    <h2 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-brand-orange transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange group-hover:translate-x-1 transition-transform mt-auto">
                                        DEVAMINI OKU <ArrowRight size={16} />
                                    </div>
                                </div>
                            </article>
                        </NavLink>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-500">Aradığınız kriterlere uygun makale bulunamadı.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setSelectedTag(null); }}
                            className="mt-4 text-brand-orange hover:underline"
                        >
                            Filtreleri Temizle
                        </button>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <section className="w-full py-16 bg-brand-orange relative overflow-hidden group rounded-3xl mb-12">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
                <div className="relative z-10 text-center px-4">
                    <h2 className="text-3xl font-bold text-white mb-4">E-Bültenimize Abone Olun</h2>
                    <p className="text-black/70 max-w-lg mx-auto mb-8 font-medium">
                        Teknoloji trendlerini ve mühendislik makalelerini doğrudan e-posta kutunuza alın.
                    </p>
                    <div className="flex max-w-md mx-auto gap-2">
                        <input type="email" placeholder="E-posta adresiniz" className="flex-grow bg-white border-0 rounded-lg px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none" />
                        <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">KAYIT OL</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
