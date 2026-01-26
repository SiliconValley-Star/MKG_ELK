# cPanel Deployment Rehberi - MKG Elektromekanik Otomasyon

## 🚀 Hazırlık

Production build başarıyla oluşturuldu. Aşağıdaki adımları izleyerek sitenizi cPanel'e yükleyebilirsiniz.

## 📦 Yüklenecek Dosyalar

`dist` klasöründeki TÜM dosya ve klasörler cPanel'e yüklenecektir.

## 🔧 Adım Adım Deployment

### 1. cPanel'e Giriş Yapın
- cPanel hesabınıza giriş yapın
- **File Manager** (Dosya Yöneticisi) bölümüne gidin

### 2. public_html Klasörünü Temizleyin
- `public_html` klasörüne gidin
- Mevcut dosyaları yedekleyin (gerekirse)
- Tüm eski dosyaları silin

### 3. Dosyaları Yükleyin

**Seçenek A: Sıkıştırılmış Dosya ile (ÖNERİLEN)**
1. Bilgisayarınızda `dist` klasörünün içindeki TÜM dosyaları seçin
2. Bir ZIP dosyası oluşturun (örn: `website.zip`)
3. cPanel File Manager'da `public_html` klasörüne gidin
4. **Upload** butonuna tıklayın
5. ZIP dosyasını yükleyin
6. Yükleme tamamlandıktan sonra ZIP dosyasına sağ tıklayın
7. **Extract** (Çıkart) seçeneğini seçin
8. ZIP dosyasını silin

**Seçenek B: Doğrudan Yükleme**
1. `dist` klasörünün içindeki TÜM dosyaları seçin
2. cPanel File Manager'da `public_html` klasörüne gidin
3. **Upload** butonuna tıklayın
4. Tüm dosyaları sürükleyin ve bırakın

### 4. Dosya İzinlerini Kontrol Edin

Aşağıdaki izinlerin doğru olduğundan emin olun:
- **Klasörler**: 755
- **Dosyalar**: 644

### 5. .htaccess Dosyasını Kontrol Edin

`public_html/.htaccess` dosyasının var olduğundan ve aşağıdaki içeriği içerdiğinden emin olun:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>
```

## 📁 Dosya Yapısı (public_html içinde)

```
public_html/
├── index.html
├── .htaccess
├── _redirects
├── robots.txt
├── sitemap.xml
├── manifest.json
├── favicon.png
├── logo.png
├── apple-touch-icon.png
├── favicon-16.png
├── favicon-32.png
├── favicon-192.png
├── favicon-512.png
├── assets/
│   └── js/
│       └── [tüm JS dosyaları]
└── images/
    ├── blog/
    ├── corporate/
    ├── projects/
    ├── services/
    └── team/
```

## ✅ Kontrol Listesi

- [ ] `dist` klasöründeki tüm dosyalar yüklendi
- [ ] `.htaccess` dosyası doğru konumda ve içeriği uygun
- [ ] `images` klasörü ve alt klasörleri tamamen yüklendi
- [ ] `assets/js` klasöründeki tüm dosyalar yüklendi
- [ ] Site alan adınız üzerinden erişilebiliyor
- [ ] Tüm sayfalar düzgün yükleniyor (Ana Sayfa, Hizmetler, Projeler, vb.)
- [ ] Fotoğraflar görüntüleniyor
- [ ] İletişim formu çalışıyor

## 🔍 Test

Deployment sonrası aşağıdaki sayfaları test edin:
1. Ana Sayfa: `https://yourdomain.com/`
2. Hizmetler: `https://yourdomain.com/hizmetler`
3. Projeler: `https://yourdomain.com/projeler`
4. Kurumsal: `https://yourdomain.com/kurumsal`
5. İletişim: `https://yourdomain.com/iletisim`
6. Blog: `https://yourdomain.com/blog`

## 🛠️ Sorun Giderme

### Problem: Sayfalar yüklenmiyor (404 hatası)
**Çözüm**: `.htaccess` dosyasının doğru yüklendiğinden emin olun.

### Problem: Fotoğraflar görünmüyor
**Çözüm**: 
- `images` klasörünün tamamen yüklendiğini kontrol edin
- Dosya izinlerini kontrol edin (644)
- Tarayıcı cache'ini temizleyin

### Problem: Stil bozuk görünüyor
**Çözüm**:
- `assets` klasörünün tamamen yüklendiğini kontrol edin
- Tarayıcı cache'ini temizleyin (Ctrl+F5)

### Problem: İletişim formu çalışmıyor
**Çözüm**:
- cPanel'de **PHP** versiyonunun 7.4+ olduğundan emin olun
- Email ayarlarınızı kontrol edin

## 📧 Destek

Deployment sırasında sorun yaşarsanız:
1. cPanel loglarını kontrol edin
2. Tarayıcı konsolunu kontrol edin (F12)
3. Hosting sağlayıcınızın teknik desteğine başvurun

## 🎉 Başarılı Deployment

Tebrikler! Siteniz artık canlıda ve ziyaretçilere açık. 

**Önemli**: İlk deployment sonrası tarayıcınızın cache'ini temizlemeyi unutmayın.