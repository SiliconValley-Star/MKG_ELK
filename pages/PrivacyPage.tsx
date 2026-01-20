import React from 'react';
import CTASection from '../components/CTASection';

const PrivacyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-transparent pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
            <div className="max-w-3xl mx-auto">

                <div className="mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-slate-800">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 break-words">Gizlilik Politikası</h1>
                    <p className="text-slate-400 text-sm sm:text-base">Yürürlük Tarihi: 1 Ocak 2024</p>
                </div>

                <div className="prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none text-slate-300 [&>p]:break-words [&>ul]:break-words [&>li]:break-words">
                    <p>
                        MKG Elektromekanik ("Şirket", "biz"), gizliliğinizi korumayı taahhüt eder. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar.
                    </p>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">1. Veri Toplama</h3>
                    <p>
                        Hakkınızda çeşitli şekillerde bilgi toplayabiliriz. Site üzerinde toplayabileceğimiz bilgiler şunları içerir:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Kişisel Veriler:</strong> İletişim formunu doldurduğunuzda bize gönüllü olarak verdiğiniz adınız, adresiniz, e-posta adresiniz ve telefon numaranız gibi kişisel olarak tanımlanabilir bilgiler.</li>
                        <li><strong>Türetilmiş Veriler:</strong> Siteye eriştiğinizde sunucularımızın otomatik olarak topladığı, IP adresiniz, tarayıcı türünüz, işletim sisteminiz, erişim süreleriniz ve Siteye erişmeden hemen önce ve sonra görüntülediğiniz sayfalar gibi bilgiler.</li>
                    </ul>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">2. Bilgilerinizin Kullanımı</h3>
                    <p>
                        Hakkınızda doğru bilgilere sahip olmak, size sorunsuz, verimli ve özelleştirilmiş bir deneyim sunmamızı sağlar. Site aracılığıyla hakkınızda toplanan bilgileri özellikle şu amaçlarla kullanabiliriz:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                        <li>Dahili kullanım için anonim istatistiksel veriler ve analizler derlemek.</li>
                        <li>Müşteri hizmetleri taleplerine ve proje sorgularına yanıt vermek.</li>
                        <li>Size bülten göndermek (yalnızca onay verdiyseniz).</li>
                        <li>Hileli işlemleri önlemek, hırsızlığa karşı izlemek ve suç faaliyetlerine karşı korumak.</li>
                    </ul>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">3. Bilgilerinizin İfşası</h3>
                    <p>
                        Kullanıcılara önceden bildirimde bulunmadığımız sürece Kişisel Olarak Tanımlanabilir Bilgilerinizi dış taraflara satmayız, takas etmeyiz veya başka bir şekilde devretmeyiz. Bu, web sitesi barındırma ortaklarını ve web sitemizi işletmemize, işimizi yürütmemize veya kullanıcılarımıza hizmet vermemize yardımcı olan diğer tarafları, bu tarafların bu bilgileri gizli tutmayı kabul etmeleri koşuluyla kapsamaz.
                    </p>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">4. Bilgilerinizin Güvenliği</h3>
                    <p>
                        Kişisel bilgilerinizi korumaya yardımcı olmak için idari, teknik ve fiziksel güvenlik önlemleri kullanıyoruz. Bize sağladığınız kişisel bilgileri güvence altına almak için makul adımlar atmış olsak da, çabalarımıza rağmen hiçbir güvenlik önleminin mükemmel veya aşılamaz olmadığını ve hiçbir veri iletim yönteminin herhangi bir müdahaleye veya diğer kötüye kullanım türlerine karşı garanti edilemeyeceğini lütfen unutmayın.
                    </p>

                    <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">5. İletişim</h3>
                    <p>
                        Bu Gizlilik Politikası hakkında sorularınız veya yorumlarınız varsa, lütfen bizimle iletişime geçin:
                    </p>
                    <address className="not-italic bg-slate-900 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-slate-800 mt-3 sm:mt-4 text-sm sm:text-base break-words">
                        <strong>MKG Elektromekanik</strong><br />
                        Nilüfer Org. San. Böl.<br />
                        Bursa, 16000<br />
                        Türkiye<br />
                        E-posta: legal@mkg.com
                    </address>
                </div>
            </div>

            {/* CTA SECTION */}
            <CTASection />
        </div>
    );
};

export default PrivacyPage;