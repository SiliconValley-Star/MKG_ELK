import React from 'react';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Hizmet Şartları - MKG Elektromekanik Otomasyon"
        description="MKG Elektromekanik hizmet şartları ve kullanım koşulları. Web sitesi kullanım kuralları, fikri mülkiyet hakları ve sorumluluk sınırlamaları."
        keywords="hizmet şartları, kullanım koşulları, MKG elektromekanik şartlar, yasal bildirim"
        type="website"
        noindex={true}
      />
      <div className="min-h-screen bg-transparent pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-slate-800">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 break-words">Hizmet Şartları</h1>
          <p className="text-slate-400 text-sm sm:text-base">Sürüm 1.2</p>
        </div>

        <div className="prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none text-slate-300 [&>p]:break-words">
          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-6 sm:mt-8 mb-3 sm:mb-4 break-words">1. Şartların Kabulü</h3>
          <p>
            Bu Hizmet Şartları, şahsen veya bir kuruluş adına ("siz") ve MKG Elektromekanik ("biz", "bize" veya "bizim") arasında, web sitemize erişiminiz ve kullanımınızla ilgili yasal olarak bağlayıcı bir sözleşme teşkil eder.
          </p>

          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">2. Fikri Mülkiyet Hakları</h3>
          <p>
            Aksi belirtilmedikçe, Site bizim mülkiyetimizdedir ve Site üzerindeki tüm kaynak kodu, veritabanları, işlevsellik, yazılım, web sitesi tasarımları, ses, video, metin, fotoğraflar ve grafikler (topluca "İçerik") ve bunlarda yer alan ticari markalar, hizmet markaları ve logolar ("Markalar") bize aittir veya tarafımızca kontrol edilmektedir veya bize lisanslanmıştır ve telif hakkı ve ticari marka yasaları ile korunmaktadır.
          </p>

          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">3. Kullanıcı Beyanları</h3>
          <p>
            Siteyi kullanarak şunları beyan ve garanti edersiniz: (1) yasal ehliyete sahipsiniz ve bu Hizmet Şartlarına uymayı kabul ediyorsunuz; (2) ikamet ettiğiniz yargı bölgesinde reşit olmayan biri değilsiniz; (3) Siteye bot, komut dosyası veya başka bir şekilde otomatik veya insan dışı yollarla erişmeyeceksiniz.
          </p>

          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">4. Sorumluluk Sınırlamaları</h3>
          <p>
            Hiçbir durumda biz veya yöneticilerimiz, çalışanlarımız veya acentelerimiz, kar kaybı, gelir kaybı, veri kaybı veya sitenin kullanımından kaynaklanan diğer zararlar dahil olmak üzere herhangi bir doğrudan, dolaylı, sonuçsal, örnek niteliğinde, arızi, özel veya cezai zararlardan dolayı size veya herhangi bir üçüncü tarafa karşı sorumlu olmayacağız.
          </p>

          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-10 sm:mt-12 mb-3 sm:mb-4 break-words">5. Tabi Olunan Hukuk</h3>
          <p>
            Bu Şartlar Türkiye yasalarına tabi olacak ve bunlara göre tanımlanacaktır. MKG Elektromekanik ve siz, bu şartlarla bağlantılı olarak ortaya çıkabilecek herhangi bir anlaşmazlığı çözmek için Türkiye mahkemelerinin münhasır yargı yetkisine sahip olduğunu geri alınamaz bir şekilde kabul edersiniz.
          </p>
        </div>
      </div>

        {/* CTA SECTION */}
        <CTASection />
      </div>
    </>
  );
};

export default TermsPage;