import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Award, Briefcase, History, UserCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import CTASection from '../components/CTASection';

const CorporatePage: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-transparent min-h-screen pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 overflow-hidden flex flex-col">
      
      {/* --- HERO: SYSTEM IDENTITY --- */}
      <motion.div
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={isMobile ? { duration: 0.01 } : { duration: 0.6 }}
        className="max-w-[1920px] mx-auto w-full mb-20 sm:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center border-b border-white/10 pb-10 sm:pb-12"
      >
            <div className="lg:col-span-7">
                <motion.div
                  initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={isMobile ? { duration: 0.01 } : { duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
                >
                    <div className="px-2.5 sm:px-3 py-1 bg-brand-orange/10 border border-brand-orange/30 rounded text-brand-orange font-mono text-[10px] sm:text-xs uppercase tracking-widest">
                        2008'DEN BERİ // SİSTEM_KİMLİK: MKG_KURUMSAL
                    </div>
                </motion.div>
                <motion.h1
                  initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={isMobile ? { duration: 0.01 } : { duration: 0.6, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold text-white mb-6 sm:mb-8 leading-[0.9]"
                >
                    ENDÜSTRİYEL <br/>
                    <span className="text-zinc-600">DÖNÜŞÜMÜN MİMARI.</span>
                </motion.h1>
                <motion.p
                  initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={isMobile ? { duration: 0.01 } : { duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 sm:mb-10 max-w-2xl border-l-2 border-brand-orange pl-4 sm:pl-6"
                >
                    Sadece yüklenici değiliz; otonom geleceğin mimarlarıyız.
                    Fabrika zemininden buluta, MKG modern endüstrinin karmaşık katmanlarını
                    tekil, verimli bir organizmaya entegre eder.
                </motion.p>
                <motion.div
                  initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={isMobile ? { duration: 0.01 } : { duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap gap-6 sm:gap-8 font-mono text-xs text-zinc-500"
                >
                    <div>
                        <span className="block text-white text-xl sm:text-2xl font-display">15+</span>
                        YIL DENEYİM
                    </div>
                    <div>
                        <span className="block text-white text-xl sm:text-2xl font-display">28</span>
                        TAMAMLANAN PROJE
                    </div>
                    <div>
                        <span className="block text-white text-xl sm:text-2xl font-display">10</span>
                        HİZMET ALANI
                    </div>
                </motion.div>
            </div>
            <motion.div
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={isMobile ? { duration: 0.01 } : { duration: 0.7, delay: 0.4 }}
              className="lg:col-span-5 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative overflow-hidden border border-white/10 bg-zinc-900 group rounded-lg sm:rounded-none"
            >
                 <div className="absolute inset-0 bg-[url('/images/corporate/bursa-hq.jpg')] bg-cover bg-center grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                     <div className="text-white font-bold text-base sm:text-lg">Genel Merkez // Bursa</div>
                     <div className="text-brand-orange font-mono text-xs">40.2669° K, 29.0634° D</div>
                 </div>
            </motion.div>
      </motion.div>

      {/* --- STRATEJİK DEĞERLER --- */}
      <motion.div
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={isMobile ? { duration: 0.01 } : { duration: 0.6 }}
        className="max-w-[1920px] mx-auto w-full mb-24 sm:mb-28 md:mb-32"
      >
         <motion.div
           initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={isMobile ? { duration: 0.01 } : { duration: 0.5, delay: 0.2 }}
           className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 gap-4"
         >
             <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Stratejik Değerlerimiz</h2>
             <div className="hidden md:block h-[1px] flex-grow mx-8 bg-white/10"></div>
             <p className="text-zinc-500 font-mono text-xs uppercase">Temel İlkeler</p>
         </motion.div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-px sm:gap-1">
             {[
                 { title: "Hassasiyet", icon: Target, desc: "Şematik tasarım ve mantık akışında sıfır hata toleransı. Her detay mükemmellik için optimize edilir.", code: "DEĞER_01" },
                 { title: "İnovasyon", icon: Lightbulb, desc: "Dijital İkiz ve Endüstri 4.0 teknolojilerinde öncü. Geleceğin fabrikalarını bugünden inşa ediyoruz.", code: "DEĞER_02" },
                 { title: "Güvenilirlik", icon: Shield, desc: "Şeffaf protokoller ve IEC standartlarına tam uyum. Her kod satırında kalite güvencesi.", code: "DEĞER_03" }
             ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={isMobile ? { duration: 0.01 } : { duration: 0.5, delay: i * 0.1 }}
                  className="bg-zinc-950 border border-white/10 p-6 sm:p-8 md:p-10 hover:bg-zinc-900 transition-colors group relative overflow-hidden"
                >
                     <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[9px] sm:text-[10px] font-mono text-zinc-600 group-hover:text-brand-orange transition-colors">{item.code}</div>
                     <item.icon size={28} className="sm:w-8 sm:h-8 text-zinc-500 mb-5 sm:mb-6 group-hover:text-white transition-colors" />
                     <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                     <p className="text-zinc-400 leading-relaxed text-sm">
                         {item.desc}
                     </p>
                 </motion.div>
             ))}
         </div>
      </motion.div>

      {/* --- İSG & GÜVENLİK PROTOKOLLERI --- */}
      <div className="w-full -mx-4 sm:-mx-6 bg-zinc-900 border-y border-white/10 py-16 sm:py-20 md:py-24 mb-24 sm:mb-28 md:mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 sm:p-32 opacity-5 hidden lg:block">
              <Shield size={300} className="xl:w-[400px] xl:h-[400px]" />
          </div>
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center relative z-10">
              <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full ${isMobile ? '' : 'animate-pulse'}`}></div>
                      <span className="text-green-500 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">Öncelik: Güvenlik</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-5 sm:mb-6 break-words">
                      İş Sağlığı, Güvenliği <br/> ve Çevre.
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                      Endüstriyel otomasyon yüksek voltaj sistemleri ve ağır kinetik içerir.
                      İSG protokollerimiz titizdir, personel ve çevreye sıfır zarar sağlar.
                      ATEX bölgelerinde ve yüksek riskli tesislerde çalışma sertifikamız bulunmaktadır.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="border border-white/10 bg-black p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                          <Award className="text-brand-orange shrink-0" size={18} />
                          <span className="text-xs sm:text-sm text-white font-bold">ISO 45001 Sertifikalı</span>
                      </div>
                      <div className="border border-white/10 bg-black p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                          <Award className="text-brand-orange shrink-0" size={18} />
                          <span className="text-xs sm:text-sm text-white font-bold">CE Uyumlu Sistemler</span>
                      </div>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <img src="/images/corporate/safety-1.jpg" className="w-full h-48 sm:h-56 md:h-64 object-cover border border-white/10 rounded-sm filter grayscale hover:grayscale-0 transition-all" alt="Güvenlik Ekipmanları" loading="lazy" />
                  <img src="/images/corporate/safety-2.jpg" className="w-full h-48 sm:h-56 md:h-64 object-cover border border-white/10 rounded-sm filter grayscale hover:grayscale-0 transition-all translate-y-6 sm:translate-y-8" alt="Endüstriyel Güvenlik" loading="lazy" />
              </div>
          </div>
      </div>

      {/* --- YÖNETİM KADROSU --- */}
      <motion.div
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={isMobile ? { duration: 0.01 } : { duration: 0.6 }}
        className="max-w-[1920px] mx-auto w-full mb-24 sm:mb-28 md:mb-32"
      >
          <motion.h2
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.01 } : { duration: 0.5 }}
            className="text-2xl sm:text-3xl font-display font-bold text-white mb-10 sm:mb-12"
          >Yönetim Kadromuz</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                  { name: "Emrullah Malkoç", role: "Operasyon Müdürü", img: "/images/team/emrullah-malkoc.jpg", desc: "15+ yıllık deneyimle operasyonel mükemmelliği yönetiyor" },
                  { name: "Tuncer Beyazoğlu", role: "Kıdemli Baş Elektrik Mühendisi", img: "/images/team/tuncer-beyazoglu.jpg", desc: "Elektrik sistemleri ve enerji çözümlerinde uzman" },
                  { name: "Berhudan Başcan", role: "Bilgisayar Mühendisi", img: "/images/team/berhudan-bascan.jpg", desc: "Otomasyon yazılımları ve dijital dönüşüm lideri" },
              ].map((person, i) => (
                  <motion.div
                    key={i}
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={isMobile ? { duration: 0.01 } : { duration: 0.5, delay: i * 0.1 }}
                    className="group bg-zinc-950 border border-white/10 overflow-hidden"
                  >
                      <div className="h-64 sm:h-72 md:h-80 overflow-hidden relative">
                          <img src={person.img} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={person.name} loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                              <div className="text-white font-bold text-base sm:text-lg break-words">{person.name}</div>
                              <div className="text-brand-orange font-mono text-[10px] sm:text-xs uppercase mb-2">{person.role}</div>
                              <div className="text-zinc-400 text-[10px] sm:text-xs leading-relaxed">{person.desc}</div>
                          </div>
                      </div>
                      <div className="p-3 sm:p-4 flex justify-between items-center border-t border-white/10">
                          <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">YETKİ: SEVİYE 5</span>
                          <UserCheck size={12} className="sm:w-3.5 sm:h-3.5 text-zinc-600"/>
                      </div>
                  </motion.div>
              ))}
          </div>
      </motion.div>

      {/* --- TARİHÇE --- */}
      <motion.div
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={isMobile ? { duration: 0.01 } : { duration: 0.6 }}
        className="max-w-[1920px] mx-auto w-full mb-24 sm:mb-28 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 border-t border-white/10 pt-16 sm:pt-20 md:pt-24"
      >
          <div className="lg:col-span-4">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-5 sm:mb-6">Tarihçemiz</h2>
              <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base">
                  Kuruluşumuzdan bu yana gerçekleştirdiğimiz büyüme ve teknolojik kilometre taşlarının kronolojik arşivi.
              </p>
              <button className="flex items-center gap-2 text-brand-orange font-mono text-[10px] sm:text-xs uppercase border border-brand-orange/30 px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-brand-orange hover:text-black transition-colors tap-target">
                  Tam Geçmişi İndir <History size={12} className="sm:w-3.5 sm:h-3.5"/>
              </button>
          </div>
          <div className="lg:col-span-8 space-y-0">
              {[
                  { year: "2024", event: "28 büyük ölçekli otomasyon projesi başarıyla tamamlandı." },
                  { year: "2022", event: "Enerji sektöründe orta gerilim sistemleri alanına giriş." },
                  { year: "2019", event: "İlk tam entegre robotik hücre otomotiv sektörüne teslim edildi." },
                  { year: "2015", event: "PLC programlama ve SCADA sistemlerinde uzmanlaşma." },
                  { year: "2008", event: "MKG Bursa'da kuruldu. Sistem aktif." },
              ].map((log, i) => (
                  <motion.div
                    key={i}
                    initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={isMobile ? { duration: 0.01 } : { duration: 0.4, delay: i * 0.05 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-b border-white/10 py-5 sm:py-6 hover:bg-white/5 transition-colors px-3 sm:px-4 items-start sm:items-center"
                  >
                      <div className="font-mono text-brand-orange font-bold text-base sm:text-lg shrink-0">{log.year}</div>
                      <div className="h-px w-8 sm:w-12 bg-zinc-700 hidden sm:block"></div>
                      <div className="text-zinc-300 font-light text-sm sm:text-base break-words">{log.event}</div>
                  </motion.div>
              ))}
          </div>
      </motion.div>

      {/* --- CTA --- */}
      <CTASection />

    </div>
  );
};

export default CorporatePage;