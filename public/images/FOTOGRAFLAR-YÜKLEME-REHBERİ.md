# Fotoğraf Yükleme Rehberi

## Kurumsal Sayfa için Gerekli Fotoğraflar

### 1. Genel Merkez Fotoğrafı
**Konum:** `public/images/corporate/bursa-hq.jpg`
**Açıklama:** Bursa genel merkez binası - dış cephe fotoğrafı
**Önerilen boyut:** En az 1920x1080px
**Format:** JPG

### 2. Güvenlik Fotoğrafları
**Konum:** `public/images/corporate/safety-1.jpg`
**Açıklama:** Güvenlik ekipmanları veya İSG ile ilgili fotoğraf
**Önerilen boyut:** En az 800x600px
**Format:** JPG

**Konum:** `public/images/corporate/safety-2.jpg`
**Açıklama:** Endüstriyel güvenlik, çalışma ortamı fotoğrafı
**Önerilen boyut:** En az 800x600px
**Format:** JPG

### 3. Ekip Fotoğrafları

**Konum:** `public/images/team/emrullah-malkoc.jpg`
**İsim:** Emrullah Malkoç
**Pozisyon:** Operasyon Müdürü
**Önerilen boyut:** 600x800px (portre)
**Format:** JPG
**Not:** Profesyonel iş fotoğrafı, grayscale filtresine uygun

**Konum:** `public/images/team/tuncer-beyazoglu.jpg`
**İsim:** Tuncer Beyazoğlu
**Pozisyon:** Kıdemli Baş Elektrik Mühendisi
**Önerilen boyut:** 600x800px (portre)
**Format:** JPG
**Not:** Profesyonel iş fotoğrafı, grayscale filtresine uygun

**Konum:** `public/images/team/berhudan-bascan.jpg`
**İsim:** Berhudan Başcan
**Pozisyon:** Bilgisayar Mühendisi
**Önerilen boyut:** 600x800px (portre)
**Format:** JPG
**Not:** Profesyonel iş fotoğrafı, grayscale filtresine uygun

## Fotoğraf Yükleme Talimatları

1. Yukarıdaki yolları kullanarak fotoğrafları doğru klasörlere kopyalayın
2. Dosya isimlerinin tam olarak yukarıdaki gibi olduğundan emin olun (küçük harf, tire ile)
3. Fotoğraflar mümkünse yüksek çözünürlükte olsun
4. Ekip fotoğrafları için profesyonel iş fotoğrafı tercih edilmelidir
5. Sitede fotoğraflar otomatik olarak grayscale (siyah-beyaz) filtresine tabi tutulur

## Test

Fotoğrafları yükledikten sonra:
1. `npm run dev` komutuyla development server'ı başlatın
2. `/kurumsal` sayfasını ziyaret edin
3. Tüm fotoğrafların düzgün görüntülendiğini kontrol edin

## Notlar

- Tüm placeholder dosyalar (şu anki içerikleri "PLACEHOLDER" yazısı) gerçek fotoğraflarla değiştirilmelidir
- Fotoğraflar web için optimize edilmişse (compress) daha iyi performans sağlar
- Mobil cihazlarda da test edilmesi önerilir