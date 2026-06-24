# Ennur Pekdemir - Kişisel Portfolyo Web Sitesi

Bu proje, staj başvuruları, iş görüşmeleri ve GitHub profilinde kullanılmak üzere tasarlanmış, modern, responsive ve son derece profesyonel bir kişisel portfolyo web sitesidir. 

Bir bilgisayar mühendisliği öğrencisinin (Junior Software Engineer) kişisel markası gibi durması hedeflenerek; sade, güvenilir, kurumsal ve modern bir açık tema (Light Theme) tasarımı benimsenmiştir.

## 🚀 Canlı Önizleme & Özellikler

* **Responsive Tasarım**: Mobil, tablet, dizüstü ve geniş ekran monitörler ile %100 uyumludur.
* **Sticky Navbar & Scroll Spy**: Sayfa kaydırıldıkça arka planı buzlu cam (blur) efekti alan yapışkan menü barı ve bulunulan bölümü otomatik takip edip aktif olarak işaretleyen aktif bağlantı göstergesi (`IntersectionObserver` tabanlı).
* **Sayfa Yüklenme Animasyonu**: Premium ve akıcı bir his veren özel yükleyici (preloader).
* **Teknoloji Kartları**: En çok kullanılan teknolojiler ve kısa açıklamalarını barındıran modern hover animasyonlu kartlar.
* **Etkileşimli Proje Vitrini**: Projeleri listeleyen kartlar, görsel zoom hover efektleri ve proje detaylarını sayfa yenilemeden sunan özel tasarlanmış **Detay Modalı**.
* **Simüle Edilmiş İletişim Formu**: Ad soyad, e-posta ve mesaj alanlarının doğrulamasını yapıp, form gönderildiğinde butonu yükleme durumuna geçiren ve kullanıcıya animasyonlu geri bildirim veren form altyapısı.
* **Sıfır Bağımlılık (Vanilla JS)**: Ekstra büyük JS veya CSS kütüphaneleri olmadan tamamen yerel web teknolojileriyle yazılmıştır. İkonlar için son derece hafif ve SVG tabanlı **Lucide Icons** kütüphanesi CDN üzerinden entegre edilmiştir.

---

## 📂 Proje Klasör Yapısı

Proje, temiz ve kolay yönetilebilir bir dosya organizasyonuna sahiptir:

```text
portfolio/
│
├── index.html          # Ana HTML yapısı (Semantik etiketler & SEO optimizasyonlu)
├── style.css           # CSS Tasarım Sistemi (Değişkenler, animasyonlar ve medya sorguları)
├── script.js           # Sayfa etkileşim mantığı, modal ve form simülasyonu
├── assets/
│   ├── images/         # Proje resimleri, ekran görüntüleri ve illüstrasyonlar
│   │   ├── floradoc.png
│   │   ├── credit-risk.png
│   │   ├── recipe-sharing.png
│   │   └── hero-developer.png
│   └── icons/          # Özel yerel SVG veya statik ikonlar
│
└── README.md           # Proje dokümantasyonu (Bu dosya)
```

---

## 💻 Kurulum ve Yerel Çalıştırma

Projeyi yerel makinenizde çalıştırmak oldukça basittir. Herhangi bir derleme (build) veya paket yükleme işlemine gerek yoktur:

### Yöntem 1: Doğrudan Açma
1. Depoyu klonlayın veya zip olarak indirin.
2. Tarayıcınızda görüntülemek için `index.html` dosyasına çift tıklayın.

### Yöntem 2: Canlı Geliştirme Sunucusu (Önerilen)
Kod üzerinde değişiklik yaparken tarayıcının otomatik yenilenmesini istiyorsanız, projenin bulunduğu dizinde aşağıdaki komutu çalıştırabilirsiniz:

```bash
# Browser-sync ile çalıştırma (varsa)
npx browser-sync start --server --files "*"

# Veya VS Code kullanıyorsanız "Live Server" eklentisini aktifleştirebilirsiniz.
```

---

## 🛠️ Kullanılan Teknolojiler

* **HTML5**: Semantik yapı ve SEO optimizasyonu
* **CSS3**: Grid/Flexbox düzenleri, Özel CSS Değişkenleri, `@keyframes` animasyonları, Responsive tasarım
* **Vanilla JavaScript**: DOM yönetimi, Olay dinleyiciler, Modallar ve Form doğrulama simülasyonu
* **Lucide Icons (CDN)**: Hızlı ve keskin SVG tabanlı ikon seti
* **Google Fonts**: *Inter* & *Plus Jakarta Sans* modern tipografi aileleri

---

## 📈 Projeler

Web sitesi üzerinde sergilenen aktif projeler:

1. **FloraDoc**: Yapay zeka destekli domates yaprak hastalığı tespit sistemi. (Python, TensorFlow, CNN)
2. **Credit Risk Analysis Platform**: Kredi risk değerlendirme ve karar destek sistemi. (Java, Spring Boot, SQL, Machine Learning)
3. **Recipe Sharing Platform**: Sosyal etkileşimli tarif paylaşım portalı. (Spring Boot, MySQL, REST API)

---

## 📝 Lisans

Bu proje kişisel gelişim ve portfolyo sergileme amaçlı oluşturulmuştur. Dilediğiniz gibi esinlenebilir ve kendi kişisel markanız için özelleştirebilirsiniz.
