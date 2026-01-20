import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "endustri-5-0-insan-odakli-otomasyon",
        title: "Endüstri 5.0: İnsan Odaklı Otomasyonun Yükselişi",
        size: "large",
        category: "Endüstri",
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
        image: "/images/blog/endustriyel-otomasyon.jpg"
    },
    {
        id: 2,
        slug: "dijital-ikiz-teknolojisi-ile-risk-yonetimi",
        title: "Dijital İkiz (Digital Twin) ile Risk Yönetimi",
        size: "standard",
        category: "Endüstri",
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
        image: "/images/blog/dijital-ikiz.jpg"
    },
    {
        id: 3,
        slug: "enerji-verimliliginde-scada-rolu",
        title: "Enerji Verimliliğinde SCADA Sistemlerinin Kritik Rolü",
        size: "standard",
        category: "Energy",
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
        image: "/images/blog/enerji-scada.jpg"
    },
    {
        id: 4,
        slug: "siber-guvenlik-ot-it-yakinsamasi",
        title: "OT/IT Yakınsaması ve Siber Güvenlik",
        size: "large",
        category: "Güvenlik",
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
        image: "/images/blog/siber-guvenlik.jpg"
    },
    {
        id: 5,
        slug: "robotik-proses-otomasyonu-gelecegi",
        title: "Robotik Proses Otomasyonunun (RPA) Geleceği",
        size: "standard",
        category: "Robotik",
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
        image: "/images/blog/robotik-rpa.jpg"
    },
    {
        id: 6,
        slug: "yesil-uretim-karbon-ayak-izi",
        title: "Yeşil Üretim: Karbon Ayak İzini Azaltan Otomasyon",
        size: "standard",
        category: "Energy",
        excerpt: "Sürdürülebilirlik hedeflerine ulaşmak için akıllı sensörler ve optimize edilmiş algoritmalar nasıl kullanılır?",
        content: `
            <p>İklim krizi, küresel ısınma ve artan çevre düzenlemeleri karşısında endüstriyel tesisler artık sadece kârlılık değil, aynı zamanda <strong>çevresel sürdürülebilirlik</strong> ile de değerlendiriliyor. Yeşil üretim, bu iki hedefi uzlaştırmanın yolu olarak öne çıkıyor.</p>
            
            <h2>Yeşil Üretim Nedir?</h2>
            <p>Yeşil üretim (Green Manufacturing), ürün tasarımından üretim süreçlerine, tedarik zincirinden atık yönetimine kadar tüm aşamalarda çevresel etkiyi minimize eden bir yaklaşımdır. Amaç, <em>daha az kaynak, daha az enerji, daha az atık</em> ile aynı veya daha yüksek kalitede üretim yapmaktır.</p>
            
            <h3>Neden Şimdi?</h3>
            <ul>
                <li><strong>Avrupa Yeşil Mutabakatı:</strong> AB'nin 2050 yılına kadar karbon nötr olma hedefi, Türkiye'deki ihracatçı firmaları doğrudan etkiliyor.</li>
                <li><strong>Karbon Vergisi:</strong> Sınırda karbon düzenleme mekanizması (CBAM) ile yüksek emisyonlu ürünler vergilendirilecek.</li>
                <li><strong>Tüketici Baskısı:</strong> Müşteriler artık ürünlerin karbon ayak izini sorguluyor.</li>
                <li><strong>Enerji Maliyetleri:</strong> Fosil yakıt fiyatlarının oynaklığı, enerji verimliliğini stratejik hale getirdi.</li>
            </ul>
            
            <h2>Otomasyonun Sürdürülebilirliğe Katkısı</h2>
            <p>Akıllı otomasyon sistemleri, yeşil üretimin en güçlü araçlarından biridir. İşte nasıl:</p>
            
            <h3>1. Enerji Tüketimi Optimizasyonu</h3>
            <p>Geleneksel üretim hatlarında, makineler genellikle sabit hızda ve maksimum kapasitede çalışır. Oysa gerçek zamanlı talebe göre ayarlanabilir hız kontrol sistemleri, enerji tüketimini %20-40 oranında azaltabilir.</p>
            
            <ul>
                <li><strong>Değişken Hızlı Sürücüler (VFD):</strong> Motorlar yükün gerektirdiği kadar enerji çeker.</li>
                <li><strong>Akıllı Aydınlatma:</strong> Sensör tabanlı LED sistemler, çalışma saatlerine göre otomatik ayarlanır.</li>
                <li><strong>Isı Geri Kazanımı:</strong> Fırınlardan ve kompresörlerden çıkan atık ısı, ön ısıtma süreçlerinde kullanılır.</li>
            </ul>
            
            <h3>2. Malzeme İsrafının Azaltılması</h3>
            <p>Hassas sensörler ve görüntü işleme sistemleri, üretim sırasında fire oranını minimize eder. Örneğin:</p>
            <ul>
                <li>Kesme ve delme işlemlerinde, lazer sensörler ile milimetrik hassasiyette pozisyonlama.</li>
                <li>Yapay zeka destekli kalite kontrol ile hatalı ürünlerin erken tespiti.</li>
                <li>Reçete yönetimi sistemleriyle hammadde dozajında %99.5 doğruluk.</li>
            </ul>
            
            <h3>3. Su Kullanımının İzlenmesi</h3>
            <p>Özellikle tekstil, gıda ve kimya sektörlerinde su tüketimi kritik bir çevre göstergesidir. SCADA sistemleri ile:</p>
            <ul>
                <li>Gerçek zamanlı su akış debisi takibi,</li>
                <li>Sızıntı ve kaçak tespiti,</li>
                <li>Gri su (kullanılmış su) geri dönüşüm oranlarının artırılması.</li>
            </ul>
            
            <h2>Vaka Çalışması: Otomotiv Boya Hattı</h2>
            <p>Bir otomotiv yan sanayi firmasında, MKG olarak geliştirdiğimiz akıllı boya hattı otomasyonu ile şu sonuçlar elde edildi:</p>
            <ul>
                <li>Boya tüketiminde <strong>%18 azalma</strong> (hassas püskürtme başlıkları sayesinde)</li>
                <li>Fırın enerji kullanımında <strong>%25 tasarruf</strong> (kızılötesi sensörler ile dinamik ısı kontrolü)</li>
                <li>VOC (uçucu organik bileşikler) emisyonunda <strong>%30 düşüş</strong> (kapalı devre havalandırma)</li>
            </ul>
            
            <blockquote>"Sürdürülebilirlik bir maliyet kalemi değil, rekabet avantajıdır. Müşterilerimiz artık sadece fiyata değil, çevre performansımıza da bakıyor."</blockquote>
            
            <h2>Karbon Ayak İzi Hesaplama ve Raporlama</h2>
            <p>Avrupa pazarında faaliyet gösteren firmalar için karbon ayak izi raporlaması artık zorunlu hale geliyor. MKG'nin geliştirdiği enerji yönetim yazılımı, ISO 14064 ve GHG Protocol standartlarına uygun raporlar üretir:</p>
            <ul>
                <li><strong>Scope 1:</strong> Doğrudan emisyonlar (yakıt, jeneratör)</li>
                <li><strong>Scope 2:</strong> Dolaylı emisyonlar (satın alınan elektrik)</li>
                <li><strong>Scope 3:</strong> Tedarik zinciri emisyonları (taşıma, hammadde)</li>
            </ul>
            
            <h2>Yenilenebilir Enerji Entegrasyonu</h2>
            <p>Güneş panelleri ve rüzgar türbinleri gibi değişken enerji kaynaklarının üretime entegre edilmesi, otomasyon olmadan neredeyse imkansızdır. Akıllı mikro şebeke (microgrid) yönetim sistemleri:</p>
            <ul>
                <li>Yük dengeleme yaparak şebekeden çekilen gücü minimize eder,</li>
                <li>Fazla enerji üretimini bataryalarda depolar,</li>
                <li>Elektrik maliyetinin düşük olduğu saatlerde enerji yoğun işlemleri zamanlar.</li>
            </ul>
            
            <h2>Gelecek: Net Sıfır Fabrikalar</h2>
            <p>2026 ve sonrasında, "net sıfır" (net-zero) fabrikaları göreceğiz. Bu tesisler, ürettikleri kadar karbonu geri çeker veya dengeler. Otomasyonun rolü:</p>
            <ul>
                <li>Karbon yakalama ve depolama (CCS) sistemlerinin kontrolü,</li>
                <li>Döngüsel ekonomi modellerinde geri dönüştürüm süreçlerinin otomasyonu,</li>
                <li>Yapay zeka ile toplam çevresel etki optimizasyonu (LCA - Life Cycle Assessment).</li>
            </ul>
            
            <p>MKG Elektromekanik Otomasyon olarak, sadece bugünün değil, yarının yeşil fabrikalarını inşa ediyoruz. Sürdürülebilirlik yolculuğunuzda yanınızdayız.</p>
        `,
        date: "28 Aralık 2025",
        author: "Sürdürülebilirlik Ekibi",
        readTime: "8 dk",
        tags: ["Yeşil Enerji", "Çevre", "Otomasyon"],
        image: "/images/blog/yesil-enerji.jpg"
    },
    {
        id: 7,
        slug: "makine-ogrenmesi-kestirimci-bakim",
        title: "Makine Öğrenmesi ile Kestirimci Bakım",
        size: "large",
        category: "Yazılım",
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
        image: "/images/blog/dijital-ikiz.jpg"
    },
    {
        id: 8,
        slug: "bulut-tabanli-scada",
        title: "Bulut Tabanlı SCADA Sistemlerinin Avantajları",
        size: "standard",
        category: "Yazılım",
        excerpt: "Verilerinize dünyanın her yerinden güvenli erişim. On-premise vs Cloud SCADA karşılaştırması.",
        content: `
            <p>Geleneksel SCADA (Supervisory Control and Data Acquisition) sistemleri, genellikle fabrika içindeki yerel sunucularda (on-premise) çalışır. Ancak dijital dönüşüm çağında, <strong>bulut tabanlı SCADA</strong> mimarisi giderek daha fazla tercih ediliyor.</p>
            
            <h2>Bulut SCADA Nedir?</h2>
            <p>Bulut SCADA, veri toplama, işleme ve görselleştirme işlemlerinin AWS, Azure veya Google Cloud gibi bulut platformlarında gerçekleştirildiği bir mimaridir. PLC'ler ve sensörlerden gelen veriler, güvenli IoT gateway'ler üzerinden buluta aktarılır ve orada analiz edilir.</p>
            
            <h2>On-Premise vs. Cloud SCADA: Karşılaştırma</h2>
            
            <h3>1. Maliyet Modeli</h3>
            <ul>
                <li><strong>On-Premise:</strong> Yüksek ilk yatırım (sunucu, lisans, IT altyapısı). Sürekli bakım ve güncelleme masrafları.</li>
                <li><strong>Cloud:</strong> Düşük başlangıç maliyeti. Kullandığın kadar öde (pay-as-you-go) modeli. Ölçeklenebilir altyapı.</li>
            </ul>
            
            <h3>2. Erişilebilirlik</h3>
            <ul>
                <li><strong>On-Premise:</strong> Sadece fabrika ağından veya VPN ile erişim. Mobil erişim sınırlı.</li>
                <li><strong>Cloud:</strong> İnternet bağlantısı olan her yerden, her cihazdan (PC, tablet, mobil) erişim. Rol bazlı yetkilendirme ile güvenli.</li>
            </ul>
            
            <h3>3. Veri Depolama ve Analitik</h3>
            <ul>
                <li><strong>On-Premise:</strong> Sınırlı depolama kapasitesi. Geçmiş verilerin arşivlenmesi maliyetli.</li>
                <li><strong>Cloud:</strong> Sınırsız depolama. Büyük veri analitiği (Big Data) ve makine öğrenmesi entegrasyonu kolay.</li>
            </ul>
            
            <h3>4. Bakım ve Güncelleme</h3>
            <ul>
                <li><strong>On-Premise:</strong> Manuel yama ve güncelleme. IT ekibi gerekli.</li>
                <li><strong>Cloud:</strong> Otomatik güncellemeler. Sıfır duruş süresi (zero downtime) ile yeni özellikler eklenir.</li>
            </ul>
            
            <h2>Bulut SCADA'nın Avantajları</h2>
            
            <h3>1. Gerçek Zamanlı Uzaktan İzleme</h3>
            <p>Fabrika müdürü İstanbul'da, üretim İzmir'de. Bulut SCADA ile tüm KPI'lar (anahtar performans göstergeleri) anlık olarak mobil uygulamadan görülebilir. Alarm bildirimleri SMS veya e-posta ile anında iletilir.</p>
            
            <h3>2. Çoklu Tesis Yönetimi</h3>
            <p>Birden fazla fabrika veya şubeniz mi var? Bulut SCADA, tüm tesisleri tek bir dashboard'dan izlemenizi sağlar. Merkezi yönetim, standartlaşma ve karşılaştırmalı analiz (benchmarking) kolaylaşır.</p>
            
            <h3>3. Afet Kurtarma (Disaster Recovery)</h3>
            <p>Yerel sunucu arızaları veya doğal afetler durumunda verileriniz kaybolabilir. Bulut altyapısında otomatik yedekleme ve coğrafi olarak dağıtılmış veri merkezleri sayesinde %99.9 erişilebilirlik garantisi sağlanır.</p>
            
            <h3>4. AI ve Makine Öğrenmesi Entegrasyonu</h3>
            <p>Bulut platformları, hazır AI hizmetleri sunar (AWS SageMaker, Azure ML). Kestirimci bakım, anomali tespiti ve talep tahmini gibi ileri düzey analizler, ek donanım yatırımı olmadan uygulanabilir.</p>
            
            <h2>Güvenlik Endişeleri ve Çözümler</h2>
            <p>Bulut SCADA'ya geçişte en büyük çekince siber güvenliktir. Ancak doğru mimarlandığında, bulut sistemleri on-premise çözümlerden daha güvenli olabilir:</p>
            
            <ul>
                <li><strong>Şifreleme:</strong> Veriler hem iletim sırasında (TLS/SSL) hem de depolamada (AES-256) şifrelenir.</li>
                <li><strong>Çok Faktörlü Kimlik Doğrulama (MFA):</strong> Sadece şifre yeterli değil, SMS veya donanım token gereklidir.</li>
                <li><strong>Ağ Segmentasyonu:</strong> OT (Operasyonel Teknoloji) ve IT (Bilgi Teknolojisi) ağları DMZ (Demilitarize Bölge) ile ayrılır.</li>
                <li><strong>Compliance:</strong> AWS ve Azure, ISO 27001, SOC 2, GDPR gibi standartlara uyumludur.</li>
            </ul>
            
            <h2>Hibrit Mimari: En İyi İkisi Bir Arada</h2>
            <p>Bazı firmalar, kritik kontrol döngülerini yerel sistemlerde tutarken, veri analitiği ve raporlamayı bulutta yapar. Bu <em>hibrit SCADA</em> mimarisi, hem gecikme (latency) sorunlarını çözer hem de bulutun esnekliğinden faydalanır.</p>
            
            <h3>Edge Computing ile Entegrasyon</h3>
            <p>Edge cihazlar (ör. Siemens IOT2050, Beckhoff CX serisi), fabrikanın "kenarında" ön işleme yapar. Sadece özet veriler ve alarmlar buluta gönderilir, bant genişliği kullanımı %80 azalır.</p>
            
            <h2>Vaka Çalışması: Otomotiv Yan Sanayi</h2>
            <p>Türkiye'nin farklı şehirlerinde 4 fabrikası olan bir müşterimiz için Azure IoT Hub tabanlı bulut SCADA geliştirdik. Sonuçlar:</p>
            <ul>
                <li>IT altyapı maliyetlerinde <strong>%60 tasarruf</strong></li>
                <li>Merkez ofisten tüm tesislerin tek ekrandan izlenmesi</li>
                <li>Enerji tüketimi anomalilerinin AI ile 72 saat önceden tespiti</li>
                <li>Mobil uygulama ile 7/24 alarm takibi</li>
            </ul>
            
            <blockquote>"Sabah kahvemi içerken fabrikanın KPI'larını tabletimden kontrol edebiliyorum. Artık sahada olmak için fabrikada olmama gerek yok."</blockquote>
            
            <h2>Bulut SCADA Geçiş Yol Haritası</h2>
            <ol>
                <li><strong>Mevcut Durum Analizi:</strong> Hangi veriler kritik? Hangi sistemler cloud-ready?</li>
                <li><strong>Pilot Proje:</strong> Tek bir hat veya makine ile başla. Öğren, adapte ol.</li>
                <li><strong>Ağ Altyapısı:</strong> Yeterli internet bant genişliği sağla. Redundant (yedekli) hat kurmayı düşün.</li>
                <li><strong>Güvenlik Denetimi:</strong> Penetrasyon testleri yap. Siber güvenlik uzmanı ile çalış.</li>
                <li><strong>Tam Geçiş:</strong> Aşamalı olarak tüm sistemleri buluta taşı. On-premise sistemleri yedek olarak tut.</li>
            </ol>
            
            <h2>2026 ve Sonrası: Bulut SCADA Trendleri</h2>
            <ul>
                <li><strong>Serverless Mimari:</strong> Olay tabanlı (event-driven) fonksiyonlar ile daha düşük maliyet.</li>
                <li><strong>Digital Twin Entegrasyonu:</strong> Bulutta canlı simülasyon ve "what-if" analizleri.</li>
                <li><strong>5G Connectivity:</strong> Düşük gecikme ile gerçek zamanlı kontrol bile bulut üzerinden mümkün.</li>
                <li><strong>Blockchain Tabanlı İzlenebilirlik:</strong> Veri bütünlüğü ve değiştirilemez kayıtlar.</li>
            </ul>
            
            <p>MKG olarak, AWS, Azure ve Google Cloud platformlarında endüstriyel IoT ve SCADA çözümleri geliştiriyoruz. Buluta geçiş yolculuğunuzda yanınızdayız.</p>
        `,
        date: "20 Aralık 2025",
        author: "Yazılım Ekibi",
        readTime: "9 dk",
        tags: ["Bulut", "SCADA", "Uzaktan Erişim"],
        image: "/images/blog/bulut-scada.jpg"
    },
    {
        id: 9,
        slug: "batarya-uretim-teknolojileri",
        title: "Elektrikli Araç Devrimi: Batarya Üretim Teknolojileri",
        size: "standard",
        category: "Endüstri",
        excerpt: "Gigafactory'ler için yüksek hızlı montaj hatları ve temiz oda otomasyonu gereklilikleri.",
        content: `
            <p>Elektrikli araç (EV) pazarı patlamaya hazırlanıyor. 2026 yılında küresel EV satışlarının 25 milyonu aşması bekleniyor. Bu devrimin kalbinde ise <strong>lityum-iyon bataryalar</strong> yer alıyor. Ancak batarya üretimi, otomotiv sektöründeki en karmaşık ve hassas süreçlerden biridir.</p>
            
            <h2>Batarya Üretim Süreci</h2>
            <p>Bir lityum-iyon batarya hücresi üretmek için üç ana aşama vardır:</p>
            
            <h3>1. Elektrot Üretimi (Electrode Manufacturing)</h3>
            <p>Aktif malzemeler (anot için grafit, katot için nikel-mangan-kobalt veya LFP), bağlayıcılar ve çözücülerle karıştırılarak slurry (çamur) oluşturulur. Bu slurry, metal folyolar (bakır ve alüminyum) üzerine kaplanır, kurutulur ve preslenir.</p>
            
            <ul>
                <li><strong>Kaplama Kalınlığı Toleransı:</strong> ±2 mikron. Lazer sensörleriyle anlık ölçüm yapılır.</li>
                <li><strong>Kurutma Fırınları:</strong> %100 oksijen kontrolü. Nem oranı %0.01'in altında tutulmalıdır.</li>
                <li><strong>Kesme ve Delme:</strong> Robotik sistemlerle saniyede 100+ elektrot kesimi.</li>
            </ul>
            
            <h3>2. Hücre Montajı (Cell Assembly)</h3>
            <p>Elektrotlar, separator (ayırıcı membran) ile birlikte katlanır veya sarılır. Bu işlem ISO 14644-1 Class 1000 veya daha temiz ortamlarda yapılmalıdır. Çünkü metal parçacıklar bile kısa devreye yol açabilir.</p>
            
            <ul>
                <li><strong>Z-katlama (Stack) veya Sargı (Winding):</strong> Her ikisi için de yüksek hızlı robotlar gereklidir.</li>
                <li><strong>Elektrolit Doldurma:</strong> Vakum altında, inert gaz (argon) atmosferinde gerçekleştirilir.</li>
                <li><strong>Sızdırmazlık (Sealing):</strong> Lazer kaynağı ile %100 hava geçirmez kapak montajı.</li>
            </ul>
            
            <h3>3. Formation ve Aging</h3>
            <p>Hücreler, kontrollü ortamda şarj-deşarj döngülerine tabi tutulur. Bu süreç, SEI (Solid Electrolyte Interphase) katmanının oluşmasını sağlar ve hücrenin performansını belirler.</p>
            
            <ul>
                <li><strong>Formation Süreleri:</strong> 24-72 saat arasında değişir.</li>
                <li><strong>Sıcaklık Kontrolü:</strong> ±0.5°C hassasiyetle kontrol edilen iklim odaları.</li>
                <li><strong>Kapasit Sınıflandırması:</strong> Her hücre test edilir ve kapasite grubuna göre etiketlenir.</li>
            </ul>
            
            <h2>Gigafactory Otomasyonu</h2>
            <p>Tesla'nın Nevada Gigafactory'si yılda 35 GWh batarya üretebiliyor. Bu, <strong>milyonlarca hücre/gün</strong> demektir. Bu ölçekte üretim, tam otomasyonsuz düşünülemez.</p>
            
            <h3>MKG'nin Batarya Üretim Çözümleri</h3>
            <ul>
                <li><strong>Yüksek Hızlı Pick & Place Robotlar:</strong> Delta ve SCARA robotlarla saniyede 10+ hücre transferi.</li>
                <li><strong>Vision Sistemler:</strong> AI destekli kalite kontrol. Çizik, leke ve montaj hataları milisaniyede tespit edilir.</li>
                <li><strong>Temiz Oda Uyumlu AGV'ler:</strong> Malzeme taşımacılığında insan temasını sıfırlayan otonom araçlar.</li>
                <li><strong>MES Entegrasyonu:</strong> Üretim Yürütme Sistemi ile tam izlenebilirlik. Her hücrenin seri numarası, üretim parametreleri ve test sonuçları kaydedilir.</li>
            </ul>
            
            <h2>Temiz Oda (Cleanroom) Gereklilikleri</h2>
            <p>Batarya üretimi, yarı iletken endüstrisinden sonra en yüksek temizlik standartlarını gerektirir:</p>
            
            <ul>
                <li><strong>ISO Class 5-6:</strong> Metreküp başına maksimum 100,000 partikül (≥0.5 µm).</li>
                <li><strong>HEPA/ULPA Filtreler:</strong> %99.999 verimlilikle hava filtreleme.</li>
                <li><strong>İyonize Hava:</strong> Statik elektriği önlemek için.</li>
                <li><strong>Giysi Odaları (Gowning Rooms):</strong> Personel girişlerinde tam sterilizasyon.</li>
            </ul>
            
            <h2>Güvenlik ve Yangın Önleme</h2>
            <p>Lityum-iyon hücreler yüksek enerji yoğunluğuna sahiptir. Üretim sırasında termal kaçak (thermal runaway) riski mevcuttur. Bu nedenle:</p>
            
            <ul>
                <li><strong>Çoklu Gaz Sensörleri:</strong> CO, CO₂, VOC ve hidrojen tespiti.</li>
                <li><strong>Erken Uyarı Sistemleri:</strong> Anormal sıcaklık artışlarında otomatik alarm.</li>
                <li><strong>İnert Gaz Yangın Söndürme (IG-541):</strong> Su kullanımı elektrikli yangınlarda tehlikelidir.</li>
                <li><strong>Acil Durum Protokolleri:</strong> PLC programında failsafe mantığı. Herhangi bir anomalide tüm enerji kesilir.</li>
            </ul>
            
            <h2>Vaka Çalışması: Türkiye'de İlk Batarya Fabrikası</h2>
            <p>MKG olarak, yerli bir EV üreticisi için prototip batarya üretim hattı kurduk:</p>
            
            <ul>
                <li>Saatte <strong>500 hücre</strong> üretim kapasitesi</li>
                <li>ISO Class 6 temiz oda (700 m²)</li>
                <li>6 eksenli robotlarla tam otomasyon</li>
                <li>%99.2 ilk geçiş verimi (First Pass Yield)</li>
            </ul>
            
            <blockquote>"Batarya üretimi, Türkiye'nin otomotiv sanayisinde bir sonraki sıçramasıdır. Lityum yataklarımız var, mühendislerimiz var, şimdi üretim altyapısını kuruyoruz."</blockquote>
            
            <h2>Gelecek: Solid-State Bataryalar</h2>
            <p>Sıvı elektrolitler yerine katı elektrolit kullanan solid-state bataryalar, daha yüksek enerji yoğunluğu ve güvenlik vaat ediyor. Ancak üretim prosesleri daha da hassastır:</p>
            
            <ul>
                <li><strong>Vakum Kaplama:</strong> CVD veya PVD ile nanometre kalınlığında katmanlar.</li>
                <li><strong>Sinterizasyon:</strong> Yüksek sıcaklık ve basınç altında malzeme birleştirme.</li>
                <li><strong>Lazer Kaynaklama:</strong> Geleneksel ultrasonik kaynak yetersiz kalıyor.</li>
            </ul>
            
            <p>MKG Ar-Ge ekibi, solid-state batarya üretim ekipmanlarının geliştirilmesinde aktif rol alıyor. Türkiye'nin enerji depolama alanında küresel bir oyuncu olması için çalışıyoruz.</p>
        `,
        date: "15 Aralık 2025",
        author: "Otomotiv Departmanı",
        readTime: "10 dk",
        tags: ["Otomotiv", "Batarya", "Robotik"],
        image: "/images/blog/batarya-uretim.jpg"
    },
    {
        id: 10,
        slug: "gida-guvenligi-otomasyonu",
        title: "Gıda Güvenliğinde İzlenebilirlik ve Otomasyon",
        size: "standard",
        category: "Endüstri",
        excerpt: "Çiftlikten çatala tam izlenebilirlik. Barkod, RFID ve görüntü işleme sistemleri.",
        content: `
            <p>Gıda güvenliği, tüketici sağlığını korumak ve marka itibarını sürdürmek açısından kritik önem taşır. Bir gıda ürününün çiftlikten sofraya kadar olan yolculuğunu izlemek, <strong>izlenebilirlik (traceability)</strong> ile mümkündür. 2026'da AB ve Türk gıda mevzuatı, tam izlenebilirliği zorunlu kılıyor.</p>
            
            <h2>İzlenebilirlik Nedir?</h2>
            <p>İzlenebilirlik, bir gıda ürününün üretim, işleme ve dağıtım aşamalarındaki tüm hareketlerinin kaydedilmesi ve gerektiğinde geriye doğru takip edilebilmesidir. Bu, "lot numarası" veya "seri numarası" ile her partinin ayrıştırılması anlamına gelir.</p>
            
            <h3>Neden İzlenebilirlik?</h3>
            <ul>
                <li><strong>Geri Çağırma (Recall):</strong> Kontamine bir parti tespit edildiğinde, sadece o parti piyasadan toplanır, tüm üretim değil.</li>
                <li><strong>Regülasyon Uyumu:</strong> EU 178/2002, Türk Gıda Kodeksi, HACCP, ISO 22000 gibi standartlar izlenebilirlik gerektirir.</li>
                <li><strong>Tüketici Güveni:</strong> QR kod okutarak ürünün kaynağını görebilmek, şeffaflık sağlar.</li>
                <li><strong>Tedarik Zinciri Verimliliği:</strong> Stok rotasyonu (FIFO/FEFO) ve raf ömrü yönetimi iyileşir.</li>
            </ul>
            
            <h2>Otomasyon Teknolojileri</h2>
            
            <h3>1. Barkod ve QR Kod Sistemleri</h3>
            <p>En yaygın izlenebilirlik yöntemi, her ürün veya palete benzersiz bir kod atanmasıdır. Bu kodlar, üretim hattındaki her aşamada otomatik okuyucularla taranır.</p>
            
            <ul>
                <li><strong>1D Barkodlar:</strong> EAN-13, Code 128 gibi standart formatlar. Basit ve ucuz.</li>
                <li><strong>2D Kodlar (QR, Data Matrix):</strong> Daha fazla bilgi taşır. URL, tarih, lot numarası, üretim yeri gibi.</li>
                <li><strong>Otomatik Okuyucular:</strong> Konveyör üzerinde sabit kameralar veya lazer tarayıcılar.</li>
            </ul>
            
            <h3>2. RFID (Radio Frequency Identification)</h3>
            <p>RFID etiketleri, radyo frekanslarıyla okunan pasif veya aktif çiplerdir. Barkoddan farkı, görüş hattı gerektirmemesi ve toplu okuma yapabilmesidir.</p>
            
            <ul>
                <li><strong>Palet Seviyesi:</strong> Bir palet üzerindeki onlarca ürün tek geçişte okunur.</li>
                <li><strong>Sıcaklık Sensörleri:</strong> Soğuk zincir takibi için RFID etiketlerine sıcaklık kayıt cihazları entegre edilebilir.</li>
                <li><strong>Okuma Mesafesi:</strong> UHF RFID ile 10 metreye kadar okuma mümkün.</li>
            </ul>
            
            <h3>3. Görüntü İşleme ve AI</h3>
            <p>Gıda güvenliğinde görsel kalite kontrolü kritiktir. Yabancı madde tespiti, renk analizi, şekil kontrolü gibi işlemler AI destekli kameralarla yapılır:</p>
            
            <ul>
                <li><strong>Yabancı Madde Tespiti:</strong> Metal, cam, plastik parçacıkların fotoğrafik tespiti.</li>
                <li><strong>Kalite Derecelendirmesi:</strong> Meyve/sebze sınıflandırması (A, B, C kalitesi).</li>
                <li><strong>Etiket Doğrulama:</strong> OCR (Optical Character Recognition) ile son kullanma tarihinin doğruluğunun kontrolü.</li>
            </ul>
            
            <h2>Üretimde İzlenebilirlik Akışı</h2>
            <p>Bir süt ürünleri fabrikasında izlenebilirlik şu şekilde işler:</p>
            
            <ol>
                <li><strong>Ham madde girişi:</strong> Sütün hangi çiftlikten geldiği, hangi tankere yüklendiği kaydedilir (RFID ile).</li>
                <li><strong>Pastörizasyon:</strong> Sıcaklık ve süre verileri lot numarasına bağlanır.</li>
                <li><strong>Dolum:</strong> Her şişe veya kutu, benzersiz bir seri numarası alır (inkjet baskı).</li>
                <li><strong>Paketleme:</strong> Şişeler kolilere, koliler paletlere yerleştirilir. Hiyerarşik veri yapısı (parent-child ilişkisi) oluşturulur.</li>
                <li><strong>Depolama:</strong> Palet hangi soğuk hücreye kondu, kaydedilir.</li>
                <li><strong>Sevkiyat:</strong> Hangi müşteriye, hangi araçla gitti, tarih-saat damgası ile kaydedilir.</li>
            </ol>
            
            <h2>MES ve ERP Entegrasyonu</h2>
            <p>İzlenebilirlik verileri, MES (Manufacturing Execution System) ve ERP (Enterprise Resource Planning) sistemlerine anlık olarak aktarılır. Bu entegrasyon sayesinde:</p>
            
            <ul>
                <li>Üretim planlaması ile gerçek üretim verileri senkronize olur.</li>
                <li>Maliyet hesaplaması (hangi lot ne kadar hammadde/enerji tüketti) yapılır.</li>
                <li>Müşteri şikayetlerinde hızlı kök neden analizi (root cause analysis) yapılır.</li>
            </ul>
            
            <h2>Soğuk Zincir İzleme</h2>
            <p>Dondurulmuş ve soğutulmuş gıdalarda sıcaklık izleme hayati önem taşır. Otomasyonun rolü:</p>
            
            <ul>
                <li><strong>Gerçek Zamanlı Sıcaklık Sensörleri:</strong> Soğuk odalarda ve araçlarda kablosuz sensörler.</li>
                <li><strong>Alarm Sistemleri:</strong> Belirlenen eşik değerler aşılırsa otomatik SMS/e-posta.</li>
                <li><strong>Veri Logları:</strong> Tüm sıcaklık geçmişi kaydedilir ve denetim için hazır bulundurulur.</li>
            </ul>
            
            <h2>Vaka Çalışması: Et İşleme Tesisi</h2>
            <p>MKG olarak, bir et ürünleri fabrikasında kurduğumuz izlenebilirlik sistemi:</p>
            
            <ul>
                <li>Hayvan küpesi (kulak etiketinden) son ürün ambalajına kadar tam izlenebilirlik.</li>
                <li>RFID palet okuyucularıyla %99.9 okuma doğruluğu.</li>
                <li>Blockchain entegrasyonu ile değiştirilemez kayıtlar (tüketiciler için şeffaflık).</li>
                <li>Geri çağırma simülasyonlarında <strong>2 saat</strong> içinde etkilenen partilerin tespiti (sektör ortalaması 48 saat).</li>
            </ul>
            
            <blockquote>"Gıda güvenliği bir maliyeti değil, itibar sigortasıdır. İzlenebilirlik olmadan büyük perakende zincirlerine giremezsiniz."</blockquote>
            
            <h2>Blockchain ve Gıda</h2>
            <p>2026'da gıda sektöründe blockchain kullanımı artıyor. Her işlem (üretim, depolama, transfer) blok zincirine kaydedilir ve değiştirilemez hale gelir. Tüketiciler QR kod okutarak:</p>
            
            <ul>
                <li>Ürünün kaynağını (çiftlik, tesis),</li>
                <li>Üretim tarihini ve raf ömrünü,</li>
                <li>Kalite sertifikalarını (organik, helal, kosher),</li>
                <li>Karbon ayak izini görebilir.</li>
            </ul>
            
            <h2>Gelecek: IoT ve Akıllı Ambalajlar</h2>
            <p>Yakın gelecekte, her ambalaj "akıllı" olacak. NFC etiketleri veya basılabilir sensörler sayesinde:</p>
            
            <ul>
                <li>Ürün bozulduğunda etiket renk değiştirir.</li>
                <li>Tüketici ambalaja dokunarak son kullanma tarihi ve reçete önerilerini alır.</li>
                <li>Geri dönüşüm bilgileri doğrudan ambalajdan okunur.</li>
            </ul>
            
            <p>MKG Gıda Otomasyonu ekibi olarak, çiftlikten sofraya her aşamada güvenli ve izlenebilir üretim sistemleri kuruyoruz.</p>
        `,
        date: "10 Aralık 2025",
        author: "Gıda Departmanı",
        readTime: "9 dk",
        tags: ["Gıda", "İzlenebilirlik", "Kalite"],
        image: "/images/blog/gida-guvenligi.jpg"
    },
    {
        id: 11,
        slug: "hidrojen-ekonomisi-muhendislik",
        title: "Hidrojen Ekonomisi ve Mühendislik Çözümleri",
        size: "large",
        category: "Energy",
        excerpt: "Geleceğin yakıtı hidrojenin üretimi, depolanması ve dağıtımı için otomasyon altyapısı.",
        content: `
            <p>Küresel enerji dönüşümünde <strong>hidrojen</strong>, fosil yakıtlara alternatif olarak öne çıkıyor. Özellikle yeşil hidrojen (yenilenebilir enerji ile üretilen), 2050 net sıfır hedeflerine ulaşmada kilit rol oynayacak. Ancak hidrojen üretimi, depolanması ve dağıtımı karmaşık mühendislik problemleri içeriyor.</p>
            
            <h2>Hidrojen Üretim Yöntemleri</h2>
            
            <h3>1. Gri Hidrojen (Steam Methane Reforming - SMR)</h3>
            <p>Doğal gazdan hidrojen üretimi. En yaygın ve ucuz yöntem olmasına rağmen CO₂ emisyonu vardır. Otomasyonun rolü: Proses sıcaklığının (800-1000°C) hassas kontrolü, katalizör ömrünün izlenmesi.</p>
            
            <h3>2. Mavi Hidrojen (SMR + CCS)</h3>
            <p>Gri hidrojene karbon yakalama ve depolama (CCS) sisteminin eklenmesi. Karbon nötr olmaya yakın. Otomasyon: CO₂ yakalama verimliliğinin maksimize edilmesi, depolama basıncının kontrolü.</p>
            
            <h3>3. Yeşil Hidrojen (Elektroliz)</h3>
            <p>Suyun elektrik enerjisi ile hidrojen ve oksijene ayrılması. %100 yenilenebilir enerji kullanılırsa tamamen temiz. Bu yöntem üzerine odaklanacağız.</p>
            
            <h2>Elektrolizör Teknolojileri ve Otomasyonu</h2>
            
            <h3>Alkalin Elektrolizörler (AEL)</h3>
            <p>Olgun teknoloji. KOH (potasyum hidroksit) çözeltisi elektrolit olarak kullanılır. Otomasyon gereklilikleri:</p>
            
            <ul>
                <li><strong>Elektrolit Konsantrasyonu:</strong> %25-30 KOH. Otomatik sensörlerle izleme ve dozajlama.</li>
                <li><strong>Sıcaklık Kontrolü:</strong> 60-80°C optimal aralığı. Soğutma sistemi ile stabilizasyon.</li>
                <li><strong>Basınç Regülasyonu:</strong> 1-30 bar. Aşırı basınçta otomatik ventil açma (safety relief).</li>
                <li><strong>Yük Takibi:</strong> Güneş ve rüzgar enerjisi dalgalıdır. Elektrolizör, anlık gücü takip edebilmeli (load following).</li>
            </ul>
            
            <h3>PEM (Proton Exchange Membrane) Elektrolizörler</h3>
            <p>Daha yeni teknoloji. Katı polimer membran kullanır. Avantajları: Yüksek verimlilik (%80+), kompakt tasarım, hızlı yanıt süresi. Otomasyon:</p>
            
            <ul>
                <li><strong>Deiyonize Su Kalitesi:</strong> Çok yüksek saflıkta su gereklidir (konduktivite <0.1 µS/cm). Anlık izleme ve arıtma.</li>
                <li><strong>Membran Basınç Farkı:</strong> Anot ve katot basınç dengesinin korunması. Membran hasarını önlemek kritik.</li>
                <li><strong>Stack Sıcaklığı:</strong> 50-80°C. Soğutma suyu debisi PID kontrol ile ayarlanır.</li>
            </ul>
            
            <h3>SOEC (Solid Oxide Electrolysis Cell)</h3>
            <p>Yüksek sıcaklıkta (700-900°C) çalışır. En yüksek verimlilik (%90+) ama hala ar-ge aşamasında. Otomasyon: Termal döngü yönetimi, seramik malzemelerin termal şoka karşı korunması.</p>
            
            <h2>Güvenlik Otomasyonu</h2>
            <p>Hidrojen, en hafif gaz olup aynı zamanda oldukça reaktiftir. Güvenlik sistemleri hayati önem taşır:</p>
            
            <h3>Gaz Algılama Sistemleri</h3>
            <ul>
                <li><strong>H₂ Sensörleri:</strong> %0.4 (LEL'in %10'u) konsantrasyonda alarm. Tavan seviyesinde çoklu sensörler (hidrojen yukarı çıkar).</li>
                <li><strong>O₂ Sensörleri:</strong> Oksijen zenginleşmesi yanma riskini artırır. %19.5-23.5 aralığı dışında alarm.</li>
                <li><strong>Yanma Tespiti:</strong> Kızılötesi (IR) ve UV dedektörler. Alevlerin milisaniyeler içinde algılanması.</li>
            </ul>
            
            <h3>Acil Durum Kapatma (ESD)</h3>
            <p>Anomali tespit edildiğinde (gaz kaçağı, aşırı sıcaklık, basınç artışı):</p>
            <ol>
                <li>Elektrolizör elektrik beslemesi otomatik kesilir.</li>
                <li>Hidrojen ve oksijen vanalar kapanır (fail-closed solenoid valf).</li>
                <li>Havalandırma fanları maksimum hıza çıkar.</li>
                <li>Alarm sistemleri aktive olur (sesli, görsel, SMS).</li>
            </ol>
            
            <h2>Depolama ve Sıkıştırma</h2>
            <p>Hidrojen düşük yoğunluklu bir gazdır. Depolamak için sıkıştırma veya sıvılaştırma gerekir.</p>
            
            <h3>Yüksek Basınçlı Depolama (350-700 bar)</h3>
            <ul>
                <li><strong>Çok Kademeli Kompresörler:</strong> Pistonlu veya membran tipi. Her kademe PLC ile sıcaklık ve basınç kontrollü.</li>
                <li><strong>Tank İzleme:</strong> Basınç transmitterleri, sıcaklık sensörleri, seviye göstergeleri.</li>
                <li><strong>Hidrojen Saflığı:</strong> Online gaz kromatografisi. %99.95+ saflık gereklidir (fuel cell kullanımında).</li>
            </ul>
            
            <h3>Sıvı Hidrojen (-253°C)</h3>
            <p>En yüksek enerji yoğunluğu sağlar ama enerji yoğun bir proses. Kriyo-jenik pompalar ve tanklar özel malzemelerden (paslanmaz çelik 316L) yapılır. Otomasyon: Vakum izolasyonun sürekli kontrolü, buharlaşma oranının minimizasyonu.</p>
            
            <h2>Dağıtım ve İletim</h2>
            
            <h3>Pipeline Otomasyonu</h3>
            <p>Hidrojen boru hatları, doğal gaz hatlarından farklı tasarlanmalıdır (hidrojen embrittlement riski). SCADA sistemleri ile:</p>
            
            <ul>
                <li>Hat basıncının gerçek zamanlı izlenmesi.</li>
                <li>Kaçak tespiti (akustik sensörler, basınç düşüşü analizi).</li>
                <li>Kompresör istasyonlarının otomatik koordinasyonu.</li>
            </ul>
            
            <h3>Mobil Dağıtım (Tüp Treylerler)</h3>
            <p>Hidrojen istasyonlarına taşıma için yüksek basınçlı tüp treyler kullanılır. Otomasyonla:</p>
            <ul>
                <li>Dolum ve boşaltma işlemlerinin uzaktan kontrolü.</li>
                <li>Tüp basınç dengelemesi (cascade filling).</li>
                <li>Araç konumu ve yük durumunun GPS ile takibi.</li>
            </ul>
            
            <h2>Vaka Çalışması: Yeşil Hidrojen Pilot Tesisi</h2>
            <p>MKG olarak, bir yerli enerji şirketiyle işbirliğinde 1 MW elektrolizör tesisi kurduk:</p>
            
            <ul>
                <li><strong>PEM Elektrolizör:</strong> Günlük 500 kg H₂ üretim kapasitesi.</li>
                <li><strong>Güneş Enerjisi Entegrasyonu:</strong> 2 MW fotovoltaik sistem ile beslenme.</li>
                <li><strong>SCADA ve PLC:</strong> Siemens S7-1500 ile tam otomasyon. Web tabanlı HMI ile uzaktan izleme.</li>
                <li><strong>Güvenlik:</strong> SIL 2 seviyesinde güvenlik PLC (Siemens S7-1500F).</li>
                <li><strong>Verimlilik:</strong> %78 sistem verimi (elektrik → hidrojen).</li>
            </ul>
            
            <blockquote>"Hidrojen sadece bir yakıt değil, enerji depolama çözümüdür. Yaz aylarında fazla güneş enerjisini hidrojen olarak depolayıp kışın kullanabiliyoruz."</blockquote>
            
            <h2>Gelecek: Hidrojen Ekonomisi 2030</h2>
            <p>Uluslararası Enerji Ajansı (IEA) raporlarına göre, 2030 yılında küresel hidrojen talebi 3 katına çıkacak. Otomasyon trendleri:</p>
            
            <ul>
                <li><strong>Gigawatt Ölçeğinde Tesisler:</strong> 100+ MW elektrolizör parkları. Merkezi SCADA ile koordinasyon.</li>
                <li><strong>AI ile Optimizasyon:</strong> Elektrik fiyatları ucuzken üretim, pahalıyken depolama. Yapay zeka ile dinamik planlama.</li>
                <li><strong>Blockchain Tabanlı Sertifikasyon:</strong> Yeşil hidrojenin kaynağı blockchain ile kanıtlanır (green certificate).</li>
                <li><strong>Hibrit Sistemler:</strong> Hidrojen + batarya depolama. Grid stabilizasyonu için.</li>
            </ul>
            
            <p>MKG Enerji Otomasyonu olarak, Türkiye'nin hidrojen ekonomisine geçişinde mühendislik çözümleri sunuyoruz. Temiz enerji geleceğini birlikte inşa ediyoruz.</p>
        `,
        date: "05 Aralık 2025",
        author: "Enerji Departmanı",
        readTime: "11 dk",
        tags: ["Hidrojen", "Enerji", "Gelecek"],
        image: "/images/blog/hidrojen-ekonomi.jpg"
    },
    {
        id: 12,
        slug: "akilli-depo-yonetimi",
        title: "Lojistikte Devrim: Akıllı Depo Yönetimi (AS/RS)",
        size: "standard",
        category: "Robotik",
        excerpt: "Karanlık depolar ve otonom yönlendirmeli araçlar (AGV) ile lojistik verimliliği.",
        content: `
            <p>E-ticaretin patlaması ve just-in-time üretim modelleri, depoculuğu darboğaz haline getirdi. Geleneksel forklift ve manuel toplama (picking) yöntemleri artık yeterli değil. <strong>Akıllı Depo Yönetimi (AS/RS - Automated Storage and Retrieval Systems)</strong>, bu soruna çözüm sunuyor.</p>
            
            <h2>AS/RS Nedir?</h2>
            <p>AS/RS, ürünlerin otomatik olarak depolanması ve gerektiğinde geri alınmasını sağlayan robotik sistemlerdir. İnsan müdahalesi minimum seviyeye iner, hatta tamamen ortadan kalkar ("karanlık depolar").</p>
            
            <h3>AS/RS Türleri</h3>
            
            <h4>1. Unit Load AS/RS (Palet Sistemleri)</h4>
            <p>Standart paletlerin (80x120 cm veya 100x120 cm) depolanması için. Yükseklik 30 metreye kadar çıkabilir. Vinçler (stacker crane), raylar üzerinde hareket ederek paletleri raflara yerleştirir veya alır.</p>
            
            <ul>
                <li><strong>Kapasite:</strong> Koridor başına saatte 40-100 palet giriş/çıkış.</li>
                <li><strong>Hassasiyet:</strong> ±5 mm pozisyon doğruluğu.</li>
                <li><strong>Kontrol:</strong> PLC + WMS (Warehouse Management System) entegrasyonu.</li>
            </ul>
            
            <h4>2. Mini-Load AS/RS (Kutu Sistemleri)</h4>
            <p>Daha küçük kutular ve konteynırlar için. E-ticaret ve ilaç sektöründe yaygın. Hızlı toplama gerektiren uygulamalar için ideal.</p>
            
            <ul>
                <li><strong>Kapasite:</strong> Saatte 400+ kutu.</li>
                <li><strong>Alan Verimliliği:</strong> Geleneksel depoculuğa göre %60-80 daha az alan.</li>
            </ul>
            
            <h4>3. Carousel ve Vertical Lift Modules (VLM)</h4>
            <p>Döner raflar (carousel) veya dikey kaldırma modülleri. "Operatöre mal gelir" (goods-to-person) prensibiyle çalışır. Operatör hareketsiz durur, ürün ona getirilir.</p>
            
            <h2>AGV (Automated Guided Vehicles): Otonom Araçlar</h2>
            <p>AGV'ler, depo içinde malzeme taşımacılığı yapan sürücüsüz araçlardır. Fabrika otomasyonunda da yaygın olarak kullanılır.</p>
            
            <h3>Navigasyon Teknolojileri</h3>
            
            <ul>
                <li><strong>Manyetik Şerit:</strong> Yere gömülü manyetik şeritler izlenir. Eski teknoloji, değişikliklere adapte olması zor.</li>
                <li><strong>Lazer SLAM:</strong> LiDAR sensörleriyle ortam haritası çıkarılır. Dinamik rota planlama mümkün.</li>
                <li><strong>Vision Tabanlı:</strong> Kameralar ile QR kod veya doğal ortam özelliklerini takip.</li>
                <li><strong>UWB (Ultra-Wideband):</strong> Santimetre hassasiyetinde konum belirleme.</li>
            </ul>
            
            <h3>AGV Filo Yönetimi</h3>
            <p>Birden fazla AGV aynı anda çalıştığında, merkezi bir kontrol sistemi (Fleet Management Software) gereklidir:</p>
            
            <ul>
                <li><strong>Trafik Kontrolü:</strong> Çarpışmaları önlemek için dinamik rota optimizasyonu.</li>
                <li><strong>Şarj Yönetimi:</strong> Batarya seviyesi düşük AGV'ler otomatik olarak şarj istasyonuna gider.</li>
                <li><strong>Görev Dağılımı:</strong> En yakın ve en az meşgul AGV'ye görev atanır.</li>
            </ul>
            
            <h2>Karanlık Depolar (Lights-Out Warehouses)</h2>
            <p>İnsan işçilerin olmadığı tamamen otomatik depolar. Işıklar kapalıdır çünkü robotlar aydınlatmaya ihtiyaç duymaz. Örnek: Ocado'nun İngiltere'deki e-ticaret deposu.</p>
            
            <h3>Avantajlar</h3>
            <ul>
                <li><strong>7/24 Operasyon:</strong> Vardiyalar, tatiller veya molalar yoktur.</li>
                <li><strong>Alan Tasarrufu:</strong> Koridor genişlikleri minimize edilir (robot boyutlarına göre).</li>
                <li><strong>Hata Oranı:</strong> İnsan hatası neredeyse sıfır. Barkod/RFID okuma hataları %0.01 altında.</li>
                <li><strong>Çalışma Koşulları:</strong> Aşırı sıcak veya soğuk ortamlarda çalışabilir (örneğin dondurulmuş gıda depoları).</li>
            </ul>
            
            <h2>WMS (Warehouse Management System) Entegrasyonu</h2>
            <p>AS/RS ve AGV'ler, WMS yazılımı ile kontrol edilir. WMS şunları yapar:</p>
            
            <ul>
                <li>Envanter takibi (hangi ürün nerede, kaç adet?)</li>
                <li>Sipariş toplama optimizasyonu (picking route)</li>
                <li>Yenileme stratejileri (FIFO, LIFO, FEFO)</li>
                <li>Raporlama ve KPI izleme (doluluk oranı, çevrim süresi, toplama hızı)</li>
            </ul>
            
            <h3>ERP Entegrasyonu</h3>
            <p>WMS, SAP, Oracle veya yerli ERP sistemleriyle senkronize çalışır. Sipariş geldiği anda WMS'e düşer, ürün toplama işlemi başlar, sevkiyat belgesi otomatik oluşturulur.</p>
            
            <h2>Pick-to-Light ve Put-to-Light Sistemleri</h2>
            <p>Operatör destekli toplamada hız ve doğruluk artırıcı sistemler:</p>
            
            <ul>
                <li><strong>Pick-to-Light:</strong> Raflarda LED göstergeler yanar, operatör hangi gözden kaç adet alacağını görür. Doğru adet alındığında butona basılır, ışık söner.</li>
                <li><strong>Put-to-Light:</strong> Sipariş paketlemede kullanılır. Her sipariş için ayrı ışık, operatör ürünü doğru pakete koyar.</li>
            </ul>
            
            <p>Sonuç: Toplama hızında %40 artış, hata oranında %99 düşüş.</p>
            
            <h2>Vaka Çalışması: E-Ticaret Fulfillment Merkezi</h2>
            <p>MKG olarak, Türkiye'nin en büyük e-ticaret şirketlerinden biri için 50,000 m² otomatik depo kurduk:</p>
            
            <ul>
                <li><strong>Mini-Load AS/RS:</strong> 120,000 kutu kapasitesi.</li>
                <li><strong>AGV Filosu:</strong> 20 adet lazer SLAM navigasyonlu AGV.</li>
                <li><strong>Konveyör Sistemi:</strong> 2 km uzunluğunda. Saatte 15,000 paket kapasitesi.</li>
                <li><strong>WMS:</strong> SAP EWM entegrasyonu.</li>
                <li><strong>Sonuç:</strong> Sipariş işleme süresinde %70 azalma, alan verimliliğinde %80 artış.</li>
            </ul>
            
            <blockquote>"Geleneksel depoculuk yöntemlerimizle bu hıza ulaşmamız imkansızdı. Şimdi bir siparişi 30 dakikada paketleyip sevkiyata hazırlıyoruz."</blockquote>
            
            <h2>Gelecek Trendleri</h2>
            
            <h3>1. Micro-Fulfillment Centers</h3>
            <p>Şehir içi küçük (1000-3000 m²) otomatik depolar. Aynı gün teslimat için. Süpermarketlerin arka alanlarında bile kurulabiliyor.</p>
            
            <h3>2. Drone ve Havadan Envanter</h3>
            <p>Depo içinde uçan drone'lar, barkodları okuyarak envanter sayımı yapar. Günler süren sayım, saatlere iner.</p>
            
            <h3>3. AI Destekli Tahmin</h3>
            <p>Makine öğrenmesi ile talep tahmini. Hangi ürünler yakında çok satılacak? Hızlı erişim bölgelerine önceden yerleştirilir (slotting optimization).</p>
            
            <h3>4. Robot Kollar ile Picking</h3>
            <p>6 eksenli robotlar, vakum veya gripper ile ürünleri toplar. Görüntü işleme ile şekil tanıma. İnsan gibi hassas ama yorulmayan.</p>
            
            <p>MKG Lojistik Otomasyonu olarak, deponuzu geleceğe taşıyoruz. Hız, doğruluk ve verimlilik için bizimle iletişime geçin.</p>
        `,
        date: "01 Aralık 2025",
        author: "Lojistik Ekibi",
        readTime: "10 dk",
        tags: ["Lojistik", "AGV", "Depo"],
        image: "/images/blog/akilli-depo.jpg"
    },
    {
        id: 13,
        slug: "plc-programlama-standartlari",
        title: "PLC Programlamada IEC 61131-3 Standartları",
        size: "standard",
        category: "Yazılım",
        excerpt: "Spaghetti koddan modüler ve yeniden kullanılabilir yazılım mimarisine geçiş.",
        content: `
            <p>PLC programlama, endüstriyel otomasyonun merkezinde yer alır. Ancak birçok fabrikada hala <em>"spaghetti kod"</em> olarak bilinen, karmaşık ve bakımı zor yazılımlar kullanılıyor. <strong>IEC 61131-3 standardı</strong>, bu soruna küresel bir çözüm getiriyor.</p>
            
            <h2>IEC 61131-3 Nedir?</h2>
            <p>IEC 61131-3, PLC programlama dilleri için uluslararası bir standarttır. 1993'te yayımlanmış, en son 2013'te güncellenmiştir. Tüm büyük PLC üreticileri (Siemens, Rockwell, Schneider, Beckhoff, Omron) bu standardı destekler.</p>
            
            <h3>Neden Standart Gerekli?</h3>
            <ul>
                <li><strong>Taşınabilirlik:</strong> Kod, farklı PLC platformları arasında daha kolay adapte edilebilir.</li>
                <li><strong>Bakım:</strong> Standart yapılar, yeni bir mühendis için kodu anlamayı kolaylaştırır.</li>
                <li><strong>Yeniden Kullanılabilirlik:</strong> Fonksiyon ve fonksiyon blokları farklı projelerde kullanılabilir.</li>
                <li><strong>Eğitim:</strong> Mühendisler tek bir standart öğrenirse, tüm platformlarda çalışabilir.</li>
            </ul>
            
            <h2>IEC 61131-3 Programlama Dilleri</h2>
            <p>Standart, 5 farklı programlama dili tanımlar:</p>
            
            <h3>1. Ladder Diagram (LD) - Merdiven Diyagramı</h3>
            <p>En eski ve en yaygın PLC dilidir. Elektrik kontrol şemalarına benzer. Röle mantığı ile çalışan elektrikçilerin kolayca adapte olabileceği bir görsel dildir.</p>
            
            <ul>
                <li><strong>Avantajları:</strong> Görsel, elektrikçiler için tanıdık, basit lojik için hızlı.</li>
                <li><strong>Dezavantajları:</strong> Karmaşık algoritmalar için uygun değil, sayısal işlemler zor.</li>
            </ul>
            
            <h3>2. Function Block Diagram (FBD) - Fonksiyon Blok Diyagramı</h3>
            <p>Blok tabanlı programlama. Her blok bir fonksiyon temsil eder (TIMER, COUNTER, PID vb.). Bloklar grafik olarak bağlanır. Proses kontrol uygulamalarında popülerdir.</p>
            
            <ul>
                <li><strong>Avantajları:</strong> Veri akışını görmek kolay, modüler yapı, PID ve analog kontrol için ideal.</li>
                <li><strong>Dezavantajları:</strong> Çok karmaşık mantıklarda diyagram kalabalıklaşır.</li>
            </ul>
            
            <h3>3. Structured Text (ST) - Yapılandırılmış Metin</h3>
            <p>Pascal/C benzeri yüksek seviye bir dildir. Algoritmalar, matematiksel hesaplamalar ve veri işleme için idealdir. MKG'de en çok tercih ettiğimiz dildir.</p>
            
            <p><strong>Örnek ST Kodu:</strong></p>
            <pre><code>IF Temperature > Setpoint + Hysteresis THEN
    Heater := FALSE;
    Cooler := TRUE;
ELSIF Temperature < Setpoint - Hysteresis THEN
    Heater := TRUE;
    Cooler := FALSE;
ELSE
    Heater := FALSE;
    Cooler := FALSE;
END_IF;</code></pre>
            
            <ul>
                <li><strong>Avantajları:</strong> Güçlü, okunaklı, karmaşık algoritmalara uygun, debugging kolay.</li>
                <li><strong>Dezavantajları:</strong> Elektrik kökenli mühendisler için öğrenme eğrisi var.</li>
            </ul>
            
            <h3>4. Instruction List (IL) - Komut Listesi</h3>
            <p>Assembly diline benzer. Düşük seviye, satır satır komutlar. Artık pek tercih edilmiyor, standartın 3. versiyonunda "deprecated" olarak işaretlendi.</p>
            
            <h3>5. Sequential Function Chart (SFC) - Sıralı Fonksiyon Şeması</h3>
            <p>Durum makineleri (state machine) için idealdir. Örneğin: "Başlangıç → Doldurma → Karıştırma → Boşaltma → Temizleme" gibi ardışık adımları programlamak için.</p>
            
            <ul>
                <li><strong>Avantajları:</strong> Batch proses ve sıralı işlemler için mükemmel, görsel olarak anlaşılır.</li>
                <li><strong>Dezavantajları:</strong> Sürekli işlemler (continuous process) için uygun değil.</li>
            </ul>
            
            <h2>Program Organization Units (POU)</h2>
            <p>IEC 61131-3, kodun nasıl organize edileceğini de tanımlar:</p>
            
            <h3>1. Function (Fonksiyon)</h3>
            <p>Basit, durumsuz (stateless) kod blokları. Aynı girişler her zaman aynı çıkışı verir. Örnek: ADD, MUL, SQRT.</p>
            
            <h3>2. Function Block (FB)</h3>
            <p>Durum saklayan (stateful) kod blokları. İç değişkenlere sahiptir. Örnek: TON (timer), CTU (counter), PID kontrolör.</p>
            
            <p><strong>Örnek FB Tanımı:</strong></p>
            <pre><code>FUNCTION_BLOCK ConveyorControl
VAR_INPUT
    StartButton : BOOL;
    StopButton : BOOL;
END_VAR
VAR_OUTPUT
    MotorRun : BOOL;
END_VAR
VAR
    Running : BOOL; // Internal state
END_VAR

IF StartButton AND NOT Running THEN
    Running := TRUE;
ELSIF StopButton THEN
    Running := FALSE;
END_IF;

MotorRun := Running;
END_FUNCTION_BLOCK</code></pre>
            
            <h3>3. Program</h3>
            <p>Ana program bloğu. PLC başladığında çalışır. Genellikle FB'lerin çağrıldığı yerdir.</p>
            
            <h2>Değişken Tipleri ve Kapsamı</h2>
            <p>Standart, değişken tanımlamalarını da düzenler:</p>
            
            <ul>
                <li><strong>VAR_INPUT:</strong> Girdi değişkenleri (sadece okunabilir).</li>
                <li><strong>VAR_OUTPUT:</strong> Çıktı değişkenleri.</li>
                <li><strong>VAR_IN_OUT:</strong> Hem girdi hem çıktı (referans ile geçiş).</li>
                <li><strong>VAR:</strong> Lokal değişkenler.</li>
                <li><strong>VAR_GLOBAL:</strong> Tüm program boyunca erişilebilir.</li>
                <li><strong>VAR_RETAIN:</strong> Güç kesildiğinde bellekte kalır.</li>
            </ul>
            
            <h2>Best Practices (En İyi Uygulamalar)</h2>
            
            <h3>1. Modülerlik</h3>
            <p>Her makine veya fonksiyon için ayrı FB oluşturun. Örneğin: ConveyorControl, MixerControl, FillingStation.</p>
            
            <h3>2. Anlamlı İsimlendirme</h3>
            <p>❌ Kötü: M1, T5, Q0.3<br>
            ✅ İyi: ConveyorMotor, MixingTimer, EmergencyStopRelay</p>
            
            <h3>3. Yorum Satırları</h3>
            <p>Her FB ve karmaşık lojik bloğu açıklayın. 6 ay sonra kodu açtığınızda anlayabilmelisiniz.</p>
            
            <h3>4. Versiyon Kontrolü</h3>
            <p>Git, SVN veya PLC üreticisinin kendi versiyon kontrol sistemini kullanın. Her değişikliği kaydedin.</p>
            
            <h3>5. Simülasyon ve Test</h3>
            <p>Kod yazıldıktan sonra, PLCSim, Factory I/O gibi araçlarla test edin. Fiziksel donanım olmadan debugging yapın.</p>
            
            <h2>Vaka Çalışması: Otomotiv Montaj Hattı</h2>
            <p>MKG olarak, bir otomotiv fabrikasında 120+ PLC'li montaj hattını IEC 61131-3 standartlarına göre yeniden kodladık:</p>
            
            <ul>
                <li><strong>Öncesi:</strong> Her PLC farklı stilde yazılmış Ladder kod. Toplam 50,000+ satır. Bakım süresi: makine başına 4 saat.</li>
                <li><strong>Sonrası:</strong> Modüler FB yapısı. 200+ yeniden kullanılabilir FB. Toplam kod %40 azaldı. Bakım süresi: makine başına 45 dakika.</li>
                <li><strong>Ek Kazanım:</strong> Yeni bir makine eklemek 2 gün yerine 4 saate indi.</li>
            </ul>
            
            <blockquote>"Standart kod yazmak, başta zaman alır gibi görünür ama uzun vadede inanılmaz zaman kazandırır. Ayrıca ekipteki herkes kodu anlayabiliyor."</blockquote>
            
            <h2>Siemens TIA Portal ve Rockwell Studio 5000 Karşılaştırması</h2>
            <p>Her iki platform da IEC 61131-3'ü destekler ama bazı farklılıklar var:</p>
            
            <ul>
                <li><strong>Siemens:</strong> ST diline "SCL" der. FB'leri "DB" (Data Block) ile saklar. OOP (Object-Oriented Programming) desteği güçlü.</li>
                <li><strong>Rockwell:</strong> ST diline sadık. Add-On Instructions (AOI) ile FB benzeri yapılar. Ladder daha baskın.</li>
            </ul>
            
            <h2>Gelecek: PLCopen Motion Control</h2>
            <p>IEC 61131-3'ün üzerine kurulu PLCopen standardı, hareket kontrolü için fonksiyonlar tanımlar (MC_MoveAbsolute, MC_MoveVelocity). Servo motor ve robotik uygulamalarda standart haline geliyor.</p>
            
            <p>MKG Yazılım Ekibi olarak, tüm projelerimizi IEC 61131-3 standartlarına göre geliştiriyoruz. Temiz, bakımı kolay ve sürdürülebilir kod için bizimle çalışın.</p>
        `,
        date: "28 Kasım 2025",
        author: "Yazılım Ekibi",
        readTime: "12 dk",
        tags: ["PLC", "Yazılım", "Mühendislik"],
        image: "/images/blog/plc-programlama.jpg"
    },
    {
        id: 14,
        slug: "pano-tasarimi-emc",
        title: "Endüstriyel Pano Tasarımında EMC Kriterleri",
        size: "standard",
        category: "Endüstri",
        excerpt: "Elektromanyetik uyumluluk (EMC) için topraklama ve kablolama teknikleri.",
        content: `
            <p>Endüstriyel otomasyonda en sık karşılaşılan sorunlardan biri <strong>elektromanyetik girişim (EMI)</strong>dir. PLC'ler yanlış komutlar gönderir, sensörler hatalı okumalar yapar, HMI ekranları kilitlenir. Bunların çoğu, zayıf <strong>EMC (Electromagnetic Compatibility - Elektromanyetik Uyumluluk)</strong> tasarımından kaynaklanır.</p>
            
            <h2>EMC Nedir ve Neden Önemlidir?</h2>
            <p>EMC, bir elektrikli ekipmanın hem elektromanyetik girişime sebep olmadan çalışması hem de çevresindeki girişimlerden etkilenmemesidir. Yani:</p>
            
            <ul>
                <li><strong>Emisyon (Emission):</strong> Ekipmanın yaydığı elektromanyetik alanlar başka cihazlara zarar vermemelidir.</li>
                <li><strong>Bağışıklık (Immunity):</strong> Ekipman, çevredeki elektromanyetik alanlara dayanıklı olmalıdır.</li>
            </ul>
            
            <h3>EMC Sorunlarının Belirtileri</h3>
            <ul>
                <li>Analog sensörlerden gelen sinyallerde dalgalanmalar (noise)</li>
                <li>Frekans konvertörü açıldığında PLC'nin resetlenmesi</li>
                <li>Yüksek gerilim anahtarlama sırasında HMI donması</li>
                <li>İletişim hatlarında (RS-485, Profibus) veri kaybı</li>
            </ul>
            
            <h2>EMC Standartları</h2>
            <p>AB ve Türkiye'de endüstriyel ekipmanlar için EN 61000 serisi standartlar geçerlidir:</p>
            
            <ul>
                <li><strong>EN 61000-6-2:</strong> Endüstriyel ortamlar için bağışıklık gereklilikleri.</li>
                <li><strong>EN 61000-6-4:</strong> Endüstriyel ortamlar için emisyon sınırları.</li>
                <li><strong>EN 61000-4 serisi:</strong> Test yöntemleri (ESD, burst, surge, radiated immunity vb.).</li>
            </ul>
            
            <h2>Topraklama (Grounding) Prensipleri</h2>
            <p>İyi bir topraklama, EMC'nin temelidir. Ancak yanlış yapılırsa topraklama kendisi sorun kaynağı olabilir.</p>
            
            <h3>1. Tek Nokta Topraklama vs. Çok Nokta Topraklama</h3>
            
            <ul>
                <li><strong>Tek Nokta (Single Point):</strong> Düşük frekanslarda (<1 MHz) ideal. Tüm ekipmanlar tek bir toprak noktasına bağlanır. Toprak döngüleri (ground loop) oluşmaz.</li>
                <li><strong>Çok Nokta (Multipoint):</strong> Yüksek frekanslarda ideal. Her ekipman en yakın toprak noktasına bağlanır. Endüksiyon empedansını azaltır.</li>
            </ul>
            
            <p>Endüstriyel panolarda genellikle <em>hibrit topraklama</em> kullanılır: Güç devreleri tek nokta, sinyal devreleri çok nokta.</p>
            
            <h3>2. Topraklama Barası (Busbar)</h3>
            <p>Pano içinde bakır topraklama barası kullanılmalıdır. En az 10 mm² kesit, tercihen 25 mm². Boya veya oksit tabakası olmamalı.</p>
            
            <h3>3. Ekipman Topraklama Sırası</h3>
            <ol>
                <li>Pano gövdesi (chassis ground)</li>
                <li>DIN rayları</li>
                <li>PLC ve hassas cihazlar</li>
                <li>Güç kaynakları</li>
                <li>Frekans konvertörleri (en son, çünkü en fazla gürültü kaynağı)</li>
            </ol>
            
            <h2>Kablolama Teknikleri</h2>
            
            <h3>1. Güç ve Sinyal Kablolarının Ayrılması</h3>
            <p>En temel kural: Güç kabloları ve sinyal kabloları <strong>asla</strong> yan yana gitmemelidir. Minimum mesafe:</p>
            
            <ul>
                <li>Paralel gidiş: En az 20 cm (daha iyisi 30 cm)</li>
                <li>Çaprazlama: 90° açıyla kesişmeli, paralel olmamalı</li>
            </ul>
            
            <h3>2. Ekranlama (Shielding)</h3>
            <p>Analog sinyaller, iletişim kabloları ve encoder kabloları ekranlı olmalıdır. Ekran bağlantı noktaları:</p>
            
            <ul>
                <li><strong>360° Bağlantı:</strong> Kablo girişinde ekran, pano gövdesine 360° çevresel olarak bağlanır. Klemens değil, metal kablo gland kullanılır.</li>
                <li><strong>Her İki Uç:</strong> Yüksek frekanslarda ekranın her iki ucu da topraklanmalı. Düşük frekanslarda tek uç yeterli (toprak döngüsü önleme).</li>
            </ul>
            
            <h3>3. Bükümlü Çift (Twisted Pair) Kablolar</h3>
            <p>Analog 4-20 mA ve diferansiyel iletişim hatları için bükümlü çift kablo kullanılmalıdır. Burulma sayısı arttıkça EMC performansı artar.</p>
            
            <h2>Filtreleme</h2>
            
            <h3>1. Güç Kaynağı Filtresi</h3>
            <p>Pano girişine EMI filtresi takılmalıdır. Şebekeden gelen gürültüyü bloke eder ve panodaki ekipmanların şebekeye yayacağı gürültüyü engeller.</p>
            
            <h3>2. Ferrit Filtreler</h3>
            <p>Motor kabloları ve iletişim hatlarına klipsli ferrit filtre eklenebilir. Özellikle retrof fit uygulamalarında pratiktir.</p>
            
            <h3>3. RC Snubber Devreleri</h3>
            <p>Röle ve kontaktör bobinleri üzerine RC snubber (bastırıcı) devreleri eklenir. Anahtarlama sırasında oluşan yüksek frekanslı spike'ları (ani gerilimleri) azaltır.</p>
            
            <h2>Pano İçi Düzen (Layout)</h2>
            
            <h3>Bölgeleme (Zoning)</h3>
            <p>Pano içi şu bölgelere ayrılmalıdır:</p>
            
            <ol>
                <li><strong>Güç Bölgesi:</strong> Ana şalter, kontaktörler, motorların devreleri. En soldaki veya en alttaki bölge.</li>
                <li><strong>Kontrol Bölgesi:</strong> PLC, güç kaynakları, röle kartları. Ortada veya sağda.</li>
                <li><strong>Sinyal Bölgesi:</strong> I/O modülleri, terminal blokları. Kontrol bölgesinin yanında.</li>
                <li><strong>İletişim Bölgesi:</strong> Anahtarlar (switch), gateway'ler. Tercihen ayrı bir kompartımanda.</li>
            </ol>
            
            <h3>Hava Akışı</h3>
            <p>Soğutma fanları, sıcak havanın üstten çıkması ve soğuk havanın alttan girmesi prensibine göre yerleştirilmelidir. Frekans konvertörleri en üstte değil, orta seviyede olmalı (en sıcak bölge üsttedir).</p>
            
            <h2>Test ve Doğrulama</h2>
            
            <h3>Ön Testler (Fabrika İçi)</h3>
            <ul>
                <li><strong>İzolasyon Testi:</strong> Megger ile 500V DC izolasyon direnci >100 MΩ olmalı.</li>
                <li><strong>Topraklama Sürekliliği:</strong> Tüm metal parçalar arasında <0.1 Ω direnç.</li>
                <li><strong>HiPot Test:</strong> Yüksek gerilim dayanımı (opsiyonel, kritik uygulamalarda).</li>
            </ul>
            
            <h3>EMC Test Laboratuvarı</h3>
            <p>CE işareti almak için akredite laboratuvarlarda test gereklidir:</p>
            
            <ul>
                <li><strong>ESD (Electrostatic Discharge):</strong> ±8 kV temas, ±15 kV hava boşaltımı.</li>
                <li><strong>EFT/Burst:</strong> Hızlı geçici atımlar (±4 kV güç hatlarında).</li>
                <li><strong>Surge:</strong> Yıldırım simülasyonu (±2 kV hat-toprak).</li>
                <li><strong>Radiated Immunity:</strong> 10 V/m elektromanyetik alan dayanımı.</li>
            </ul>
            
            <h2>Vaka Çalışması: Tekstil Fabrikası EMC Revizyonu</h2>
            <p>Bir tekstil fabrikasında, boyama makinelerinin PLC'leri sürekli hata veriyordu. MKG olarak EMC denetimi yaptık:</p>
            
            <ul>
                <li><strong>Sorun 1:</strong> Frekans konvertörü motor kabloları ekransızdı. → Ekranlı kablo ile değiştirildi.</li>
                <li><strong>Sorun 2:</strong> Analog sensör kabloları, 400V güç kabloları ile aynı kablo kanalında gidiyordu. → Ayrı kanallar yapıldı.</li>
                <li><strong>Sorun 3:</strong> Topraklama barası paslanmıştı. → Yeni bakır bara, tüm bağlantılar yenilendi.</li>
                <li><strong>Sonuç:</strong> PLC hata sayısı %95 azaldı. Üretim verimliliği %18 arttı.</li>
            </ul>
            
            <blockquote>"EMC sorunları gözle görülmez ama sonuçları yıkıcıdır. Doğru tasarım, hem ilk yatırımda hem de işletme maliyetlerinde tasarruf sağlar."</blockquote>
            
            <h2>Gelecek: EMC Simülasyonları</h2>
            <p>Artık pano tasarımı sırasında EMC performansı CAD ortamında simüle edilebiliyor. ANSYS, CST gibi yazılımlarla elektromanyetik alanlar modellenir. Fiziksel prototip yapmadan zayıf noktalar tespit edilir.</p>
            
            <p>MKG Elektrik Departmanı olarak, CE ve UL standartlarına uygun pano tasarım ve üretimi yapıyoruz. EMC testlerinden geçen, güvenilir panolar için bizimle iletişime geçin.</p>
        `,
        date: "25 Kasım 2025",
        author: "Elektrik Departmanı",
        readTime: "10 dk",
        tags: ["Elektrik", "Tasarım", "Kalite"],
        image: "/images/blog/pano-tasarimi.jpg"
    },
    {
        id: 15,
        slug: "endustriyel-nesnelerin-interneti-iiot",
        title: "IIoT: Endüstriyel Nesnelerin İnterneti Nedir?",
        size: "large",
        category: "Endüstri",
        excerpt: "Sensörlerden buluta veri akışı. MQTT ve OPC-UA protokollerinin karşılaştırması.",
        content: `
            <p><strong>IIoT (Industrial Internet of Things)</strong>, fabrikaların dijital dönüşümünün merkezinde yer alır. Makineler, sensörler ve sistemler artık sadece çalışmıyor, aynı zamanda sürekli veri üretiyor ve birbirleriyle konuşuyor.</p>
            
            <h2>IIoT vs. Geleneksel Otomasyon</h2>
            <p>Geleneksel otomasyon: PLC, sensörler ve aktüatörler kapalı bir döngüde çalışır. Veriler fabrika dışına çıkmaz, gerçek zamanlı analiz sınırlıdır.</p>
            
            <p>IIoT: Sensörlerden gelen veriler bulut platformlarına aktarılır, yapay zeka algoritmaları ile işlenir, uzaktan erişim sağlanır, tahmine dayalı kararlar alınır.</p>
            
            <h2>IIoT Mimarisi: 4 Katman</h2>
            
            <h3>1. Algılama Katmanı (Sensing Layer)</h3>
            <p>Fiziksel dünyadan veri toplayan sensörler:</p>
            <ul>
                <li>Sıcaklık, basınç, titreşim sensörleri</li>
                <li>Akım ve gerilim ölçüm cihazları</li>
                <li>GPS modülleri (konum takibi)</li>
                <li>RFID okuyucular (asset tracking)</li>
            </ul>
            
            <h3>2. İletişim Katmanı (Communication Layer)</h3>
            <p>Verilerin taşınması için:</p>
            <ul>
                <li><strong>Kablolu:</strong> Ethernet, Profinet, EtherCAT</li>
                <li><strong>Kablosuz:</strong> Wi-Fi, 4G/5G, LoRa, NB-IoT</li>
                <li><strong>Protokoller:</strong> MQTT, OPC-UA, Modbus TCP</li>
            </ul>
            
            <h3>3. Edge/Gateway Katmanı</h3>
            <p>Verilerin ön işlenmesi (pre-processing):</p>
            <ul>
                <li>Ham verilerin filtrelenmesi</li>
                <li>Veri sıkıştırma (bandwidth tasarrufu)</li>
                <li>Yerel karar alma (edge computing)</li>
            </ul>
            
            <h3>4. Bulut/Platform Katmanı</h3>
            <p>Veri depolama, analiz ve görselleştirme:</p>
            <ul>
                <li>Zaman serisi veritabanları (InfluxDB, TimescaleDB)</li>
                <li>Big Data analitiği (Hadoop, Spark)</li>
                <li>Makine öğrenmesi (TensorFlow, Azure ML)</li>
                <li>Dashboard ve raporlama (Grafana, Power BI)</li>
            </ul>
            
            <h2>İletişim Protokolleri Karşılaştırması</h2>
            
            <h3>MQTT (Message Queuing Telemetry Transport)</h3>
            <p>Hafif, publish-subscribe modelli bir protokol. IoT cihazları için optimize edilmiştir.</p>
            
            <ul>
                <li><strong>Avantajları:</strong> Düşük bant genişliği, düşük güç tüketimi, güvenilir mesaj iletimi (QoS seviyeleri).</li>
                <li><strong>Dezavantajları:</strong> Gerçek zamanlı kontrol için yeterince hızlı değil.</li>
                <li><strong>Kullanım Alanı:</strong> Telemetri, uzaktan izleme, sensör verisi toplama.</li>
            </ul>
            
            <h3>OPC-UA (OPC Unified Architecture)</h3>
            <p>Endüstriyel otomasyon için tasarlanmış, platform bağımsız bir protokol.</p>
            
            <ul>
                <li><strong>Avantajları:</strong> Güvenlik (şifreleme, kimlik doğrulama), semantik veri modeli, gerçek zamanlı performans.</li>
                <li><strong>Dezavantajları:</strong> MQTT'ye göre daha karmaşık, kurulum zahmetli.</li>
                <li><strong>Kullanım Alanı:</strong> PLC-MES entegrasyonu, makine-makine iletişimi, SCADA sistemleri.</li>
            </ul>
            
            <h3>Modbus TCP</h3>
            <p>Eski ama hala yaygın kullanılan bir protokol.</p>
            <ul>
                <li><strong>Avantajları:</strong> Basit, geniş cihaz desteği.</li>
                <li><strong>Dezavantajları:</strong> Güvenlik zayıf, büyük veri setleri için yavaş.</li>
            </ul>
            
            <h2>Veri Güvenliği ve Gizliliği</h2>
            <p>IIoT'nin en büyük riski siber güvenliktir. Önlemler:</p>
            
            <ul>
                <li><strong>TLS/SSL Şifreleme:</strong> Tüm veri trafiği şifreli olmalı.</li>
                <li><strong>X.509 Sertifikaları:</strong> Cihaz kimlik doğrulaması.</li>
                <li><strong>VPN Tünelleri:</strong> Buluta güvenli bağlantı.</li>
                <li><strong>Firewall ve IDS/IPS:</strong> Anormal trafiği engellemek.</li>
            </ul>
            
            <h2>Vaka Çalışması: Otomotiv Presleme Tesisi</h2>
            <p>MKG olarak, bir otomotiv yan sanayi fabrikasında 50+ presi IIoT ile donatdık:</p>
            
            <ul>
                <li><strong>Sensörler:</strong> Her press üzerinde titreşim, sıcaklık ve enerji tüketimi sensörleri.</li>
                <li><strong>Edge Gateway:</strong> Siemens IOT2050. Saniyede 100+ veri noktası toplama.</li>
                <li><strong>Protokol:</strong> OPC-UA (PLC'lerden veri okuma) + MQTT (buluta gönderme).</li>
                <li><strong>Bulut:</strong> AWS IoT Core + TimeStream veritabanı.</li>
                <li><strong>Sonuç:</strong> Kestirimci bakım ile planlanmamış duruşlar %60 azaldı. Enerji tüketimi %12 düştü.</li>
            </ul>
            
            <blockquote>"IIoT sadece sensör takmak değildir. Veriyi toplamak, işlemek ve eyleme dönüştürmek gerekir. Biz bunu yapıyoruz."</blockquote>
            
            <h2>Gelecek: 5G ve Edge AI</h2>
            <p>5G ağları, IIoT için oyunun kurallarını değiştirecek:</p>
            
            <ul>
                <li><strong>Düşük Gecikme:</strong> <1 ms latency ile gerçek zamanlı kontrol bulut üzerinden mümkün.</li>
                <li><strong>Yüksek Cihaz Yoğunluğu:</strong> km² başına 1 milyon cihaz.</li>
                <li><strong>Network Slicing:</strong> Kritik uygulamalar için ayrılmış bant genişliği.</li>
            </ul>
            
            <p>Edge AI ile, yapay zeka modelleri artık bulutta değil, fabrika içindeki edge cihazlarda çalışacak. Daha hızlı, daha güvenli, daha özerk sistemler.</p>
            
            <p>MKG Dijital Dönüşüm ekibi olarak, IIoT altyapınızı kuruyoruz. Sensörden buluta, veriden aksiyona tam çözüm.</p>
        `,
        date: "20 Kasım 2025",
        author: "Dijital Dönüşüm",
        readTime: "9 dk",
        tags: ["IoT", "Veri", "Teknoloji"],
        image: "/images/blog/iiot.jpg"
    },
    {
        id: 16,
        slug: "su-aritma-otomasyonu",
        title: "Akıllı Şehirler için Su Arıtma Otomasyonu",
        size: "standard",
        category: "Endüstri",
        excerpt: "Kritik altyapı tesislerinde kesintisiz ve güvenli operasyon için otomasyon çözümleri.",
        content: `
            <p>Temiz su erişimi, modern toplumların en temel ihtiyaçlarından biridir. Ancak artan nüfus ve iklim değişikliği, su kaynaklarını baskı altına alıyor. <strong>Akıllı su yönetimi</strong> ve <strong>otomasyon</strong>, bu zorluklarla başa çıkmanın anahtarıdır.</p>
            
            <h2>Su Arıtma Süreçleri</h2>
            <p>Bir su arıtma tesisinde temel adımlar:</p>
            
            <ol>
                <li><strong>Ön Arıtma:</strong> Izgaralarla katı atıkların tutulması, kum ve yağ tutucular.</li>
                <li><strong>Koagülasyon/Flokülasyon:</strong> Kimyasal dozaj ile askıdaki partiküllerin birleşmesi.</li>
                <li><strong>Çöktürme:</strong> Ağır partiküllerin gravite ile dipte toplanması.</li>
                <li><strong>Filtrasyon:</strong> Kum, kömür veya membran filtrelerden geçirme.</li>
                <li><strong>Dezenfeksiyon:</strong> Klor, ozon veya UV ile mikroorganizma temizliği.</li>
                <li><strong>pH Ayarlama:</strong> Son ürünün pH dengelemesi.</li>
            </ol>
            
            <h2>Otomasyonun Kritik Rolleri</h2>
            
            <h3>1. Kimyasal Dozajlama</h3>
            <p>Koagülant (alüminyum sülfat, demirli tuzlar) ve klor dozajı suyun kalitesine göre dinamik olarak ayarlanmalıdır. Manuel dozaj hem verimsiz hem de tehlikelidir.</p>
            
            <ul>
                <li><strong>Online Sensörler:</strong> Bulanıklık (turbidity), pH, çözünmüş oksijen, klor seviyesi anlık ölçülür.</li>
                <li><strong>PID Kontrol:</strong> Dozaj pompaları, hedef değerlere ulaşmak için otomatik ayarlanır.</li>
                <li><strong>Alarm Sistemleri:</strong> Aşırı dozaj veya eksik dozaj durumunda operatör uyarılır.</li>
            </ul>
            
            <h3>2. Pompa İstasyonları</h3>
            <p>Su dağıtım ağındaki pompa istasyonları, şebeke basıncını ve debisini dengeler. Otomasyon sayesinde:</p>
            
            <ul>
                <li><strong>VFD (Variable Frequency Drive):</strong> Pompalar sabit hızda değil, talebi göre hız değiştirir. Enerji tasarrufu %30-50.</li>
                <li><strong>Kaskad Kontrol:</strong> Birden fazla pompa varsa, yük eşit paylaşılır. En verimli pompa kombinasyonu seçilir.</li>
                <li><strong>Dry-run Protection:</strong> Pompa kuruya çalışırsa (tank boşsa) otomatik durdurulur.</li>
            </ul>
            
            <h3>3. Membran Filtrasyon (MBR, RO)</h3>
            <p>Membran biyoreaktör (MBR) ve ters ozmos (RO) sistemleri hassas kontrol gerektirir:</p>
            
            <ul>
                <li><strong>TMP (Transmembrane Pressure) İzleme:</strong> Membran tıkanıklığının erken tespiti.</li>
                <li><strong>Otomatik Geri Yıkama (Backwash):</strong> Belirli aralıklarla veya basınç artışında membranlar temizlenir.</li>
                <li><strong>CIP (Clean-in-Place):</strong> Kimyasal temizlik döngüleri otomatik başlatılır.</li>
            </ul>
            
            <h2>SCADA ile Merkezi İzleme</h2>
            <p>Bir şehir genelinde onlarca arıtma tesisi ve yüzlerce pompa istasyonu olabilir. SCADA sistemi ile:</p>
            
            <ul>
                <li>Tüm tesisler tek bir merkezden izlenir.</li>
                <li>Su depolama tankları seviye kontrolü yapılır.</li>
                <li>Şebeke basıncı ve debi haritası gerçek zamanlı görüntülenir.</li>
                <li>Su kayıpları (kaçak) tespit edilir.</li>
            </ul>
            
            <h3>Uzaktan Müdahale</h3>
            <p>RTU (Remote Terminal Unit) ile uzak istasyonlar kontrol edilir. Operatör sahaya gitmeden pompayı açabilir, vanaları kapatabilir.</p>
            
            <h2>Güvenlik ve Redundancy</h2>
            <p>Su tesisleri kritik altyapıdır. Tek bir arıza şehri susuz bırakabilir. Önlemler:</p>
            
            <ul>
                <li><strong>Yedekli PLC:</strong> Aktif-pasif iki PLC. Biri arızalanırsa diğeri devreye girer.</li>
                <li><strong>UPS ve Jeneratör:</strong> Elektrik kesildiğinde otomatik jeneratör devreye girer.</li>
                <li><strong>Watchdog Timer:</strong> PLC donma yapmazsa periyodik sinyal gönderir, yoksa reset edilir.</li>
            </ul>
            
            <h2>Vaka Çalışması: Büyükşehir Belediyesi Su ve Kanalizasyon İdaresi</h2>
            <p>MKG olarak, 500,000 nüfusluk bir şehir için merkezi SCADA kurulumu gerçekleştirdik:</p>
            
            <ul>
                <li><strong>42 Pompa İstasyonu:</strong> Gerçek zamanlı izleme ve kontrol.</li>
                <li><strong>3 İçme Suyu Arıtma Tesisi:</strong> Tam otomasyon, kimyasal dozaj optimizasyonu.</li>
                <li><strong>15 Su Deposu:</strong> Seviye ve basınç kontrolü.</li>
                <li><strong>Sonuç:</strong> Enerji maliyetlerinde %28 tasarruf, su kayıplarında %15 azalma, operasyonel verimlilik artışı.</li>
            </ul>
            
            <blockquote>"Otomasyon öncesi, bir arıza ihbarını almamız 30 dakika sürüyordu. Şimdi SCADA otomatik alarm veriyor, ekibimiz 5 dakikada müdahale ediyor."</blockquote>
            
            <h2>Gelecek: AI ve Dijital İkiz</h2>
            <p>Su sektöründe dijital dönüşüm hızlanıyor:</p>
            
            <ul>
                <li><strong>Kestirimci Bakım:</strong> Pompa titreşim verileri AI ile analiz edilir, arıza önceden tahmin edilir.</li>
                <li><strong>Su Talebi Tahmini:</strong> Makine öğrenmesi ile günlük/saatlik su tüketim modelleri çıkarılır, pompa programları optimize edilir.</li>
                <li><strong>Dijital İkiz:</strong> Şebeke simülasyonları ile, vana kapamalarının etkisi test edilir.</li>
            </ul>
            
            <p>MKG Proje Ekibi olarak, temiz su için çalışıyoruz. Su arıtma ve dağıtım otomasyonunda uzman ekibimizle yanınızdayız.</p>
        `,
        date: "15 Kasım 2025",
        author: "Proje Ekibi",
        readTime: "9 dk",
        tags: ["Su", "Altyapı", "Otomasyon"],
        image: "/images/blog/su-aritma.jpg"
    },
    {
        id: 17,
        slug: "servo-motor-teknolojileri",
        title: "Servo Motor Teknolojilerinde Yenilikler",
        size: "standard",
        category: "Robotik",
        excerpt: "Daha hassas, daha hızlı, daha küçük. Yeni nesil servo sürücülerin yetenekleri.",
        content: `
            <p>Hareket kontrolü, modern otomasyonun kalbinde yer alır. Robot kollarından CNC tezgahlara, paketleme makinelerinden pick-and-place sistemlerine kadar her yerde <strong>servo motorlar</strong> kullanılır. 2026'da servo teknolojisi hem daha güçlü hem de daha kompakt hale geliyor.</p>
            
            <h2>Servo Motor Nedir?</h2>
            <p>Servo motor, pozisyon, hız ve tork kontrolü için kapalı döngü feedback sistemine sahip bir elektrik motorudur. Açık döngülü step motorlardan farklı olarak, gerçek pozisyonunu sürekli ölçer ve hedefe ulaşmak için kendini düzeltir.</p>
            
            <h3>Servo vs. Step Motor</h3>
            <ul>
                <li><strong>Servo:</strong> Yüksek hız, yüksek tork, kapalı döngü, daha pahalı.</li>
                <li><strong>Stepper:</strong> Basit kontrol, düşük maliyet, açık döngü, adım kayıplarına duyarlı.</li>
            </ul>
            
            <h2>Yeni Nesil Servo Teknolojileri</h2>
            
            <h3>1. Tek Kablo Teknolojisi (OCT - One Cable Technology)</h3>
            <p>Geleneksel servo sistemlerde güç ve encoder (feedback) kabloları ayrıdır. OCT ile tek bir hibrit kabloda hem güç hem de sinyal taşınır.</p>
            
            <ul>
                <li><strong>Avantajlar:</strong> Kablolama basitleşir, montaj süresi %40 azalır, EMC performansı artar.</li>
                <li><strong>Örnek:</strong> Siemens Sinamics S210, Beckhoff One Cable Technology.</li>
            </ul>
            
            <h3>2. Entegre Güvenli Hareket (Safe Motion)</h3>
            <p>Endüstriyel güvenlik standartları (ISO 13849, IEC 61508), makine durduğunda motorun da güvenli bir şekilde durmasını gerektirir. Safe Motion fonksiyonları:</p>
            
            <ul>
                <li><strong>STO (Safe Torque Off):</strong> Güç kesme, motor tork üretemez.</li>
                <li><strong>SS1 (Safe Stop 1):</strong> Kontrollü durdurma, sonra STO.</li>
                <li><strong>SLS (Safely Limited Speed):</strong> Hızın belirli bir değeri aşmaması.</li>
                <li><strong>SLP (Safely Limited Position):</strong> Pozisyon sınırları aşılamaz.</li>
            </ul>
            
            <p>Artık ayrı güvenlik PLC gerekmeden, servo sürücü içinde SIL 2/PLd seviyesi güvenlik mümkün.</p>
            
            <h3>3. Yüksek Çözünürlüklü Encoder'lar</h3>
            <p>Encoder, motorun pozisyonunu ölçer. Yeni nesil encoder'lar:</p>
            
            <ul>
                <li><strong>Mutlak (Absolute) Encoder:</strong> Güç kesilse bile pozisyonu bilir. Homing (sıfır noktası) arama gerekmez.</li>
                <li><strong>Multiturn:</strong> Birden fazla devir sayısını takip eder.</li>
                <li><strong>Yüksek Çözünürlük:</strong> 2^20 (1 milyon puls/devir) ve üzeri. Mikron hassasiyeti.</li>
            </ul>
            
            <h3>4. EtherCAT ve PROFINET Entegrasyonu</h3>
            <p>Gerçek zamanlı Ethernet protokolleri, servo motorları senkronize bir şekilde kontrol etmeyi sağlar. Çevrim süresi <1 ms.</p>
            
            <ul>
                <li><strong>EtherCAT:</strong> Beckhoff, Omron, Delta favorisi. Düşük jitter (titreşim).</li>
                <li><strong>PROFINET IRT:</strong> Siemens standardı. Isochronous Real-Time.</li>
            </ul>
            
            <h2>Uygulama Alanları</h2>
            
            <h3>Robotik</h3>
            <p>Endüstriyel robotlarda her aks (joint) bir servo motorla çalışır. 6 eksenli bir robot = 6 senkronize servo.</p>
            
            <h3>CNC Tezgahlar</h3>
            <p>X, Y, Z eksenlerinin mikron hassasiyetle kontrolü. Spindle (mil) motoru da yüksek devirli bir servo olabilir.</p>
            
            <h3>Paketleme Makineleri</h3>
            <p>Kağıt, plastik veya folyo kesme işlemlerinde flying shear (uçan makas) uygulamaları. Motor, konveyör hızıyla senkronize hareket eder.</p>
            
            <h3>Pick-and-Place Sistemleri</h3>
            <p>Delta robot veya SCARA robotlar ile saniyede 200+ ürün transferi. Yüksek ivme ve hassas pozisyon kontrolü gerektirir.</p>
            
            <h2>Tuning (Ayarlama) ve Optimizasyon</h2>
            <p>Servo motor performansı, doğru tuning ile belirlenir. PID parametreleri (Proportional, Integral, Derivative) ayarlanır:</p>
            
            <ul>
                <li><strong>P (Oransal):</strong> Hata büyüdükçe düzeltme artar. Fazla yüksekse salınım (oscillation) olur.</li>
                <li><strong>I (İntegral):</strong> Kalıcı hataları giderir. Fazla yüksekse overshoot (aşma) yapar.</li>
                <li><strong>D (Türev):</strong> Hızlı değişimleri yumuşatır. Fazla yüksekse gürültüye hassas olur.</li>
            </ul>
            
            <p>Modern servo sürücüler, otomatik tuning (auto-tuning) özelliğine sahiptir. Tek tuşla optimum parametreleri bulur.</p>
            
            <h2>Enerji Verimliliği</h2>
            <p>Servo motorlar regeneratif frenlemeye sahiptir. Yavaşlarken kinetik enerji elektriğe dönüştürülür ve şebekeye veya diğer motorlara geri verilir. %20-30 enerji tasarrufu sağlanır.</p>
            
            <h2>Vaka Çalışması: Otomotiv Montaj Hattı</h2>
            <p>MKG olarak, bir otomotiv fabrikasında 120 servo motorlu robot hücreleri kurduk:</p>
            
            <ul>
                <li><strong>Marka:</strong> Siemens Sinamics S210 (OCT teknolojisi).</li>
                <li><strong>Protokol:</strong> PROFINET IRT, çevrim süresi 1 ms.</li>
                <li><strong>Güvenlik:</strong> Entegre Safe Motion, ayrı güvenlik PLC gerekmedi.</li>
                <li><strong>Sonuç:</strong> Montaj hızında %15 artış, kablolama maliyeti %30 düştü.</li>
            </ul>
            
            <blockquote>"OCT ile kablo sayısı yarıya indi. Hem montaj süresi kısaldı hem de arıza ihtimali azaldı."</blockquote>
            
            <h2>Gelecek: Yapay Zeka ile Servo Kontrolü</h2>
            <p>AI destekli servo sürücüler, titreşim profillerini öğrenerek optimum kontrol stratejilerini kendileri belirleyebilecek. Makine öğrenmesi ile yük değişimlerine otomatik adaptasyon.</p>
            
            <p>MKG Hareket Kontrol ekibi olarak, en son servo teknolojilerini projelerinize entegre ediyoruz. Hassas, hızlı ve güvenli hareket kontrolü için yanınızdayız.</p>
        `,
        date: "10 Kasım 2025",
        author: "Hareket Kontrol",
        readTime: "9 dk",
        tags: ["Motion", "Servo", "Teknoloji"],
        image: "/images/blog/servo-motor.jpg"
    },
    {
        id: 18,
        slug: "yerli-otomasyon-yazilimlari",
        title: "Türkiye'nin Otomasyon Ekosistemi ve Yerli Yazılım",
        size: "standard",
        category: "Yazılım",
        excerpt: "Dışa bağımlılığı azaltan yerli Ar-Ge projeleri ve MKG'nin katkıları.",
        content: `
            <p>Türkiye'nin otomasyon sektörü son 20 yılda büyük ilerleme kaydetti. Ancak kritik yazılım ve donanımlarda hala ithalata bağımlıyız. <strong>Yerli ve milli teknoloji</strong> hamlesi, bu bağımlılığı azaltmayı hedefliyor. MKG olarak, bu dönüşümün bir parçasıyız.</p>
            
            <h2>Neden Yerli Yazılım?</h2>
            
            <h3>1. Stratejik Bağımsızlık</h3>
            <p>Kritik altyapılarda (enerji, savunma, ulaşım) yabancı yazılım kullanımı güvenlik riski taşır. Kaynak kod erişimi yoktur, backdoor (arka kapı) riski vardır.</p>
            
            <h3>2. Ekonomik Fayda</h3>
            <p>Lisans ücretleri dövizle ödenir. Yerli yazılım hem daha ucuz hem de döviz çıkışını azaltır.</p>
            
            <h3>3. Özelleştirilebilirlik</h3>
            <p>Yerli yazılımlarda özel ihtiyaçlar için kaynak koda müdahale edilebilir. İthal yazılımda bu imkansızdır.</p>
            
            <h2>Türkiye'de Yerli Otomasyon Ürünleri</h2>
            
            <h3>1. Yerli PLC'ler</h3>
            <p>Türkiye'de PLC üretimi başladı:</p>
            
            <ul>
                <li><strong>ASELSAN PLC:</strong> Savunma ve kritik altyapı projeleri için.</li>
                <li><strong>HAVELSAN PLC:</strong> Denizcilik ve enerji sektörü.</li>
                <li><strong>Startuplar:</strong> Yerli PLC startup'ları (örn. SmartPLC, TurkPLC) ar-ge aşamasında.</li>
            </ul>
            
            <h3>2. Yerli SCADA/HMI Yazılımları</h3>
            <p>MKG'nin geliştirdiği SCADA platformu dahil, birçok yerli SCADA projesi var:</p>
            
            <ul>
                <li><strong>MKG SCADA:</strong> Web tabanlı, responsive, açık kaynak protokol desteği (Modbus, OPC-UA).</li>
                <li><strong>Diğer Projeler:</strong> Üniversite-sanayi işbirliği ile geliştirilen SCADA yazılımları.</li>
            </ul>
            
            <h3>3. Yerli Servo Sürücüler ve Frekans Konvertörleri</h3>
            <p>Elektromekanik cihazlarda yerli üretim hızla artıyor:</p>
            
            <ul>
                <li><strong>ASELSAN Servo Sürücüler:</strong> Savunma sanayi projeleri için geliştirildi, sivilleşiyor.</li>
                <li><strong>Elektrik Motor Sürücüleri:</strong> Yerli üreticiler (ör. Gemsan, Üçel) frekans konvertörü üretiyor.</li>
            </ul>
            
            <h2>MKG'nin Ar-Ge Projeleri</h2>
            
            <h3>1. Açık Kaynak PLC Runtime</h3>
            <p>IEC 61131-3 standartlarına uygun, Linux tabanlı bir PLC runtime geliştirdik. Raspberry Pi veya endüstriyel PC'lerde çalışabiliyor. Hedef: Düşük maliyetli, esnek PLC çözümleri.</p>
            
            <h3>2. Özel Algoritma Kütüphaneleri</h3>
            <p>Sektöre özel fonksiyon blokları:</p>
            
            <ul>
                <li><strong>Tekstil:</strong> Gerginlik kontrolü, renk eşleştirme algoritmaları.</li>
                <li><strong>Gıda:</strong> HACCP uyumlu izlenebilirlik fonksiyonları.</li>
                <li><strong>Enerji:</strong> Grid stabilizasyonu ve demand response algoritmaları.</li>
            </ul>
            
            <p>Bu kütüphaneler açık kaynak olarak paylaşılıyor.</p>
            
            <h3>3. Edge Computing Platformu</h3>
            <p>Fabrika içi veri işleme için yerli edge computing çözümü. Docker container desteği, Kubernetes orkestrayonu. AWS ve Azure'a alternatif, yerli bulut entegrasyonu.</p>
            
            <h2>Zorluklar ve Çözümler</h2>
            
            <h3>Zorluk 1: Ekosistem Eksikliği</h3>
            <p>Siemens veya Rockwell'in yıllar içinde kurduğu ekosistemi (eğitim, destek, entegratör ağı) kısa sürede oluşturmak zor.</p>
            
            <p><strong>Çözüm:</strong> Üniversitelerle işbirliği. Mühendislik fakültelerinde yerli yazılım eğitimleri. Sertifikasyon programları.</p>
            
            <h3>Zorluk 2: Güven Sorunu</h3>
            <p>Müşteriler, yerli ürünlerin kalitesinden şüphe duyabiliyor.</p>
            
            <p><strong>Çözüm:</strong> Pilot projeler ve referanslar. Kamu ihaleleri ile yerli ürün kullanımı teşvik edilmeli.</p>
            
            <h3>Zorluk 3: Ar-Ge Maliyeti</h3>
            <p>Yazılım geliştirmek zaman ve sermaye yoğun.</p>
            
            <p><strong>Çözüm:</strong> TÜBİTAK destekleri, Sanayi Bakanlığı Ar-Ge teşvikleri. Açık kaynak modeli ile maliyet paylaşımı.</p>
            
            <h2>Başarı Hikayeleri</h2>
            
            <h3>Vaka 1: Metro Projesi</h3>
            <p>Bir büyükşehir metrosu için SCADA sistemini yerli yazılımla kurduk. Yabancı yazılıma göre %40 maliyet tasarrufu.</p>
            
            <h3>Vaka 2: Savunma Sanayi</h3>
            <p>Roketsan için otomasyon altyapısı. Yerli PLC ve SCADA kullanımı zorunluydu. Proje başarıyla tamamlandı, seri üretime geçildi.</p>
            
            <blockquote>"Yerli yazılım kullanmak sadece vatanseverlik değil, aynı zamanda akıllıca bir iş kararıdır. Hem daha ucuz hem de daha esnek."</blockquote>
            
            <h2>Gelecek: 2030 Vizyonu</h2>
            <p>Türkiye'nin hedefi, 2030 yılına kadar kritik altyapıların %80'inde yerli yazılım kullanımıdır. Bunun için:</p>
            
            <ul>
                <li>Ar-Ge yatırımlarının artırılması</li>
                <li>Üniversite-sanayi işbirliğinin güçlendirilmesi</li>
                <li>Açık kaynak topluluklarının desteklenmesi</li>
                <li>Uluslararası standartlara uyum (IEC, ISO)</li>
            </ul>
            
            <p>MKG olarak, Türkiye'nin teknoloji bağımsızlığına katkıda bulunmaktan gurur duyuyoruz. Yerli yazılım ve donanım çözümlerimizle sektöre liderlik ediyoruz.</p>
        `,
        date: "05 Kasım 2025",
        author: "Berhudan Başçan",
        readTime: "9 dk",
        tags: ["Yerli", "Milli", "Teknoloji"],
        image: "/images/blog/yerli-yazilim.jpg"
    },
    {
        id: 19,
        slug: "uretim-yuruyen-bant-optimizasyonu",
        title: "Üretim Hattı Dengelleme ve Darboğaz Analizi",
        size: "standard",
        category: "Endüstri",
        excerpt: "Hat verimliliğini %20 artırmanın matematiksel yöntemleri.",
        content: `
            <p>Bir üretim hattının verimliliği, en yavaş istasyonla sınırlıdır. Darboğaz (bottleneck) istasyon, tüm hattı yavaşlatır. <strong>Hat dengelleme (line balancing)</strong>, işçilik ve ekipman yükünü eşitleyerek verimliliği maksimize eder.</p>
            
            <h2>Temel Kavramlar</h2>
            
            <h3>Takt Time (Takt Süresi)</h3>
            <p>Bir ürünün üretilmesi için geçmesi gereken ideal süre. Müşteri talebine göre belirlenir.</p>
            
            <p><strong>Formül:</strong> Takt Time = Net Çalışma Süresi / Müşteri Talebi</p>
            
            <p>Örnek: Günde 8 saat (480 dakika) çalışıyoruz, günlük talep 240 adet. Takt time = 480/240 = 2 dakika/adet.</p>
            
            <h3>Cycle Time (Çevrim Süresi)</h3>
            <p>Bir istasyonda bir ürünü işlemek için gerçekte geçen süre. İdeal olarak cycle time ≤ takt time olmalı.</p>
            
            <h3>Darboğaz (Bottleneck)</h3>
            <p>En yüksek cycle time'a sahip istasyon. Tüm hat bu istasyon kadar yavaş çalışır.</p>
            
            <h2>Darboğaz Analizi Adımları</h2>
            
            <h3>1. Veri Toplama</h3>
            <p>Her istasyonun çevrim sürelerini ölçün. En az 30 ölçüm yaparak ortalama ve standart sapma hesaplayın.</p>
            
            <h3>2. VSM (Value Stream Mapping)</h3>
            <p>Değer akış haritası çizin. Her istasyonun çevrim süresini, bekleme sürelerini ve stok seviyelerini görselleştirin.</p>
            
            <h3>3. Darboğazı Tespit Edin</h3>
            <p>En yüksek çevrim süresine sahip istasyon = darboğaz. Üretim hızı bu istasyonla sınırlıdır.</p>
            
            <h3>4. Kök Neden Analizi</h3>
            <p>Neden bu istasyon yavaş? Sebepleri kategorize edin:</p>
            
            <ul>
                <li><strong>İnsan:</strong> Yetersiz eğitim, yorgunluk</li>
                <li><strong>Makine:</strong> Düşük hız, arızalar</li>
                <li><strong>Metod:</strong> Verimsiz işlem sırası</li>
                <li><strong>Malzeme:</strong> Kalite sorunları, geç teslimat</li>
            </ul>
            
            <h2>Hat Dengelleme Yöntemleri</h2>
            
            <h3>1. İş Yükü Yeniden Dağıtımı</h3>
            <p>Darboğaz istasyonundan bazı görevleri diğer istasyonlara kaydırın.</p>
            
            <p><strong>Örnek:</strong> İstasyon A 3 dakika, İstasyon B 1.5 dakika sürüyor. İstasyon A'daki bir görevi B'ye verin. Yeni süreler: A = 2.5 dk, B = 2 dk.</p>
            
            <h3>2. Ekipman veya Operatör Ekleme</h3>
            <p>Darboğaz istasyonuna ek makine veya işçi ekleyin. Maliyetli ama etkili.</p>
            
            <h3>3. İşlem Sürelerini Azaltma</h3>
            <ul>
                <li><strong>Otomasyon:</strong> Manuel işlemleri robotla değiştirin.</li>
                <li><strong>Ergonomi:</strong> İşçinin daha rahat çalışması için iş istasyonu tasarımı.</li>
                <li><strong>Poka-Yoke:</strong> Hata önleme mekanizmaları ile yeniden işleme (rework) sürelerini azaltın.</li>
            </ul>
            
            <h3>4. Buffer (Tampon) Stok</h3>
            <p>Darboğaz öncesinde küçük bir stok bölgesi oluşturun. Darboğaz durunca diğer istasyonlar çalışmaya devam edebilir.</p>
            
            <p><strong>Dikkat:</strong> Fazla buffer Yalın Üretim prensibine aykırıdır. Minimum seviyede tutun.</p>
            
            <h2>Matematiksel Modelleme</h2>
            <p>Hat dengelleme bir optimizasyon problemidir. Amaç fonksiyonu:</p>
            
            <p><strong>Minimize Et:</strong> İstasyon sayısı veya Maksimize Et: Üretim hızı</p>
            
            <p><strong>Kısıtlar:</strong></p>
            <ul>
                <li>Her görev bir istasyona atanmalı</li>
                <li>Görev öncelikleri korunmalı (görev sırası)</li>
                <li>İstasyon yükü ≤ Takt time</li>
            </ul>
            
            <p>Bu, NP-hard bir problemdir. Çözüm yöntemleri: Greedy algoritma, Genetik algoritma, Simulated Annealing.</p>
            
            <h2>Otomasyonla Entegrasyon</h2>
            <p>MES (Manufacturing Execution System) ile gerçek zamanlı cycle time verileri toplanır. SCADA sisteminden makine durma süreleri alınır. Bu veriler analiz edilerek dinamik hat dengelleme yapılır.</p>
            
            <h2>Vaka Çalışması: Beyaz Eşya Montaj Hattı</h2>
            <p>MKG olarak, bir beyaz eşya fabrikasında 24 istasyonlu montaj hattını optimize ettik:</p>
            
            <ul>
                <li><strong>Öncesi:</strong> Darboğaz istasyon 4.2 dk, diğer istasyonlar 2-3 dk. Toplam üretim: 140 adet/gün.</li>
                <li><strong>Analiz:</strong> VSM çıkarıldı, darboğaz istasyonda 2 manuel vida sıkma işlemi vardı.</li>
                <li><strong>Çözüm:</strong> Otomatik vidalama robotları eklendi. Görev yükü diğer istasyonlara dağıtıldı.</li>
                <li><strong>Sonuç:</strong> Yeni cycle time 2.8 dk. Üretim 170 adet/gün. %21 verimlilik artışı.</li>
            </ul>
            
            <blockquote>"Hat dengelleme sadece kağıt üzerinde değil, sahada da uygulanmalı. Operatörlerin geri bildirimlerini dinlemek kritik."</blockquote>
            
            <h2>Sürekli İyileştirme (Kaizen)</h2>
            <p>Hat dengelleme bir kerelik değil, sürekli bir süreçtir. Talep değişir, ürün karması değişir, ekipman yaşlanır. Düzenli olarak VSM güncelleyin ve yeni darboğazları tespit edin.</p>
            
            <p>MKG Proses Mühendisliği ekibi olarak, üretim hatlarınızı Yalın Üretim prensipleriyle optimize ediyoruz. Verimlilik artışı için bizimle çalışın.</p>
        `,
        date: "01 Kasım 2025",
        author: "Proses Mühendisi",
        readTime: "9 dk",
        tags: ["Verimlilik", "Yalın", "Üretim"],
        image: "/images/blog/uretim-hatti.jpg"
    },
    {
        id: 20,
        slug: "yapay-zeka-kalite-kontrol",
        title: "Görüntü İşleme ve Yapay Zeka ile Kalite Kontrol",
        size: "large",
        category: "Endüstri",
        excerpt: "İnsan gözünün kaçırdığı detayları yakalayan 0 hata toleranslı sistemler.",
        content: `
            <p>İnsan gözü yorulur, dikkati dağılır ve subjektiftir. Otomotiv, elektronik ve ilaç gibi sektörlerde %100 kalite kontrolü gerekir. <strong>Yapay zeka destekli görüntü işleme</strong>, bu ihtiyacı karşılıyor.</p>
            
            <h2>Geleneksel vs. AI Tabanlı Görüntü İşleme</h2>
            
            <h3>Geleneksel (Rule-Based)</h3>
            <p>Önceden tanımlı kurallar: "Eğer piksel değeri >200 ise hata." Sınırlı esneklik, her ürün için yeniden programlama gerekir.</p>
            
            <h3>AI Tabanlı (Deep Learning)</h3>
            <p>Model eğitilir, örneklerden öğrenir. Yeni hata tiplerine adapte olabilir. Transfer learning ile farklı ürünlere hızla uygulanır.</p>
            
            <h2>Tipik Hatalar ve Tespit Yöntemleri</h2>
            
            <h3>1. Çizik ve Leke Tespiti</h3>
            <p>Metal veya plastik yüzeylerde çizikler, boyanmış yüzeylerde lekeler.</p>
            
            <ul>
                <li><strong>Yöntem:</strong> Convolutional Neural Network (CNN). ResNet, EfficientNet gibi mimariler.</li>
                <li><strong>Aydınlatma:</strong> Ring light veya dome light ile gölgesiz ışık. Çizikler polarize ışıkla daha belirgin hale gelir.</li>
                <li><strong>Hassasiyet:</strong> 0.1 mm'den küçük kusurlar tespit edilebilir.</li>
            </ul>
            
            <h3>2. Renk Sapması</h3>
            <p>Boya veya baskı renk ton farklılıkları.</p>
            
            <ul>
                <li><strong>Yöntem:</strong> RGB veya LAB renk uzayında özellik çıkarma. SVM (Support Vector Machine) veya CNN.</li>
                <li><strong>Kalibrasyon:</strong> Referans renkli kalibrasyon kartı ile kamera kalibrasyonu.</li>
            </ul>
            
            <h3>3. Montaj Hataları</h3>
            <p>Eksik parça, yanlış parça, ters takılmış parça.</p>
            
            <ul>
                <li><strong>Yöntem:</strong> Object detection. YOLO, Faster R-CNN algoritmaları.</li>
                <li><strong>Etiketleme:</strong> Her parça tipi ayrı sınıf olarak etiketlenir. Model, parçaların varlığını ve konumunu tespit eder.</li>
            </ul>
            
            <h3>4. Boyut Kontrolü</h3>
            <p>Ürünün boyutlarının spesifikasyon içinde olup olmadığı.</p>
            
            <ul>
                <li><strong>Yöntem:</strong> Edge detection (kenar tespiti) + piksel bazlı ölçüm.</li>
                <li><strong>Kalibrasyon:</strong> Bilinen boyutlarda kalibrasyon nesnesi ile mm/piksel oranı hesaplanır.</li>
            </ul>
            
            <h2>Donanım Gereklilikleri</h2>
            
            <h3>Kameralar</h3>
            <ul>
                <li><strong>Çözünürlük:</strong> 5 MP ve üzeri. Küçük kusurlar için 12 MP+.</li>
                <li><strong>Frame Rate:</strong> Hızlı hatlar için 60 fps veya daha fazla.</li>
                <li><strong>Sensör Tipi:</strong> Monokrom (siyah-beyaz) daha hassas. Renk kontrolü için RGB.</li>
            </ul>
            
            <h3>Lensler</h3>
            <p>Çalışma mesafesi ve görüş alanına göre seçilir. Telecentric lens, perspektif distorsiyonunu önler (hassas ölçüm için).</p>
            
            <h3>Aydınlatma</h3>
            <ul>
                <li><strong>Backlight:</strong> Şeffaf malzemelerde çatlak tespiti.</li>
                <li><strong>Dome Light:</strong> Parlak yüzeylerde yansıma önleme.</li>
                <li><strong>UV/IR:</strong> Özel uygulamalar için (örn. yapıştırıcı kontrolü).</li>
            </ul>
            
            <h3>İşlemci</h3>
            <p>Deep learning için GPU şart. NVIDIA Jetson serisi edge cihazlar veya server tabanlı işlem (cloud/on-premise).</p>
            
            <h2>AI Model Eğitimi</h2>
            
            <h3>1. Veri Toplama</h3>
            <p>Binlerce görüntü toplayın: hem hatasız hem de hatalı ürünler. Veri çeşitliliği kritik (farklı aydınlatma, açı, ürün varyasyonları).</p>
            
            <h3>2. Etiketleme (Labeling)</h3>
            <p>Hatalı bölgeleri işaretleyin. Otomasyon için LabelImg, CVAT gibi araçlar kullanılır.</p>
            
            <h3>3. Model Seçimi</h3>
            <p>Transfer learning: ImageNet üzerinde önceden eğitilmiş bir model (ResNet, EfficientNet) alın, son katmanları kendi verilerinizle fine-tune edin.</p>
            
            <h3>4. Eğitim (Training)</h3>
            <p>GPU sunucusunda veya bulutta eğitim yapın. Epoch sayısı, batch size, learning rate gibi hiperparametreleri optimize edin.</p>
            
            <h3>5. Doğrulama (Validation)</h3>
            <p>Test seti ile modeli değerlendirin. Precision, Recall, F1-score metriklerini hesaplayın. Hedef: %99.9+ doğruluk.</p>
            
            <h2>Gerçek Zamanlı Deployment</h2>
            <p>Eğitilmiş model, üretim hattındaki edge cihaza (NVIDIA Jetson) deploy edilir. ONNX veya TensorRT ile optimize edilir (çıkarım hızı artar).</p>
            
            <p>Her ürün kamera altından geçerken:</p>
            <ol>
                <li>Görüntü yakalanır</li>
                <li>Ön işleme (normalizasyon, resize)</li>
                <li>Model çıkarımı (inference) - <50 ms</li>
                <li>Sonuç: OK veya NG (No Good)</li>
                <li>NG ürünler otomatik reddetme mekanizması ile hattan alınır</li>
            </ol>
            
            <h2>Vaka Çalışması: Elektronik Kart İnceleme</h2>
            <p>MKG olarak, bir elektronik üreticisi için PCB (baskı devre) kalite kontrol sistemi kurduk:</p>
            
            <ul>
                <li><strong>Sorun:</strong> Manuel inceleme %95 doğruluk, günlük kapasit 2000 kart.</li>
                <li><strong>Çözüm:</strong> 12 MP kamera + AI model (Faster R-CNN). Eksik komponent, lehim hataları, yanlış parça tespiti.</li>
                <li><strong>Sonuç:</strong> %99.8 doğruluk, günlük kapasit 10,000 kart. ROI 8 ay.</li>
            </ul>
            
            <blockquote>"AI sistemi devreye girdikten sonra müşteri şikayetlerimiz %90 azaldı. Artık hiçbir hatalı ürün ellerimizden çıkmıyor."</blockquote>
            
            <h2>Gelecek: 3D Görüntü İşleme</h2>
            <p>2D kameralar yüzey kusurlarını görür ama derinlik bilgisi veremez. 3D lazer tarayıcılar veya stereo kameralar ile:</p>
            
            <ul>
                <li>Deformasyon tespiti (eğilme, bükülme)</li>
                <li>Hacim ölçümü</li>
                <li>Montaj boşluğu kontrolü</li>
            </ul>
            
            <p>MKG AI Ar-Ge ekibi olarak, sıfır hata hedefine ulaşmanız için gelişmiş görüntü işleme sistemleri geliştiriyoruz. Kalite kontrol süreçlerinizi dijitalleştirin.</p>
        `,
        date: "28 Ekim 2025",
        author: "AI Ar-Ge",
        readTime: "10 dk",
        tags: ["Kalite", "AI", "Vision"],
        image: "/images/blog/ai-vision.jpg"
    },
    {
        id: 21,
        slug: "gelecegin-muhendisleri",
        title: "Geleceğin Mühendisleri için Kariyer Tavsiyeleri",
        size: "standard",
        category: "Yazılım",
        excerpt: "Otomasyon sektöründe başarılı olmak isteyen öğrenciler ve yeni mezunlar için yol haritası.",
        content: `
            <p>Otomasyon mühendisliği, geleceğin en talep edilen mesleklerinden biri. Endüstri 4.0, yapay zeka ve robotik devrimi, nitelikli mühendislere olan ihtiyacı artırıyor. Peki bu sektörde başarılı olmak için neler yapmalısınız?</p>
            
            <h2>Temel Yetkinlikler</h2>
            
            <h3>1. Elektrik-Elektronik Temelleri</h3>
            <p>PLC, sensörler, motorlar ve sürücülerle çalışacaksınız. Ohm Kanunu, Kirchhoff Kanunları, AC-DC devreleri bilmeden ilerleme zor.</p>
            
            <ul>
                <li>Üniversitede Elektrik Devreleri, Elektronik derslerine odaklanın.</li>
                <li>Arduino, Raspberry Pi ile hobi projeleri yapın.</li>
            </ul>
            
            <h3>2. Programlama</h3>
            <p>Sadece PLC Ladder değil, yüksek seviye diller de öğrenin:</p>
            
            <ul>
                <li><strong>Python:</strong> Veri analizi, makine öğrenmesi, otomasyon scriptleri.</li>
                <li><strong>C/C++:</strong> Gömülü sistemler, PLC runtime geliştirme.</li>
                <li><strong>JavaScript:</strong> Web tabanlı HMI ve SCADA geliştirme.</li>
            </ul>
            
            <h3>3. PLC Programlama</h3>
            <p>En az bir PLC platformunda (Siemens, Rockwell, veya Beckhoff) deneyim kazanın. IEC 61131-3 standartlarını öğrenin.</p>
            
            <p><strong>Tavsiye:</strong> TIA Portal veya Studio 5000'in student versiyonlarını indirin. Simülasyon yaparak pratik yapın.</p>
            
            <h3>4. Endüstriyel İletişim Protokolleri</h3>
            <p>Modbus, Profinet, EtherCAT, OPC-UA bilmeden entegrasyon yapamazsınız. Protokollerin çalışma mantığını öğrenin.</p>
            
            <h2>Soft Skills (Yumuşak Yetenekler)</h2>
            
            <h3>1. Problem Çözme</h3>
            <p>Otomasyon mühendisliğinin özü problem çözmedir. Makineler durur, sensörler arızalanır, kodlar hata verir. Sakin kalıp sistematik yaklaşım gerekir.</p>
            
            <p><strong>Geliştirme:</strong> Leetcode, HackerRank gibi platformlarda algoritma problemleri çözün. Düşünme yeteneğinizi geliştirin.</p>
            
            <h3>2. İletişim</h3>
            <p>Müşterilerle, operatörlerle, mekanik mühendislerle konuşacaksınız. Teknik jargonu basitleştirip anlatabilmek önemli.</p>
            
            <h3>3. Takım Çalışması</h3>
            <p>Otomasyon projeleri ekip işidir. Elektrik, mekanik, yazılım, proses mühendisleri birlikte çalışır. Ego bir kenara, işbirliği ön planda.</p>
            
            <h2>Eğitim Yolu</h2>
            
            <h3>Üniversite</h3>
            <p>İdeal bölümler:</p>
            <ul>
                <li>Elektrik-Elektronik Mühendisliği</li>
                <li>Mekatronik Mühendisliği</li>
                <li>Kontrol ve Otomasyon Mühendisliği</li>
            </ul>
            
            <p>Makine Mühendisliği ve Bilgisayar Mühendisliği mezunları da sektöre girebilir ama elektrik temelleri eksik olabilir.</p>
            
            <h3>Sertifikalar</h3>
            <p>Sektörde tanınan sertifikalar:</p>
            <ul>
                <li><strong>Siemens SCE (Siemens Certified Engineer):</strong> TIA Portal uzmanlığı.</li>
                <li><strong>Rockwell TechConnect:</strong> Logix platformu sertifikası.</li>
                <li><strong>CCNA Industrial:</strong> Endüstriyel ağ uzmanlığı.</li>
            </ul>
            
            <h3>Yüksek Lisans / Doktora</h3>
            <p>Ar-Ge odaklı kariyer istiyorsanız yüksek lisans yapın. Konular: Yapay zeka, robotik, kontrol teorisi.</p>
            
            <h2>İlk İş Deneyimi</h2>
            
            <h3>Staj</h3>
            <p>Üniversite 3. sınıftan itibaren staj yapın. Otomasyon firmaları, sistem entegratörleri veya üretim yapan fabrikalar ideal.</p>
            
            <p><strong>Stajda ne yapmalı:</strong> Sadece izleyici kalmayın, sorular sorun, küçük görevler isteyin. PLC kodu yazmaya, pano kablolama yapmaya çalışın.</p>
            
            <h3>İlk İşte Ne Beklemeli?</h3>
            <p>Junior mühendis olarak:</p>
            <ul>
                <li>İlk 6 ay: Öğrenme dönemi. Kıdemli mühendislere yardımcı olun.</li>
                <li>6-12 ay: Küçük görevleri bağımsız yapabilirsiniz (basit PLC kodu, HMI ekranları).</li>
                <li>1-2 yıl: Küçük projeleri tek başınıza yönetebilirsiniz.</li>
            </ul>
            
            <h2>Kariyer Yolu</h2>
            
            <h3>Yol 1: Teknik Uzman</h3>
            <p>Mühendislik kariyerine devam edin. Senior Engineer → Lead Engineer → Principal Engineer. Teknik derinliğinizi artırın.</p>
            
            <h3>Yol 2: Proje Yöneticisi</h3>
            <p>Yönetim tarafına geçin. PMP (Project Management Professional) sertifikası alın. Bütçe, zaman ve ekip yönetimi öğrenin.</p>
            
            <h3>Yol 3: Girişimci</h3>
            <p>Kendi otomasyon firmanızı kurun. Sistem entegratörü olun veya özel bir niş ürün geliştirin (örn. yerli SCADA yazılımı).</p>
            
            <h2>Sektör Trendleri ve Geleceğe Hazırlık</h2>
            
            <h3>1. Yapay Zeka</h3>
            <p>Makine öğrenmesi, görüntü işleme, tahmine dayalı bakım gibi alanlara yatırım yapın. Python ve TensorFlow öğrenin.</p>
            
            <h3>2. IIoT ve Bulut</h3>
            <p>Bulut platformları (AWS, Azure) ve IoT protokolleri (MQTT, OPC-UA) öğrenin. Edge computing kavramlarına hakim olun.</p>
            
            <h3>3. Siber Güvenlik</h3>
            <p>OT güvenliği giderek önemli. IEC 62443 standardını inceleyin. Penetrasyon testi ve güvenlik denetimi becerilerini geliştirin.</p>
            
            <h3>4. Robotik ve Cobot</h3>
            <p>İşbirlikçi robotlar yaygınlaşıyor. Robot programlama (ABB, KUKA, Universal Robots) öğrenin.</p>
            
            <h2>MKG'de Kariyer</h2>
            <p>MKG olarak, genç mühendislere fırsat sunuyoruz:</p>
            
            <ul>
                <li><strong>Staj Programı:</strong> Yazılım, donanım ve proje ekiplerimizde 3-6 ay staj.</li>
                <li><strong>Eğitim:</strong> Siemens, Rockwell ve diğer platformlarda in-house eğitim.</li>
                <li><strong>Mentorluk:</strong> Her junior mühendise kıdemli bir mentor atanır.</li>
                <li><strong>Proje Çeşitliliği:</strong> Otomotiv, gıda, enerji, lojistik - farklı sektörlerde deneyim.</li>
            </ul>
            
            <blockquote>"MKG'de işe başladığımda sadece teori biliyordum. 2 yıl sonra kendi projemi yönetiyorum. Burada öğrenme fırsatı sonsuz."</blockquote>
            
            <h2>Son Tavsiyeler</h2>
            
            <ul>
                <li><strong>Hiç Durmayın:</strong> Sektör hızlı değişiyor. Sürekli öğrenin, yeni teknolojileri takip edin.</li>
                <li><strong>Network Kurun:</strong> LinkedIn'de aktif olun, konferanslara katılın, sektördeki insanlarla tanışın.</li>
                <li><strong>Uygulama:</strong> Teori yeterli değil. Kendi projelerinizi yapın, GitHub'da paylaşın.</li>
                <li><strong>Sabırlı Olun:</strong> Uzmanlık 5-10 yıl alır. Başlangıçta her şeyi bilmemeniz normal.</li>
            </ul>
            
            <p>Otomasyon mühendisliği hem zorlayıcı hem de ödüllendirici bir kariyer. Makinelerin, insanların ve sistemlerin uyum içinde çalışmasını sağlamak büyük bir tatmin. Geleceğin mühendisleri olarak siz buradasınız!</p>
            
            <p>Kariyer sorularınız için: <strong>ik@mkg.com.tr</strong></p>
        `,
        date: "24 Ekim 2025",
        author: "İK Departmanı",
        readTime: "10 dk",
        tags: ["Kariyer", "Eğitim", "Gelecek"],
        image: "/images/blog/kariyer.jpg"
    }
];
