import React from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Printer, Bookmark, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        navigate('/blog');
        return null;
    }

    const relatedPosts = blogPosts
        .filter(p => p.id !== post.id && p.tags.some(t => post.tags.includes(t)))
        .slice(0, 3);

    // SEO için tarih formatını ISO 8601'e çevir (dd.mm.yyyy -> yyyy-mm-dd)
    const formatDateToISO = (dateStr: string): string => {
        const [day, month, year] = dateStr.split('.');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    // Article Schema.org JSON-LD
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.metaDescription || post.excerpt,
        "image": post.ogImage || post.image,
        "datePublished": formatDateToISO(post.date),
        "dateModified": formatDateToISO(post.date),
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://mkgelektromekanik.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "MKG Elektromekanik Otomasyon",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mkgelektromekanik.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://mkgelektromekanik.com/blog/${post.slug}`
        },
        "keywords": post.keywords?.join(', ') || post.tags.join(', '),
        "articleSection": post.category || "Teknoloji",
        "wordCount": post.content.split(' ').length,
        "inLanguage": "tr-TR"
    };

    return (
        <>
            {/* SEO Meta Tags */}
            <SEOHead
                title={`${post.title} | MKG Elektromekanik Blog`}
                description={post.metaDescription || post.excerpt}
                keywords={post.keywords?.join(', ') || post.tags.join(', ')}
                image={post.ogImage || post.image}
                type="article"
                author={post.author}
                publishedTime={formatDateToISO(post.date)}
                modifiedTime={formatDateToISO(post.date)}
                canonical={`/blog/${post.slug}`}
                schema={articleSchema}
            />
        <div className="w-full bg-[#050505] min-h-screen relative z-[999] text-white">
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
                    src={post.image}
                    className="w-full h-full object-cover opacity-60"
                    alt={post.title}
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
                                {post.category}
                            </span>
                            <span className="font-mono text-gray-400 text-[10px] sm:text-xs tracking-widest uppercase border border-white/10 px-2 py-1 rounded backdrop-blur-sm">
                                {post.readTime}
                            </span>
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl sm:text-[7vw] font-bold tracking-tighter leading-[0.95] mb-8 sm:mb-12 mix-blend-screen text-white break-words"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-8"
                        >
                            <div>
                                <span className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">Yazar</span>
                                <span className="text-xl sm:text-2xl font-light font-mono text-brand-orange">{post.author}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">Tarih</span>
                                <span className="text-xl sm:text-2xl font-light font-mono text-brand-orange">{post.date}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">Okuma</span>
                                <span className="text-xl sm:text-2xl font-light font-mono text-brand-orange">{post.readTime}</span>
                            </div>
                            <div>
                                <span className="block text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">Kategori</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="w-2 h-2 rounded-full animate-pulse bg-brand-orange shadow-[0_0_10px_#ff3b00]"></span>
                                    <span className="text-xs sm:text-sm font-bold tracking-wider">{post.category.toUpperCase()}</span>
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
                        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-6 block">01 — Makale</span>
                        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 text-white leading-tight">
                            {post.excerpt}
                        </h2>
                        <div
                            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed prose prose-invert max-w-none
                                [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-white
                                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-white
                                [&>ul]:my-6 [&>ul]:space-y-3 [&>ul]:pl-6
                                [&>ol]:my-6 [&>ol]:space-y-3 [&>ol]:pl-6
                                [&_li]:text-gray-300
                                [&_li::marker]:text-brand-orange
                                [&_strong]:text-white
                                [&_a]:text-brand-orange hover:[&_a]:underline
                                [&>blockquote]:border-l-4 [&>blockquote]:border-brand-orange [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:bg-zinc-900/50 [&>blockquote]:italic
                                [&_code]:text-brand-orange [&_code]:bg-zinc-900 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* ETIKETLER */}
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto border-t border-white/5">
                <div className="flex flex-wrap gap-4 justify-center">
                    {post.tags.map((tag, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-mono text-sm hover:bg-white/10 transition-colors cursor-default"
                        >
                            #{tag}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FULL WIDTH IMAGE */}
            <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden relative">
                <img
                    src={post.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={post.title}
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
                    onClick={() => navigate('/blog')}
                    className="text-gray-500 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                >
                    <span>←</span><span className="hidden sm:inline"> Tüm Makaleler</span>
                </button>
                {relatedPosts.length > 0 && (
                    <NavLink
                        to={`/blog/${relatedPosts[0].slug}`}
                        className="text-gray-500 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                    >
                        <span className="hidden sm:inline">Sonraki Makale </span><span>→</span>
                    </NavLink>
                )}
            </div>

        </div>
        </>
    );
};

export default BlogPostPage;
