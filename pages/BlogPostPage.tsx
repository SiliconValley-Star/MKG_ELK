import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin, Copy, Check, BookOpen, ChevronUp } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const post = blogPosts.find(p => p.slug === slug);

    // Scroll progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Makale Bulunamadı</h2>
                    <button onClick={() => navigate('/blog')} className="text-brand-orange hover:underline">
                        Blog Listesine Dön
                    </button>
                </div>
            </div>
        );
    }

    const relatedPosts = blogPosts
        .filter(p => p.id !== post.id && p.tags.some(t => post.tags.includes(t)))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-transparent">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-orange-500 z-50 origin-left"
                style={{ scaleX }}
            />

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-brand-orange text-white rounded-full shadow-lg shadow-brand-orange/30 flex items-center justify-center hover:scale-110 transition-transform"
                >
                    <ChevronUp size={24} />
                </motion.button>
            )}

            {/* Hero Section with Image */}
            <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-slate-950" />

                {/* Back Button - positioned below fixed navbar */}
                <NavLink
                    to="/blog"
                    className="absolute top-24 left-6 md:left-8 z-20 inline-flex items-center gap-2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all shadow-lg"
                >
                    <ArrowLeft size={16} /> Geri
                </NavLink>

                {/* Hero Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20 z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-brand-orange/20 backdrop-blur-sm border border-brand-orange/40 rounded-full text-xs font-mono text-brand-orange uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm font-mono">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <User size={14} />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <Calendar size={14} />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <BookOpen size={14} />
                                <span>{post.readTime} okuma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative bg-slate-950/90 backdrop-blur-lg">
                <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 lg:py-20">

                    {/* Excerpt / Lead Paragraph */}
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-12 border-l-4 border-brand-orange pl-6 italic">
                        {post.excerpt}
                    </p>

                    {/* Article Content */}
                    <article className="
                        prose prose-lg md:prose-xl prose-invert max-w-none
                        prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-headings:mt-12 prose-headings:mb-6
                        prose-h2:text-3xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-4
                        prose-h3:text-2xl prose-h3:text-slate-200
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-strong:font-semibold
                        prose-em:text-slate-200
                        prose-blockquote:border-l-4 prose-blockquote:border-brand-orange prose-blockquote:bg-slate-900/70 prose-blockquote:backdrop-blur-sm prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:text-white prose-blockquote:my-8
                        prose-ul:space-y-3 prose-ol:space-y-3
                        prose-li:text-slate-300 prose-li:leading-relaxed
                        prose-li:marker:text-brand-orange
                        prose-img:rounded-2xl prose-img:shadow-xl
                    ">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>

                    {/* Divider */}
                    <div className="my-16 flex items-center gap-4">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                        <div className="w-2 h-2 bg-brand-orange rounded-full" />
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                    </div>

                    {/* Share Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800">
                        <div className="text-center sm:text-left">
                            <p className="text-white font-bold mb-1">Bu makaleyi paylaşın</p>
                            <p className="text-slate-500 text-sm">Faydalı buldunuz mu? Başkalarının da görmesini sağlayın.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleCopyLink}
                                className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all"
                                title="Linki Kopyala"
                            >
                                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                            </button>
                            <button className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-colors">
                                <Facebook size={18} />
                            </button>
                            <button className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                                <Twitter size={18} />
                            </button>
                            <button className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Author Card */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                        <div className="w-20 h-20 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                            {post.author.charAt(0)}
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-white font-bold text-lg mb-1">{post.author}</p>
                            <p className="text-slate-400 text-sm">MKG Elektromekanik Otomasyon</p>
                            <p className="text-slate-500 text-sm mt-2">Endüstriyel otomasyon ve dijital dönüşüm alanında uzman.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
                <div className="bg-slate-950 py-16 md:py-24 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-1 h-8 bg-brand-orange rounded-full" />
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">İlginizi Çekebilir</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map(rp => (
                                <NavLink key={rp.id} to={`/blog/${rp.slug}`} className="group">
                                    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden h-full flex flex-col hover:border-brand-orange/50 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300">
                                        <div className="h-44 overflow-hidden relative">
                                            <img src={rp.image} alt={rp.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                                        </div>
                                        <div className="p-5 flex-grow flex flex-col">
                                            <div className="text-xs text-slate-500 font-mono mb-2">{rp.date} · {rp.readTime}</div>
                                            <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-2 flex-grow">{rp.title}</h4>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-brand-orange to-orange-600 py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Projelerinizde Size Yardımcı Olalım</h3>
                    <p className="text-white/80 mb-6">Endüstriyel otomasyon ihtiyaçlarınız için uzman ekibimizle iletişime geçin.</p>
                    <NavLink
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all"
                    >
                        İletişime Geçin
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
