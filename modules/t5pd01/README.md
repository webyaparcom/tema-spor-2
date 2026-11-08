# tema-spor-2 · t5pd01 — Page Desing 2

## Nedir

tema-spor-2 sitesinin matrix modülü. `Page Desing 2` şablonu (div kökü,
sınıf `modulex`) render sırasında sitenin sayfa akışına eklenir. Şablon içeriği
`index.html`'deki `{{...}}` soketleriyle, veri/tema değerleri `index.json`'la
beslenir.

## Dosyalar

| Dosya | Rol |
|-------|-----|
| `back.js` | Modül davranışı (vanilla JS) (2 KB) |
| `index.html` | Modül şablonu (render hedefi) (4 KB) |
| `index.jpeg` | Önizleme görseli (9 KB) |
| `index.json` | Veri + tema token'ları (0 KB) |

## Girdiler
| Değişken | Örnek değer |
|--------|-------------|
| `height` | `200` |
| `opacity` | `0.5` |
| `font-size` | `50` |
| `backgroundcolor` | `#000` |
| `menu-active` | `#1e3046` |
| `category` | `page` |
| `textcolor` | `#ffffff` |
| `activetext` | `#ffffff` |

- `name`: `Page Desing 2`
- Diğer anahtarlar: `category`, `description`

## Temaya bağımlılık
Tema token'ları `index.json -> desing` üzerinden gelir (önceki tablo): **height**, **opacity**, **font-size**, **backgroundcolor**, **menu-active**.

## Test

Webmaker render hattında site sayfası üretilir; çıktı HTML'de bu modülün kök bloğu
(`modulex`) yerleşik görünmelidir. Render ucu: mcp/webmaker
render aracı / proje site dizini çıktısı.

## Kullanım örneği

Modül tema-spor-2 sitesinde `web/matrix/modules/t5pd01/` yolunda tanımlıdır; sayfa
yapılandırması bu yolu referans alır. Veri örneği (`index.json`):
```
{
  "name": "Page Desing 2",
  "desing": {
    "height": "200",
    "opacity": "0.5",
    "font-size": "50",
    "backgroundcolor": "#000",
    "menu-active": "#1e3046",
    "category": "page",
    "textcolor": "#ffffff",
    "activetext": "#ffffff"
  },
  "data": null
}
```

## Notlar

- Oluşturuldu: 2026-11-01 — modül envanterinde otomatik tamamlanan README (kaynak dosyalar: index.json, index.html).
- İçerik bu klasördeki gerçek dosyalardan okunarak yazıldı; modül değişikliğinde elden güncellenmelidir.
