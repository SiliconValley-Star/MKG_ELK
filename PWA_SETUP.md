# PWA (Progressive Web App) Kurulum Rehberi

Bu döküman, MKG Elektromekanik web sitesinin PWA özelliklerini aktif etmek ve yapılandırmak için gerekli tüm adımları içerir.

## 📋 İçindekiler

1. [PWA Nedir?](#pwa-nedir)
2. [Kurulu Dosyalar](#kurulu-dosyalar)
3. [Aktivasyon Adımları](#aktivasyon-adımları)
4. [Monitoring & Analytics Setup](#monitoring--analytics-setup)
5. [Test ve Doğrulama](#test-ve-doğrulama)
6. [Troubleshooting](#troubleshooting)

## 🎯 PWA Nedir?

Progressive Web App (PWA), modern web teknolojileri kullanarak native uygulama deneyimi sunan web uygulamalarıdır.

### Avantajlar
- ✅ **Offline Çalışma**: Service Worker ile cache yönetimi
- ✅ **Ana Ekrana Ekleme**: Kullanıcılar uygulamayı telefona kurabilir
- ✅ **Push Notifications**: (Opsiyonel) Bildirim gönderme
- ✅ **Hızlı Yükleme**: Cache stratejileri ile performans
- ✅ **SEO Dostu**: Arama motorları tarafından indexlenebilir

## 📁 Kurulu Dosyalar

### 1. Service Worker
**Dosya:** `public/sw.js`

Service Worker, offline cache yönetimi ve background sync sağlar.

**Özellikler:**
- Static asset caching (HTML, CSS, JS, fonts)
- Image caching (max 30 image)
- Dynamic content caching (max 50 item)
- Cache versiyonlama (`mkg-v1`)
- Otomatik cache temizleme

### 2. PWA Manifest
**Dosya:** `public/manifest.json`

Uygulama meta verileri ve kurulum ayarları.

**Özellikler:**
- App name, description, icons
- Display mode: `standalone`
- Theme color: `#FF3B00`
- Shortcuts (Hizmetler, Projeler, İletişim)

### 3. Service Worker Utility
**Dosya:** `src/utils/serviceWorker.ts`

Service Worker registration ve lifecycle yönetimi.

**Fonksiyonlar:**
- `registerServiceWorker()`: SW kaydı
- `unregisterServiceWorker()`: SW kaldırma
- `skipWaiting()`: Yeni versiyonu aktif et
- `clearCaches()`: Tüm cache'leri temizle
- `promptPWAInstall()`: Kurulum promptu

### 4. Core Web Vitals Tracking
**Dosya:** `src/utils/webVitals.ts`

Performance metrikleri izleme.

**Metrikler:**
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)
- FCP (First Contentful Paint)
- TTFB (Time to First Byte)
- INP (Interaction to Next Paint)

### 5. Analytics Tracking
**Dosya:** `src/utils/analytics.ts`

Google Analytics, Plausible veya custom analytics.

**Event Tracking:**
- Page views
- Button clicks
- Form submissions
- Downloads
- Social shares
- Outbound links

### 6. Error Tracking
**Dosya:** `src/utils/errorTracking.ts`

Sentry veya custom error tracking.

**Özellikler:**
- Global error handling
- Unhandled promise rejections
- User context
- Custom tags and breadcrumbs

## 🚀 Aktivasyon Adımları

### Adım 1: Environment Variables

`.env` dosyası oluşturun:

```bash
# PWA Configuration
VITE_PWA_ENABLED=true

# Analytics (Opsiyonel)
VITE_ANALYTICS_ENABLED=false
VITE_ANALYTICS_ID=G-XXXXXXXXXX  # Google Analytics ID
# veya
VITE_ANALYTICS_ID=plausible      # Plausible için

# Error Tracking (Opsiyonel)
VITE_ERROR_TRACKING_ENABLED=false
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx

# Monitoring Endpoints (Opsiyonel)
VITE_ANALYTICS_ENDPOINT=https://your-domain.com/api/analytics
VITE_ERROR_TRACKING_ENDPOINT=https://your-domain.com/api/errors
```

### Adım 2: Service Worker Otomatik Aktivasyon

Service Worker zaten `index.tsx`'de kayıtlı:

```typescript
// src/index.tsx
import { registerServiceWorker } from './utils/serviceWorker';

registerServiceWorker({
  onSuccess: () => console.log('[PWA] Ready to work offline'),
  onUpdate: () => console.log('[PWA] New version available'),
  onOfflineReady: () => console.log('[PWA] App cached for offline use')
});
```

**Not:** Service Worker sadece production'da çalışır (`npm run build`).

### Adım 3: Web Vitals Tracking (Opsiyonel)

`index.tsx`'e ekleyin:

```typescript
import { reportWebVitals } from './utils/webVitals';

// Development'ta console'da göster
reportWebVitals({
  reportAllChanges: true,
  onReport: (metric) => {
    console.log(metric);
  },
  endpoint: import.meta.env.VITE_ANALYTICS_ENDPOINT, // Opsiyonel
});
```

### Adım 4: Analytics Setup (Opsiyonel)

`App.tsx`'e ekleyin:

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from './utils/analytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Initialize once
    initAnalytics({
      enabled: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
      trackingId: import.meta.env.VITE_ANALYTICS_ID,
      debug: import.meta.env.DEV,
    });
  }, []);

  useEffect(() => {
    // Track page views
    trackPageView({
      path: location.pathname,
      title: document.title,
    });
  }, [location]);

  return <YourApp />;
}
```

### Adım 5: Error Tracking Setup (Opsiyonel)

`index.tsx`'e ekleyin:

```typescript
import { initErrorTracking } from './utils/errorTracking';

initErrorTracking({
  enabled: import.meta.env.VITE_ERROR_TRACKING_ENABLED === 'true',
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  debug: import.meta.env.DEV,
  sampleRate: 1.0,
});
```

### Adım 6: Build ve Deploy

```bash
# Production build
npm run build

# Build output kontrol
ls -lh dist/

# Local preview
npm run preview

# Deploy (örnek: Netlify)
netlify deploy --prod --dir=dist
```

## 📊 Monitoring & Analytics Setup

### Google Analytics Kurulumu

1. **Google Analytics hesabı oluşturun**
2. **Tracking ID alın** (G-XXXXXXXXXX formatında)
3. **Environment variable'ı ekleyin:**
   ```bash
   VITE_ANALYTICS_ENABLED=true
   VITE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

### Plausible Analytics Kurulumu

1. **Plausible hesabı oluşturun**
2. **Domain'inizi ekleyin**
3. **Environment variable'ı ekleyin:**
   ```bash
   VITE_ANALYTICS_ENABLED=true
   VITE_ANALYTICS_ID=plausible
   ```

### Sentry Error Tracking Kurulumu

1. **Sentry hesabı oluşturun**
2. **Proje oluşturun ve DSN alın**
3. **Dependency ekleyin:**
   ```bash
   npm install @sentry/react
   ```
4. **Environment variable'ı ekleyin:**
   ```bash
   VITE_ERROR_TRACKING_ENABLED=true
   VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
   ```

### Web Vitals Library Kurulumu

```bash
npm install web-vitals
```

## 🧪 Test ve Doğrulama

### 1. Service Worker Test

```bash
# Production build
npm run build

# Local preview
npm run preview
```

**DevTools Kontrol:**
1. Chrome DevTools açın (F12)
2. **Application** tab → **Service Workers**
3. Service Worker'ın `activated` durumunda olduğunu kontrol edin
4. **Cache Storage**'da cache'leri kontrol edin

### 2. PWA Manifest Test

DevTools → **Application** → **Manifest**

Kontrol edilecekler:
- ✅ Name: "MKG Elektromekanik Otomasyon"
- ✅ Theme color: `#FF3B00`
- ✅ Icons yüklenmiş
- ✅ Display: `standalone`

### 3. Lighthouse Audit

```bash
# Chrome DevTools → Lighthouse → Generate Report
# veya CLI:
npx lighthouse http://localhost:4173 --view
```

**Hedef Skorlar:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100
- PWA: ✅ (Installable)

### 4. Offline Test

1. DevTools → **Network** tab
2. **Throttling** → **Offline** seçin
3. Sayfayı yenileyin
4. Site offline çalışıyor mu kontrol edin

### 5. Install Prompt Test

**Desktop (Chrome):**
1. Site'ı ziyaret edin
2. Address bar'da install ikonu görünmeli
3. Tıklayıp kurulum yapın

**Mobile:**
1. Chrome/Safari ile ziyaret edin
2. "Add to Home Screen" prompt'u görünmeli
3. Ana ekrana ekleyin

## 🔧 Troubleshooting

### Service Worker Kayıt Olmuyor

**Sorun:** Console'da hata mesajı yok ama SW çalışmıyor

**Çözüm:**
1. HTTPS kullanıyor musunuz? (localhost hariç)
2. `npm run build` yaptınız mı? (DEV'de çalışmaz)
3. Browser cache'i temizleyin
4. Incognito mode'da deneyin

### Cache Güncellenmiyor

**Sorun:** Yeni deployment sonrası eski içerik gösteriliyor

**Çözüm:**
```javascript
// Service Worker versiyonunu değiştirin
// public/sw.js
const CACHE_VERSION = 'mkg-v2'; // v1'den v2'ye
```

### PWA Kurulum Promptu Görünmüyor

**Sorun:** "Add to Home Screen" butonu yok

**Kontrol listesi:**
- ✅ HTTPS kullanılıyor mu?
- ✅ manifest.json erişilebilir mi?
- ✅ Service Worker kayıtlı mı?
- ✅ Icons dosyaları erişilebilir mi?
- ✅ start_url doğru mu?

### Analytics Çalışmıyor

**Sorun:** Events track edilmiyor

**Çözüm:**
1. `.env` dosyasında `VITE_ANALYTICS_ENABLED=true` olduğundan emin olun
2. Tracking ID doğru mu kontrol edin
3. Console'da "[Analytics]" logları görüyor musunuz?
4. Ad blocker kapalı mı?

## 📚 Ek Kaynaklar

- [MDN: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google: Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Web.dev: PWA Checklist](https://web.dev/pwa-checklist/)
- [Chrome DevTools: Debug PWAs](https://developer.chrome.com/docs/devtools/progressive-web-apps/)

## 🎯 Production Deployment Checklist

- [ ] `.env` dosyası production değerlerle dolduruldu
- [ ] `npm run build` başarılı
- [ ] Lighthouse audit yapıldı (90+ performance)
- [ ] Service Worker test edildi
- [ ] Offline mode çalışıyor
- [ ] PWA kurulum promptu gösteriliyor
- [ ] Analytics tracking aktif
- [ ] Error tracking aktif (opsiyonel)
- [ ] Icons ve manifest erişilebilir
- [ ] HTTPS sertifikası kurulu
- [ ] Cache stratejisi doğrulandı

---

**Son Güncelleme:** 2025-01-19  
**Versiyon:** 1.0.0