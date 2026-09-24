# DESIGN SYSTEM & COMPONENT ANATOMY
## Persona AI — Apple Glass Digital Book Edition

> **Project Name**: Persona AI  
> **Slug**: `persona-ai`  
> **Aesthetic Archetype**: *Apple Glass (visionOS / macOS Sequoia Frosted Translucency) + High-End Editorial Typography*  
> **Target**: `~/Projects/persona-ai`  
> **Author**: Antigravity untuk **Paduka Ongki**

---

## 1. Filosofi Desain & Anti-Pattern Principles

1. **Apple Glass Physicality**: Menghadirkan ilusi material kaca nyata — permukaan semi-transparan buram (*frosted blur*), pantulan cahaya tipis di tepi atas (*specular highlight*), dan bayangan difus alami.
2. **Zero-Crop Image Rule**: Gambar adalah bukti teknis utama (wajah, perbandingan angle, prompt cheat sheet). **DILARANG KERAS** memotong gambar dengan `h-64 object-cover`. Semua gambar harus tampil 100% dengan rasio aslinya (`object-contain`).
3. **Anti-AI-Slop**: Tidak ada tumpukan kartu di dalam kartu (*cards-within-cards*), tidak ada gradient neon murahan, tidak ada dekorasi visual tanpa fungsi. Semua elemen melayani kenyamanan membaca (*reading ergonomics*).
4. **Organic Brush Highlighting**: Menggunakan aksen spidol/stabilo organik untuk menandai istilah penting sehingga materi langsung mudah dipahami dan diingat.

---

## 2. Peta Anatomi Halaman (Page Shell Anatomy)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ [TOPBAR: Apple Glass]                                                        │
│  Logo "PERSONA AI" │ Search (⌘K) │ Reading Progress [=====>      ] │ 🌙 Mode │
├───────────────┬──────────────────────────────────────────────┬───────────────┤
│ [SIDEBAR]     │ [MAIN READING CANVAS: max-w-3xl]             │ [RIGHT TOC]   │
│ Kaca Buram    │                                              │ Floating Kaca │
│               │  # Judul Bab (H1)                            │               │
│ ▾ Bab 1       │  Subtitle deskriptif                         │ Di halaman    │
│   • Pandang   │                                              │ ini:          │
│   • Mental    │  Paragraf teks dengan ==brush highlight==    │ • Konsep      │
│   • Prompt    │                                              │ • 3x3 Sheet   │
│               │  ┌────────────────────────────────────────┐  │ • Prompt      │
│ ▾ Bab 2       │  │ [IMAGE PLATTER: Zero-Crop]             │  │ • Motion      │
│   • Sheet     │  │ Foto 9:16 Natural Aspect Ratio         │  │ • Video       │
│   • Outfit    │  │ (Tidak terpotong sama sekali)          │  │               │
│               │  │ Caption: "Hasil 3x3 Contact Sheet"     │  │               │
│ ▾ Bab 3       │  └────────────────────────────────────────┘  │               │
│   • Motion    │                                              │               │
│   • Talking   │  ┌────────────────────────────────────────┐  │               │
│   • Podcast   │  │ [PROMPT CAPSULE: Frosted Terminal]     │  │               │
│               │  │ ChatGPT / DALL-E   [ 📋 Copy Prompt ]  │  │               │
│ ▾ Platform    │  │ Ultra-photorealistic 3x3 contact...    │  │               │
│   • Kling     │  └────────────────────────────────────────┘  │               │
│   • Flow      │                                              │               │
└───────────────┴──────────────────────────────────────────────┴───────────────┘
```

---

## 3. Anatomi Komponen Utama (Detailed Anatomy)

### A. Anatomi Apple Glass Topbar & Sidebar

```
               ┌── Specular Top Highlight: inset 0 1px 0 rgba(255,255,255,0.4)
               ▼
┌────────────────────────────────────────────────────────────────┐
│   PERSONA AI                    [ 🔍 Quick Search ]     🌙 ⚙️ │
└────────────────────────────────────────────────────────────────┘
 ▲                                ▲
 └── Backdrop Blur: 24px          └── Micro-Border: 1px border-black/[0.06]
     Bg: rgba(255,255,255,0.65) / rgba(9,9,11,0.65)
