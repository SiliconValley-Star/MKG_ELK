export interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    slug: string;
    description: string;
    fullDescription: string;
    scope: string[];
    systems: string[];
    metrics: { label: string; value: string }[];
    size?: "large" | "standard";
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "PRJ-2015-BANK",
        title: "VakıfBank Finansal Çözüm Ortaklığı",
        category: "Banka & Finans",
        location: "Türkiye Geneli",
        year: "2015-2023",
        image: "/images/projects/vakifbank-hq.jpg",
        slug: "vakifbank-finansal-cozumler",
        size: "large",
        description: "Türkiye genelinde VakıfBank Şubeleri ve Bölge Müdürlüklerinin elektrik, data ve güvenlik altyapı işleri.",
        fullDescription: "VakıfBank ile yürütülen uzun soluklu çözüm ortaklığı kapsamında; Samsun Bölge Müdürlüğü başta olmak üzere, İstanbul (Dolayoba, Göztepe, Kazlıçeşme, Batı Ataşehir), Bursa (Uluyol, Nilüfer), Kocaeli (İzmit), Sakarya (Adapazarı), Çanakkale (Lapseki), Samsun (Kutlukent, Sanayi, Atakum, Bafra), Ordu (Altınordu), Giresun, Trabzon (Of), Rize (Ardeşen), Kars, Ardahan, Bayburt, Gümüşhane, Kastamonu (Tosya) ve Muğla (Fethiye) gibi Türkiye'nin dört bir yanındaki şubelerde; kesintisiz enerji (UPS), ATM güç altyapısı, sistem odası iklimlendirme ve yüksek güvenlikli data sistemleri başarıyla kurulmuştur. Ayrıca Halkbank (Kartal, Malazgirt) ve Fibabanka (Antalya Muratpaşa) şubeleriyle finans sektöründeki yetkinliğimiz pekiştirilmiştir.",
        scope: [
            "Samsun Bölge Müdürlüğü Elektrik Taahhüt İşleri",
            "Sistem Odası FM200 Gazlı Söndürme ve İklimlendirme",
            "Şube İçi Regüleli UPS Hatları ve Jeneratör Entegrasyonu",
            "ATM Güç Beslemeleri ve Data Altyapısı",
            "7/24 İzlenen IP CCTV ve Soygun Alarm Sistemleri"
        ],
        systems: [
            "Online UPS",
            "Data Center",
            "Banka Güvenlik",
            "ATM Altyapısı",
            "Yangın Algılama"
        ],
        metrics: [
            { label: "Kapsam", value: "Türkiye Geneli" },
            { label: "Şube", value: "30+ Lokasyon" },
            { label: "Sektör", value: "Finans" },
            { label: "Güven", value: "Çözüm Ortağı" }
        ],
        metaDescription: "VakıfBank Türkiye geneli 30+ şube elektrik altyapısı: UPS, ATM güç sistemleri, data center, yangın algılama ve banka güvenlik çözümleri. 8 yıllık başarılı ortaklık.",
        keywords: ["vakıfbank elektrik", "banka güvenlik sistemleri", "ATM altyapısı", "UPS sistemleri", "data center", "banka elektrik taahhüt", "yangın algılama", "finansal güvenlik"],
        ogImage: "/images/projects/vakifbank-hq.jpg"
    },
    {
        id: "PRJ-2016-FBA",
        title: "Fibabanka Antalya Muratpaşa Şubesi",
        category: "Banka & Finans",
        location: "Muratpaşa, Antalya",
        year: "2016",
        image: "/images/projects/fibabanka-antalya.jpg",
        slug: "fibabanka-antalya-muratpasa",
        description: "Antalya'nın kalbindeki şubenin dijital bankacılık konseptine uygun elektrik altyapı projesi.",
        fullDescription: "Turizmin başkenti Antalya'nın en işlek lokasyonlarından Muratpaşa'da yer alan Fibabanka şubesi, dijital bankacılık ve kağıtsız işlem konseptine uygun olarak projelendirilmiştir. Şube içerisindeki tablet bankacılığı alanları ve interaktif kiosklar için özel data ve güç noktaları oluşturulmuş, sıcak iklim koşulları göz önünde bulundurularak pano içi havalandırma sistemleri optimize edilmiştir. Müşteri bekleme alanlarında konforu artıran dinamik aydınlatma senaryoları uygulanmıştır.",
        scope: [
            "Dijital Bankacılık ve Kiosk Güç Altyapısı",
            "Pano İçi İklimlendirme ve Soğutma Çözümleri",
            "Sıramatik ve Q-Matik Sistem Entegrasyonu",
            "Ups ve Jeneratör Destekli Enerji Hattı",
            "Ofis ve Gişe Bölgesi Data Kablolaması",
            "Güvenlik Kamera ve Alarm Sistemi Kurulumu"
        ],
        systems: [
            "Dijital Altyapı",
            "Pano Soğutma",
            "UPS Enerji",
            "Şube Güvenlik",
            "Konfor Aydınlatma"
        ],
        metrics: [
            { label: "Konsept", value: "Dijital Banka" },
            { label: "İklim", value: "Pano Soğutma" },
            { label: "Lokasyon", value: "Antalya" },
            { label: "Altyapı", value: "Kesintisiz" }
        ],
        metaDescription: "Fibabanka Antalya dijital şube: Kiosk altyapısı, pano soğutma, UPS, dinamik aydınlatma. Sıcak iklim koşullarına özel elektrik ve güvenlik sistemleri.",
        keywords: ["fibabanka", "dijital bankacılık", "kiosk altyapısı", "pano soğutma", "antalya banka", "UPS sistemleri", "güvenlik kamera", "tablet bankacılık"],
        ogImage: "/images/projects/fibabanka-antalya.jpg"
    },
    {
        id: "PRJ-2017-HLK",
        title: "Halkbank Malazgirt Şubesi",
        category: "Banka & Finans",
        location: "Malazgirt, Muş",
        year: "2017",
        image: "/images/projects/halkbank-malazgirt.jpg",
        slug: "halkbank-malazgirt-subesi",
        description: "Tarihi Malazgirt ilçesindeki şubenin zorlu iklim koşullarına uygun elektrik ve güvenlik altyapısı.",
        fullDescription: "Muş'un tarihi öneme sahip Malazgirt ilçesinde hizmet veren Halkbank şubesi için, bölgenin sert kış koşullarına dayanıklı ve enerji dalgalanmalarından etkilenmeyen sağlam bir elektrik altyapısı kurulmuştur. Şehir şebekesindeki voltaj düzensizliklerine karşı voltaj regülatörleri ve tam kapasiteli jeneratör sistemi entegre edilmiştir. Ayrıca şubenin fiziksel güvenliği için yüksek çözünürlüklü IP kameralar ve hareket algılayıcılarla donatılmış güvenlik sistemi devreye alınmıştır.",
        scope: [
            "Zorlu İklim Koşullarına Uygun Dış Aydınlatma",
            "Voltaj Regülatörü ve Kompanzasyon Panosu",
            "Tam Kapasite Jeneratör ve Transfer Sistemi",
            "ATM Kabini Isıtma ve Aydınlatma Sistemi",
            "Zırhlı Birim Güç ve Data Altyapısı",
            "Yangın ve Gaz Algılama Sistemleri"
        ],
        systems: [
            "Regüleli Enerji",
            "İklimlendirme",
            "Jeneratör",
            "Yüksek Güvenlik",
            "ATM Isıtma"
        ],
        metrics: [
            { label: "Dayanıklılık", value: "Ağır İklim" },
            { label: "Enerji", value: "Regüleli" },
            { label: "Lokasyon", value: "Muş" },
            { label: "Güvenlik", value: "Maksimum" }
        ],
        metaDescription: "Halkbank Malazgirt Muş: Ağır iklim koşullarına dayanıklı elektrik altyapısı, voltaj regülatörü, jeneratör, ATM ısıtma ve maksimum güvenlik sistemleri.",
        keywords: ["halkbank malazgirt", "ağır iklim elektrik", "voltaj regülatörü", "jeneratör sistemi", "ATM ısıtma", "banka güvenlik", "zorlu iklim", "muş elektrik"],
        ogImage: "/images/projects/halkbank-malazgirt.jpg"
    },
    {
        id: "PRJ-2024-001",
        title: "Okyanus Alüminyum Üretim Tesisi",
        category: "Endüstriyel Tesis",
        location: "Esenyurt, İstanbul",
        year: "2024",
        image: "/images/projects/okyanus-aluminyum.jpg",
        slug: "okyanus-aluminyum-uretim-tesisi",
        size: "large",
        description: "Modern alüminyum üretim tesisinin tüm elektrik altyapı, OG/AG sistemleri ve otomasyon süreçlerinin anahtar teslim projelendirilmesi.",
        fullDescription: "Esenyurt Akçaburgaz mevkiinde faaliyet gösteren Okyanus Alüminyum San. Tic. A.Ş.'ye ait modern üretim tesisinin enerji sürekliliğini garanti altına alan kapsamlı bir altyapı projesidir. Proje kapsamında, tesisin yüksek enerji talebini karşılayacak Orta Gerilim (OG) hücreleri, trafo merkezleri ve Alçak Gerilim (AG) dağıtım sistemleri en güncel IEC standartlarına uygun olarak tasarlanmış ve devreye alınmıştır. Üretim bantlarının kesintisiz çalışması için yedekli güç sistemleri ve busbar enerji dağıtım hatları entegre edilmiştir.",
        scope: [
            "Orta Gerilim (OG) Hücre Kurulumu ve Enerji Müsadesi",
            "1600 kVA Trafo Merkezi Tesisi",
            "AG Ana Dağıtım ve Kompanzasyon Panoları",
            "Busbar Enerji Dağıtım Sistemleri (800A - 2500A)",
            "Fabrika İçi ve Çevre LED Aydınlatma Otomasyonu",
            "Zayıf Akım Sistemleri (Yangın Algılama, CCTV, Data)"
        ],
        systems: [
            "OG Enerji Temini",
            "AG Dağıtım",
            "Busbar Sistemi",
            "Aydınlatma Otomasyonu",
            "Topraklama & Paratoner"
        ],
        metrics: [
            { label: "Kurulu Güç", value: "2500 kVA" },
            { label: "Kapalı Alan", value: "12.000 m²" },
            { label: "Proje Süresi", value: "6 Ay" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Okyanus Alüminyum 12.000 m² üretim tesisi: 2500 kVA OG/AG sistemleri, busbar enerji dağıtımı, trafo merkezi ve LED otomasyon. IEC standartlarında anahtar teslim proje.",
        keywords: ["alüminyum fabrika elektrik", "OG hücre", "AG dağıtım", "busbar sistemi", "trafo merkezi", "endüstriyel otomasyon", "fabrika elektrik", "esenyurt sanayi"],
        ogImage: "/images/projects/okyanus-aluminyum.jpg"
    },
    {
        id: "PRJ-2023-084",
        title: "Yelken Kalıp Pencere & Metal A.Ş.",
        category: "Metal & Kalıp Sanayi",
        location: "Esenyurt, İstanbul",
        year: "2023",
        image: "/images/projects/yelken-kalip.jpg",
        slug: "yelken-kalip-metal-as",
        description: "Yüksek hassasiyetli kalıp ve metal işleme tesisinin enerji altyapısı, CNC makine parkuru beslemesi ve idari bina otomasyonu.",
        fullDescription: "Pencere, kapı aksesuarları ve metal sanayi sektörünün öncülerinden Yelken Kalıp A.Ş.'nin Esenyurt'taki üretim kampüsünün tüm elektrik taahhüt işleri başarıyla tamamlanmıştır. Proje, özellikle CNC ve enjeksiyon makinelerinin yarattığı harmonik bozulmaların yönetimi ve hassas üretim hatlarının enerji kalitesinin korunması üzerine kurgulanmıştır. Üretim sahasındaki busbar dağıtım sistemi, makine yerleşim değişikliklerine esnek yanıt verebilecek modüler yapıda tasarlanmıştır.",
        scope: [
            "Harmonik Filtreli Kompanzasyon Sistemleri",
            "CNC Makine Parkuru Enerji Altyapısı",
            "1000 kVA Trafo ve OG Hücre Kurulumu",
            "Busbar Enerji Dağıtımı (1600A)",
            "İdari Bina Akıllı Aydınlatma ve VRF Altyapısı",
            "Fabrika Geneli Topraklama ve Yıldırımdan Korunma"
        ],
        systems: [
            "Harmonik Filtreleme",
            "CNC Besleme",
            "Busbar Modüler Dağıtım",
            "Akıllı Bina Sistemleri",
            "OG/AG Altyapı"
        ],
        metrics: [
            { label: "Kurulu Güç", value: "1600 kVA" },
            { label: "Tesis Alanı", value: "8.500 m²" },
            { label: "CNC Hattı", value: "Enerji Besleme" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Yelken Kalıp 8.500 m² metal tesis: CNC makine parkı beslemesi, harmonik filtreli kompanzasyon, busbar modüler dağıtım. 1600 kVA güç altyapısı ve akıllı bina sistemleri.",
        keywords: ["CNC makine elektrik", "harmonik filtreleme", "metal fabrika", "kalıp sanayi", "busbar dağıtım", "OG hücre", "enjeksiyon makinesi", "akıllı bina"],
        ogImage: "/images/projects/yelken-kalip.jpg"
    },
    {
        id: "PRJ-2023-012",
        title: "Celal Tekstil Entegre Üretim Tesisi",
        category: "Tekstil & Konfeksiyon",
        location: "Hadımköy, İstanbul",
        year: "2023",
        image: "/images/projects/celal-tekstil.jpg",
        slug: "celal-tekstil-uretim-tesisi",
        description: "Entegre tekstil fabrikasının yüksek güçlü enerji dağıtımı, makine parkuru beslemesi ve akıllı aydınlatma sistemleri.",
        fullDescription: "İstanbul Hadımköy Deliklikaya sanayi bölgesinde kurulan Celal Tekstil Entegre Üretim Tesisi'nin tüm elektrik ve otomasyon altyapısı firmamız tarafından projelendirilip devreye alınmıştır. Tekstil sektörünün gerektirdiği yüksek start akımlarına dayanıklı AG dağıtım panoları ve kesintisiz çalışma için senkron jeneratör altyapısı kurulmuştur. Ayrıca, üretim kalitesini doğrudan etkileyen aydınlatma seviyeleri için DALI otomasyonlu özel LED sistemleri entegre edilmiştir.",
        scope: [
            "2500 kVA Trafo Merkezi ve Köşk Kurulumu",
            "Senkron Jeneratör Altyapısı (2x1000 kVA)",
            "Tekstil Makineleri İçin Özel Pano Tasarımı",
            "DALI Otomasyonlu LED Aydınlatma",
            "Busbar Enerji İletim Hattı (2000A)",
            "Yangın Algılama ve Acil Anons Sistemleri"
        ],
        systems: [
            "OG/AG Enerji Dağıtımı",
            "Jeneratör Senkronizasyonu",
            "Aydınlatma Otomasyonu",
            "Makine Besleme",
            "Zayıf Akım"
        ],
        metrics: [
            { label: "Kurulu Güç", value: "2500 kVA" },
            { label: "Kapalı Alan", value: "15.000 m²" },
            { label: "Makine Parkı", value: "Entegre" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Celal Tekstil 15.000 m² entegre tesis: 2500 kVA trafo, senkron jeneratör, DALI LED otomasyon. Tekstil makineleri özel pano tasarımı ve busbar enerji hattı.",
        keywords: ["tekstil fabrika elektrik", "senkron jeneratör", "DALI aydınlatma", "tekstil makine", "busbar enerji", "trafo merkezi", "entegre tesis", "hadımköy"],
        ogImage: "/images/projects/celal-tekstil.jpg"
    },
    {
        id: "PRJ-2022-045",
        title: "Enviropet Geri Dönüşüm Tesisleri",
        category: "Geri Dönüşüm & Enerji",
        location: "Pendik, İstanbul",
        year: "2022",
        image: "/images/projects/enviropet.jpg",
        slug: "enviropet-geri-donusum",
        description: "Modern geri dönüşüm tesisinin motor kontrol merkezleri (MCC), enerji otomasyonu ve scada altyapısının kurulumu.",
        fullDescription: "Pendik Şeyhli bölgesinde faaliyet gösteren Enviropet Geri Dönüşüm Tesisleri'nin kapasite artırım ve modernizasyon projesidir. Tesisin zorlu çalışma koşullarına uygun, yüksek IP koruma sınıfına sahip MCC (Motor Control Center) panoları ve enerji verimliliğini maksimize eden frekans konvertörlü sürücü sistemleri projelendirilmiştir. Tüm enerji tüketimi ve motor durumları kurulan SCADA sistemi üzerinden anlık olarak izlenebilmektedir.",
        scope: [
            "MCC Motor Kontrol Panoları (IP54)",
            "Soft Starter ve Sürücü Uygulamaları",
            "Enerji İzleme ve SCADA Sistemi",
            "1250 kVA Trafo Postası Revizyonu",
            "Saha Kablolama ve Tava İşleri",
            "Reaktif Güç Kompanzasyonu"
        ],
        systems: [
            "MCC Panolar",
            "SCADA Otomasyon",
            "Enerji Verimliliği",
            "Motor Sürücüleri",
            "Reaktif Güç Kontrol"
        ],
        metrics: [
            { label: "Kurulu Güç", value: "1250 kVA" },
            { label: "Motor Gücü", value: "850 kW" },
            { label: "Otomasyon", value: "SCADA" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Enviropet geri dönüşüm tesisi: MCC motor kontrol panoları IP54, SCADA enerji izleme, 850 kW motor sürücüleri. Soft starter ve reaktif güç kompanzasyonu ile enerji verimliliği.",
        keywords: ["MCC panolar", "motor kontrol", "SCADA sistemi", "geri dönüşüm tesis", "soft starter", "enerji verimliliği", "motor sürücü", "reaktif güç"],
        ogImage: "/images/projects/enviropet.jpg"
    },
    {
        id: "PRJ-2022-018",
        title: "Ardahan Et Entegre Tesisleri",
        category: "Gıda & Soğuk Hava",
        location: "Merkez, Ardahan",
        year: "2022",
        image: "/images/projects/ardahan-et.jpg",
        slug: "ardahan-et-entegre-tesisleri",
        description: "10.000 m² alan üzerine kurulu modern et entegre tesisinin soğuk hava depoları ve hijyenik üretim alanları elektrik altyapısı.",
        fullDescription: "Ardahan'da 10.000 m² arazi üzerine kurulan bu modern et entegre tesisi, bölgenin en önemli gıda yatırımlarından biridir. Proje kapsamında, üretim güvenliği ve gıda standartları (HACCP) gereği kesintisiz enerji arzı kritik öneme sahiptir. Soğuk hava depolarının sıcaklık takibi ve enerji yönetimi için özel otomasyon sistemleri kurulmuş, hijyenik alanlarda IP65 koruma sınıfına sahip paslanmaz çelik panolar ve özel aydınlatma armatürleri kullanılmıştır.",
        scope: [
            "Soğuk Hava Depoları Enerji Altyapısı",
            "Hijyenik Alan Aydınlatma ve Tesisat",
            "Yedekli Jeneratör Sistemi (500 kVA)",
            "Tüm Tesis Kompanzasyon ve AG Dağıtım",
            "Çevre Aydınlatma ve Güvenlik Sistemleri",
            "İdari Bina Zayıf Akım İşleri"
        ],
        systems: [
            "Soğuk Zincir Enerji",
            "Jeneratör",
            "Hijyenik Aydınlatma",
            "AG Dağıtım",
            "Güvenlik"
        ],
        metrics: [
            { label: "Arazi", value: "10.000 m²" },
            { label: "Kurulu Güç", value: "800 kVA" },
            { label: "Soğuk Oda", value: "Otomasyon" },
            { label: "Lokasyon", value: "Ardahan" }
        ],
        metaDescription: "Ardahan Et 10.000 m² entegre tesis: Soğuk hava depo otomasyonu, HACCP hijyenik aydınlatma IP65, 500 kVA jeneratör. Gıda güvenliği standartlarında kesintisiz enerji.",
        keywords: ["soğuk hava deposu", "gıda tesisi elektrik", "HACCP aydınlatma", "hijyenik alan", "et entegre", "jeneratör sistemi", "soğuk zincir", "ardahan"],
        ogImage: "/images/projects/ardahan-et.jpg"
    },
    {
        id: "PRJ-2022-092",
        title: "Florya Emlak Konut Villaları",
        category: "Lüks Konut & Villa",
        location: "Florya, İstanbul",
        year: "2022",
        image: "/images/projects/florya-villalari.jpg",
        slug: "florya-emlak-konut-villalari",
        description: "YAF Mimarlık işbirliğiyle hayata geçirilen özel villaların KNX akıllı ev otomasyonu ve dekoratif aydınlatma çözümleri.",
        fullDescription: "İstanbul'un en prestijli bölgelerinden Florya'da yer alan Emlak Konut Villaları projesinde, 21, 26 ve 37 numaralı özel tasarım villaların tüm elektrik ve otomasyon işleri tamamlanmıştır. Projede konfor ve teknolojiyi birleştiren KNX tabanlı akıllı ev sistemleri kullanılmıştır. Aydınlatma, iklimlendirme ve perde/panjur kontrolleri tek merkezden yönetilebilmekte, mimari dokuya uygun gizli aydınlatma detaylarıyla estetik bir atmosfer sağlanmaktadır.",
        scope: [
            "KNX Akıllı Ev Otomasyonu (Aydınlatma/Perde/Isıtma)",
            "Dekoratif ve Gizli LED Aydınlatma Uygulamaları",
            "Güvenlik ve Kamera (CCTV) Sistemleri",
            "Data ve Wi-Fi Ağ Altyapısı",
            "Jeneratör ve UPS Destekli Enerji Sistemleri",
            "Görüntülü İnterkom ve Bahçe Aydınlatma"
        ],
        systems: [
            "Akıllı Ev (KNX)",
            "Dekoratif Aydınlatma",
            "Güvenlik Sistemleri",
            "Network Altyapısı",
            "Kesintisiz Enerji"
        ],
        metrics: [
            { label: "Birim", value: "3 Adet Villa" },
            { label: "Otomasyon", value: "KNX" },
            { label: "Mimari", value: "YAF Mimarlık" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Florya lüks villalar KNX akıllı ev: Aydınlatma/perde/ısıtma otomasyonu, gizli LED tasarım, CCTV güvenlik, görüntülü interkom. YAF Mimarlık işbirliği ile 3 prestij villa.",
        keywords: ["KNX akıllı ev", "lüks villa otomasyon", "florya villa", "akıllı aydınlatma", "gizli LED", "villa güvenlik", "görüntülü interkom", "prestij konut"],
        ogImage: "/images/projects/florya-villalari.jpg"
    },
    {
        id: "PRJ-2021-067",
        title: "General Oto Peugeot & Citroen Plaza",
        category: "Otomotiv & Showroom",
        location: "Maslak, İstanbul",
        year: "2021",
        image: "/images/projects/general-oto.jpg",
        slug: "general-oto-peugeot-citroen",
        description: "Modern otomotiv plazasının showroom aydınlatma tasarımı, servis alanı güç dağıtımı ve elektrikli araç şarj altyapısı.",
        fullDescription: "İstanbul Maslak'ta bulunan General Oto Peugeot & Citroen Plazası'nın tüm elektrik ve elektronik altyapısı, modern otomotiv perakendeciliğinin gerekliliklerine göre tasarlanmıştır. Showroom alanında araçların renk ve hatlarını en doğru şekilde yansıtan yüksek CRI değerli özel LED aydınlatma sistemleri kullanılmıştır. Servis bölümünde ise liftler ve diagnostik cihazlar için güvenli güç dağıtım panoları ve topraklama sistemleri kurulmuş, ayrıca elektrikli araç (EV) şarj istasyonları altyapısı tamamlanmıştır.",
        scope: [
            "Showroom Aydınlatma Otomasyonu",
            "Servis Alanı Kuvvetli Akım Tesisatı",
            "Elektrikli Araç (EV) Şarj İstasyonları",
            "Data ve İletişim Altyapısı",
            "Yangın Algılama ve Acil Durum Yönlendirme",
            "Plaza Dış Cephe Aydınlatması"
        ],
        systems: [
            "EV Şarj Altyapısı",
            "Showroom Aydınlatma",
            "Servis Güç Dağıtım",
            "Network",
            "Güvenlik"
        ],
        metrics: [
            { label: "Plaza Alanı", value: "5.000 m²" },
            { label: "Şarj İstasyonu", value: "AC/DC" },
            { label: "Aydınlatma", value: "Yüksek CRI" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "General Oto Maslak 5.000 m² plaza: Showroom yüksek CRI aydınlatma, EV şarj istasyonları AC/DC, servis güç dağıtımı. Peugeot & Citroen için modern otomotiv altyapısı.",
        keywords: ["EV şarj istasyonu", "showroom aydınlatma", "otomotiv plaza", "yüksek CRI", "elektrikli araç", "servis elektrik", "peugeot citroen", "maslak"],
        ogImage: "/images/projects/general-oto.jpg"
    },
    {
        id: "PRJ-2021-033",
        title: "Legrand Elektrik Bölge Müdürlüğü",
        category: "Kurumsal & Ofis",
        location: "Ümraniye, İstanbul",
        year: "2021",
        image: "/images/projects/legrand.jpg",
        slug: "legrand-elektrik-bolge-mudurlugu",
        description: "Dünya devi Legrand'ın İstanbul Bölge Müdürlüğü'nün yapısal kablolama, UPS altyapısı ve ofis otomasyonu projesi.",
        fullDescription: "Elektrik ve dijital bina altyapılarında dünya lideri olan Legrand'ın Ümraniye'deki Bölge Müdürlüğü binasının tüm elektrik taahhüt işleri, markanın kendi premium ürün gamı kullanılarak gerçekleştirilmiştir. Projede ofis alanlarının esnek kullanımına olanak sağlayan döşeme altı dağıtım sistemleri, yüksek hızlı data iletişimi için yapısal kablolama ve kritik sistemler için modüler UPS altyapısı kurulmuştur. Showroom ve toplantı odalarında ise Legrand'ın en yeni otomasyon serileri uygulanmıştır.",
        scope: [
            "Yapısal Kablolama ve Data Altyapısı (Cat6A)",
            "Döşeme Altı Enerji Dağıtım Sistemleri",
            "Modüler UPS Sistemleri (3x40 kVA)",
            "Toplantı Odası Otomasyonu",
            "Kartlı Geçiş ve Güvenlik Sistemleri",
            "Showroom Özel Aydınlatma Tasarımı"
        ],
        systems: [
            "Yapısal Kablolama",
            "Ofis Otomasyonu",
            "UPS Sistemleri",
            "Döşeme Altı",
            "Güvenlik"
        ],
        metrics: [
            { label: "Ofis Alanı", value: "3.500 m²" },
            { label: "Data Uç", value: "850+" },
            { label: "Ürün Grubu", value: "Legrand" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Legrand Ümraniye 3.500 m² ofis: Yapısal kablolama Cat6A, döşeme altı dağıtım, modüler UPS 120 kVA, 850+ data ucu. Legrand premium ürünlerle kurumsal otomasyon.",
        keywords: ["legrand ofis", "yapısal kablolama", "modüler UPS", "döşeme altı dağıtım", "cat6a", "ofis otomasyonu", "kartlı geçiş", "ümraniye"],
        ogImage: "/images/projects/legrand.jpg"
    },
    {
        id: "PRJ-2021-098",
        title: "İstanbul Kültür Üniversitesi",
        category: "Eğitim & Kampüs",
        location: "Bakırköy, İstanbul",
        year: "2021",
        image: "/images/projects/kultur-universitesi.jpg",
        slug: "istanbul-kultur-universitesi",
        size: "large",
        description: "Ataköy yerleşkesinin akademik birimler, laboratuvarlar ve sosyal alanlarını kapsayan kapsamlı elektrik ve zayıf akım projesi.",
        fullDescription: "İstanbul Kültür Üniversitesi'nin Ataköy yerleşkesinde gerçekleştirilen projede, modern eğitimin gerekliliklerine uygun teknolojik altyapı tesis edilmiştir. Amfîler ve dersliklerdeki akıllı sunum sistemleri, laboratuvarlardaki hassas cihazlar için regüleli güç hatları ve kampüs genelindeki fiber optik backbone altyapısı başarıyla devreye alınmıştır. Ayrıca kütüphane ve sosyal alanlarda enerji verimliliği odaklı aydınlatma otomasyonu uygulanmıştır.",
        scope: [
            "Kampüs Geneli Fiber Optik Altyapı",
            "Laboratuvar ve Ar-Ge Merkezi Güç Panoları",
            "Amfi Ses, Görüntü ve Otomasyon Sistemleri",
            "Kütüphane Aydınlatma Otomasyonu (DALI)",
            "Kesintisiz Güç Kaynağı (UPS) Sistemi (2x300 kVA)",
            "Yangın Algılama ve Acil Anons Sistemi"
        ],
        systems: [
            "Fiber Optik Network",
            "Derslik Otomasyonu",
            "Laboratuvar Güç",
            "Aydınlatma Kontrol",
            "UPS"
        ],
        metrics: [
            { label: "Kampüs", value: "Ataköy" },
            { label: "Altyapı", value: "Fiber Optik" },
            { label: "Teknoloji", value: "Akıllı Sınıf" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "İKÜ Ataköy kampüs: Fiber optik backbone, akıllı amfi ses/görüntü, laboratuvar regüleli güç, DALI aydınlatma otomasyonu, 600 kVA UPS. Modern eğitim teknoloji altyapısı.",
        keywords: ["üniversite kampüs elektrik", "fiber optik", "akıllı sınıf", "laboratuvar güç", "DALI otomasyon", "kampüs network", "amfi ses sistemi", "ataköy"],
        ogImage: "/images/projects/kultur-universitesi.jpg"
    },
    {
        id: "PRJ-2020-054",
        title: "İstanbul Kültür Koleji",
        category: "Eğitim & Okul",
        location: "Bakırköy, İstanbul",
        year: "2020",
        image: "/images/projects/kultur-koleji.jpg",
        slug: "istanbul-kultur-koleji",
        description: "Ataköy 9. Kısım'da yer alan eğitim kompleksinin akıllı tahta, güvenlik ve genel aydınlatma sistemleri revizyonu.",
        fullDescription: "İstanbul Kültür Koleji'nin Ataköy kampüsünde gerçekleştirilen projede, öğrenci güvenliği ve konforu odaklı elektrik sistemleri hayata geçirilmiştir. Dersliklerdeki interaktif eğitim araçları (akıllı tahtalar, projeksiyonlar) için korumalı güç hatları çekilmiş, koridor ve ortak alanlarda acil durum yönlendirme sistemleri yenilenmiştir. Ayrıca spor salonu ve konferans salonunun profesyonel ses ve ışık sistemleri altyapısı firmamız tarafından kurulmuştur.",
        scope: [
            "Akıllı Tahta ve İnteraktif Eğitim Altyapısı",
            "Genel ve Acil Durum Aydınlatma (LED)",
            "Konferans Salonu Profesyonel Ses/Işık",
            "Spor Salonu Aydınlatma Otomasyonu",
            "CCTV Kamera ve Güvenlik Sistemleri",
            "Mutfak ve Yemekhane Güç Tesisatı"
        ],
        systems: [
            "İnteraktif Eğitim",
            "Acil Aydınlatma",
            "Ses & Işık",
            "Güvenlik (CCTV)",
            "Güç Dağıtım"
        ],
        metrics: [
            { label: "Kapasite", value: "1000+ Öğrenci" },
            { label: "Güvenlik", value: "Tam Kapsam" },
            { label: "Eğitim", value: "Akıllı" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Kültür Koleji Ataköy 1000+ öğrenci: Akıllı tahta interaktif eğitim, CCTV güvenlik, konferans ses/ışık, spor salonu otomasyon. LED acil aydınlatma ve yemekhane altyapısı.",
        keywords: ["okul elektrik", "akıllı tahta", "interaktif eğitim", "okul güvenlik", "CCTV kamera", "konferans ses", "spor salonu", "acil aydınlatma"],
        ogImage: "/images/projects/kultur-koleji.jpg"
    },
    {
        id: "PRJ-2020-041",
        title: "İKÜ İncirli Meslek Yüksekokulu",
        category: "Eğitim & Kampüs",
        location: "Bahçelievler, İstanbul",
        year: "2020",
        image: "/images/projects/incirli-myo.jpg",
        slug: "iku-incirli-meslek-yuksekokulu",
        description: "Mesleki eğitim laboratuvarları ve dersliklerin elektrik, network ve güvenlik altyapısının yenilenmesi.",
        fullDescription: "İstanbul Kültür Üniversitesi'nin Bahçelievler İncirli yerleşkesindeki Meslek Yüksekokulu binasında, uygulamalı eğitimin ihtiyaçlarına yönelik kapsamlı bir altyapı çalışması yapılmıştır. Bilgisayar laboratuvarları ve teknik atölyeler için zemin altı kablolama ile güvenli güç dağıtımı sağlanmış, tüm binada yüksek hızlı Wi-Fi 6 ve kablolu network altyapısı kurulmuştur. Ayrıca bina güvenliği, yeni nesil IP kamera sistemleri ile güçlendirilmiştir.",
        scope: [
            "Bilgisayar Laboratuvarları Güç ve Data Altyapısı",
            "Atölye ve Uygulama Alanları Enerji Dağıtımı",
            "Kampüs Geneli Wi-Fi 6 Sistem Kurulumu",
            "IP CCTV Kamera ve Geçiş Kontrol",
            "Kütüphane ve Etüt Alanları Aydınlatması",
            "Ana Dağıtım Panoları Revizyonu"
        ],
        systems: [
            "Laboratuvar Altyapısı",
            "Data & Network",
            "Güvenlik Sistemleri",
            "İç Aydınlatma",
            "Pano Revizyonu"
        ],
        metrics: [
            { label: "Bina", value: "İncirli Kampüs" },
            { label: "Laboratuvar", value: "Tam Donanım" },
            { label: "Network", value: "Cat6/Fiber" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "İKÜ İncirli MYO: Bilgisayar lab güç/data, atölye enerji dağıtımı, Wi-Fi 6 kampüs network, IP CCTV güvenlik, geçiş kontrol. Cat6/Fiber altyapısı ve pano revizyonu.",
        keywords: ["meslek yüksekokulu", "laboratuvar altyapı", "Wi-Fi 6", "atölye elektrik", "IP CCTV", "geçiş kontrol", "kampüs network", "bahçelievler"],
        ogImage: "/images/projects/incirli-myo.jpg"
    },
    {
        id: "PRJ-2020-015",
        title: "Alkent İstanbul 2000",
        category: "Site & Konut",
        location: "Büyükçekmece, İstanbul",
        year: "2020",
        image: "/images/projects/alkent-2000.jpg",
        slug: "alkent-istanbul-2000",
        description: "Prestijli yaşam merkezinin çevre aydınlatma, sosyal tesis ve altyapı revizyon işlemleri.",
        fullDescription: "İstanbul'un en köklü ve prestijli villa sitelerinden Alkent 2000'de gerçekleştirilen altyapı modernizasyon projesidir. Site genelindeki geniş peyzaj alanlarının aydınlatma sistemleri enerji tasarruflu LED teknolojisine dönüştürülmüş ve merkezi otomasyon ile yönetilebilir hale getirilmiştir. Ayrıca sosyal tesisler, havuz daireleri ve tenis kortlarının elektrik panoları IP65 standartlarında yenilenmiş, site içi OG ring şebekesi bakımdan geçirilmiştir.",
        scope: [
            "Site Çevre Aydınlatma Revizyonu (LED Dönüşüm)",
            "Sosyal Tesisler ve Havuz Dairesi Pano Değişimi",
            "Tenis Kortları ve Spor Alanları Aydınlatması",
            "OG Ring Şebekesi Bakım ve Onarımı",
            "Plaka Tanıma ve Giriş Güvenlik Sistemleri",
            "Jeneratör Senkronizasyon Panoları"
        ],
        systems: [
            "Çevre Aydınlatma",
            "OG Ring Şebeke",
            "Havuz Otomasyon",
            "Güvenlik (PTS)",
            "Enerji Verimliliği"
        ],
        metrics: [
            { label: "Alan", value: "Geniş Ölçek" },
            { label: "Revizyon", value: "Tam Kapsam" },
            { label: "Aydınlatma", value: "LED" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Alkent 2000 villa sitesi: LED çevre aydınlatma, OG ring şebeke bakımı, havuz otomasyonu IP65, plaka tanıma güvenlik. Sosyal tesis ve spor alanları pano revizyonu.",
        keywords: ["villa site elektrik", "çevre aydınlatma", "OG ring şebeke", "havuz otomasyonu", "plaka tanıma", "LED dönüşüm", "site güvenlik", "büyükçekmece"],
        ogImage: "/images/projects/alkent-2000.jpg"
    },
    {
        id: "PRJ-2020-008",
        title: "Pelican Hill Evleri (Özel Villa)",
        category: "Lüks Konut & Villa",
        location: "Büyükçekmece, İstanbul",
        year: "2020",
        image: "/images/projects/pelican-hill.jpg",
        slug: "pelican-hill-evleri-villa",
        description: "Toskana mimarisine sahip özel villanın ultra lüks akıllı ev otomasyonu ve sinema salonu kurulumu.",
        fullDescription: "Pelican Hill Evleri'nde yer alan bu özel malikanede, konforun sınırlarını zorlayan bir teknoloji altyapısı kurulmuştur. Evin tüm fonksiyonları (aydınlatma, iklimlendirme, multimedya, güvenlik) tek bir arayüzden yönetilebilen KNX otomasyon sistemine entegre edilmiştir. Ayrıca villaya özel profesyonel akustik düzenlemeye sahip bir ev sinema salonu ve bahçe peyzajında müzik yayını yapabilen dış mekan ses sistemleri projelendirilmiştir.",
        scope: [
            "KNX Akıllı Ev ve Otomasyon Sistemi",
            "Profesyonel Ev Sinema Salonu (Dolby Atmos)",
            "Multi-Room Ses ve Görüntü Dağıtımı",
            "Bahçe ve Havuz Renk değiştiren LED Aydınlatma",
            "Yerden Isıtma ve VRF Klima Entegrasyonu",
            "Parmak İzi Okuyuculu Giriş Sistemleri"
        ],
        systems: [
            "Akıllı Ev (KNX)",
            "Multimedya",
            "Sinema Sistemi",
            "Güvenlik",
            "Peyzaj Aydınlatma"
        ],
        metrics: [
            { label: "Tip", value: "Özel Villa" },
            { label: "Otomasyon", value: "Full KNX" },
            { label: "Ses", value: "Multi-Room" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Pelican Hill özel villa: Full KNX akıllı ev, Dolby Atmos ev sineması, multi-room ses dağıtımı, RGB havuz aydınlatması. Parmak izi güvenlik ve VRF entegrasyonu.",
        keywords: ["KNX akıllı villa", "ev sineması Dolby Atmos", "multi-room ses", "lüks villa otomasyon", "RGB havuz", "parmak izi güvenlik", "VRF klima", "pelican hill"],
        ogImage: "/images/projects/pelican-hill.jpg"
    },
    {
        id: "PRJ-2020-003",
        title: "Aksa Et ve Süt Ürünleri",
        category: "Gıda & Perakende",
        location: "Bayrampaşa, İstanbul",
        year: "2020",
        image: "/images/projects/aksa-gida.jpg",
        slug: "aksa-et-ve-sut-urunleri",
        description: "Mega Center Kuru Gıda Sitesi'ndeki toptan ve perakende satış mağazasının soğuk zincir ve aydınlatma projesi.",
        fullDescription: "Türkiye'nin gıda merkezi Mega Center'da yer alan Aksa Et ve Süt Ürünleri mağazasında, gıda güvenliğinin en üst düzeyde tutulması için kritik enerji altyapısı kurulmuştur. Soğuk hava depolarının ve reyon dolaplarının enerji beslemeleri yedekli hatlar üzerinden sağlanmış, olası elektrik kesintilerinde jeneratörün saniyeler içinde devreye girmesi için otomatik transfer panoları (ATS) tasarlanmıştır. Ayrıca ürünlerin tazeliğini vurgulayan özel market aydınlatma konsepti uygulanmıştır.",
        scope: [
            "Soğuk Hava Deposu Elektrik Panoları",
            "Otomatik Transfer Panosu (ATS) ve Jeneratör",
            "Reyon ve Tezgah Özel LED Aydınlatma",
            "Kamera ve Kayıt Sistemleri (7/24 İzleme)",
            "Yangın Algılama Sistemi",
            "Satış Alanı Kuvvetli Akım Tesisatı"
        ],
        systems: [
            "Soğuk Zincir",
            "ATS / Jeneratör",
            "Market Aydınlatma",
            "Güvenlik",
            "Yangın Algılama"
        ],
        metrics: [
            { label: "Tip", value: "Gıda Depo/Mağaza" },
            { label: "Kritik", value: "Soğuk Zincir" },
            { label: "Güvenlik", value: "7/24" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Aksa Et Mega Center: Soğuk zincir yedekli enerji, ATS jeneratör, market LED aydınlatma, 7/24 CCTV, yangın algılama. Gıda güvenliği için kesintisiz elektrik altyapısı.",
        keywords: ["soğuk zincir elektrik", "gıda market", "ATS jeneratör", "soğuk hava", "market aydınlatma", "CCTV güvenlik", "mega center", "bayrampaşa"],
        ogImage: "/images/projects/aksa-gida.jpg"
    },
    {
        id: "PRJ-2019-077",
        title: "Cups & Clouds İstanbul Havalimanı",
        category: "Mağaza & Havalimanı",
        location: "Arnavutköy, İstanbul",
        year: "2019",
        image: "/images/projects/cups-clouds.jpg",
        slug: "cups-and-clouds-istanbul-havalimani",
        description: "Dünyanın en büyük havalimanındaki premium kafenin elektrik, aydınlatma ve zayıf akım işleri.",
        fullDescription: "İstanbul Havalimanı (IGA) içerisinde yer alan Cups & Clouds şubesinin tüm elektrik taahhüt işleri, havalimanının uluslararası teknik şartnamelerine tam uyum çerçevesinde gerçekleştirilmiştir. Projede kullanılan tüm kablolar Halogen-Free (yanmaz) özellikte olup, yangın güvenliği en üst seviyededir. Mağazanın sıcak atmosferini tamamlayan dekoratif aydınlatma armatürleri ve profesyonel kahve ekipmanlarının gerektirdiği özel güç prizleri titizlikle monte edilmiştir.",
        scope: [
            "Halogen-Free (HFFR) Kablolama Altyapısı",
            "Dekoratif ve Mimari Aydınlatma Montajı",
            "CCTV ve Yangın Algılama Sistemleri Entegrasyonu",
            "Mutfak ve Bar Ekipmanları Güç Beslemeleri",
            "Data ve POS Sistemi Altyapısı",
            "IGA Teknik Şartname Uyumluluğu"
        ],
        systems: [
            "Havalimanı Standartları",
            "Dekoratif Aydınlatma",
            "Yangın Güvenliği",
            "Güç Dağıtım",
            "Data Altyapısı"
        ],
        metrics: [
            { label: "Lokasyon", value: "IGA / Dış Hatlar" },
            { label: "Güvenlik", value: "Üst Düzey" },
            { label: "Kablolama", value: "HFFR" },
            { label: "Standart", value: "Uluslararası" }
        ],
        metaDescription: "Cups & Clouds İstanbul Havalimanı: HFFR halogen-free kablolama, IGA teknik şartname uyumu, dekoratif aydınlatma, yangın güvenliği, mutfak ekipman güç beslemesi.",
        keywords: ["havalimanı elektrik", "HFFR kablo", "IGA standart", "cafe elektrik", "yangın güvenliği", "dekoratif aydınlatma", "mutfak güç", "istanbul havalimanı"],
        ogImage: "/images/projects/cups-clouds.jpg"
    },
    {
        id: "PRJ-2019-021",
        title: "Skyland Roche Bobois Showroom",
        category: "Mağaza & Showroom",
        location: "Sarıyer, İstanbul",
        year: "2019",
        image: "/images/projects/roche-bobois.jpg",
        slug: "skyland-roche-bobois",
        description: "Dünyaca ünlü mobilya markasının Skyland HOM Design Center'daki flagship mağazasının elektrik projesi.",
        fullDescription: "Skyland İstanbul HOM Design Center içerisinde yer alan Roche Bobois mağazası, markanın tasarım çizgisini yansıtan sofistike bir elektrik altyapısına sahiptir. Mobilyaların dokusunu ve renklerini en doğal haliyle gösteren yüksek CRI (>95) değerine sahip özel ray spot aydınlatma sistemleri kullanılmıştır. Ayrıca mağaza genelinde DALI tabanlı dimlenebilir aydınlatma otomasyonu uygulanarak farklı atmosfer senaryoları oluşturulabilmektedir. Skyland'ın yüksek güvenlik standartlarına uygun yangın algılama ve acil durum sistemleri de firmamızca tesis edilmiştir.",
        scope: [
            "DALI Dimlenebilir Ray Spot Aydınlatma",
            "Mimari ve Gizli LED Uygulamaları",
            "Yangın Algılama ve Acil Anons Entegrasyonu",
            "Trifaze Ray Sistemleri Kurulumu",
            "Data ve Wi-Fi Ağı Kurulumu",
            "Mağaza İçi Ses Sistemi (Arka Plan Müzik)"
        ],
        systems: [
            "Aydınlatma Otomasyonu",
            "Yüksek CRI Işık",
            "Yangın Güvenliği",
            "Ses Sistemi",
            "Data Altyapısı"
        ],
        metrics: [
            { label: "Konum", value: "Skyland HOM" },
            { label: "Aydınlatma", value: "DALI Dim" },
            { label: "Kalite", value: "Premium" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Roche Bobois Skyland showroom: DALI dimlenebilir ray spot CRI>95, mimari gizli LED, yangın algılama, trifaze ray sistem. Premium mobilya için profesyonel aydınlatma.",
        keywords: ["showroom aydınlatma", "DALI dim", "yüksek CRI", "roche bobois", "ray spot", "mobilya showroom", "skyland", "gizli LED"],
        ogImage: "/images/projects/roche-bobois.jpg"
    },
    {
        id: "PRJ-2018-055",
        title: "The Biancho Hotel Old City",
        category: "Otel & Turizm",
        location: "Fatih, İstanbul",
        year: "2018",
        image: "/images/projects/biancho-hotel.jpg",
        slug: "the-biancho-hotel-old-city",
        description: "Tarihi yarımadada bulunan butik otelin oda otomasyonu ve enerji yönetim sistemleri.",
        fullDescription: "İstanbul'un kalbi Fatih'te yer alan The Biancho Hotel Old City'nin elektrik taahhüt işleri, modern otelcilik standartları ile tarihi dokunun hassasiyeti gözetilerek tamamlanmıştır. Misafir konforunu maksimize etmek için tüm odalarda GRMS (Guest Room Management System) tabanlı otomasyon kullanılmıştır. Kartlı enerji tasarruf sistemleri, DND/MUR (Rahatsız Etmeyin / Temizlik İsteği) panelleri ve resepsiyon entegrasyonu ile işletme verimliliği artırılmıştır.",
        scope: [
            "Otel Odası Otomasyonu (GRMS)",
            "Energy Saver ve Kartlı Geçiş Sistemleri",
            "DND/MUR Koridor Panelleri ve Ziller",
            "Yangın Algılama ve Acil Anons Sistemi",
            "Dekoratif Lobi ve Cephe Aydınlatması",
            "Jeneratör ve UPS Destekli Altyapı"
        ],
        systems: [
            "GRMS Otomasyon",
            "Kartlı Sistem",
            "Yangın Güvenliği",
            "Enerji Yönetimi",
            "Cephe Aydınlatma"
        ],
        metrics: [
            { label: "Oda Sayısı", value: "Butik" },
            { label: "Otomasyon", value: "GRMS" },
            { label: "Enerji", value: "Saver" },
            { label: "Lokasyon", value: "Tarihi Yarımada" }
        ],
        metaDescription: "Biancho Hotel Old City Fatih: GRMS oda otomasyonu, kartlı energy saver, DND/MUR paneller, yangın algılama, cephe aydınlatma. Butik otel jeneratör ve UPS altyapısı.",
        keywords: ["otel otomasyonu", "GRMS sistem", "energy saver", "DND MUR", "butik otel", "kartlı sistem", "tarihi yarımada", "fatih otel"],
        ogImage: "/images/projects/biancho-hotel.jpg"
    },
    {
        id: "PRJ-2018-089",
        title: "The Biancho Hotel Pera",
        category: "Otel & Turizm",
        location: "Beyoğlu, İstanbul",
        year: "2018",
        image: "/images/projects/biancho-pera.jpg",
        slug: "the-biancho-hotel-pera",
        description: "Pera bölgesindeki şehir otelinin genel elektrik, zayıf akım ve teras restoran aydınlatma projesi.",
        fullDescription: "Beyoğlu Pera'nın dinamik atmosferinde yer alan The Biancho Hotel Pera'da, konfor ve teknolojiyi birleştiren kapsamlı bir elektrik altyapı projesi gerçekleştirilmiştir. Otelin tüm odalarında misafirlerin dijital ihtiyaçlarına yönelik yüksek hızlı Wi-Fi ve data altyapısı kurulmuştur. Teras katında yer alan restoran için İstanbul manzarasıyla bütünleşen özel bir ambiyans aydınlatması tasarlanmış, bina güvenliği ise IP tabanlı CCTV sistemleri ile sağlanmıştır.",
        scope: [
            "Teras Restoran Ambiyans Aydınlatması",
            "Otel Geneli Wi-Fi ve Data Altyapısı",
            "IP CCTV ve Güvenlik Sistemleri",
            "Oda İçi Multimedya Bağlantı Noktaları",
            "Yangın Algılama ve Acil Durum Çıkışları",
            "Jeneratör Transfer Panosu Revizyonu"
        ],
        systems: [
            "Data & Wi-Fi",
            "Ambiyans Aydınlatma",
            "Güvenlik",
            "Multimedya",
            "Yangın Algılama"
        ],
        metrics: [
            { label: "Konum", value: "Pera" },
            { label: "Manzara", value: "Teras Aydınlatma" },
            { label: "Bağlantı", value: "Yüksek Hız" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Biancho Hotel Pera Beyoğlu: Teras restoran ambiyans aydınlatma, yüksek hızlı Wi-Fi, IP CCTV güvenlik, oda multimedya, yangın algılama. İstanbul manzaralı otel altyapısı.",
        keywords: ["pera otel", "teras aydınlatma", "otel Wi-Fi", "IP CCTV", "restoran aydınlatma", "multimedya", "beyoğlu otel", "istanbul manzara"],
        ogImage: "/images/projects/biancho-pera.jpg"
    },
    {
        id: "PRJ-2019-112",
        title: "Mövenpick Hotel Istanbul Bosphorus",
        category: "Otel & Revizyon",
        location: "Beşiktaş, İstanbul",
        year: "2019",
        image: "/images/projects/movenpick-bosphorus.jpg",
        slug: "movenpick-hotel-istanbul-bosphorus",
        size: "large",
        description: "5 yıldızlı otelin ana dağıtım panoları ve enerji altyapısının modernizasyonu ve revizyon işlemleri.",
        fullDescription: "İstanbul Boğazı manzaralı ikonik Mövenpick Hotel Istanbul Bosphorus'un enerji güvenliğini artırmak amacıyla kapsamlı bir pano revizyon projesi gerçekleştirilmiştir. Otelin operasyonel sürekliliğini etkilemeden, mevcut Ana Dağıtım Panoları (ADP) ve kat dağıtım merkezleri incelenmiş, termal kamera analizleri ile tespit edilen riskli noktalar modernize edilmiştir. Eski nesil şalt malzemeleri, enerji izleme özellikli yeni nesil donanımlarla değiştirilerek sistemin verimliliği ve güvenliği IEC 61439 standartlarına yükseltilmiştir.",
        scope: [
            "Ana Dağıtım Panoları (ADP) Revizyonu",
            "Termal Analiz ve Risk Raporlama",
            "Enerji Analizörleri Entegrasyonu ve İzleme",
            "Kompanzasyon Panoları İyileştirme",
            "Otomatik Transfer (ATS) Sistemleri Bakımı",
            "Bara ve Kablolama Altyapısı Yenileme"
        ],
        systems: [
            "Pano Revizyonu",
            "Enerji İzleme",
            "Kompanzasyon",
            "Termal Analiz",
            "ATS"
        ],
        metrics: [
            { label: "Revizyon", value: "Ana Pano" },
            { label: "Standart", value: "IEC 61439" },
            { label: "Verimlilik", value: "İzlenebilir" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Mövenpick Hotel Boğaz: Ana dağıtım panosu revizyonu IEC 61439, termal analiz, enerji analizörleri, kompanzasyon iyileştirme, ATS bakımı. 5 yıldız otel pano modernizasyonu.",
        keywords: ["otel pano revizyonu", "IEC 61439", "termal analiz", "enerji analizör", "kompanzasyon", "ATS sistemi", "mövenpick", "boğaz otel"],
        ogImage: "/images/projects/movenpick-bosphorus.jpg"
    },
    {
        id: "PRJ-2018-042",
        title: "Vera Clinic - Şube 2",
        category: "Sağlık & Hastane",
        location: "Kartal, İstanbul",
        year: "2018",
        image: "/images/projects/vera-clinic.jpg",
        slug: "vera-clinic-sube-2",
        size: "large",
        description: "30.000 m² alana kurulu modern sağlık kompleksinin medikal elektrik altyapısı ve otomasyon sistemleri.",
        fullDescription: "Kartal sahil şeridinde 30.000 m² kapalı alana sahip Vera Clinic Şube 2 projesi, uluslararası sağlık standartlarına (JCI) uygun elektrik altyapısı ile donatılmıştır. Operasyon odalarında hayati önem taşıyan İzole Güç Sistemleri (IT Pano) kullanılmış, cerrahi aydınlatmalar için gölgesiz ve yüksek lümenli özel armatürler tercih edilmiştir. Tesisin iklimlendirme ve sterilizasyon süreçleri, firmamız tarafından kurulan BMS (Bina Yönetim Sistemi) üzerinden 7/24 izlenmektedir.",
        scope: [
            "Medikal İzole Güç Sistemleri (IT Panolar)",
            "Ameliyathane Steril Alan Aydınlatması",
            "BMS Bina Yönetim Sistemi Entegrasyonu",
            "Kesintisiz Güç Kaynağı (UPS) - 2x400 kVA",
            "Hasta Odası Çağrı ve Konfor Otomasyonu",
            "Tıbbi Gaz ve Hemşire Çağrı Altyapısı"
        ],
        systems: [
            "Medikal Güç (IT)",
            "BMS Otomasyon",
            "Steril Aydınlatma",
            "UPS Altyapısı",
            "Hasta Çağrı"
        ],
        metrics: [
            { label: "Alan", value: "30.000 m²" },
            { label: "Medikal", value: "İzole Güç" },
            { label: "Standart", value: "JCI" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Vera Clinic 30.000 m² sağlık: Medikal IT izole güç, ameliyathane steril aydınlatma, BMS otomasyon, 800 kVA UPS, hasta çağrı sistemi. JCI standartlarında tıbbi altyapı.",
        keywords: ["medikal elektrik", "IT izole güç", "ameliyathane aydınlatma", "BMS otomasyon", "JCI standart", "hasta çağrı", "sağlık tesisi", "kartal"],
        ogImage: "/images/projects/vera-clinic.jpg"
    },
    {
        id: "PRJ-2018-019",
        title: "Estevera Sağlık Hizmetleri",
        category: "Sağlık & Estetik",
        location: "Şişli, İstanbul",
        year: "2018",
        image: "/images/projects/estevera-saglik.jpg",
        slug: "estevera-saglik-hizmetleri",
        description: "Şişli Esentepe'deki estetik ve saç ekim merkezinin medikal elektrik ve aydınlatma projesi.",
        fullDescription: "İstanbul'un iş ve sağlık merkezi Şişli'de yer alan Estevera Sağlık Hizmetleri'nin yeni şubesi için, estetik operasyonların gerektirdiği hassasiyete uygun bir elektrik altyapısı tasarlanmıştır. Saç ekimi operasyon odalarında kullanılan mikromotor cihazları için regüleli ve kesintisiz güç hatları çekilmiş, operasyonun başarısını doğrudan etkileyen gölgesiz medikal aydınlatmalar monte edilmiştir. Ayrıca hasta konforu için bekleme alanlarında rahatlatıcı (warm white) ışık senaryoları uygulanmıştır.",
        scope: [
            "Medikal Operasyon Odası Aydınlatması",
            "Hassas Cihazlar İçin UPS Hattı",
            "Regüleli Priz Kombinasyonları",
            "Bekleme ve Karşılama Alanı Dekoratif Aydınlatma",
            "TV ve Multimedya Sistemi Altyapısı",
            "Network ve IP Telefon Santrali"
        ],
        systems: [
            "Medikal Aydınlatma",
            "Kesintisiz Güç",
            "Multimedya",
            "Network",
            "İklimlendirme Güç"
        ],
        metrics: [
            { label: "Klinik", value: "Estetik" },
            { label: "Aydınlatma", value: "Medikal" },
            { label: "Konfor", value: "Hasta Odaklı" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Estevera Şişli estetik klinik: Medikal operasyon aydınlatması, UPS hassas cihaz hattı, regüleli priz, dekoratif bekleme alanı, network ve IP telefon santrali.",
        keywords: ["estetik klinik elektrik", "medikal aydınlatma", "UPS hassas cihaz", "regüleli priz", "saç ekim", "klinik otomasyon", "şişli", "esentepe"],
        ogImage: "/images/projects/estevera-saglik.jpg"
    },
    {
        id: "PRJ-2017-063",
        title: "Yalı Ataköy Ofis",
        category: "Ofis & Plaza",
        location: "Bakırköy, İstanbul",
        year: "2017",
        image: "/images/projects/yali-atakoy.jpg",
        slug: "yali-atakoy-ofis",
        description: "Deniz manzaralı premium ofis katlarının elektrik, otomasyon ve güvenlik altyapı işleri.",
        fullDescription: "Ataköy sahil şeridinin en prestijli yapılarından biri olan Yalı Ataköy projesindeki ofis bloğunda, modern iş dünyasının tüm ihtiyaçlarını karşılayan esnek ve güvenli bir altyapı kurulmuştur. Açık ofis alanlarında çalışma masalarının yerleşimine göre kolayca revize edilebilen döşeme altı busbar ve buat sistemleri kullanılmıştır. Yönetici odalarında ise tablet üzerinden kontrol edilebilen aydınlatma ve perde otomasyonu uygulanmış, ofis genelinde kartlı ve biyometrik geçiş sistemleri ile güvenlik sağlanmıştır.",
        scope: [
            "Döşeme Altı Busbar ve Enerji Dağıtımı",
            "Yönetici Odası KNX Otomasyonu",
            "Açık Ofis Lineer LED Aydınlatma",
            "Biyometrik ve Kartlı Geçiş Kontrol",
            "Toplantı Odası Görüntü ve Ses Sistemleri",
            "UPS Destekli Data Altyapısı"
        ],
        systems: [
            "Ofis Otomasyonu",
            "Geçiş Kontrol",
            "Esnek Dağıtım",
            "Data & Network",
            "Toplantı Teknoloji"
        ],
        metrics: [
            { label: "Konsept", value: "A+ Ofis" },
            { label: "Manzara", value: "Deniz" },
            { label: "Altyapı", value: "Modüler" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Yalı Ataköy deniz manzaralı ofis: Döşeme altı busbar, KNX oda otomasyonu, lineer LED, biyometrik geçiş, toplantı ses/görüntü sistemi. A+ premium ofis modüler altyapı.",
        keywords: ["premium ofis elektrik", "döşeme altı busbar", "KNX otomasyon", "biyometrik geçiş", "toplantı odası", "lineer LED", "ataköy ofis", "deniz manzara"],
        ogImage: "/images/projects/yali-atakoy.jpg"
    },
    {
        id: "PRJ-2016-092",
        title: "Otto Ataşehir (Lankon İnşaat)",
        category: "Konut & Ticari",
        location: "Ataşehir, İstanbul",
        year: "2016",
        image: "/images/projects/otto-atasehir.jpg",
        slug: "otto-atasehir-lankon",
        size: "large",
        description: "Modern karma yaşam projesinin busbar enerji dağıtımı ve akıllı bina altyapısı (3. ve 4. Katlar).",
        fullDescription: "İstanbul Finans Merkezi'ne komşu Otto Ataşehir projesinde, konut ve ticari alanların iç içe olduğu (mixed-use) 3. ve 4. katların tüm elektrik taahhüt işleri firmamızca yürütülmüştür. Dikey enerji dağıtımı için kompakt busbar sistemleri tercih edilerek yangın güvenliği ve enerji verimliliği artırılmıştır. Dairelerde görüntülü interkom ve akıllı ev altyapısı kurulmuş, otopark alanlarında ise karbonmonoksit (CO) algılama ve jet fan havalandırma sistemleri entegre edilmiştir.",
        scope: [
            "Dikey Şaft Busbar Enerji Dağıtımı",
            "Daire İçi Akıllı Ev Altyapısı",
            "Otopark CO Algılama ve Jet Fan Otomasyonu",
            "Görüntülü İnterkom Sistemleri",
            "Ticari Alan Shell & Core Elektrik İşleri",
            "Yıldırımdan Korunma ve Topraklama"
        ],
        systems: [
            "Busbar Dağıtım",
            "Akıllı Bina",
            "Jet Fan & CO",
            "İnterkom",
            "Güvenlik"
        ],
        metrics: [
            { label: "Tip", value: "Karma Proje" },
            { label: "Dağıtım", value: "Busbar" },
            { label: "Otopark", value: "Jet Fan" },
            { label: "Lokasyon", value: "İstanbul" }
        ],
        metaDescription: "Otto Ataşehir Lankon mixed-use: Dikey busbar enerji, akıllı ev altyapı, CO algılama jet fan, görüntülü interkom, ticari shell & core. 3-4 kat karma kullanım projesi.",
        keywords: ["karma proje elektrik", "busbar dağıtım", "jet fan CO", "akıllı ev", "görüntülü interkom", "shell core", "ataşehir", "finans merkezi"],
        ogImage: "/images/projects/otto-atasehir.jpg"
    }
];