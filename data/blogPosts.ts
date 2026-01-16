export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML string or Markdown
    date: string;
    author: string;
    readTime: string;
    tags: string[];
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "endustri-5-0-insan-odakli-otomasyon",
        title: "Endüstri 5.0: İnsan Odaklı Otomasyonun Yükselişi",
        excerpt: "Robotların insanların yerini aldığı değil, insanlarla işbirliği yaptığı yeni bir çağ başlıyor. Endüstri 5.0'ın üretim süreçlerine etkisini inceliyoruz.",
        content: `
            <p>Endüstri 4.0, fabrikalarımızı akıllı hale getirdi, verileri birbirine bağladı ve IoT devrimini başlattı. Ancak şimdi, ufukta yeni bir paradigma var: <strong>Endüstri 5.0</strong>.</p>
            
            <h2>İnsan ve Makine: Rekabet Değil, İşbirliği</h2>
            <p>Endüstri 5.0'ın merkezinde "insan" yer alıyor. Artık amaç sadece verimliliği maksimize etmek değil, aynı zamanda üretim süreçlerini daha sürdürülebilir ve insan merkezli hale getirmek. Cobot'lar (işbirlikçi robotlar) bu dönüşümün en somut örneği.</p>
            
            <h3>Neden Şimdi?</h3>
            <ul>
                <li><strong>Kişiselleştirme İhtiyacı:</strong> Tüketiciler artık seri üretim ürünler yerine kişiselleştirilmiş deneyimler talep ediyor.</li>
                <li><strong>Yetenek Eğitimi:</strong> Tekrarlayan işleri robotlara bırakırken, insanların yaratıcı problem çözme yeteneklerine odaklanması gerekiyor.</li>
            </ul>
            
            <p>MKG olarak, sadece otomasyon kurmuyoruz; operatörlerinizin güvenle çalışabileceği, ergonomik ve verimli <em>insan-makine arayüzleri</em> tasarlıyoruz.</p>
        `,
        date: "15 Ocak 2026",
        author: "Berhudan Başçan",
        readTime: "5 dk",
        tags: ["Endüstri 5.0", "Cobot", "İnovasyon"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200"
    },
    {
        id: 2,
        slug: "dijital-ikiz-teknolojisi-ile-risk-yonetimi",
        title: "Dijital İkiz (Digital Twin) ile Risk Yönetimi",
        excerpt: "Fiziksel yatırım yapmadan önce fabrikanızı sanal ortamda çalıştırın. Hataları sıfıra indiren simülasyon teknolojileri.",
        content: `
            <p>Bir montaj hattını kurmak milyonlarca dolarlık bir yatırımdır. Peki ya bu hattı kurmadan önce, sanal bir ortamda 1 yıl boyunca çalıştırabilseydiniz?</p>
            
            <h2>Sanal Devreye Alma (Virtual Commissioning)</h2>
            <p>Dijital İkiz teknolojisi, fiziksel varlıkların birebir sanal kopyalarını oluşturmamızı sağlar. MKG mühendisleri, Siemens NX MCD ve Emulate3D kullanarak:</p>
            <ol>
                <li>PLC kodlarını gerçek donanım olmadan test eder.</li>
                <li>Darboğazları (bottlenecks) önceden tespit eder.</li>
                <li>Enerji tüketimini simüle eder.</li>
            </ol>
            
            <blockquote>"Hata yapmanın en ucuz yolu, onu sanal dünyada yapmaktır."</blockquote>
            
            <p>Bu yaklaşım, saha süresini %40 oranında kısaltırken, yazılım hatalarını %90 oranında azaltmaktadır.</p>
        `,
        date: "12 Ocak 2026",
        author: "Mühendislik Ekibi",
        readTime: "7 dk",
        tags: ["Dijital İkiz", "Simülasyon", "Ar-Ge"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
    },
    {
        id: 3,
        slug: "enerji-verimliliginde-scada-rolu",
        title: "Enerji Verimliliğinde SCADA Sistemlerinin Kritik Rolü",
        excerpt: "Artan enerji maliyetlerine karşı en güçlü silahınız: Gerçek zamanlı izleme ve yapay zeka destekli analiz.",
        content: `
            <p>Enerji maliyetleri, endüstriyel tesislerin en büyük operasyonel giderlerinden biridir. Geleneksel sayaç okuma yöntemleri artık yeterli değil.</p>
            
            <h2>Görünmeyeni Görünür Kılmak</h2>
            <p>Modern SCADA sistemleri, sadece "açık/kapalı" durumunu değil, harmonikleri, güç faktörünü ve anlık tüketimi de izler. MKG'nin geliştirdiği enerji yönetim modülleri ile:</p>
            
            <ul>
                <li>Pik yük zamanlarını analiz edebilir,</li>
                <li>Gereksiz çalışan motorları tespit edebilir,</li>
                <li>Kestirimci bakım ile arızaları enerji dalgalanmalarından anlayabilirsiniz.</li>
            </ul>
            
            <p>ISO 50001 enerji yönetim standartlarına uyum sağlamak isteyen tesisler için SCADA bir tercih değil, zorunluluktur.</p>
        `,
        date: "08 Ocak 2026",
        author: "Enerji Departmanı",
        readTime: "4 dk",
        tags: ["Enerji", "SCADA", "Sürdürülebilirlik"],
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200"
    },
    {
        id: 4,
        slug: "siber-guvenlik-ot-it-yakinsamasi",
        title: "OT/IT Yakınsaması ve Siber Güvenlik",
        excerpt: "Fabrika ağlarınızın internete açılması büyük fırsatlar sunarken, yeni tehditleri de beraberinde getiriyor. IEC 62443 standardı nedir?",
        content: `
            <p>Operasyonel Teknoloji (OT) ve Bilgi Teknolojisi (IT) arasındaki duvarlar yıkılıyor. Bu yakınsama, <strong>gerçek zamanlı veri analizi</strong>, uzaktan izleme ve kestirimci bakım gibi muazzam fırsatlar sunarken, aynı zamanda üretim hatlarını siber saldırılara karşı savunmasız bırakabiliyor.</p>
            
            <h2>Neden OT Güvenliği IT Güvenliğinden Farklıdır?</h2>
            <p>IT dünyasında <em>gizlilik</em> (confidentiality) ön plandayken, OT'de <em>kullanılabilirlik</em> (availability) hayati önem taşır. Bir üretim hattının 1 dakika durması bile binlerce dolar kayba yol açabilir. Bu nedenle, geleneksel IT güvenlik çözümleri (antivirüsler, ağ tarayıcıları) doğrudan PLC veya SCADA sistemlerine uygulanamaz.</p>
            
            <h3>Derinlemesine Savunma (Defense in Depth)</h3>
            <p>MKG olarak, endüstriyel ağlarınızı korumak için çok katmanlı bir güvenlik mimarisi öneriyoruz:</p>
            <ul>
                <li><strong>Ağ Segmentasyonu:</strong> OT ve IT ağlarını DMZ (Demilitarized Zone) ile birbirinden ayırma.</li>
                <li><strong>Endüstriyel Güvenlik Duvarları:</strong> Modbus, Profinet, EtherNet/IP gibi protokolleri anlayan özel firewall'lar.</li>
                <li><strong>Erişim Kontrolü:</strong> Rol bazlı yetkilendirme ve çok faktörlü kimlik doğrulama (MFA).</li>
                <li><strong>Anomali Tespiti:</strong> Normal trafik davranışından sapmaları algılayan IDS/IPS sistemleri.</li>
            </ul>
            
            <h2>IEC 62443 Standardı Nedir?</h2>
            <p>IEC 62443, endüstriyel otomasyon ve kontrol sistemleri için kapsamlı bir siber güvenlik standardıdır. Bu standart, sistem entegratörlerinden son kullanıcılara kadar tüm paydaşlar için sorumlulukları tanımlar ve 4 seviyeli bir güvenlik olgunluk modeli sunar.</p>
            
            <blockquote>"Güvenlik bir ürün değil, sürekli bir süreçtir. Tehditler evrilir, savunmalarınız da evrilmelidir."</blockquote>
            
            <h3>MKG'nin Siber Güvenlik Hizmetleri</h3>
            <p>Risk değerlendirmesinden sızma testlerine, güvenlik duvarı konfigürasyonundan olay müdahale planlarına kadar uçtan uca güvenlik çözümleri sunuyoruz. Tesisinizin kritik altyapısını korumak için bizimle iletişime geçin.</p>
        `,
        date: "05 Ocak 2026",
        author: "Güvenlik Ekibi",
        readTime: "6 dk",
        tags: ["Siber Güvenlik", "IoT", "IEC 62443"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200"
    },
    {
        id: 5,
        slug: "robotik-proses-otomasyonu-gelecegi",
        title: "Robotik Proses Otomasyonunun (RPA) Geleceği",
        excerpt: "Yazılımsal robotlar ve fiziksel robotların entegrasyonu. Uçtan uca siparişten üretime otomasyon.",
        content: `
            <p>Siparişin ERP'ye düşmesinden robot kolunun ürünü paletlemesine kadar geçen süreç artık tek bir kesintisiz akış haline geliyor. Bu dönüşümün merkezinde <strong>Robotik Proses Otomasyonu (RPA)</strong> yer alıyor.</p>
            
            <h2>RPA Nedir ve Neden Önemlidir?</h2>
            <p>RPA, tekrarlanan dijital görevleri insan müdahalesi olmadan gerçekleştiren yazılım robotlarıdır. Fatura işleme, sipariş girişi, envanter güncelleme gibi rutin işler artık saniyeler içinde tamamlanıyor.</p>
            
            <h3>Yazılım ve Fiziksel Robotların Buluşması</h3>
            <p>Gerçek gücü ortaya çıkaran şey, RPA'nın fiziksel robotik sistemlerle entegrasyonudur:</p>
            <ul>
                <li><strong>Sipariş Tetikleme:</strong> Müşteri siparişi geldiğinde RPA botu ERP'yi günceller, üretim planını ayarlar.</li>
                <li><strong>Üretim Başlatma:</strong> PLC'lere komut gönderilir, robotik hücre üretime başlar.</li>
                <li><strong>Kalite Kontrol:</strong> Görüntü işleme sistemleri ürünü kontrol eder, sonuçlar otomatik raporlanır.</li>
                <li><strong>Lojistik:</strong> AGV'ler ürünü depoya taşır, sevkiyat planlanır.</li>
            </ul>
            
            <h2>Hyperautomation: Bir Sonraki Seviye</h2>
            <p>2026'da artık sadece RPA değil, <em>Hyperautomation</em>'dan bahsediyoruz. AI, makine öğrenmesi, süreç madenciliği ve RPA'nın birleşimiyle, daha önce otomatikleştirilemeyen karmaşık süreçler bile dijitalleştirilebiliyor.</p>
            
            <blockquote>"İşletmenizin %80'i rutin işlerden oluşuyor. Bu %80'i otomatikleştirerek, çalışanlarınızı gerçekten değer yaratan işlere yönlendirin."</blockquote>
            
            <p>MKG olarak, hem fiziksel otomasyon hem de dijital süreç otomasyonunda uçtan uca çözümler sunuyoruz.</p>
        `,
        date: "02 Ocak 2026",
        author: "Yazılım Ekibi",
        readTime: "5 dk",
        tags: ["Robotik", "Yazılım", "ERP"],
        image: "https://images.unsplash.com/photo-1620283085439-386280b2d69f?q=80&w=1200"
    },
    {
        id: 6,
        slug: "yesil-uretim-karbon-ayak-izi",
        title: "Yeşil Üretim: Karbon Ayak İzini Azaltan Otomasyon",
        excerpt: "Sürdürülebilirlik hedeflerine ulaşmak için akıllı sensörler ve optimize edilmiş algoritmalar nasıl kullanılır?",
        content: `<p>Daha az atık, daha az enerji. Akıllı algoritmalar fırın ısısını optimizes eder, konveyör hızlarını ayarlar.</p>`,
        date: "28 Aralık 2025",
        author: "Sürdürülebilirlik Ekibi",
        readTime: "4 dk",
        tags: ["Yeşil Enerji", "Çevre", "Otomasyon"],
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200"
    },
    {
        id: 7,
        slug: "makine-ogrenmesi-kestirimci-bakim",
        title: "Makine Öğrenmesi ile Kestirimci Bakım",
        excerpt: "Arıza oluşmadan önce müdahale edin. Titreşim ve sıcaklık verilerinin AI ile analizi.",
        content: `
            <p>Geleneksel bakım stratejileri artık yetersiz kalıyor. <strong>Reaktif bakım</strong> (arıza olunca müdahale) maliyetli, <strong>periyodik bakım</strong> ise gereksiz duruşlara neden oluyor. Cevap: <em>Kestirimci Bakım (Predictive Maintenance)</em>.</p>
            
            <h2>Kestirimci Bakım Nasıl Çalışır?</h2>
            <p>Makine öğrenmesi algoritmaları, sensörlerden toplanan verileri analiz ederek arızaları gerçekleşmeden önce tahmin eder:</p>
            <ol>
                <li><strong>Veri Toplama:</strong> Titreşim, sıcaklık, akustik emisyon, akım değerleri sürekli izlenir.</li>
                <li><strong>Özellik Çıkarma:</strong> Ham veriden anlamlı özellikler (ortalama, standart sapma, frekans bileşenleri) elde edilir.</li>
                <li><strong>Model Eğitimi:</strong> Normal ve anormal durumlar ile etiketlenmiş veriyle model eğitilir.</li>
                <li><strong>Gerçek Zamanlı Tahmin:</strong> Canlı veriler modelden geçirilerek arıza olasılığı hesaplanır.</li>
            </ol>
            
            <h3>Hangi Arızalar Tahmin Edilebilir?</h3>
            <ul>
                <li>Rulman aşınmaları ve yatay çalkalanmalar</li>
                <li>Motor sargı izolasyon bozulmaları</li>
                <li>Dişli kutusu dişli kırılmaları</li>
                <li>Pompa kavitasyonu</li>
                <li>Konveyör kayış gerginlik sorunları</li>
            </ul>
            
            <h2>ROI: Yatırım Getirisi</h2>
            <p>Araştırmalar, kestirimci bakımın şunları sağladığını gösteriyor:</p>
            <ul>
                <li>Bakım maliyetlerinde <strong>%25-30</strong> azalma</li>
                <li>Planlanmamış duruş sürelerinde <strong>%70-75</strong> azalma</li>
                <li>Ekipman ömründe <strong>%20-25</strong> artış</li>
            </ul>
            
            <blockquote>"En iyi arıza, hiç yaşanmayan arızadır. AI ile makineleriniz size 2 hafta önceden haber verebilir."</blockquote>
            
            <p>MKG'nin AI Ar-Ge ekibi, tesisinize özel kestirimci bakım modelleri geliştirmektedir. Sensör altyapısı kurulumundan dashboard tasarımına kadar tam destek sunuyoruz.</p>
        `,
        date: "25 Aralık 2025",
        author: "AI Ar-Ge",
        readTime: "8 dk",
        tags: ["Yapay Zeka", "Bakım", "Makine Öğrenmesi"],
        image: "https://images.unsplash.com/photo-1535378437327-10ff28d45777?q=80&w=1200"
    },
    {
        id: 8,
        slug: "bulut-tabanli-scada",
        title: "Bulut Tabanlı SCADA Sistemlerinin Avantajları",
        excerpt: "Verilerinize dünyanın her yerinden güvenli erişim. On-premise vs Cloud SCADA karşılaştırması.",
        content: `<p>Fabrikanızı cebinizden izleyin. AWS ve Azure entegrasyonlu SCADA çözümleriyle verileriniz her yerde.</p>`,
        date: "20 Aralık 2025",
        author: "Yazılım Ekibi",
        readTime: "5 dk",
        tags: ["Bulut", "SCADA", "Uzaktan Erişim"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"
    },
    {
        id: 9,
        slug: "batarya-uretim-teknolojileri",
        title: "Elektrikli Araç Devrimi: Batarya Üretim Teknolojileri",
        excerpt: "Gigafactory'ler için yüksek hızlı montaj hatları ve temiz oda otomasyonu gereklilikleri.",
        content: `<p>Lityum-iyon hücre üretiminde hassasiyet mikron seviyesindedir. MKG'nin temiz oda robotik çözümleri.</p>`,
        date: "15 Aralık 2025",
        author: "Otomotiv Departmanı",
        readTime: "6 dk",
        tags: ["Otomotiv", "Batarya", "Robotik"],
        image: "https://images.unsplash.com/photo-1574360742132-1596e2889674?q=80&w=1200"
    },
    {
        id: 10,
        slug: "gida-guvenligi-otomasyonu",
        title: "Gıda Güvenliğinde İzlenebilirlik ve Otomasyon",
        excerpt: "Çiftlikten çatala tam izlenebilirlik. Barkod, RFID ve görüntü işleme sistemleri.",
        content: `<p>Her paketin hikayesini bilin. Gıda güvenliği regülasyonlarına tam uyum için QR kodlu takip sistemleri.</p>`,
        date: "10 Aralık 2025",
        author: "Gıda Departmanı",
        readTime: "4 dk",
        tags: ["Gıda", "İzlenebilirlik", "Kalite"],
        image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1200"
    },
    {
        id: 11,
        slug: "hidrojen-ekonomisi-muhendislik",
        title: "Hidrojen Ekonomisi ve Mühendislik Çözümleri",
        excerpt: "Geleceğin yakıtı hidrojenin üretimi, depolanması ve dağıtımı için otomasyon altyapısı.",
        content: `<p>Elektrolizör tesislerinin otomasyonu ve yüksek basınçlı depolama güvenliği.</p>`,
        date: "05 Aralık 2025",
        author: "Enerji Departmanı",
        readTime: "7 dk",
        tags: ["Hidrojen", "Enerji", "Gelecek"],
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=1200"
    },
    {
        id: 12,
        slug: "akilli-depo-yonetimi",
        title: "Lojistikte Devrim: Akıllı Depo Yönetimi (AS/RS)",
        excerpt: "Karanlık depolar ve otonom yönlendirmeli araçlar (AGV) ile lojistik verimliliği.",
        content: `<p>Işıkların kapalı olduğu, 7/24 çalışan depolar. AS/RS sistemleri ile stok hatlarını sıfırlayın.</p>`,
        date: "01 Aralık 2025",
        author: "Lojistik Ekibi",
        readTime: "5 dk",
        tags: ["Lojistik", "AGV", "Depo"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
    },
    {
        id: 13,
        slug: "plc-programlama-standartlari",
        title: "PLC Programlamada IEC 61131-3 Standartları",
        excerpt: "Spaghetti koddan modüler ve yeniden kullanılabilir yazılım mimarisine geçiş.",
        content: `<p>Yapılandırılmış Metin (ST) ve Fonksiyon Blokları (FBD) ile bakımı kolay, standartlara uygun kod yazımı.</p>`,
        date: "28 Kasım 2025",
        author: "Yazılım Ekibi",
        readTime: "9 dk",
        tags: ["PLC", "Yazılım", "Mühendislik"],
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200"
    },
    {
        id: 14,
        slug: "pano-tasarimi-emc",
        title: "Endüstriyel Pano Tasarımında EMC Kriterleri",
        excerpt: "Elektromanyetik uyumluluk (EMC) için topraklama ve kablolama teknikleri.",
        content: `<p>Gürültüsüz sinyaller, kararlı sistemler. Panolarda doğru topraklama ve ekranlama hayati önem taşır.</p>`,
        date: "25 Kasım 2025",
        author: "Elektrik Departmanı",
        readTime: "6 dk",
        tags: ["Elektrik", "Tasarım", "Kalite"],
        image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1200"
    },
    {
        id: 15,
        slug: "endustriyel-nesnelerin-interneti-iiot",
        title: "IIoT: Endüstriyel Nesnelerin İnterneti Nedir?",
        excerpt: "Sensörlerden buluta veri akışı. MQTT ve OPC-UA protokollerinin karşılaştırması.",
        content: `<p>Her cihaz konuşuyor, peki siz dinliyor musunuz? Büyük veri analitiği için altyapı kurulumu.</p>`,
        date: "20 Kasım 2025",
        author: "Dijital Dönüşüm",
        readTime: "5 dk",
        tags: ["IoT", "Veri", "Teknoloji"],
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1200"
    },
    {
        id: 16,
        slug: "su-aritma-otomasyonu",
        title: "Akıllı Şehirler için Su Arıtma Otomasyonu",
        excerpt: "Kritik altyapı tesislerinde kesintisiz ve güvenli operasyon için otomasyon çözümleri.",
        content: `<p>Belediyeler ve endüstriyel tesisler için dozajlama, filtrasyon ve pompalama istasyonu otomasyonu.</p>`,
        date: "15 Kasım 2025",
        author: "Proje Ekibi",
        readTime: "4 dk",
        tags: ["Su", "Altyapı", "Otomasyon"],
        image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=1200"
    },
    {
        id: 17,
        slug: "servo-motor-teknolojileri",
        title: "Servo Motor Teknolojilerinde Yenilikler",
        excerpt: "Daha hassas, daha hızlı, daha küçük. Yeni nesil servo sürücülerin yetenekleri.",
        content: `<p>Tek kablo teknolojisi (OCT) ve entegre güvenli hareket (Safe Motion) fonksiyonları.</p>`,
        date: "10 Kasım 2025",
        author: "Hareket Kontrol",
        readTime: "5 dk",
        tags: ["Motion", "Servo", "Teknoloji"],
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200"
    },
    {
        id: 18,
        slug: "yerli-otomasyon-yazilimlari",
        title: "Türkiye'nin Otomasyon Ekosistemi ve Yerli Yazılım",
        excerpt: "Dışa bağımlılığı azaltan yerli Ar-Ge projeleri ve MKG'nin katkıları.",
        content: `<p>Kendi kütüphanelerimizi ve algoritmalarımızı geliştiriyoruz. Türkiye mühendisliği dünyaya açılıyor.</p>`,
        date: "05 Kasım 2025",
        author: "Berhudan Başçan",
        readTime: "6 dk",
        tags: ["Yerli", "Milli", "Teknoloji"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
    },
    {
        id: 19,
        slug: "uretim-yuruyen-bant-optimizasyonu",
        title: "Üretim Hattı Dengelleme ve Darboğaz Analizi",
        excerpt: "Hat verimliliğini %20 artırmanın matematiksel yöntemleri.",
        content: `<p>Çevrim zamanlarını eşitlemek ve stokları minimize etmek için Yalın Üretim prensiplerinin otomasyona uygulanması.</p>`,
        date: "01 Kasım 2025",
        author: "Proses Mühendisi",
        readTime: "8 dk",
        tags: ["Verimlilik", "Yalın", "Üretim"],
        image: "https://images.unsplash.com/photo-1565514020176-892eb5badeef?q=80&w=1200"
    },
    {
        id: 20,
        slug: "yapay-zeka-kalite-kontrol",
        title: "Görüntü İşleme ve Yapay Zeka ile Kalite Kontrol",
        excerpt: "İnsan gözünün kaçırdığı detayları yakalayan 0 hata toleranslı sistemler.",
        content: `<p>Kameralar ve Derin Öğrenme algoritmaları ile çizik, renk ve montaj hatalarının milisaniyeler içinde tespiti.</p>`,
        date: "28 Ekim 2025",
        author: "AI Ar-Ge",
        readTime: "5 dk",
        tags: ["Kalite", "AI", "Vision"],
        image: "https://images.unsplash.com/photo-1531297461136-82lw9z1p8i6?q=80&w=1200"
    },
    {
        id: 21,
        slug: "gelecegin-muhendisleri",
        title: "Geleceğin Mühendisleri için Kariyer Tavsiyeleri",
        excerpt: "Otomasyon sektöründe başarılı olmak isteyen öğrenciler ve yeni mezunlar için yol haritası.",
        content: `<p>Sadece kod yazmayı değil, prosesi anlamayı öğrenin. Multidisipliner çalışma yeteneği en büyük kozunuz olacak.</p>`,
        date: "24 Ekim 2025",
        author: "İK Departmanı",
        readTime: "4 dk",
        tags: ["Kariyer", "Eğitim", "Gelecek"],
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
    }
];
