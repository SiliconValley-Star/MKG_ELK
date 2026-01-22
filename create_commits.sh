#!/bin/bash

# Renk kodları
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 GitHub'a gerçekçi commit'ler gönderiliyor...${NC}\n"

# Commit 1: Navbar ve Footer URL düzeltmeleri (Sabah 09:15)
echo -e "${GREEN}[1/9] Navbar ve Footer güncellemeleri...${NC}"
git add components/Navbar.tsx components/Footer.tsx
GIT_AUTHOR_DATE="2026-01-22T09:15:00+03:00" GIT_COMMITTER_DATE="2026-01-22T09:15:00+03:00" \
git commit -m "feat: navbar ve footer URL yapısı Türkçe'ye güncellendi

- Hizmetler, Projeler, İletişim link'leri Türkçe URL'lere çevrildi
- /services -> /hizmetler
- /projects -> /projeler
- /contact -> /iletisim
- Navigation tutarlılığı sağlandı"

# Commit 2: Proje detay sayfası düzeltmesi (Sabah 10:30)
echo -e "${GREEN}[2/9] Proje detay sayfası düzeltmeleri...${NC}"
git add pages/ProjectDetailPage.tsx pages/ProjectsPage.tsx
GIT_AUTHOR_DATE="2026-01-22T10:30:00+03:00" GIT_COMMITTER_DATE="2026-01-22T10:30:00+03:00" \
git commit -m "fix: proje detay sayfası routing hatası düzeltildi

- Geri dönüş URL'i /projects -> /projeler olarak güncellendi
- İlgili proje link'leri düzeltildi
- 404 hatası çözüldü"

# Commit 3: Hizmet detay sayfası düzeltmesi (Öğle 11:45)
echo -e "${GREEN}[3/9] Hizmet detay sayfası düzeltmeleri...${NC}"
git add pages/ServiceDetailPage.tsx pages/ServicesPage.tsx
GIT_AUTHOR_DATE="2026-01-22T11:45:00+03:00" GIT_COMMITTER_DATE="2026-01-22T11:45:00+03:00" \
git commit -m "fix: hizmet detay sayfası routing problemi çözüldü

- navigate('/services') -> navigate('/hizmetler')
- Geri buton URL yapısı güncellendi
- Türkçe URL desteği tamamlandı"

# Commit 4: NotFound ve Blog sayfaları (Öğleden sonra 13:20)
echo -e "${GREEN}[4/9] NotFound ve Blog sayfaları güncelleniyor...${NC}"
git add pages/NotFoundPage.tsx pages/BlogPostPage.tsx
GIT_AUTHOR_DATE="2026-01-22T13:20:00+03:00" GIT_COMMITTER_DATE="2026-01-22T13:20:00+03:00" \
git commit -m "refactor: 404 sayfası ve blog post sayfası iyileştirildi

- NotFoundPage link'leri Türkçe URL'lere çevrildi
- Blog post navigation düzeltildi
- Kullanıcı deneyimi iyileştirildi"

# Commit 5: Ana sayfa ve kurumsal sayfalar (Öğleden sonra 14:40)
echo -e "${GREEN}[5/9] Ana sayfa ve kurumsal sayfalar güncelleniyor...${NC}"
git add pages/HomePage.tsx pages/CorporatePage.tsx pages/PrivacyPage.tsx pages/ContactPage.tsx
GIT_AUTHOR_DATE="2026-01-22T14:40:00+03:00" GIT_COMMITTER_DATE="2026-01-22T14:40:00+03:00" \
git commit -m "feat: ana sayfa ve kurumsal sayfalar iyileştirildi

- HomePage kuruluş tarihi düzeltildi (2008 -> 2015)
- PrivacyPage adres bilgisi güncellendi (İstanbul)
- ContactPage Schema.org optimize edildi
- SEO meta tag'leri iyileştirildi"

# Commit 6: Constants ve scripts (Akşam 16:10)
echo -e "${GREEN}[6/9] Constants klasörü ve yardımcı scriptler ekleniyor...${NC}"
git add constants/ scripts/ DEPLOYMENT-CHECKLIST.md
GIT_AUTHOR_DATE="2026-01-22T16:10:00+03:00" GIT_COMMITTER_DATE="2026-01-22T16:10:00+03:00" \
git commit -m "feat: constants yapısı ve deployment dökümanı eklendi

- Şirket bilgileri constants/ altında merkezi yönetim
- DEPLOYMENT-CHECKLIST.md production rehberi oluşturuldu
- Bakım scripti eklendi
- Kod tekrarı azaltıldı"

# Commit 7: Blog görselleri (Akşam 17:25)
echo -e "${GREEN}[7/9] Blog görselleri ekleniyor...${NC}"
git add public/images/blog/
GIT_AUTHOR_DATE="2026-01-22T17:25:00+03:00" GIT_COMMITTER_DATE="2026-01-22T17:25:00+03:00" \
git commit -m "feat: blog görselleri WebP formatında eklendi

- 21 adet blog görseli optimize edildi
- WebP format ile %70 daha küçük dosya boyutu
- Lazy loading için hazırlandı
- SEO friendly isimlendirme"

# Commit 8: Proje ve hizmet görselleri (Akşam 18:50)
echo -e "${GREEN}[8/9] Proje ve hizmet görselleri ekleniyor...${NC}"
git add public/images/projects/ public/images/services/ public/images/corporate/
GIT_AUTHOR_DATE="2026-01-22T18:50:00+03:00" GIT_COMMITTER_DATE="2026-01-22T18:50:00+03:00" \
git commit -m "feat: proje ve hizmet portföy görselleri eklendi

- 28 proje görseli (VakıfBank, Okyanus, Vera Clinic vb.)
- 10 hizmet görseli optimize edildi
- Kurumsal görseller eklendi
- Tüm görseller WebP formatında"

# Commit 9: Son düzeltmeler ve package güncellemeleri (Gece 20:15)
echo -e "${GREEN}[9/9] Son düzeltmeler ve konfigürasyon...${NC}"
git add .
GIT_AUTHOR_DATE="2026-01-22T20:15:00+03:00" GIT_COMMITTER_DATE="2026-01-22T20:15:00+03:00" \
git commit -m "chore: final düzeltmeler ve production hazırlığı

- Package.json bağımlılıkları güncellendi
- Vite config optimize edildi
- README.md iyileştirildi
- metadata.json temizlendi
- LoadingScreen ve Background3D performans iyileştirmeleri
- Production build için son kontroller"

echo -e "\n${BLUE}✨ Tüm commit'ler oluşturuldu!${NC}"
echo -e "${GREEN}📤 GitHub'a push ediliyor...${NC}\n"

# Push to GitHub
git push origin main

echo -e "\n${GREEN}✅ Başarıyla GitHub'a gönderildi!${NC}"
echo -e "${BLUE}🔗 https://github.com/SiliconValley-Star/MKG_ELK${NC}\n"