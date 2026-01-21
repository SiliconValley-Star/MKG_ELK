import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';

const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'general', label: 'Genel' },
    { id: 'technical', label: 'Teknik & Mühendislik' },
    { id: 'support', label: 'Destek & Bakım' },
    { id: 'pricing', label: 'Fiyatlandırma & Süreç' },
    { id: 'industry', label: 'Sektörel Çözümler' },
    { id: 'project', label: 'Proje Yönetimi' },
    { id: 'quality', label: 'Kalite & Standartlar' }
  ];

  const faqs = {
    general: [
      {
        q: "MKG Elektromekanik Otomasyon ne zaman kuruldu?",
        a: "MKG Elektromekanik Otomasyon, 2015 yılında Mustafa Şensoy tarafından Şensoy Elektrik Grubu bünyesinde kurulmuştur. 10 yılı aşkın deneyimimizle endüstriyel altyapı ve otomasyon çözümlerinde Türkiye'nin öncü firmalarından biriyiz."
      },
      {
        q: "Hangi sektörlere hizmet veriyorsunuz?",
        a: "Finans (VakıfBank), endüstri (Okyanus Alüminyum, Celal Tekstil), otelcilik (Biancho Hotel), gıda (Ardahan Et, Aksa Gıda), sağlık (Estevera Sağlık, Vera Clinic), eğitim (Kültür Üniversitesi, Kültür Koleji) ve konut projeleri (Florya Villaları, Pelican Hill) gibi 13+ farklı sektörde uzmanız."
      },
      {
        q: "Kaç proje tamamladınız?",
        a: "2015'ten bu yana 28 büyük ölçekli proje başarıyla tamamladık. Her proje, endüstriyel mükemmellik ve müşteri memnuniyeti standartlarımızın somut kanıtıdır."
      },
      {
        q: "Anahtar teslim çözüm sunuyor musunuz?",
        a: "Evet. İlk fizibilite çalışması ve elektrik tasarımından (EPLAN), mekanik montaj, yazılım programlama, devreye alma ve sonrası bakım hizmetlerine kadar projenin tüm yaşam döngüsünü yönetiyoruz."
      },
      {
        q: "Ofisleriniz nerede?",
        a: "Ana ofisimiz İstanbul Kağıthane'de DAP Vadisi A Blok'tadır. Türkiye genelinde proje sahalarında ekiplerimiz bulunmaktadır. İletişim: info@mkgelektromekanik.com | +90 530 119 12 77"
      },
      {
        q: "Şensoy Elektrik Grubu ile ilişkiniz nedir?",
        a: "MKG, Şensoy Elektrik Grubu'nun endüstriyel otomasyon ve elektrik taahhüt koludur. Köklü bir elektrik grubu altyapısıyla desteklenen, yenilikçi otomasyon çözümleri sunuyoruz."
      },
      {
        q: "Yurt dışı projelerde çalışıyor musunuz?",
        a: "Şu anda Türkiye genelinde projelerimiz bulunmaktadır. Ancak uluslararası projeler için de teknik kapasitemiz ve deneyimimiz mevcuttur. Detaylı görüşme için bizimle iletişime geçebilirsiniz."
      }
    ],
    technical: [
      {
        q: "Hangi PLC ve SCADA platformlarını destekliyorsunuz?",
        a: "Siemens (TIA Portal, S7-1200/1500), Rockwell Automation (Studio 5000), Beckhoff (TwinCAT 3), Omron (Sysmac), Schneider Electric (EcoStruxure) platformlarında uzmanız. Platform bağımsız çalışarak projenize en uygun çözümü öneriyoruz."
      },
      {
        q: "Dijital İkiz (Digital Twin) teknolojisi sunuyor musunuz?",
        a: "Evet. Siemens NX MCD ve Emulate3D ile fiziksel yatırım yapmadan önce sisteminizi sanal ortamda test ediyoruz. PLC kodlarını simülasyon ortamında doğrulayarak devreye alma süresini %40 oranında kısaltıyoruz."
      },
      {
        q: "IIoT (Endüstriyel IoT) entegrasyonu yapıyor musunuz?",
        a: "Evet. MQTT, OPC-UA protokolleri ile sensörlerden bulut platformlarına (AWS, Azure) veri akışı sağlıyoruz. Edge computing, kestirimci bakım ve gerçek zamanlı izleme sistemleri kuruyoruz."
      },
      {
        q: "Siber güvenlik standartlarınız nedir?",
        a: "IEC 62443 standardına uygun çalışıyoruz. OT/IT ağ segmentasyonu, endüstriyel güvenlik duvarları, VPN tünelleri, çok faktörlü kimlik doğrulama ve anomali tespit sistemleri ile kritik altyapılarınızı koruyoruz."
      },
      {
        q: "Enerji verimliliği için ne tür çözümler sunuyorsunuz?",
        a: "SCADA tabanlı enerji izleme sistemleri, VFD (Değişken Hızlı Sürücüler), güç faktörü kompanzasyonu, pik yük yönetimi ve ISO 50001 uyumlu enerji yönetim sistemleri ile %20-40 enerji tasarrufu sağlıyoruz."
      },
      {
        q: "Servo motor ve hareket kontrolü konusunda deneyiminiz var mı?",
        a: "Evet. Siemens Sinamics, Rockwell Kinetix, Beckhoff servo sistemleri ile robotik, CNC, pick-and-place ve paketleme uygulamalarında hassas hareket kontrolü sağlıyoruz. EtherCAT ve PROFINET ile senkronize multi-axis sistemler kuruyoruz."
      },
      {
        q: "Yapay zeka destekli kalite kontrol sistemleri yapıyor musunuz?",
        a: "Evet. Görüntü işleme ve deep learning ile çizik, leke, montaj hatası tespiti yapıyoruz. Convolutional Neural Network (CNN) modelleri ile %99.8+ doğruluk oranında otomatik kalite kontrol sistemleri geliştiriyoruz."
      }
    ],
    support: [
      {
        q: "Kesinti desteği için SLA süreniz nedir?",
        a: "Kritik sistem arızalarında (Öncelik 1) 2 saat içinde uzaktan müdahale, gerekirse 24 saat içinde sahaya teknik ekip gönderme garantisi veriyoruz. 7/24 uzaktan destek hattımız mevcuttur."
      },
      {
        q: "Operatör ve bakım eğitimleri veriyor musunuz?",
        a: "Evet. Her proje teslimatında kapsamlı operatör HMI eğitimi, bakım ekipleri için PLC programlama eğitimi ve detaylı dokümantasyon (elektrik şemaları, PLC kodu, kullanım kılavuzları) sağlıyoruz."
      },
      {
        q: "Uzaktan erişim ve izleme imkanı var mı?",
        a: "Evet. VPN tünelleri ile güvenli uzaktan erişim, web tabanlı SCADA ile dünyanın her yerinden izleme, mobil uygulama ile anlık alarm bildirimleri ve dashboard erişimi sunuyoruz."
      },
      {
        q: "Yedek parça tedariki nasıl sağlanıyor?",
        a: "Siemens, Schneider, ABB gibi global markaların yetkili distribütörleriyle çalışıyoruz. Kritik komponentler için yedek stok önerisi yapıyor ve hızlı tedarik ağımızla minimum duruş süresi sağlıyoruz."
      },
      {
        q: "Mevcut sistemlere entegrasyon yapabiliyor musunuz?",
        a: "Evet. Legacy (eski) sistemlere protocol gateway'ler ile entegrasyon, mevcut PLC'lere ek modüller, SCADA upgrade ve ERP/MES entegrasyonu konusunda deneyimliyiz. Üretimi durdurmadan aşamalı geçiş yapıyoruz."
      },
      {
        q: "Garanti ve bakım sözleşmeleriniz nasıl?",
        a: "Standart 12 ay garanti süresi. Sonrasında yıllık bakım sözleşmeleri: periyodik ziyaretler, yazılım güncellemeleri, önleyici bakım, yedek parça desteği ve öncelikli teknik destek içerir."
      }
    ],
    pricing: [
      {
        q: "Proje maliyeti nasıl belirlenir?",
        a: "Sistem büyüklüğü, I/O sayısı, kullanılacak ekipman kalitesi, yazılım karmaşıklığı, devreye alma süresi ve sonrası destek kapsamına göre değişir. Detaylı keşif sonrası net teklif sunuyoruz."
      },
      {
        q: "Ön fizibilite çalışması ücretli mi?",
        a: "İlk görüşme ve genel fizibilite ücretsizdir. Detaylı mühendislik çalışması (elektrik şemaları, PLC programı taslağı, 3D modelleme) gerektiren durumlarda sembolik ücret talep edilir ve proje gerçekleşirse mahsup edilir."
      },
      {
        q: "Ödeme koşullarınız nedir?",
        a: "Tipik ödeme planı: %30 sipariş avansı, %40 malzeme teslimatında, %20 montaj tamamında, %10 devreye alma ve kabul testlerinden sonra. Büyük projelerde özel ödeme planları yapılabilir."
      },
      {
        q: "Bir projenin ortalama teslim süresi nedir?",
        a: "Küçük ölçekli projeler (tek makine otomasyonu) 4-8 hafta, orta ölçekli (üretim hattı) 3-6 ay, büyük ölçekli (tesis geneli) 6-12 ay sürmektedir. Acil projeler için hızlandırılmış program uygulanabilir."
      },
      {
        q: "Kısmi modernizasyon yapabiliyor musunuz?",
        a: "Evet. Tüm sistemi değiştirmeden sadece kritik noktaları modernize edebiliriz: eski PLC'leri yenileme, analog paneli dijital HMI'a çevirme, enerji izleme ekleme gibi. Bütçe dostu çözümler öneriyoruz."
      },
      {
        q: "Referans olmayan yeni müşteriler için özel şartlar var mı?",
        a: "İlk projede performansımızı kanıtlamak için pilot proje yaklaşımı uygulayabiliriz: küçük bir sistemi referans fiyatla tamamlayıp sonra büyük projeye geçilebilir. Başarı odaklı çalışıyoruz."
      }
    ],
    industry: [
      {
        q: "Gıda sektöründe hangi çözümleriniz var?",
        a: "HACCP uyumlu izlenebilirlik sistemleri, RFID/barkod entegrasyonu, soğuk zincir izleme, otomatik dozajlama, CIP (Clean-in-Place) sistemleri ve MES entegrasyonu ile çiftlikten sofraya tam kontrol sağlıyoruz."
      },
      {
        q: "Finansal kurumlara özel hizmetleriniz nedir?",
        a: "VakıfBank gibi referanslarımızla: BMS (Building Management System), UPS ve jeneratör otomasyonu, erişim kontrol entegrasyonu, data center altyapı izleme, 7/24 kesintisiz operasyon için redundant sistemler kuruyoruz."
      },
      {
        q: "Otel otomasyonu (GRMS) yapıyor musunuz?",
        a: "Evet. Biancho Hotel gibi referanslarımızla: oda kartlı erişim, klima otomasyonu, aydınlatma senaryoları, enerji tasarrufu modları, santral BMS entegrasyonu ve misafir deneyimi odaklı çözümler sunuyoruz."
      },
      {
        q: "Sağlık tesisleri için özel sertifikalarınız var mı?",
        a: "IT Pano (İzolasyonlu Güç Sistemleri) deneyimimiz var. Ameliyathane, yoğun bakım gibi kritik alanlarda kesintisiz, toprak kaçağına karşı korumalı güç sistemleri, medikal gaz izleme ve HVAC entegrasyonu yapıyoruz."
      },
      {
        q: "Tekstil fabrikalarına hangi çözümleri sunuyorsunuz?",
        a: "Celal Tekstil gibi referanslarla: gerginlik kontrolü, renk eşleştirme, nem-sıcaklık kontrolü, enerji optimizasyonu, kumaş takip sistemleri ve kestirimci bakım ile üretim verimliliği artırıyoruz."
      },
      {
        q: "Alüminyum/metal işleme sektöründe deneyiminiz var mı?",
        a: "Okyanus Alüminyum gibi referanslarla: fırın sıcaklık kontrolü, ekstüzyon hattı otomasyonu, yüksek akım busbar sistemleri, enerji izleme ve kestirimci bakım ile üretim sürekliliği sağlıyoruz."
      }
    ],
    project: [
      {
        q: "Proje yönetim metodolojiniz nedir?",
        a: "Agile/Scrum prensipleriyle çalışıyoruz: haftalık sprint toplantıları, milestone bazlı ilerleme, müşteri geri bildirimlerine hızlı adaptasyon. Gantt chart ile zaman planlaması, risk analizi ve kaynak yönetimi yapıyoruz."
      },
      {
        q: "Proje ekibiniz nasıl oluşuyor?",
        a: "Her projede: Proje Müdürü, Elektrik Mühendisi (pano tasarım), Otomasyon Mühendisi (PLC/SCADA), Mekanik Montaj Ekibi, Devreye Alma Uzmanı ve Saha Süpervizörü görevlendirilir. Büyüklüğe göre ekip ölçeklendirilir."
      },
      {
        q: "Proje sırasında değişiklik talepleri nasıl yönetilir?",
        a: "Change Request formu ile değişiklikler dokümante edilir. Maliyet ve zaman etkisi analiz edilip müşteriye sunulur. Onay sonrası revize zaman planı ve bütçe güncellenir. Şeffaf iletişim önceliktir."
      },
      {
        q: "Devreye alma (commissioning) süreci nasıl işler?",
        a: "FAT (Factory Acceptance Test) → Saha montajı → Tek tek cihaz testleri → Loop testleri → Simülasyon ortamı → Gerçek ortam geçişi → SAT (Site Acceptance Test) → Performans testleri → Teslim. Her adım protokollerle dokümante edilir."
      },
      {
        q: "Risk yönetimi nasıl yapılıyor?",
        a: "Proje başında FMEA (Failure Mode and Effects Analysis) yapıyoruz: tedarik riskleri, teknik zorluklar, zaman kısıtları belirlenir. Her risk için mitigation planı hazırlanır ve düzenli olarak gözden geçirilir."
      },
      {
        q: "Dokümantasyon standartlarınız nedir?",
        a: "IEC 61355 ve ISO 15489 standartlarına uygun: As-built elektrik şemaları (EPLAN), PLC kaynak kodları, HMI yedekleri, network topolojisi, kullanım kılavuzları, bakım prosedürleri ve eğitim materyalleri teslim edilir."
      }
    ],
    quality: [
      {
        q: "Kalite güvenceniz nasıl?",
        a: "ISO 45001 İş Sağlığı ve Güvenliği sertifikamız var. CE uyumlu panel üretimi, IEC standartlarında projelendirme, 3. parti test laboratuvarı raporları, kabul protokolleri ve performans garantileri sunuyoruz."
      },
      {
        q: "Hangi uluslararası standartlara uyuyorsunuz?",
        a: "IEC 61131-3 (PLC programlama), IEC 62443 (siber güvenlik), IEC 61439 (alçak gerilim panoları), ATEX (patlayıcı ortamlar), ISO 50001 (enerji yönetimi) standartlarına tam uyum sağlıyoruz."
      },
      {
        q: "EMC (Elektromanyetik Uyumluluk) testleri yapıyor musunuz?",
        a: "Evet. Panel tasarımında EMC kriterlerine dikkat ediyor, güç-sinyal kablo ayrımı, ekranlama, topraklama ve filtreleme uyguluyoruz. Gerektiğinde akredite laboratuvarlarda EN 61000 serisi testleri yaptırıyoruz."
      },
      {
        q: "Panel üretiminiz nereden yapılıyor?",
        a: "Schneider Electric, Siemens, ABB gibi A-marka malzemeler kullanıyoruz. Panel üretimi ISO 9001 sertifikalı alt yüklenicilerimizde veya tesisinizin şartlarına göre sahada yapılmaktadır."
      },
      {
        q: "Kod kalite standartlarınız nedir?",
        a: "IEC 61131-3 standartlarına uygun modüler, yeniden kullanılabilir kod yazıyoruz. Versiyon kontrolü (Git), code review, simülasyon testleri ve dokümantasyon her projede zorunludur. Spaghetti kod yazmıyoruz."
      },
      {
        q: "Çevre yönetimi ve sürdürülebilirlik politikanız var mı?",
        a: "Enerji verimliliği odaklı çözümler, atık azaltma (dijitalleşme ile kağıt tasarrufu), ömrü dolan ekipmanların geri dönüşümü, yeşil üretim prensipleri ve karbon ayak izi raporlama konusunda danışmanlık veriyoruz."
      }
    ]
  };

  // @ts-ignore
  const currentFaqs = faqs[activeTab];

  // FAQPage Schema.org markup - Google Rich Results için
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...faqs.general.map((item: any) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      })),
      ...faqs.technical.slice(0, 3).map((item: any) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    ]
  };

  return (
    <>
      <SEOHead
        title="Sıkça Sorulan Sorular (SSS) - MKG Elektromekanik Otomasyon"
        description="MKG Elektromekanik hakkında sıkça sorulan sorular. PLC, SCADA, endüstriyel otomasyon, elektrik projeleri, fiyatlandırma, destek ve garanti süreçleri hakkında detaylı bilgiler."
        keywords="sıkça sorulan sorular, MKG SSS, PLC soruları, SCADA nedir, otomasyon fiyatları, teknik destek, proje süreci, elektrik pano garanti"
        type="website"
        schema={faqSchema}
      />
      <div className="min-h-screen bg-transparent pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-orange text-[10px] sm:text-xs font-mono mb-4 sm:mb-5 md:mb-6"
          >
            <HelpCircle size={12} className="sm:w-3.5 sm:h-3.5" /> BİLGİ BANKASI
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-3 sm:mb-4 md:mb-6 break-words">Sıkça Sorulan Sorular</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Mühendislik süreçlerimiz, teknik yeteneklerimiz ve destek yapılarımız hakkında yaygın sorular ve cevapları.
          </p>
        </div>

        {/* Search Bar (Visual Only) */}
        <div className="relative max-w-xl mx-auto mb-10 sm:mb-12">
          <input
            type="text"
            placeholder="Anahtar kelime ara (örn., 'PLC', 'Garanti')..."
            className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg sm:rounded-xl py-3 sm:py-4 pl-10 sm:pl-12 pr-3 sm:pr-4 text-white text-sm sm:text-base focus:border-brand-orange focus:outline-none transition-colors"
          />
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
              aria-label={`Filter: ${cat.label}`}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 tap-target ${activeTab === cat.id
                ? 'bg-brand-orange text-black shadow-lg shadow-brand-orange/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          <AnimatePresence mode='wait'>
            {currentFaqs.map((item: any, index: number) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-xl sm:rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index
                  ? 'bg-slate-900 border-brand-orange/50'
                  : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex justify-between items-start gap-3 sm:gap-4 tap-target"
                >
                  <span className={`font-bold text-sm sm:text-base md:text-lg transition-colors break-words ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                    {item.q}
                  </span>
                  <div className={`mt-1 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-orange' : 'text-slate-500'}`}>
                    {openIndex === index ? <Minus size={18} className="sm:w-5 sm:h-5" /> : <Plus size={18} className="sm:w-5 sm:h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-800/50 pt-3 sm:pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 sm:mt-14 md:mt-16 text-center bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
          <MessageCircle className="mx-auto text-brand-orange mb-3 sm:mb-4" size={28} />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Hala sorularınız mı var?</h3>
          <p className="text-slate-400 mb-5 sm:mb-6 text-sm sm:text-base">Teknik satış ekibimiz özel sorularınız için yardıma hazır.</p>
          <NavLink to="/contact">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-bold rounded-full hover:bg-brand-orange transition-colors text-sm sm:text-base tap-target">
              Destek ile İletişime Geçin
            </button>
          </NavLink>
        </div>

      </div>

        {/* CTA SECTION */}
        <CTASection />
      </div>
    </>
  );
};

export default FAQPage;