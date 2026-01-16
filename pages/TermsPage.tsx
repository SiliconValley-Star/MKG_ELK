import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent pt-32 px-6 pb-24">
      <div className="max-w-3xl mx-auto">

        <div className="mb-12 pb-8 border-b border-slate-800">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Hizmet Şartları</h1>
          <p className="text-slate-400">Sürüm 1.2</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <h3 className="text-white font-bold text-2xl mt-8 mb-4">1. Şartların Kabulü</h3>
          <p>
            Bu Hizmet Şartları, şahsen veya bir kuruluş adına ("siz") ve MKG Elektromekanik ("biz", "bize" veya "bizim") arasında, web sitemize erişiminiz ve kullanımınızla ilgili yasal olarak bağlayıcı bir sözleşme teşkil eder.
          </p>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4">2. Fikri Mülkiyet Hakları</h3>
          <p>
            Aksi belirtilmedikçe, Site bizim mülkiyetimizdedir ve Site üzerindeki tüm kaynak kodu, veritabanları, işlevsellik, yazılım, web sitesi tasarımları, ses, video, metin, fotoğraflar ve grafikler (topluca "İçerik") ve bunlarda yer alan ticari markalar, hizmet markaları ve logolar ("Markalar") bize aittir veya tarafımızca kontrol edilmektedir veya bize lisanslanmıştır ve telif hakkı ve ticari marka yasaları ile korunmaktadır.
          </p>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4">3. Kullanıcı Beyanları</h3>
          <p>
            Siteyi kullanarak şunları beyan ve garanti edersiniz: (1) yasal ehliyete sahipsiniz ve bu Hizmet Şartlarına uymayı kabul ediyorsunuz; (2) ikamet ettiğiniz yargı bölgesinde reşit olmayan biri değilsiniz; (3) Siteye bot, komut dosyası veya başka bir şekilde otomatik veya insan dışı yollarla erişmeyeceksiniz.
          </p>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4">4. Sorumluluk Sınırlamaları</h3>
          <p>
            Hiçbir durumda biz veya yöneticilerimiz, çalışanlarımız veya acentelerimiz, kar kaybı, gelir kaybı, veri kaybı veya sitenin kullanımından kaynaklanan diğer zararlar dahil olmak üzere herhangi bir doğrudan, dolaylı, sonuçsal, örnek niteliğinde, arızi, özel veya cezai zararlardan dolayı size veya herhangi bir üçüncü tarafa karşı sorumlu olmayacağız.
          </p>

          <h3 className="text-white font-bold text-2xl mt-12 mb-4">5. Tabi Olunan Hukuk</h3>
          <p>
            Bu Şartlar Türkiye yasalarına tabi olacak ve bunlara göre tanımlanacaktır. MKG Elektromekanik ve siz, bu şartlarla bağlantılı olarak ortaya çıkabilecek herhangi bir anlaşmazlığı çözmek için Türkiye mahkemelerinin münhasır yargı yetkisine sahip olduğunu geri alınamaz bir şekilde kabul edersiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;