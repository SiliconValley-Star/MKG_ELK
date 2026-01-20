# 🏭 MKG Elektromekanik Otomasyon

Modern, yüksek performanslı kurumsal web sitesi. React + TypeScript + Vite ile geliştirilmiştir.

## 🚀 Özellikler

- ✅ **Modern React 18** - En son React özellikleri
- ✅ **TypeScript** - Tip güvenliği
- ✅ **Framer Motion** - Akıcı animasyonlar (KORUNMUŞTUR)
- ✅ **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- ✅ **EmailJS Entegrasyonu** - İletişim formları
- ✅ **Error Boundary** - Hata yönetimi
- ✅ **Performance Optimized** - React.memo, lazy loading
- ✅ **3D Background** - Canvas-based particle system

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

## 🔑 EmailJS Yapılandırması

1. [EmailJS](https://www.emailjs.com/) hesabı oluşturun
2. Email service oluşturun (Gmail, Outlook, vb.)
3. Email template oluşturun
4. Proje kök dizininde `.env` dosyası oluşturun:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Template değişkenleri (EmailJS dashboard):
   - `{{from_name}}` - Gönderen adı
   - `{{from_email}}` - Gönderen email
   - `{{from_company}}` - Şirket adı
   - `{{department}}` - Departman
   - `{{message}}` - Mesaj içeriği

## 🎨 Tasarım Sistemi

### Renkler
- **Brand Orange**: `#FF3B00` - Ana marka rengi
- **Background**: `#000000` - Siyah arka plan
- **Text**: `#FFFFFF` - Beyaz metin

### Fontlar
- **Sans**: Manrope - Body text
- **Display**: Geist - Başlıklar
- **Tech**: Syncopate - Teknik etiketler

## 📂 Proje Yapısı

```
├── components/          # Yeniden kullanılabilir componentler
│   ├── Background3D.tsx    # 3D particle background
│   ├── ErrorBoundary.tsx   # Hata yakalama
│   ├── Footer.tsx          # Site footer
│   ├── Layout.tsx          # Ana layout wrapper
│   ├── LoadingScreen.tsx   # Loading animasyonu
│   ├── Logo.tsx            # Logo component
│   └── Navbar.tsx          # Navigation bar
├── pages/               # Sayfa componentleri
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ContactPage.tsx
│   ├── BlogPage.tsx
│   └── ...
├── hooks/               # Custom React hooks
│   └── useForm.ts          # Form validation hook
├── services/            # API servisleri
│   └── emailService.ts     # EmailJS integration
├── data/                # Static data
│   └── blogPosts.ts        # Blog içerikleri
└── public/              # Static assets
```

## 🔧 Geliştirme

### Komutlar

```bash
npm run dev      # Dev server (http://localhost:3000)
npm run build    # Production build
npm run preview  # Production preview
```

### Code Standards

- **React.memo** kullanımı - Gereksiz re-renderlari önler
- **useCallback** - Event handler optimizasyonu
- **Lazy loading** - Image ve route optimizasyonu
- **Error boundaries** - Graceful error handling

## 🎭 Animasyon Sistemi

**UYARI:** Loading ve animasyon sistemine dokunulmaz!

- Loading ekranı: 2 saniye minimum süre (kullanıcı deneyimi)
- Asset yükleme takibi aktif
- Tüm animasyonlar GPU-accelerated
- Framer Motion kullanımı

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Bilinen Sorunlar

Şu an bilinen kritik sorun yok.

## 📝 Lisans

© 2024 MKG Elektromekanik Otomasyon. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing`)
3. Commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Push edin (`git push origin feature/amazing`)
5. Pull Request açın

## 📞 İletişim

- Website: https://mkg-elektromekanik.com
- Email: info@mkg.com
- Phone: +90 224 555 0100