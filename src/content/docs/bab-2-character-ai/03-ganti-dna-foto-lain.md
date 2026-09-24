---
title: "Transfer DNA Karakter ke Scene Lain"
description: "Panduan Persona AI: GANTI DNA FOTO LAIN DENGAN CHARACTER SHEET KITA SENDIRI"
---

![ChatGPT Image Jul 6, 2026, 09_44_15 AM.png](/images/ganti_dna_foto_lain_dengan_character_she_01_395cd19d.png)

Modul ini membahas teknik <mark class="brush-yellow">transfer DNA wajah karakter</mark> ke dalam foto/scene lain tanpa merusak komposisi, pose, outfit, atau pencahayaan foto asli.

### Komponen Input & Hasil

- **Foto Referensi Scene (Image 1):**

![video viral link di BIO (1).jpeg](/images/ganti_dna_foto_lain_dengan_character_she_02_395cd19d.jpg)

- **Character Sheet (Image 2):**

![Person_photo_contact_sheet_angles_202608300959.jpeg](/images/ganti_dna_foto_lain_dengan_character_she_03_395cd19d.png)

- **Hasil Blending Sempurna:**

![Blending_character_into_scene_ba…_202608301119.jpeg](/images/ganti_dna_foto_lain_dengan_character_she_04_395cd19d.jpg)

## Cara 1 — Generate Manual via Nano Banana Pro / ChatGPT

Teknik ini memanfaatkan model penalaran visual (multimodal) untuk membedah scene dan menukar identitas model secara akurat.

- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [<mark class="brush-blue">Google Flow</mark> - Studio Kreatif AI untuk Video, Gambar & Alat Kustom](https://labs.google/fx/id/tools/flow)
- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [ChatGPT](https://chatgpt.com/)

### Formula Prompt DNA Switcher (Scene + Character Sheet)

Gunakan urutan input berikut:
- <mark class="brush-yellow">Image 1</mark> = Foto Scene Referensi (pose, outfit, lokasi, lighting)
- <mark class="brush-blue">Image 2</mark> = Contact Sheet Karakter (sumber identitas wajah, rambut, skin tone)

```javascript
Image 1 = SCENE & POSE REFERENCE. Image 2 = CHARACTER IDENTITY REFERENCE (contact sheet).

TASK: Replace the person in Image 1 with the exact same character from Image 2.

PRESERVE FROM IMAGE 1 (zero change):
- Exact pose, body position, hand placement, and camera angle
- Exact outfit, clothing, textures, and accessories
- Exact background, environment, lighting, shadows, and color grading
- Overall framing and composition

TRANSFER FROM IMAGE 2 (pixel-faithful character lock):
- Exact facial bone structure, eyes, eyebrows, nose, lips, jawline, and skin tone
- Natural skin texture with visible pores and realistic details
- Same hairstyle and hair color adapted to the pose in Image 1
- Match head orientation and facial expression to Image 1's scene mood

STYLE: Photorealistic, 8K RAW editorial, natural depth of field, seamless blend.
AVOID: identity drift, generic face, plastic skin, distorted hands, changed background.
```

### Video Tutorial — Cara Manual

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:1rem;margin:1.75rem 0;box-shadow:0 8px 30px rgba(0,0,0,0.12);border:1px solid rgba(255,255,255,0.1);">
  <iframe src="https://www.youtube-nocookie.com/embed/_jfJ1ZWiiBw" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="text-align:center;font-size:0.875rem;margin-top:-1rem;margin-bottom:1.5rem;"><a href="https://youtu.be/_jfJ1ZWiiBw" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg> Tonton di YouTube</a></p>

## Cara 2 — Menggunakan Gemini Gem (Character DNA Switcher)

Metode alternatif otomatis menggunakan Gemini Custom Gem buatan tim Promptly:

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [Character DNA Switcher — Google Gemini Gem](https://gemini.google.com/gem/1VDCPHLH49Fby8Ev4ndMysCbgPuSN9J22?usp=sharing)

### Video Tutorial — Gemini Gem

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:1rem;margin:1.75rem 0;box-shadow:0 8px 30px rgba(0,0,0,0.12);border:1px solid rgba(255,255,255,0.1);">
  <iframe src="https://www.youtube-nocookie.com/embed/QRqxqnNa2eA" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="text-align:center;font-size:0.875rem;margin-top:-1rem;margin-bottom:1.5rem;"><a href="https://youtu.be/QRqxqnNa2eA" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg> Tonton di YouTube</a></p>

> [!NOTE]
> Jika hasil generate pertama mengalami sedikit *identity drift* atau perbedaan skin undertone, lakukan re-roll satu kali atau pertegas parameter `preserve facial bone structure and eye shape exactly from Image 2`.
