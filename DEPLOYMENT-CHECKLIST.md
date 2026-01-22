# 🚀 MKG Elektromekanik - Production Deployment Checklist

## ✅ PRE-DEPLOYMENT (Deployment Öncesi)

### 1. Code Quality & Testing
- [ ] Tüm TypeScript hataları çözüldü mü? (`npm run type-check`)
- [ ] ESLint uyarıları temizlendi mi? (`npm run lint`)
- [ ] Build başarılı mı? (`npm run build`)
- [ ] Tüm sayfalar local'de test edildi mi?
- [ ] Mobile responsive kontrolleri yapıldı mı?
- [ ] Browser compatibility test edildi mi? (Chrome, Firefox, Safari, Edge)

### 2. Environment Variables
- [ ] `.env` dosyası production değerlerle dolduruldu mu?
  - [ ] `VITE_EMAILJS_SERVICE_ID` ayarlandı
  - [ ] `VITE_EMAILJS_TEMPLATE_ID` ayarlandı  
  - [ ] `VITE_EMAILJS_PUBLIC_KEY` ayarlandı
  - [ ] `VITE_SITE_URL` production URL'e güncellendi
- [ ] `.env` dosyası `.gitignore`'da mı? ✅ (Zaten var)
- [ ] `.env.example` güncel mi?

### 3. Content & Data Validation
- [ ] Tüm görseller optimize edildi mi? (WebP format)
- [ ] Alt text'ler tüm görsellerde mevcut mu?
- [ ] Blog yazıları güncel mi?
- [ ] Proje portföyü güncel mi?
- [ ] İletişim bilgileri doğru mu? (Email, telefon, adres)
- [ ] Şirket bilgileri doğru mu? (Kuruluş tarihi: 2015 ✅)

### 4. SEO Optimization
- [ ] `robots.txt` doğru yapılandırıldı mı?
- [ ] `sitemap.xml` güncel mi?
- [ ] Meta tags tüm sayfalarda mevcut mu?
- [ ] Open Graph tags ayarlandı mı?
- [ ] Schema.org markup'ları doğru mu?
- [ ] Canonical URL'ler doğru mu?
- [ ] `manifest.json` güncel mi?

### 5. Performance
- [ ] Lazy loading aktif mi? ✅
- [ ] Code splitting yapılandırıldı mı? ✅
- [ ] Gereksiz console.log'lar kaldırıldı mı?
- [ ] Bundle size makul seviyede mi? (`npm run build` sonrası kontrol)
- [ ] Images optimize mi? (WebP, compression)

### 6. Security
- [ ] HTTPS zorunlu mu?
- [ ] CORS ayarları doğru mu?
- [ ] Email servisi güvenli mi?
- [ ] API key'ler güvende mi? (.env içinde)
- [ ] XSS koruması var mı?
- [ ] CSRF koruması var mı?

---

## 🌐 DEPLOYMENT (Dağıtım)

### Netlify Deployment
```bash
# 1. Build
npm run build

# 2. Netlify'a deploy
# - Drag & drop dist/ folder
# VEYA
# - Git push (otomatik deploy)

# 3. Environment variables ayarla
# Netlify Dashboard > Site settings > Environment variables
# - VITE_EMAILJS_SERVICE_ID
# - VITE_EMAILJS_TEMPLATE_ID
# - VITE_EMAILJS_PUBLIC_KEY
```

### Vercel Deployment
```bash
# 1. Vercel CLI install
npm i -g vercel

# 2. Deploy
vercel --prod

# 3. Environment variables
# Vercel Dashboard > Settings > Environment Variables
```

---

## ✅ POST-DEPLOYMENT (Deployment Sonrası)

### 1. Functional Testing
- [ ] Ana sayfa yükleniyor mu?
- [ ] Tüm navigation linkleri çalışıyor mu?
- [ ] Contact form çalışıyor mu? (Test email gönder)
- [ ] Blog sayfaları açılıyor mu?
- [ ] Proje detay sayfaları çalışıyor mu?
- [ ] Hizmet detay sayfaları çalışıyor mu?
- [ ] 404 sayfası çalışıyor mu?
- [ ] WhatsApp button çalışıyor mu?

