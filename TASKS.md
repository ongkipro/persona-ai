# TASKS: Persona AI — Interactive Digital Book Web

> **Project Name**: Persona AI  
> **Slug**: `persona-ai`  
> **Target Path**: `~/Projects/persona-ai`  
> **PRD Reference**: [PRD.md](PRD.md)  
> **Status Tracking**: [x] Completed (All phases verified)

---

## Phase 1: Repository & Project Initialization
- [x] **TASK-001**: Buat repository baru di `~/Projects/persona-ai` menggunakan template Astro 5 + Starlight via `project-init`.
- [x] **TASK-002**: Install dependencies (`@astrojs/starlight`, `@pagefind/darwin-arm64`).
- [x] **TASK-003**: Konfigurasi `astro.config.mjs` dengan branding **Persona AI**, tema Apple Glass, dan sidebar hierarkis 6 section.
- [x] **TASK-004**: Salin kontrak repository (`PRD.md`, `TASKS.md`, `AGENTS.md`, `README.md`, `docs/DESIGN-SYSTEM-ANATOMY.md`) ke root project.

## Phase 2: Apple Glass Design System & Custom Components
- [x] **TASK-005**: Buat custom stylesheet `src/styles/apple-glass.css` yang mendefinisikan:
  - Frosted glass panel (`backdrop-filter: blur(24px)`, specular inner highlight `inset 0 1px 0 rgba(...)`).
  - Organic Brush Highlighter utility (`.brush-yellow`, `.brush-green`, `.brush-blue`, `.brush-coral`).
  - Ergonomi tipografi bacaan editorial (`max-w-3xl`, leading 1.78, letter-spacing halus).
- [x] **TASK-006**: Kustomisasi komponen Starlight untuk implementasi **Zero-Crop Image Framing**:
  - `w-full h-auto max-h-[85vh] object-contain rounded-2xl border`.
  - Piringan kaca melayang netral untuk setiap gambar.
- [x] **TASK-007**: Implementasi komponen Lightbox / Click-to-Zoom interaktif berbasis client-script ringan di `<head>` untuk inspeksi gambar 8K.
- [x] **TASK-008**: Implementasi styling custom untuk Code Block / Prompt Container dengan tombol **1-Click Copy Prompt** + Expressive Code.
- [x] **TASK-009**: Implementasi responsive YouTube Facade (embed 16:9 responsif dengan glass bezel) untuk seluruh video tutorial.

## Phase 3: Content Migration & Asset Pipeline
- [x] **TASK-010**: Salin 102 aset gambar resolusi tinggi dari `~/Documents/work/notes/persona-ai/images/` ke `~/Projects/persona-ai/public/images/`.
- [x] **TASK-011**: Migrasi 25 file modul ke `src/content/docs/`:
  - `index.md` (Pengantar & Overview)
  - `overview/00-analisis-dan-strategi.md`
  - `bab-1-fundamental/` (3 modul)
  - `bab-2-character-ai/` (4 modul)
  - `bab-3-real-project/` (6 modul)
  - `bab-4-bonus-tools/` (4 modul)
  - `rekomendasi-platform/` (6 modul)
- [x] **TASK-012**: Tambahkan YAML frontmatter yang rapi (`title`, `description`) di setiap file.
- [x] **TASK-013**: Normalisasi tautan gambar (`/images/...`) dan tautan internal antar-halaman (100% valid, 0 broken link).

## Phase 4: Verification, Quality Assurance & Polish
- [x] **TASK-014**: Audit visual rasio gambar di desktop & mobile viewport: 100% gambar tampil utuh dengan `object-contain` (Zero-Crop Rule).
- [x] **TASK-015**: Audit tombol Copy Prompt pada seluruh blok prompt: berfungsi mulus menyalin raw prompt teks.
- [x] **TASK-016**: Audit fungsionalitas pencarian offline bawaan (Pagefind): 26 file HTML terindeks dalam 1.16s.
- [x] **TASK-017**: Jalankan production build test (`pnpm build`): 26 halaman ter-render sempurna tanpa error.
- [x] **TASK-018**: Verifikasi contract dotfiles via `project-check --full`: VERIFIED (1/1 checks passed).
