# tema-spor-2 · mlk9yy — Hero 5 — Tam ekran parallax / video

## Nedir

tema-spor-2 sitesinin matrix modülü. `Hero 5 — Tam ekran parallax / video` şablonu (section kökü,
sınıf `modulex-h5`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (3 KB) |
| `index.html` | Modül şablonu (render hedefi) (12 KB) |
| `index.jpeg` | Önizleme görseli (45 KB) |
| `index.json` | Veri + tema token'ları (3 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `stil` | `ortali` |
| `hiza` | `orta` |
| `yukseklik` | `88` |
| `max` | `1200px` |
| `img` | `` |
| `video` | `` |
| `poster` | `` |
| `alt` | `{'tr': 'Tesisimizden genel görünüm', 'en': 'Overview of our facility', 'ar': 'منظر عام لمنشأتنا'}` |

- `name`: `Hero 5 — Tam ekran parallax / video`
- `data`: 0 kayıt. Örnek: `[]`
- Diğer anahtarlar: `description`, `version`, `icon`, `category`, `tags`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **stil**, **hiza**, **yukseklik**, **max**, **img**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex-h5`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-spor-2 sitesinde `web/matrix/modules/mlk9yy/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": {
    "tr": "Hero 5 — Tam ekran parallax / video",
    "en": "Hero 5 — Full-screen parallax / video",
    "ar": "هيرو 5 — شاشة كاملة بارالاكس / فيديو"
  },
  "desing": {
    "stil": "ortali",
    "hiza": "orta",
    "yukseklik": 88,
    "max": "1200px",
    "img": "",
    "video": "",
    "poster": "",
    "alt": {
      "tr": "Tesisimizden genel görünüm",
      "en": "Overview of our facility",
      "ar": "منظر عام لمنشأتنا"
    },
    "overlay": "color-mix(in srgb, var(--mx-site-primary, #2563eb) 28%, #0b1220)",
    "overlayText": "#ffffff",
    "accent": "var(--mx-site-primary, #2563eb)",
    "accentText": "var(--mx-site-primary-contrast, #ffffff)",
    "bg": "var(--mx-site-b
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