```

* **Spesifikasi CSS Panel Kaca**:
  ```css
  .apple-glass-panel {
    background: rgba(255, 255, 255, 0.68);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(0, 0, 0, 0.07);
    box-shadow: 
      inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
      0 8px 32px 0 rgba(0, 0, 0, 0.04);
  }
  .dark .apple-glass-panel {
    background: rgba(18, 18, 20, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.09);
    box-shadow: 
      inset 0 1px 0 0 rgba(255, 255, 255, 0.12),
      0 12px 40px 0 rgba(0, 0, 0, 0.4);
  }
  ```

---

### B. Anatomi Floating Glass Image Platter (Zero-Crop Rule)

Setiap gambar dibungkus dalam piringan kaca melayang yang menghormati aspek rasio gambar asli:

```
┌─────────────────────────────────────────────────────────────────┐ ◄── Glass Outer Rim
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │                     IMAGE ORIGINAL                          │ │ ◄── Natural Aspect Ratio
│ │               (Portrait 9:16 / Square 1:1)                  │ │     h-auto w-full
│ │               MAX-H: 85vh | OBJECT-CONTAIN                  │ │     (Zero Cropping)
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│  🔍 Klik untuk memperbesar (Full Lightbox 8K)                   │ ◄── Action Pill
│  Caption: Contoh 3x3 Contact Sheet Hasil NanoBanana Pro         │ ◄── Italic Subtext
└─────────────────────────────────────────────────────────────────┘
```

* **Spesifikasi Teknis**:
  - `max-height: 85vh`: Mencegah gambar vertikal 9:16 memanjang tak terkontrol melewati layar.
  - `object-fit: contain`: Menjamin kepala, kaki, dan teks prompt di dalam gambar **TIDAK PERNAH TERPOTONG**.
  - **Glass Lightbox Trigger**: Gambar memiliki kursor `zoom-in`. Ketika diklik, layar merender modal kaca penuh dengan `backdrop-filter: blur(36px)`.

---

### C. Anatomi Organic Brush Highlighter (Spidol Belajar)

Alih-alih membuat kotak card yang memecah konsentrasi membaca, teks penting di-highlight dengan efek sapuan kuas spidol (brush) yang memiliki kemiringan halus dan opasitas dinamis:

```
Teks Biasa  ===[ SAPUAN SPIDOL HIGHLIGHTER ]===  Teks Biasa
                ▲                             ▲
                └── Gradasi Awal (Tilt -0.5°) └── Ujung Kuas Alami
