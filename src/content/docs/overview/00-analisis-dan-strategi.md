---
title: "Analisis Mendalam: AI Influencer Workflow"
description: "Panduan Persona AI: ANALISIS MENDALAM: AI INFLUENCER WORKFLOW"
---

> **Dokumen Analisis Arsitektur Sistem, Evaluasi Workflow, dan Strategi Eksekusi**  
> Sumber Asli: [Notion AI INFLUENCER WORKFLOW](https://app.notion.com/p/AI-INFLUERNCER-WORKFLOW-391cd19d233280bbb150d3f6192605dc)  
> Analisis disusun untuk: **Paduka Ongki**

---

## 1. Executive Summary & Inti Konsep

Workflow ini dirancang khusus oleh kreator (@promptly.id / Dealy) untuk menyelesaikan tantangan terbesar dalam pembuatan konten **AI Influencer** (khususnya untuk affiliate marketing TikTok/Instagram/Shorts):
1. **Konsistensi Karakter (Zero Face Drift)**: Menjaga wajah, proporsi, tekstur kulit, dan outfit model tetap sama di setiap scene.
2. **Efisiensi Biaya (Cost-Effective Production)**: Memanfaatkan tool gratis/tier hemat (<mark class="brush-blue">Google Flow</mark>, Gemini GEMs, ChatGPT) sebelum beralih ke engine berbayar (<mark class="brush-blue">Kling AI</mark>, <mark class="brush-blue">Higgsfield</mark>, Leonardo).
3. **Realistis & Anti-CGI (Uncanny Valley Removal)**: Menghindari look plastik/kartun dengan teknik unedited amateur snapshot, visible pores, micro-movement, dan lighting matching.

---

## 2. Dekonstruksi Pipeline Produksi (End-to-End Architecture)

```
[TAHAP 1: IDENTITY]
Pinterest / Foto Asli
        │
        ▼ (Prompt 3x3 Grid / Contact Sheet)
Character Sheet DNA (9 Angle/Shot)
        │
        ├─────────────────────────────────────────┐
        ▼ (Scene Reference)                       ▼ (Outfit Swap)
[TAHAP 2: SCENE INTEGRATION]              [TAHAP 2B: OUTFIT VARIATION]
Foto Scene / Set (Pinterest/Real)         Prompt Ganti Outfit Sheet
        │                                         │
        ▼ (DNA Switcher / Gemini GEM)             ▼
Foto Talent di Scene Baru                  Character Sheet Outfit Baru
        │
        ▼
[TAHAP 3: MULTI-ANGLE GENERATION]
Wide Shot ──► Medium Front ──► Medium Close-Up ──► 45° Angle ──► Over Shoulder
        │
        ▼
[TAHAP 4: MOTION & VIDEO SYNTHESIS]
Google Flow (Omni Flash) / Kling AI
- Camera Movement Control
- Gesture & Eye Direction Control
- Talking Head / Podcast Multi-talent
        │
        ▼
[TAHAP 5: AUDIO, LIPSYNC & POST-PROCESSING]
ElevenLabs (Speech-to-Speech / TTS) + CapCut Pro
- Voice Matching
- Blinking & Eye Movement Keyframing
- 200+ SFX & Dynamic Subtitles
```

---

## 3. Bedah Formula Prompt Utama (The Core Prompts)

### A. Formula <mark class="brush-yellow">Character Sheet</mark> DNA (3×3 Grid Contact Sheet)
* **Tujuan**: Mengunci seluruh parameter wajah dalam 1 gambar kanvas 9 grid agar AI selanjutnya punya referensi absolut.
* **Kunci Keberhasilan**:
  - `Ultra-photorealistic <mark class="brush-yellow">3×3 contact sheet</mark> of the exact same person from uploaded photo, vertical 9:16`.
  - `Face must be identical in every panel (same bone structure, eyes, nose, lips, skin tone, hairline, hairstyle)`.
  - 9 variasi shot eksplisit: *front, 3/4, profile, low angle, top-down, waist-up, close-up, over-shoulder, full body*.
  - Strict Negative Constraints: `No face change, beautification, stylization, <mark class="brush-coral">identity drift</mark>, <mark class="brush-coral">plastic skin</mark>, blur`.

### B. Formula <mark class="brush-green">DNA Switcher</mark> (Scene Transfer)
* **Tujuan**: Mengambil foto pose/lighting/background dari foto referensi orang lain, lalu menukar orangnya 100% dengan karakter kita.
* **Kunci Keberhasilan**:
  - `Use the FIRST image as the SCENE only, and the SECOND image (<mark class="brush-yellow">character sheet</mark>) as the PERSON.`
  - `Completely replace the person in the first image with the exact same individual from the <mark class="brush-yellow">character sheet</mark> — the same real person, not a lookalike.`
  - Mempertahankan lighting asli scene (`keep lighting from Image 1`) agar karakter menyatu secara optikal dan tidak tampak seperti stiker tempelan Photoshop.

### C. Formula Multi-Angle Talking Head & Podcast
* **Tujuan**: Menghasilkan berbagai shot kamera dari satu momen obrolan yang sama untuk kebutuhan cutting video dinamis.
* **Kunci Keberhasilan**:
  - Menetapkan 3D spatial consistency: `Treat the room as a real 3D space; only the camera moves, with physically correct perspective and parallax.`
  - Menetapkan eye direction: `Talent tidak melihat ke kamera, melihat ke lawan bicaranya saja seperti arah mata pada image reference.`

---

## 4. Evaluasi Kritis (Strengths, Weaknesses, Risks)

| Aspek | Kekuatan (Strengths) | Kelemahan & Risiko (Weaknesses & Risks) |
|---|---|---|
| **Kualitas Visual** | Sangat fotorealistis, menghilangkan kesan kartun AI dengan prompt tekstur kulit nyata (pori-pori, kerutan halus, lighting amatir). | Rawan artefak pada jari/tangan jika prompt tidak menyertakan negatif hand distortion. |
| **Biaya Operasional** | Menawarkan alternatif gratis (<mark class="brush-blue">Google Flow</mark> <mark class="brush-blue">NanoBanana</mark> & <mark class="brush-blue">Omni Flash</mark>) yang sangat menekan burn rate pemula. | Platform gratis sewaktu-waktu bisa memotong kuota harian atau mengganti model routing. |
| **Ketergantungan Tool** | Banyak menggunakan custom Gemini GEMs dan GPTs pribadi kreator yang rentan error/down. | Solusi mandiri: seluruh prompt raw sudah diekstrak ke dalam markdown lokal sehingga tidak bergantung lagi pada GEMs online mereka. |
| **Lipsync & Durasi** | Efek talking head dan podcast sangat hidup saat dipotong per 3–5 detik. | Lipsync video panjang (>15 detik) sering mengalami drift artikulasi mulut; wajib dipotong pendek-pendek di CapCut. |

---

## 5. Komparasi Ekosistem Platform AI

| Kategori | Platform | Kelebihan Utama | Biaya / Akses | Rekomendasi Penggunaan |
|---|---|---|---|---|
| **Tier Gratis / Hemat** | **<mark class="brush-blue">Google Flow</mark>** (<mark class="brush-blue">NanoBanana</mark> + <mark class="brush-blue">Omni Flash</mark>) | Cepat, hemat credit, hasil fotorealistis, cocok untuk motion video. | Gratis (kuota harian) / Tier Google Labs | Eksplorasi awal, testing prompt, dan generate motion talking head. |
| **Tier Konsistensi** | **ChatGPT Plus / DALL-E / Canvas** | Sangat patuh pada prompt <mark class="brush-green">DNA switcher</mark> dan multi-angle. | $20/bln (atau shared via bot reseller) | Pembuatan <mark class="brush-yellow">Character Sheet</mark> master dan ganti outfit. |
| **Tier Sinematik Global** | **<mark class="brush-blue">Kling AI</mark>** | Gerakan tubuh dan fisika kain/rambut paling halus dan natural. | Berbayar credit (USD) | Konten komersial brand tingkat lanjut. |
| **Tier Kamera & Efek** | **<mark class="brush-blue">Higgsfield</mark>** | Kontrol kamera (dolly, pan, tilt, zoom) terstruktur dan konsisten. | Berbayar credit (USD) | Video cinematic B-roll / adegan estetik influencer. |
| **Tier Reseller Lokal** | **Qreed AI & Viostudio** | Akses tool AI premium dalam satu langganan rupiah lokal. | Rp 50k – 150k / bln | Creator lokal yang ingin menghemat biaya subscription luar negeri. |

---

## 6. Roadmap Eksekusi untuk Paduka Ongki

Jika Paduka Ongki ingin meluncurkan AI Influencer affiliate / media aset:
1. **Fase 1: Karakterisasi (Hari 1)**:
   - Tentukan demografi karakter (misal: "Wanita Indonesia 23 tahun, casual aesthetic, skin tone natural").
   - Generate Master <mark class="brush-yellow">Character Sheet</mark> 9-grid di <mark class="brush-blue">Google Flow</mark> / ChatGPT. Simpan file 8K RAW-nya.
2. **Fase 2: Scene & B-Roll Library (Hari 2)**:
   - Ambil 10–20 referensi scene dari Pinterest (kafe, mobil, ruang kerja, unboxing produk).
   - Jalankan prompt <mark class="brush-green">DNA Switcher</mark> untuk menghasilkan 20 foto karakter di scene-scene tersebut.
3. **Fase 3: Multi-Angle & Motion (Hari 3)**:
   - Pilih 3 foto terbaik untuk konten talking head/reaksi.
   - Buat shot Wide, Medium, Close-Up, dan 45-degree.
   - Masukkan ke <mark class="brush-blue">Google Flow</mark> / <mark class="brush-blue">Kling AI</mark> dengan prompt motion control (3–5 detik per clip).
4. **Fase 4: Voicing & Finishing (Hari 4)**:
   - Rekam suara sendiri lalu ubah via ElevenLabs Speech-to-Speech (atau text-to-speech natural).
   - Gabungkan di CapCut: beri sound effects (SFX 200+ bonus), auto-caption, dan visual cut dinamis setiap 2–3 detik.
