# PRD: Persona AI — The Apple Glass Digital Playbook for Consistent AI Characters & Influencers

> **Project Name**: Persona AI  
> **Slug**: `persona-ai`  
> **Target Path**: `~/Projects/persona-ai`  
> **Status**: APPROVED / STAGED FOR IMPLEMENTATION  
> **Stakeholder**: Paduka Ongki  
> **Author**: Antigravity (Business System Architect & Full-stack Dev)  
> **Source Material**: `~/Documents/work/notes/persona-ai/` (26 modules, 102 high-resolution images)

---

## 1. Executive Summary & Problem Statement

### 1.1 The Problem
Membuat konten kreator/influencer menggunakan AI memiliki tantangan fundamental:
1. **Face Drift & Inconsistency**: Wajah dan postur karakter berubah-ubah di setiap render, merusak kredibilitas branding.
2. **AI Slop & Uncanny Valley**: Karakter terlihat seperti lilin/plastik (*over-beautified*), gerakan kaku, dan tata cahaya tidak menyatu dengan background.
3. **High Subscription Barrier**: Kebanyakan tutorial langsung mengarahkan pengguna ke tool mahal ($30–$100/bln) tanpa mengoptimalkan model gratis/hemat (Google Flow, Gemini, ChatGPT).
4. **Poor Documentation UX**: Materi tutorial sering kali berserakan di Notion, chat Telegram, atau video YouTube tanpa navigasi terstruktur, tanpa tombol salin cepat, dan gambar sering terpotong oleh card CSS generik.

### 1.2 The Solution: Persona AI
**Persona AI** adalah web dokumentasi/buku digital interaktif dengan estetika **Apple Glass (visionOS / macOS Sequoia frosted translucency)** yang menyajikan panduan langkah demi langkah memproduksi karakter AI realistis, konsisten, dan siap dimonetisasi untuk kebutuhan konten media sosial (TikTok, Instagram Reels, YouTube Shorts, & Affiliate).

---

## 2. Core User Experience & Design System — Apple Glass Edition

### 2.1 Aesthetic Archetype: Apple Glass Physicality
- **Frosted Translucency**:
  - Panel navigasi (topbar, sidebar, table of contents) menggunakan material kaca buram: `backdrop-blur-2xl bg-white/65 dark:bg-zinc-950/65 border border-black/[0.06] dark:border-white/[0.1] shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]`.
  - **Specular Top Highlight**: 1px inner rim highlight (`box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.4)` di light mode, `rgba(255,255,255,0.12)` di dark mode) yang meniru pantulan cahaya tepi kaca fisik Apple.
- **Zero AI-Slop & Anti-Card Clutter**:
  - Dilarang membuat tumpukan kartu di dalam kartu (*cards-within-cards*), gradient neon murahan, atau layout SaaS generik.
  - Lebar area baca dibatasi pada `max-w-3xl` (65–75 karakter per baris) untuk ergonomi mata optimal.

### 2.2 Natural Image Framing on Glass Platters (Zero-Crop Guarantee)
- **Aturan Bebas Potongan (Zero-Crop)**:
  - Gambar tidak boleh dipotong dengan `h-64 object-cover`.
  - Seluruh gambar portrait vertikal 9:16, landscape 16:9, dan square 1:1 tampil 100% utuh mengikuti aspek rasio aslinya menggunakan `w-full h-auto max-h-[85vh] object-contain`.
- **Floating Glass Platter**:
  - Gambar diletakkan di atas piringan kaca melayang halus (`bg-zinc-100/50 dark:bg-zinc-900/40 backdrop-blur-md border border-black/[0.05] dark:border-white/[0.08] rounded-2xl p-2 md:p-3 shadow-sm`).
  - Dilengkapi caption tipografi italic rapi dan pill indikator resolusi.
- **Glass Lightbox Modal (Click-to-Zoom)**:
  - Klik pada gambar membuka modal layar penuh dengan latar `backdrop-blur-3xl bg-black/70` untuk menginspeksi pori-pori kulit, tekstur kerutan halus, dan teks prompt resolusi 8K.

### 2.3 Organic Brush Highlighting System
Menggantikan card generik yang kaku dengan sapuan spidol organik transparan (`box-decoration-break: clone`):
- 🟡 **Brush Yellow (`.brush-focus`)**: Untuk konsep inti & istilah penting (*e.g. 3×3 Contact Sheet, Zero Face Drift*).
- 🟢 **Brush Green (`.brush-action`)**: Untuk langkah aksi teknis (*e.g. Upload Google Flow, Download 8K RAW*).
- 🔵 **Brush Cyan (`.brush-prompt`)**: Untuk parameter teknis kamera (*e.g. 85mm lens, 9:16 vertical, studio lighting*).
- 🔴 **Brush Coral (`.brush-avoid`)**: Untuk larangan negatif prompt (*e.g. No plastic skin, avoid blur, no extra fingers*).