### 2. Performance Check
- [ ] Google PageSpeed Insights (>90 score)
  - https://pagespeed.web.dev/
- [ ] GTmetrix test (A grade)
  - https://gtmetrix.com/
- [ ] WebPageTest
  - https://www.webpagetest.org/

### 3. SEO Validation
- [ ] Google Search Console'a site ekle
  - https://search.google.com/search-console
- [ ] Sitemap submit et
  - `https://mkgelektromekanik.com/sitemap.xml`
- [ ] Google My Business güncel mi?
- [ ] Rich Results Test
  - https://search.google.com/test/rich-results

### 4. Analytics Setup
- [ ] Google Analytics ayarlandı mı?
- [ ] Google Tag Manager (opsiyonel)
- [ ] Facebook Pixel (opsiyonel)
- [ ] LinkedIn Insight Tag (opsiyonel)

### 5. Monitoring
- [ ] Uptime monitoring aktif mi? (UptimeRobot, Pingdom)
- [ ] Error tracking aktif mi? (Sentry opsiyonel)
- [ ] Analytics çalışıyor mu?

---

## 📋 DOMAIN & DNS

### Domain Ayarları
- [ ] Domain satın alındı mı?
- [ ] DNS records ayarlandı mı?
  ```
  A Record: @ → Netlify/Vercel IP
  CNAME: www → yourdomain.netlify.app
  ```
- [ ] SSL sertifikası aktif mi? (Let's Encrypt otomatik)
- [ ] www yönlendirmesi çalışıyor mu?

---

## 📧 EMAIL SETUP

### EmailJS Configuration
1. EmailJS hesabı oluştur: https://www.emailjs.com/
2. Email Service ekle (Gmail önerilir)
3. Email Template oluştur:
   ```
   Subject: MKG - Yeni İletişim Talebi: {{title}}
   
   Ad Soyad: {{name}}
   Email: {{email}}
   Telefon: {{phone}}
   Şirket: {{company}}
   Konu: {{title}}
   
   Mesaj:
   {{message}}
   ```
4. Public Key ve Template ID'yi `.env`'e ekle

---

## 🔄 POST-LAUNCH TASKS

### İlk Hafta
- [ ] Her gün uptime kontrol
- [ ] Analytics verileri takip et
- [ ] Contact form testleri yap
- [ ] User feedback topla
- [ ] Bug reports kontrol et

### İlk Ay
- [ ] SEO ranking kontrol et
- [ ] Google Search Console raporları incele
- [ ] Performance metrics gözden geçir
- [ ] Content güncellemeleri planla

---

## 🆘 ROLLBACK PLAN

Sorun durumunda:
```bash
# Netlify: Previous deployment'a dön
# Dashboard > Deploys > [previous deploy] > Publish deploy

# Vercel: Previous deployment'a dön  
# Dashboard > Deployments > [previous] > Promote to Production

# Git: Previous commit'e dön
git revert HEAD
git push origin main
```

---

## 📞 EMERGENCY CONTACTS

- **Hosting Support**: support@netlify.com / vercel.com/support
- **Domain Registrar**: [Your domain provider]
- **Email Service**: support@emailjs.com
- **Developer**: [Your contact]

---

## ✅ FINAL CHECKLIST

Tüm deployment tamamlandı mı?
- [ ] Site live
- [ ] SSL aktif (HTTPS)
- [ ] Contact form çalışıyor
- [ ] Analytics aktif
- [ ] SEO optimize
- [ ] Performance >90
- [ ] Mobile responsive
- [ ] Cross-browser test edildi
- [ ] Monitoring aktif
- [ ] Backup planı hazır

---

**🎉 DEPLOYMENT TAMAMLANDI!**

Son kontrol tarihi: _____________
Deployment yapan: _____________
Production URL: https://mkgelektromekanik.com