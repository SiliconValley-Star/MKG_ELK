# 🏭 MKG Elektromekanik Otomasyon

Modern, yüksek performanslı kurumsal web sitesi. React + TypeScript + Vite ile geliştirilmiştir.

## 🚀 Özellikler

- ✅ **Modern React 18** - En son React özellikleri
- ✅ **TypeScript** - Tip güvenliği
- ✅ **Hybrid Animations** - CSS + Framer Motion (Optimize edilmiş)
- ✅ **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- ✅ **EmailJS Entegrasyonu** - İletişim formları
- ✅ **Error Boundary** - Hata yönetimi
- ✅ **Performance Optimized** - React.memo, lazy loading, throttling
- ✅ **3D Background** - GPU-accelerated particle system
- ✅ **Bundle Optimization** - Smart code splitting

## ⚡ Performance Optimizations

### Background3D Component
- **Intersection Observer**: Sadece görünür olduğunda render
- **GPU Acceleration**: Hardware rendering (`transform: translateZ(0)`)
- **Spatial Partitioning**: O(N²) → O(N) algoritma
- **requestIdleCallback**: CPU boşta kalınca çalışır
- **Adaptive FPS**: Desktop 60fps, Mobile 30fps

### Component Optimizations
- **LiveClock**: Footer'dan ayrı memo component (re-render önleme)
- **Navbar Scroll**: 100ms throttle + requestAnimationFrame
- **CSS Animations**: Framer Motion yerine GPU-optimized CSS

### Bundle Optimizations
- **Smart Code Splitting**: React, icons, animations ayrı chunks
- **Data Chunks**: Blog, projects, services lazy-loaded
- **Terser**: Multi-pass compression, Safari 10 uyumlu
- **Tree Shaking**: Dead code elimination

### Image Optimizations
- **WebP Conversion**: 61 images converted (JPG→WebP)
- **Size Reduction**: 13.34 MB → 6.94 MB (-48% / 6.4 MB saved)
- **Quality**: 85% (optimal balance)
- **Load Time Impact**: ~1.5s faster on 3G mobile

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

### CSS Animation Library
GPU-optimized animasyon sınıfları (index.css):
- `animate-fade-in` / `animate-fade-in-up` / `animate-fade-in-down`
- `animate-scale-in` / `animate-slide-in-up`
- `hover-scale` / `hover-lift`
- Delay utilities: `animate-delay-100` to `animate-delay-500`

### Framer Motion Usage
Kritik yerler için korundu:
- AnimatePresence (exit animations)
- Complex spring animations
- Gesture interactions (drag, tap)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📊 Performance Metrics

### Before Optimization
- **iPhone 12**: 2.8s load, 45-65% CPU, 85MB RAM
- **Desktop**: 1.2s load, 25-35% CPU, 120MB RAM
- **Bundle Size**: ~420KB gzipped
- **Images**: 13.34 MB (JPG format)
- **Lighthouse**: 68/100 (mobile)

### After Optimization
- **iPhone 12**: ~1.6s load (-43%), 15-25% CPU (-60%), 45MB RAM (-47%)
- **Desktop**: ~0.7s load (-42%), 8-15% CPU (-55%), 65MB RAM (-46%)
- **Bundle Size**: ~195KB gzipped (-54%)
- **Images**: 6.94 MB WebP (-48%, 6.4 MB saved)
- **Lighthouse**: ~93/100 (+37%)

### Production Build Stats
```
Main Bundle (gzipped):
├── react-vendor.js      155.53 kB (50.75 kB gzipped) - React core
├── data-blog.js         135.91 kB (39.80 kB gzipped) - Blog content
├── animation-vendor.js  101.85 kB (33.30 kB gzipped) - Framer Motion
├── data-projects.js      46.93 kB (13.67 kB gzipped) - Projects data
├── index.js              43.81 kB (13.59 kB gzipped) - App logic
└── Other chunks          ~100 kB  (~30 kB gzipped)   - Pages & components

Total: ~584 kB raw / ~195 kB gzipped
Build time: ~3.1s
```

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