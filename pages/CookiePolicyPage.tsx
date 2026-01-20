import React from 'react';
import { Cookie, Info } from 'lucide-react';
import CTASection from '../components/CTASection';

const CookiePolicyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
            <div className="max-w-3xl mx-auto">

                <div className="mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-slate-800">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 break-words">Çerez Politikası</h1>
                    <p className="text-slate-400 text-sm sm:text-base">Son Güncelleme: 24 Ekim 2023</p>
                </div>

                <div className="prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none text-slate-300 [&>p]:break-words [&>ul]:break-words [&>li]:break-words">
                    <p className="lead text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8">
                        MKG Elektromekanik ("biz", "bize" veya "bizim"), web sitemizdeki deneyiminizi geliştirmek için çerezleri ve benzer izleme teknolojilerini kullanır.
                    </p>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">1. Çerezler Nedir?</h3>
                    <p>
                        Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza yerleştirilen küçük metin dosyalarıdır. Web sitelerinin daha verimli çalışmasını sağlamak ve site sahiplerine bilgi sağlamak için yaygın olarak kullanılırlar.
                    </p>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">2. Çerezleri Nasıl Kullanıyoruz</h3>
                    <p>
                        Çerezleri aşağıdaki amaçlar için kullanıyoruz:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-6 sm:mb-8">
                        <li><strong>Zorunlu Çerezler:</strong> Web sitesinin çalışması için gereklidir (örneğin, güvenlik, ağ yönetimi).</li>
                        <li><strong>Performans Çerezleri:</strong> Ziyaretçilerin web sitemizi nasıl kullandığını analiz etmek için (örneğin, Google Analytics).</li>
                        <li><strong>İşlevsel Çerezler:</strong> Tercihlerinizi hatırlamak için (örneğin, dil seçimi).</li>
                    </ul>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-5 sm:mb-6 break-words">3. Kullandığımız Çerezler</h3>
                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <table className="w-full text-left border-collapse border border-slate-700 text-xs sm:text-sm font-mono min-w-[600px]">
                            <thead className="bg-slate-900">
                                <tr>
                                    <th className="border border-slate-700 p-2 sm:p-3 md:p-4 text-white">İsim</th>
                                    <th className="border border-slate-700 p-2 sm:p-3 md:p-4 text-white">Tür</th>
                                    <th className="border border-slate-700 p-2 sm:p-3 md:p-4 text-white">Süre</th>
                                    <th className="border border-slate-700 p-2 sm:p-3 md:p-4 text-white">Amaç</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">_session_id</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">Zorunlu</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">Oturum</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">Kullanıcı oturum durumunu korur.</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">_ga</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">Analitik</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">2 yıl</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">Google Analytics tarafından kullanıcıları ayırt etmek için kullanılır.</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">cookie_consent</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">İşlevsel</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">1 yıl</td>
                                    <td className="border border-slate-700 p-2 sm:p-3 md:p-4">Çerez izni tercihlerinizi saklar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">4. Çerezleri Yönetme</h3>
                    <p>
                        Çoğu web tarayıcısı, ayar tercihleri aracılığıyla çerezleri kontrol etmenize izin verir. Ancak, web sitelerinin çerez ayarlama yeteneğini sınırlarsanız, genel kullanıcı deneyiminizi kötüleştirebilirsiniz.
                    </p>
                </div>

            </div>

            {/* CTA SECTION */}
            <CTASection />
        </div>
    );
};

export default CookiePolicyPage;