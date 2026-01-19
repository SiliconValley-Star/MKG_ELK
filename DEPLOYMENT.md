# MKG Elektromekanik - Production Deployment Checklist

Bu döküman production deployment öncesi kontrol edilmesi gereken tüm adımları içerir.

## 📋 Pre-Deployment Checklist

### 1. Kod Kalitesi
- [x] TypeScript strict mode aktif
- [x] Console.log'lar temizlendi (production'da otomatik kaldırılıyor)
- [x] Lint hataları yok
- [ ] Code review tamamlandı
- [ ] Tüm testler geçiyor

### 2. Performans
- [x] Bundle size optimize edildi (~305KB total, ~100KB gzipped)
- [x] Code splitting uygulandı (13 route + 4 vendor chunk)
- [x] Image lazy loading aktif
- [x] Hero image preload (LCP optimization)
- [x] Background3D spatial hashing (O(N) performans)
- [ ] Lighthouse audit (Performance 90+)

### 3. SEO
- [x] Meta tags (OG, Twitter cards)
- [x] Sitemap.xml oluşturuldu
- [x] Robots.txt yapılandırıldı
- [x] Canonical URLs
- [ ] Google Search Console setup
- [ ] Google Analytics entegrasyonu

### 4. Accessibility
- [x] ARIA labels eklendi
- [x] Focus indicators geliştirildi
- [x] Keyboard navigation desteği
- [x] Reduce-motion support
- [x] High-contrast mode
- [ ] Screen reader testi

### 5. Security
- [ ] Content Security Policy (CSP) headers
- [ ] HTTPS enforce
- [ ] XSS koruması
- [ ] CSRF token implementation (forms için)
- [ ] Rate limiting (API endpoints)
- [ ] Security headers (HSTS, X-Frame-Options, etc.)

### 6. Monitoring & Error Tracking
- [ ] Sentry/Error tracking setup
- [ ] Core Web Vitals tracking
- [ ] Performance monitoring
- [ ] Uptime monitoring
- [ ] Log aggregation

### 7. Environment Variables
- [x] .env.example oluşturuldu
- [ ] Production .env dosyası hazırlandı
- [ ] API keys güvenli şekilde saklanıyor
- [ ] Sensitive data commit edilmedi

### 8. Build Process
- [x] Build script hazır (`scripts/build.sh`)
- [x] Build başarılı (`npm run build`)
- [x] Vendor chunking aktif
- [x] Minification ve terser optimizasyonu
- [ ] Build testi lokal olarak yapıldı (`npm run preview`)

### 9. Browser Compatibility
- [ ] Chrome test
- [ ] Firefox test
- [ ] Safari test
- [ ] Edge test
- [ ] Mobile browsers test

### 10. Responsive Design
- [ ] Mobile breakpoints test (320px, 375px, 768px, 1024px, 1440px)
- [ ] Tablet test
- [ ] Desktop test
- [ ] Touch interactions test

## 🚀 Deployment Steps

### Step 1: Final Build
```bash
# Run the build script
chmod +x scripts/build.sh
./scripts/build.sh
```

### Step 2: Pre-deployment Testing
```bash
# Test the build locally
npm run preview

# Run Lighthouse audit
npx lighthouse http://localhost:4173 --output html --output-path ./lighthouse-report.html
```

### Step 3: Deploy to Staging (Optional)
```bash
# Deploy to staging environment first
# Test all functionality
# Get stakeholder approval
```

### Step 4: Production Deployment
```bash
# Option 1: Static Hosting (Vercel, Netlify, etc.)
# - Connect Git repository
# - Configure build command: npm run build
# - Configure output directory: dist
# - Set environment variables

# Option 2: Manual deployment
# - Upload dist/ folder to server
# - Configure web server (nginx/apache)
# - Setup SSL certificate
# - Configure redirects
```

### Step 5: Post-Deployment Verification
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms working (contact, newsletter)
- [ ] Images loading
- [ ] Animations working
- [ ] No console errors
- [ ] Mobile responsive
- [ ] SSL certificate valid
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] Robots.txt accessible (/robots.txt)

## 📊 Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s ⭐
- **FID (First Input Delay):** < 100ms ⭐
- **CLS (Cumulative Layout Shift):** < 0.1 ⭐

### Lighthouse Scores (Target)
- **Performance:** 90+ ⭐
- **Accessibility:** 95+ ⭐
- **Best Practices:** 95+ ⭐
- **SEO:** 100 ⭐

### Bundle Size
- **Initial Load:** < 150KB (gzipped) ✅ (Current: ~100KB)
- **Total Bundle:** < 500KB (gzipped) ✅ (Current: ~300KB)

## 🔧 Server Configuration

### Nginx Configuration Example
```nginx
server {
    listen 80;
    server_name mkg-elektromekanik.com www.mkg-elektromekanik.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name mkg-elektromekanik.com www.mkg-elektromekanik.com;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    root /var/www/mkg-elektromekanik/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📝 Post-Deployment Tasks

### Immediate (Within 24 hours)
- [ ] Monitor error logs
- [ ] Check analytics setup
- [ ] Verify form submissions
- [ ] Test contact endpoints
- [ ] Monitor performance metrics

### Short-term (Within 1 week)
- [ ] Submit sitemap to Google Search Console
- [ ] Setup Google Analytics goals
- [ ] Configure Sentry alerts
- [ ] Review Core Web Vitals
- [ ] Address any user feedback

### Long-term (Within 1 month)
- [ ] SEO audit
- [ ] Performance review
- [ ] Security audit
- [ ] Accessibility compliance check
- [ ] User experience analysis

## 🆘 Rollback Plan

If deployment fails:
1. Immediately revert to previous version
2. Document the issue
3. Fix in development
4. Test thoroughly
5. Re-deploy

### Quick Rollback
```bash
# If using Git-based deployment
git revert HEAD
git push origin main

# If using manual deployment
# Restore previous dist/ backup
```

## 📞 Emergency Contacts

- **Technical Lead:** [Name] - [Phone]
- **DevOps:** [Name] - [Phone]
- **Hosting Provider:** [Support Contact]

## ✅ Sign-off

- [ ] Development Team Lead
- [ ] QA Team Lead
- [ ] Project Manager
- [ ] Client Approval

---

**Last Updated:** 2026-01-19
**Version:** 1.0.0