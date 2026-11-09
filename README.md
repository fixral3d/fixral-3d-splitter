<div align="center">

<img src="icon-512.png" alt="Fixral 3D Splitter / Slicer logosu: parçalara ayrılan küp ve kesim düzlemi" width="112" />

# Fixral 3D Splitter / Slicer

**Büyük 3D modelleri yazıcına sığdır.**
Modeli baskı hacmine göre böl, parçaları pim, dübel ya da kırlangıç kuyruğuyla birleştir,
numaralı parçaları tablalara yerleştirip STL ya da 3MF olarak indir. Ücretsiz.

**Fit oversized 3D models on your printer.** Split, join, number and lay out the parts, then export STL or 3MF. Free. [English ↓](#english)

<br />

[![Tarayıcıda aç](https://img.shields.io/badge/%E2%96%B6%20Taray%C4%B1c%C4%B1da%20a%C3%A7-Open%20in%20browser-34e3a8?style=for-the-badge)](https://fixral3d.github.io/fixral-3d-splitter/)
&nbsp;
[![Windows için indir](https://img.shields.io/badge/%E2%AC%87%20Windows%20i%C3%A7in%20indir-Download%20for%20Windows-4f8dff?style=for-the-badge)](https://github.com/fixral3d/fixral-3d-splitter/releases/latest)

![Sürüm](https://img.shields.io/github/v/release/fixral3d/fixral-3d-splitter?label=s%C3%BCr%C3%BCm&color=34e3a8)
![Ücretsiz](https://img.shields.io/badge/fiyat-%C3%BCcretsiz-34e3a8)
![Yazıcılar](https://img.shields.io/badge/yaz%C4%B1c%C4%B1-27%20model-ffb547)
![Diller](https://img.shields.io/badge/diller-10-3cc7d6)
![Gizlilik](https://img.shields.io/badge/dosyan-y%C3%BCklenmez-654ff0)

<img src="screenshots/print.jpg" alt="Fixral 3D Splitter: yazıcı tablalarına yerleşmiş parçalar, seçili parçada döndürme halkası ve sağdaki ayar paneli" width="820" />

</div>

---

## İki yoldan kullan

| | 🌐 Tarayıcıda | 🖥️ Windows uygulaması |
|---|---|---|
| **Başlat** | [Bağlantıyı aç](https://fixral3d.github.io/fixral-3d-splitter/), hemen kullan | [Kurulum dosyasını indir](https://github.com/fixral3d/fixral-3d-splitter/releases/latest) (`Fixral-3D-Splitter-Setup-x.y.z.exe`) |
| **Cihaz** | Bilgisayar, tablet, telefon | Windows 10 / 11 (64 bit) |
| **Güncelleme** | Her açılışta en son sürüm | Arka planda kendiliğinden iner; tek tıkla ya da kapanışta kurulur |
| **İnternet** | İlk açılıştan sonra çevrimdışı da çalışır | Gerekmez (yalnız güncelleme için) |
| **Dosyan** | Bilgisayarından çıkmaz | Bilgisayarından çıkmaz |

> **Windows kurulumu hakkında:** Kurulum dosyası henüz dijital olarak imzalı olmadığı için Windows ilk açılışta *"Windows bilgisayarınızı korudu"* uyarısı gösterebilir. **Ek bilgi → Yine de çalıştır** ile devam et. Yönetici izni gerekmez; uygulama masaüstüne ve Başlat menüsüne kısayol ekler. Sonraki güncellemelerde bu uyarı çıkmaz.

## Neden Fixral?

- 🔒 **Dosyan senin.** Model hiçbir sunucuya yüklenmez; tüm geometri bilgisayarında, WebAssembly ile işlenir.
- 🧩 **Gerçekten birleşen parçalar.** Pim, dübel, mıknatıs, ahşap kavela, kırlangıç kuyruğu, bindirme, ince plakalar için kelebek kama; bağlantılar kesitin şeklini izler.
- 🏷️ **Karışmayan parçalar.** Her kesim yüzüne `03-07` oyulur: bu yüz P03'e ait, P07 ile birleşir.
- 🖨️ **Baskıya hazır sonuç.** Parçalar tablaya sığan yönde döndürülür ve yazıcının tablalarına yerleşir; tabla başına STL ya da çok tablalı 3MF.
- 🌍 **27 yazıcı, 10 dil.** Bambu Lab, Prusa, Creality, Elegoo, Anycubic, Sovol, Qidi, Flashforge ya da özel ölçü; konuşan asistan Dot seçtiğin dilde anlatır.

## Beş adımda

| Adım | Ne yapar? |
|---|---|
| **1 · Hazırla** | STL, 3MF, OBJ, GLB, PLY ya da `.fixral` projeni aç. Otomatik mesh onarımı, oto hizalama, büyük taramalarda otomatik sadeleştirme, ölçekleme (`850mm`, `120%`, `1.5`), döndürme, aynalama, içini boşaltma. |
| **2 · Ön bölme** | Yazıcını seç; kesim düzlemleri hacme göre yerleşir. Birleştirme şablonunu seç, düzlemleri sürükle, kesim ekle, açıyla döndür ya da eğri kesim çiz. "Doğal ek yerleri" kol, bacak, baş gibi uzantıları eklem yerlerinden ayırır. |
| **3 · Böl** | Parçalar ve bağlantılar arka planda saniyeler içinde üretilir. |
| **4 · Parçala** | Ayrık görünümde incele; parçaları birleştir, sil, kesim yüzüne tıklayarak pim ya da dübel ekle. Montaj sırası, montaj kılavuzu ve tahmini teklif. |
| **5 · Baskı** | Parçalar tablalara yerleşir; sürükleyerek elle taşı, döndür, tabana gelecek yüzü seç, gerekiyorsa skirt ve mouse ear ekle. Tabla başına STL ya da çok tablalı 3MF indir. |

<img src="screenshots/templates.jpg" alt="Ön bölme: yazıcı tablası, kesim düzlemleri ve sağdaki birleştirme şablonu paneli" width="100%" />

## Yenilikler

**v0.14.0 · Windows masaüstü sürümü.** Fixral artık kurulum dosyasıyla Windows'a uygulama olarak kurulabiliyor. Yeni sürümler arka planda kendiliğinden indirilir; üst çubuktaki **Güncellemeyi kur** düğmesiyle hemen ya da uygulama kapanırken kurulur.

**v0.13 · Doğal ek yerleri ve renkler.** Tek tıkla kol, bacak, baş ve kulp gibi uzantılar boyun ve eklem yerlerinden ayrılır; modelin geri kalanı kesilmez. Renkli 3MF, GLB, OBJ ve PLY modeller rengini kaybetmeden bölünür ve renkli 3MF olarak iner.

**v0.12 · Proje dosyası ve kurtarma.** Çalışmanı `.fixral` olarak kaydet; sayfa kapanırsa kaldığın yerden devam et. Bölmeden önce bağlantı önizlemesi, altıgen, D profil, geçmeli ve bilyalı pimler, tolerans deneme parçası, adım adım montaj kılavuzu.

Tüm sürüm notları uygulamada: sürüm rozetine tıkla → **Neler yeni**.

## Öne çıkanlar

<table>
<tr>
<td width="50%"><img src="screenshots/jointedit.jpg" alt="Elle pim ve dübel düzenleme: kesim yüzlerinde işaretler ve ölçü paneli" /></td>
<td width="50%"><img src="screenshots/explode.jpg" alt="Ayrık görünümde pim ve dübellerle bölünmüş model ve parça listesi" /></td>
</tr>
<tr>
<td><b>Kesitin şeklini izleyen bağlantılar.</b> Pim, dübel ve mıknatıslar kesit boyunca kalın bölgelere dağılır. Kesim yüzüne tıklayıp elle ekle; her noktanın çapı, boyu ve tipi ayrı ayarlanır.</td>
<td><b>Ayrık görünüm ve parça araçları.</b> Birleştir, sil, gizle, izole et, geri al. Tahmini teklif (filament, süre, malzeme, kâr) ve yazdırılabilir montaj kılavuzu.</td>
</tr>
<tr>
<td><img src="screenshots/skirt.jpg" alt="ABS ile tablalara yerleşmiş parçalar, skirt çubukları ve Skirt ve mouse ear paneli" /></td>
<td><img src="screenshots/labels.jpg" alt="Ayrık görünümde parça numaraları" /></td>
</tr>
<tr>
<td><b>Skirt çubukları ve mouse ear.</b> ABS, ASA, naylon gibi çeken filamentlerde köşe kalkmasına karşı; tıklayarak tek tek ya da seçili parçalara toplu ekle. 8 filament profili.</td>
<td><b>Numaralı parçalar.</b> Etiket kesim yüzüne oyulur; ince parçalarda eğik yazılır, kısaltılır ya da düz dış yüze taşınır.</td>
</tr>
<tr>
<td><img src="screenshots/view-menu.jpg" alt="Görünüm menüsü: göster/gizle, ışık, gölge ve çalışma alanı ayarları" /></td>
<td><img src="screenshots/lang-ar.jpg" alt="Sağdan sola Arapça arayüz" /></td>
</tr>
<tr>
<td><b>Görünüm menüsü.</b> Izgara, tabla cetveli, ölçüler, ışık, gölge, arka plan ve çözünürlük; tercihler saklanır.</td>
<td><b>10 dil ve Dot.</b> Türkçe, English, Deutsch, 中文, 日本語, 한국어, العربية (sağdan sola), Français, Italiano, Español; sesli anlatım ve rehberli tur.</td>
</tr>
</table>

**Ayrıca:** eğri ve çoklu çizgi kesim · açılı kesim · kesimleri modele dik hizalama · akıllı seç ve ayır · içini boşaltma ve dolu bölmeler · drenaj deliği · basılan dübel ve kamalar tablada · geri al / yinele her adımda · kesit ve tel kafes görünümü.

## Desteklenen yazıcılar

| Marka | Modeller |
|---|---|
| Bambu Lab | X1 Carbon / X1E, P1S / P1P, P2S, A1, A1 mini, H2D, H2S |
| Prusa | MK4S / MK4, Core One, MINI+, XL |
| Creality | K1 / K1C, K1 Max, K2 Plus, Hi, Ender-3 V3 / V3 SE / V3 KE |
| Elegoo | Centauri Carbon, Neptune 4 Pro, Neptune 4 Max |
| Anycubic | Kobra 3, Kobra S1 |
| Sovol | SV06, SV08 |
| Qidi | Q1 Pro, Plus4 |
| Flashforge | Adventurer 5M / 5M Pro |
| Özel | İstediğin ölçü; kendi yazıcın olarak kaydedilir |

## Diller

[Türkçe](https://fixral3d.github.io/fixral-3d-splitter/?lang=tr) ·
[English](https://fixral3d.github.io/fixral-3d-splitter/?lang=en) ·
[Deutsch](https://fixral3d.github.io/fixral-3d-splitter/?lang=de) ·
[中文](https://fixral3d.github.io/fixral-3d-splitter/?lang=zh) ·
[日本語](https://fixral3d.github.io/fixral-3d-splitter/?lang=ja) ·
[한국어](https://fixral3d.github.io/fixral-3d-splitter/?lang=ko) ·
[العربية](https://fixral3d.github.io/fixral-3d-splitter/?lang=ar) ·
[Français](https://fixral3d.github.io/fixral-3d-splitter/?lang=fr) ·
[Italiano](https://fixral3d.github.io/fixral-3d-splitter/?lang=it) ·
[Español](https://fixral3d.github.io/fixral-3d-splitter/?lang=es)

---

## English

**Fixral 3D Splitter / Slicer** splits oversized 3D models to fit your printer's build volume. Your file never leaves your computer: all geometry runs locally in WebAssembly.

**Two ways to use it**
- 🌐 **In the browser:** [open the live app](https://fixral3d.github.io/fixral-3d-splitter/?lang=en). Works on desktop, tablet and phone, and offline after the first visit.
- 🖥️ **Windows app:** [download the installer](https://github.com/fixral3d/fixral-3d-splitter/releases/latest). New versions download in the background and install with one click or when you close the app. The installer is not code-signed yet, so Windows may show *"Windows protected your PC"*: choose **More info → Run anyway**. No admin rights needed.

**What it does**
- **Joints:** pyramid, cylinder, hexagon, D-profile, snap-fit and ball-joint pins, printed dowels, magnet pockets, wooden dowels, dovetails, lap joints, and butterfly keys for thin plates, placed along each cross-section
- **Cuts:** automatic grid for your build volume, drag, add, delete and angle cuts, curved and polyline cuts, and *natural seams* that separate limbs at their joints
- **Model prep:** mesh repair, simplification, scaling, rotation, mirroring, hollowing, smart select and extract; imports STL, 3MF, OBJ, GLB/GLTF, PLY and `.fixral` projects
- **Numbered parts** with engraved `03-07` mating labels; colours preserved through the split
- **Print step:** bed-fitting orientation, plate layout for 27 printer models, optional skirt rods and mouse ears, 8 filament profiles
- **Export:** STL (ZIP), coloured 3MF, per-plate STL and multi-plate 3MF; built-in cost estimate and printable assembly guide
- **10 languages** including right-to-left Arabic, and **Dot**, a talking assistant with a guided tour

---

<div align="center">

Bu depo yalnızca canlı sitenin derlenmiş dosyalarını ve Windows kurulum dosyalarını barındırır; kaynak kodu paylaşılmamaktadır.<br />
This repository only hosts the built site and the Windows installers; the source code is not public.

**Fixral 3D Splitter / Slicer** · [Canlı uygulama / Live app](https://fixral3d.github.io/fixral-3d-splitter/) · [İndir / Download](https://github.com/fixral3d/fixral-3d-splitter/releases/latest) · [fixral.com](https://fixral.com) · [fixral3d@gmail.com](mailto:fixral3d@gmail.com)

© 2026 Fixral. Tüm hakları saklıdır. All rights reserved.

</div>
