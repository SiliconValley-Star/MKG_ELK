import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'general', label: 'Genel' },
    { id: 'technical', label: 'Teknik & Mühendislik' },
    { id: 'support', label: 'Destek & Bakım' },
  ];

  const faqs = {
    general: [
      {
        q: "MKG hangi sektörlere hizmet veriyor?",
        a: "MKG, Otomotiv, İlaç, Yiyecek & İçecek ve Enerji sektörleri için kritik öneme sahip otomasyon çözümlerinde uzmanlaşmıştır. Tehlikeli ortamlar (ATEX) ve temiz oda uygulamaları konusunda özel uzmanlığımız bulunmaktadır."
      },
      {
        q: "Anahtar teslim çözümler sunuyor musunuz?",
        a: "Evet. İlk fizibilite çalışması ve elektrik tasarımından (EPLAN), mekanik montaj, yazılım programlama ve son saha devreye almaya kadar projenin tüm yaşam döngüsünü yönetiyoruz."
      },
      {
        q: "Genel merkeziniz nerede?",
        a: "Küresel genel merkezimiz ve Ar-Ge merkezimiz Bursa, Türkiye'de Nilüfer Organize Sanayi Bölgesi'nde yer almaktadır. Ayrıca Almanya ve İngiltere'de uydu destek ofislerimiz bulunmaktadır."
      }
    ],
    technical: [
      {
        q: "Hangi PLC ve SCADA platformlarını destekliyorsunuz?",
        a: "Platformdan bağımsız çalışıyoruz ancak Siemens (TIA Portal), Rockwell Automation (Studio 5000), Beckhoff (TwinCAT 3) ve Omron (Sysmac) ile sertifikalı ortaklıklarımız bulunmaktadır. Kısıtlamalarınıza en uygun donanımı seçiyoruz."
      },
      {
        q: "OT ağlarında siber güvenliği nasıl sağlıyorsunuz?",
        a: "IEC 62443 standartlarına bağlı kalıyoruz. Ağ mimarimiz, BT ve OT katmanları arasında bir DMZ oluşturarak endüstriyel güvenlik duvarları, uzaktan erişim için VPN tünelleri ve sıkı kullanıcı erişim kontrolü (UAC) kullanır."
      },
      {
        q: "Dijital İkiz metodolojiniz nedir?",
        a: "Makinenizin fizik tabanlı kinematik modelini oluşturmak için Siemens NX MCD ve Emulate3D kullanıyoruz. Bu, fiziksel metal kesilmeden önce PLC kodunu ve döngü sürelerini sanal olarak doğrulamamızı sağlayarak yerinde devreye alma süresini %40'a kadar azaltır."
      }
    ],
    support: [
      {
        q: "Kesinti desteği için standart SLA süreniz nedir?",
        a: "Sözleşmeli ortaklarımız için, kritik sistem arızalarında (Önem Derecesi 1) 2 saatlik yanıt süresi garantisi sunuyoruz. Uzaktan destek 7/24 mevcuttur ve küresel olarak 24 saat içinde sahaya intikal sağlanır."
      },
      {
        q: "Operatörler için eğitim veriyor musunuz?",
        a: "Kesinlikle. Her proje teslimi, operatörler için kapsamlı HMI eğitimi ve iç mühendislik ekibiniz için detaylı dokümantasyon kılavuzları ile birlikte derinlemesine bakım eğitimi içerir."
      }
    ]
  };

  // @ts-ignore
  const currentFaqs = faqs[activeTab];

  return (
    <div className="min-h-screen bg-transparent pt-32 px-6 pb-24">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-orange text-xs font-mono mb-6"
          >
            <HelpCircle size={14} /> BİLGİ BANKASI
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6">Sıkça Sorulan Sorular</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Mühendislik süreçlerimiz, teknik yeteneklerimiz ve destek yapılarımız hakkında yaygın sorular ve cevapları.
          </p>
        </div>

        {/* Search Bar (Visual Only) */}
        <div className="relative max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Anahtar kelime ara (örn., 'PLC', 'Garanti')..."
            className="w-full bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-orange focus:outline-none transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat.id
                ? 'bg-brand-orange text-black shadow-lg shadow-brand-orange/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode='wait'>
            {currentFaqs.map((item: any, index: number) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index
                  ? 'bg-slate-900 border-brand-orange/50'
                  : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-start gap-4"
                >
                  <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                    {item.q}
                  </span>
                  <div className={`mt-1 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-orange' : 'text-slate-500'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
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
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
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
        <div className="mt-16 text-center bg-slate-900 border border-slate-800 p-8 rounded-3xl">
          <MessageCircle className="mx-auto text-brand-orange mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Hala sorularınız mı var?</h3>
          <p className="text-slate-400 mb-6">Teknik satış ekibimiz özel sorularınız için yardıma hazır.</p>
          <NavLink to="/contact">
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-brand-orange transition-colors">
              Destek ile İletişime Geçin
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;