```

#### 4 Palet Brush Semantik:
1. 🟡 **Focus Brush (`.brush-yellow`)**:
   - Penggunaan: Konsep utama (*e.g. 3×3 Contact Sheet, Zero Face Drift*).
   - Efek: Kuning lemon hangat transparan.
2. 🟢 **Action Brush (`.brush-green`)**:
   - Penggunaan: Aksi teknis (*e.g. Upload ke Google Flow, Unduh 8K RAW*).
   - Efek: Hijau mint transparan.
3. 🔵 **Technical Brush (`.brush-blue`)**:
   - Penggunaan: Parameter kamera (*e.g. 85mm lens, 9:16 aspect ratio, studio lighting*).
   - Efek: Cyan langit transparan.
4. 🔴 **Negative Brush (`.brush-coral`)**:
   - Penggunaan: Larangan prompt (*e.g. No plastic skin, avoid blur, no extra fingers*).
   - Efek: Coral kemerahan transparan.

* **Implementasi CSS**:
  ```css
  .brush-yellow {
    background: linear-gradient(104deg, rgba(254, 240, 138, 0) 0.8%, rgba(254, 240, 138, 0.85) 2.5%, rgba(254, 240, 138, 0.55) 92%, rgba(254, 240, 138, 0) 98%);
    padding: 0.15em 0.4em;
    border-radius: 0.3em 0.1em 0.25em 0.15em;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
  .dark .brush-yellow {
    background: linear-gradient(104deg, rgba(202, 138, 4, 0) 0.8%, rgba(202, 138, 4, 0.45) 2.5%, rgba(202, 138, 4, 0.3) 92%, rgba(202, 138, 4, 0) 98%);
    color: #fef08a;
  }
  ```

---

### D. Anatomi Frosted Prompt Capsule (Terminal Kaca 1-Click Copy)

```
┌─────────────────────────────────────────────────────────────────┐
│  PROMPT TEMPLATE │ CHATGPT / GEMINI         [ 📋 Copy Prompt ] │ ◄── Frosted Glass Header
├─────────────────────────────────────────────────────────────────┤
│ 1 │ Ultra-photorealistic 3×3 contact sheet of the exact         │
│ 2 │ same person from the uploaded photo, vertical 9:16.         │ ◄── Monospace Canvas
│ 3 │ Face must be identical in every panel...                    │     (JetBrains Mono)
│ 4 │ No: face change, beautification, plastic skin, blur.        │
└─────────────────────────────────────────────────────────────────┘
```

* **Interaksi Copy**:
  - Hover: Tombol memancarkan kilau kaca (`bg-white/30 dark:bg-white/10`).
  - Klik: Animasi transisi 150ms ke icon centang hijau + teks "Copied!" + toast halus di pojok kanan bawah.

---

### E. Anatomi Responsive Video Facade (YouTube Bezel Kaca)

```
┌─────────────────────────────────────────────────────────────────┐
│  ▶ Video Tutorial: Cara Bikin Character Sheet (Klik untuk Putar)│ ◄── Glass Facade
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                     YOUTUBE PREVIEW                         │ │
│ │                         [ ▶ ]                               │ │ ◄── Rasio 16:9 / 9:16
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```
- Ringan: Iframe YouTube tidak dimuat sebelum user mengklik tombol putar (menghemat memory & kuota).

---

## 4. Sistem Tipografi & Ergonomi Baca

| Elemen | Font Family | Size (Desktop / Mobile) | Weight | Line Height | Keterangan |
|---|---|---|---|---|---|
| **H1 Title** | Inter / SF Pro | 2.5rem (40px) / 2rem | 700 (Bold) | 1.15 | Tracking rapat `-0.025em` |
| **H2 Section** | Inter / SF Pro | 1.75rem (28px) / 1.5rem | 600 (Semibold) | 1.25 | Aksen garis kaca bawah tipis |
| **H3 Subsection** | Inter / SF Pro | 1.25rem (20px) / 1.15rem | 600 (Semibold) | 1.35 | Sub-poin pembahasan |
| **Body Text** | Inter / SF Pro | 1.0625rem (17px) / 1rem | 400 (Regular) | 1.75 (Lega) | Karakter per baris: 65–75 |
| **Prompt/Code** | JetBrains Mono | 0.9rem (14.5px) / 0.85rem | 400 & 500 | 1.6 | Monospace kontras tinggi |

---

## 5. Token Warna & Material Kaca (Color Tokens)

```css
:root {
  /* Surface Light */
  --glass-bg: rgba(255, 255, 255, 0.72);
  --glass-border: rgba(0, 0, 0, 0.06);
  --glass-highlight: rgba(255, 255, 255, 0.7);
  --glass-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);

  /* Text & Accent */
  --text-primary: #18181b;     /* zinc-900 */
  --text-secondary: #52525b;   /* zinc-600 */
  --accent-apple: #0071e3;     /* Apple System Blue */
}

.dark {
  /* Surface Dark */
  --glass-bg: rgba(18, 18, 22, 0.70);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-highlight: rgba(255, 255, 255, 0.12);
  --glass-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.5);

  /* Text & Accent */
  --text-primary: #f4f4f5;     /* zinc-100 */
  --text-secondary: #a1a1aa;   /* zinc-400 */
  --accent-apple: #2997ff;     /* Apple Vivid Blue */
}
```

---

## 6. Verifikasi Responsif (Breakpoints)

- **Desktop (≥ 1280px)**: 3 Kolom (Sidebar kaca kiri 260px, Reading canvas tengah max-w-3xl, TOC kanan 240px).
- **Laptop / Tablet (768px – 1279px)**: 2 Kolom (Sidebar kiri collapsible / hamburger drawer, canvas tengah meluas).
- **Mobile (< 768px)**: 1 Kolom fluida, header kaca sticky dengan reading progress bar, tombol copy prompt berukuran ramah sentuhan (min 44px), piringan gambar 100% lebar layar tanpa scroll horizontal.