### 2.4 Frosted Prompt Capsules (1-Click Copy Engine)
- Setiap blok prompt dibungkus dalam *translucent terminal glass*:
  - Header kapsul kaca frosted dengan badge platform AI (*ChatGPT, Gemini, NanoBanana, Kling*).
  - Tombol **"Copy Prompt"** transparan dengan animasi mikro transisi centang hijau dan status toast "Copied!".
  - Font monospace berkontras tinggi (JetBrains Mono) dengan word-wrap rapi.

### 2.5 Responsive Video Facade (YouTube Bezel Kaca)
- Video tutorial YouTube dibungkus dalam wadah berbingkai kaca (*glass bezel*) dengan rasio natural (16:9 dan 9:16 Shorts) menggunakan teknik *click-to-play facade* agar tidak membebani kecepatan pemuatan awal halaman.

---

## 3. Tech Stack & Architecture Decision

- **Framework**: **Astro 5** (Content Collections, Server-Island ready, 0kb client JS baseline).
- **Docs Engine**: **Astro Starlight** + Custom Apple Glass Theme Layer.
  - *Kenapa Starlight?* Sudah memiliki mesin pencarian offline berkecepatan tinggi (**Pagefind**), auto-TOC, next/prev chapter pagination, dark/light toggle, dan arsitektur aksesibilitas standar industri.
- **Styling**: **Tailwind CSS** + Custom Apple Glass Utility Plugin (`backdrop-filter`, `specular highlights`, `brush gradients`).
- **Content Format**: **Markdown (`.md`) standar** untuk menjamin kestabilan parsing karakter khusus prompt (`{...}`, `<...>`), dengan kemampuan interoperabilitas `.mdx` bila dibutuhkan komponen interaktif masa depan.
- **Asset Pipeline**: 102 gambar lokal beresolusi tinggi dioptimalkan secara otomatis oleh Astro Image (WebP/AVIF generation).

---

## 4. Content Architecture & Directory Tree

```text
src/content/docs/
├── index.md                                      # Landing & Welcome Guide (Street Interview Style)
├── overview/
│   └── 00-analisis-dan-strategi.md               # Analisis Mendalam, Komparasi Tools & Blueprint
├── bab-1-fundamental/
│   ├── 01-cara-pandang-ai.md
│   ├── 02-mental-creator-ai.md
│   └── 03-apa-itu-prompt.md                     # 8 Pilar Realisme & Anatomi Prompt
├── bab-2-character-ai/
│   ├── 01-membuat-character-sheet.md            # Formula 3x3 Grid Contact Sheet (9 Angle)
│   ├── 02-ubah-outfit-character.md
│   ├── 02-sub-prompt-ganti-outfit.md            # Template Prompt Ganti Outfit
│   └── 03-ganti-dna-foto-lain.md                # Formula DNA Switcher
├── bab-3-real-project/
│   ├── 01-tips-motion-control.md                # Panduan Kontrol Gerak Kamera & Subjek
│   ├── 02-workflow-project.md                   # Alur Produksi End-to-End
│   ├── 03-talking-head-master-dan-editing.md    # Talking Head Masterclass + CapCut & SFX
│   ├── 03-sub-prompt-multi-angle.md             # Kumpulan Prompt 10 Angle Talking Head
│   ├── 04-membuat-podcast-ai.md                 # Setup 2 Talent Podcast (Host + Tamu)
│   └── 04-sub-prompt-set-podcast.md             # Kumpulan Template Prompt Studio Podcast
├── bab-4-bonus-tools/
│   ├── 01-gpt-custom.md
│   ├── 02-gemini-tools.md
│   ├── 03-flow-tools.md
│   └── 04-master-prompt-template.md
└── rekomendasi-platform/
    ├── 01-higgsfield.md
    ├── 02-kling-ai.md
    ├── 03-leonardo-ai.md
    ├── 04-qreed-ai.md
    ├── 05-viostudio.md
    └── 06-flow-ai.md
```

---

## 5. Non-Functional Requirements & Acceptance Criteria

1. **Zero-Crop Verification**: Seluruh 102 gambar harus tampil dalam batas viewport tanpa kepala, kaki, atau teks yang terpotong di layar iPhone, iPad, maupun monitor 4K.
2. **1-Click Copy Ergonomics**: Tombol salin prompt harus berfungsi pada semua perangkat dan menyalin teks prompt mentah tanpa format Markdown yang mengganggu.
3. **Performance Score**: Lighthouse Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
4. **Local Self-Containment**: Seluruh aset gambar dan font harus dapat berjalan 100% offline tanpa ketergantungan CDN eksternal.
