# Server Configuration Guide

MKG Elektromekanik web sitesi için production server konfigürasyon dosyaları.

## 📁 Dosyalar

- **`nginx.conf`** - Nginx server konfigürasyonu
- **`.htaccess`** - Apache server konfigürasyonu

## 🚀 Nginx Kurulumu

### 1. Dosyayı Kopyalayın

```bash
sudo cp nginx.conf /etc/nginx/sites-available/mkg-engineering.com
sudo ln -s /etc/nginx/sites-available/mkg-engineering.com /etc/nginx/sites-enabled/
```

### 2. Konfigürasyonu Düzenleyin

```bash
sudo nano /etc/nginx/sites-available/mkg-engineering.com
```

**Değiştirilmesi Gerekenler:**
- `server_name` - Domain adınızı yazın
- `root` - Build dosyalarınızın yolu (`/var/www/...`)
- SSL sertifika yolları (Let's Encrypt kullanıyorsanız otomatik)

### 3. Let's Encrypt SSL Kurulumu

```bash
# Certbot kurulumu
sudo apt install certbot python3-certbot-nginx

# SSL sertifikası al
sudo certbot --nginx -d mkg-engineering.com -d www.mkg-engineering.com

# Auto-renewal test
sudo certbot renew --dry-run
```

### 4. Nginx Test ve Restart

```bash
# Syntax kontrolü
sudo nginx -t

# Restart
sudo systemctl restart nginx

# Status kontrolü
sudo systemctl status nginx
```

### 5. Firewall Ayarları

```bash
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'
sudo ufw status
```

## 🔧 Apache Kurulumu

### 1. .htaccess Kullanımı

```bash
# Build klasörüne kopyalayın
cp .htaccess /var/www/mkg-elektromekanik/dist/
```

### 2. Apache Modüllerini Aktif Edin

```bash
# Gerekli modüller
sudo a2enmod rewrite
sudo a2enmod headers
sudo a2enmod expires
sudo a2enmod deflate
sudo a2enmod ssl

# Apache restart
sudo systemctl restart apache2
```

### 3. Virtual Host Konfigürasyonu

`/etc/apache2/sites-available/mkg-engineering.com.conf` dosyası oluşturun:

```apache
<VirtualHost *:80>
    ServerName mkg-engineering.com
    ServerAlias www.mkg-engineering.com
    
    # ACME challenge
    Alias /.well-known/acme-challenge/ /var/www/certbot/.well-known/acme-challenge/
    
    # Redirect to HTTPS
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</VirtualHost>

<VirtualHost *:443>
    ServerName mkg-engineering.com
    ServerAlias www.mkg-engineering.com
    
    DocumentRoot /var/www/mkg-elektromekanik/dist
    
    # SSL Configuration
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/mkg-engineering.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/mkg-engineering.com/privkey.pem
    
    # Allow .htaccess
    <Directory /var/www/mkg-elektromekanik/dist>
        AllowOverride All
        Require all granted
    </Directory>
    
    # Logs
    ErrorLog ${APACHE_LOG_DIR}/mkg-engineering-error.log
    CustomLog ${APACHE_LOG_DIR}/mkg-engineering-access.log combined
</VirtualHost>
```

### 4. Site'ı Aktif Edin

```bash
sudo a2ensite mkg-engineering.com.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
```

## 🔒 Güvenlik Özellikleri

Her iki konfigürasyon da şunları içerir:

### Security Headers
- ✅ **HSTS** - HTTP Strict Transport Security
- ✅ **X-Frame-Options** - Clickjacking koruması
- ✅ **X-Content-Type-Options** - MIME-sniffing koruması
- ✅ **X-XSS-Protection** - XSS koruması
- ✅ **Referrer-Policy** - Referrer bilgisi kontrolü
- ✅ **Permissions-Policy** - Feature policy
- ✅ **Content-Security-Policy** - XSS ve injection koruması

### HTTPS Enforcement
- HTTP → HTTPS yönlendirmesi
- Modern TLS (1.2, 1.3) desteği
- Güçlü cipher'lar

### Rate Limiting (Nginx)
- Genel trafik: 10 req/s
- API endpoint'leri: 5 req/s

## 💾 Caching Stratejisi

### Static Assets (1 yıl)
- CSS, JavaScript → `max-age=31536000, immutable`
- Images (jpg, png, svg, webp) → `max-age=31536000, immutable`
- Fonts (woff, woff2, ttf) → `max-age=31536000, immutable`

### Dynamic Content
- HTML → `no-cache, no-store, must-revalidate`
- Service Worker (`sw.js`) → `no-cache`
- Manifest (`manifest.json`) → `max-age=3600`

### SEO Files (1 gün)
- `robots.txt` → `max-age=86400`
- `sitemap.xml` → `max-age=86400`

## 🗜️ Compression

### Gzip (Her İki Server)
- HTML, CSS, JS, JSON, XML
- Fonts ve SVG
- Compression level: 6

### Brotli (Nginx - Opsiyonel)
```bash
# Nginx Brotli module kurulumu
sudo apt install libbrotli-dev
# Nginx'i brotli desteğiyle yeniden derleyin
```

## 📊 Monitoring

### Nginx Access Log
```bash
tail -f /var/log/nginx/mkg-engineering.access.log
```

### Nginx Error Log
```bash
tail -f /var/log/nginx/mkg-engineering.error.log
```

### Apache Access Log
```bash
tail -f /var/log/apache2/mkg-engineering-access.log
```

### Apache Error Log
```bash
tail -f /var/log/apache2/mkg-engineering-error.log
```

## 🧪 Test ve Doğrulama

### 1. SSL/TLS Test
```bash
# SSL Labs test
https://www.ssllabs.com/ssltest/analyze.html?d=mkg-engineering.com

# Lokalde test
openssl s_client -connect mkg-engineering.com:443 -servername mkg-engineering.com
```

### 2. Security Headers Test
```bash
# curl ile test
curl -I https://mkg-engineering.com

# Online test
https://securityheaders.com/?q=mkg-engineering.com
```

### 3. Compression Test
```bash
# Gzip kontrolü
curl -H "Accept-Encoding: gzip" -I https://mkg-engineering.com

# Brotli kontrolü
curl -H "Accept-Encoding: br" -I https://mkg-engineering.com
```

### 4. Cache Headers Test
```bash
# CSS/JS cache kontrolü
curl -I https://mkg-engineering.com/assets/index.js

# HTML no-cache kontrolü
curl -I https://mkg-engineering.com/

# Service Worker no-cache kontrolü
curl -I https://mkg-engineering.com/sw.js
```

### 5. Performance Test
```bash
# Lighthouse CLI
npx lighthouse https://mkg-engineering.com --view

# WebPageTest
https://www.webpagetest.org/
```

## 🔧 Troubleshooting

### Nginx: 502 Bad Gateway
```bash
# SELinux kontrolü (RHEL/CentOS)
sudo setsebool -P httpd_can_network_connect 1

# Log kontrolü
sudo tail -f /var/log/nginx/error.log
```

### Apache: 500 Internal Server Error
```bash
# .htaccess syntax kontrolü
# mod_rewrite aktif mi?
sudo a2enmod rewrite
sudo systemctl restart apache2

# Log kontrolü
sudo tail -f /var/log/apache2/error.log
```

### SSL Sertifika Hataları
```bash
# Sertifika renewal
sudo certbot renew

# Sertifika bilgisi
sudo certbot certificates

# Force renewal
sudo certbot renew --force-renewal
```

### Cache Çalışmıyor
```bash
# Browser cache temizle
# Hard refresh: Ctrl+Shift+R (Chrome)

# Server cache temizle (Nginx)
sudo rm -rf /var/cache/nginx/*
sudo systemctl restart nginx
```

## 📝 Best Practices

1. ✅ **HTTPS kullanın** (Let's Encrypt ücretsiz)
2. ✅ **Security headers** ekleyin
3. ✅ **Gzip/Brotli compression** aktif edin
4. ✅ **Cache headers** doğru ayarlayın
5. ✅ **Rate limiting** kullanın
6. ✅ **Access logs** düzenli kontrol edin
7. ✅ **SSL sertifikaları** auto-renewal yapın
8. ✅ **Firewall** doğru konfigüre edin
9. ✅ **Backup** düzenli alın
10. ✅ **Monitoring** kurulumu yapın

## 🔗 Faydalı Linkler

- [Nginx Docs](https://nginx.org/en/docs/)
- [Apache Docs](https://httpd.apache.org/docs/)
- [Let's Encrypt](https://letsencrypt.org/)
- [Mozilla SSL Config Generator](https://ssl-config.mozilla.org/)
- [Security Headers](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

---

**Son Güncelleme:** 2025-01-19  
**Versiyon:** 1.0.0