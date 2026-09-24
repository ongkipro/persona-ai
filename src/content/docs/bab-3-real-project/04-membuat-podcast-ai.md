---
title: "Membuat Video Podcast AI (2 Karakter)"
description: "Panduan Persona AI: MEMBUAT PODCAST AI"
---

![ChatGPT Image 8 Sep 2026, 22.41.18.png](/images/membuat_podcast_ai_01_3d6cd19d.png)

![ChatGPT Image 9 Sep 2026, 06.59.26.png](/images/membuat_podcast_ai_02_3d6cd19d.png)

![ChatGPT Image 9 Sep 2026, 06.59.23.png](/images/membuat_podcast_ai_03_3d6cd19d.png)

Produksi podcast AI dengan dua pembicara membutuhkan sinkronisasi:
1. <mark class="brush-yellow">Host</mark> (Presenter utama)
2. <mark class="brush-blue">Narasumber / Bintang Tamu</mark>

Sebelum memulai, pastikan kamu telah menyiapkan **dua Character Sheet berbeda** untuk mengunci konsistensi masing-masing talent:

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [Panduan Membuat Character Sheet 3×3 Grid](/bab-2-character-ai/01-membuat-character-sheet/)

## Cara 1 — Multi-Input Studio & 2 Karakter

Siapkan foto referensi studio podcast (bisa dicari di Pinterest dengan keyword `podcast studio set modern`):

- **Referensi Studio Podcast:**

![_ - 2026-09-08T220619.117.jpeg](/images/membuat_podcast_ai_04_3d6cd19d.jpg)

- **Hasil Wide Shot:**

![ChatGPT Image 8 Sep 2026, 22.41.18.png](/images/membuat_podcast_ai_05_3d6cd19d.png)

### Formula Prompt: Wide Shot Set Podcast

Upload 3 file dengan urutan spesifik:
- <mark class="brush-yellow">Image 1</mark> = Foto set studio podcast
- <mark class="brush-blue">Image 2</mark> = Character sheet Host
- <mark class="brush-purple">Image 3</mark> = Character sheet Narasumber

```plain text
Three reference images are provided. IMAGE 1 is the STUDIO SET. IMAGE 2 is the HOST. IMAGE 3 is the GUEST.

Reproduce the environment from IMAGE 1 exactly: the same room, same furniture and their placement, same wall color and decor, same curtains, same plants, same flooring and rug, same ceiling, same lighting fixtures, same light direction, same color temperature and color grade. Do not redesign, rearrange, or restyle the set. Do not add or remove furniture.

Reproduce each person's face, bone structure, skin tone and texture, hairstyle, hair length and color, body proportions, and complete outfit exactly as shown in their own reference — same garments, same colors, same fit, same accessories. Do not swap, blend, or mix features between the two people. Do not beautify, slim, or stylize either face.

Wide establishing shot of that same studio, vertical 9:16, shot on an iPhone from the back of the room at eye level, both people fully visible from head to knee, the surrounding set clearly readable around them.

Place the HOST from IMAGE 2 seated in the LEFT seat of the set, leaning slightly forward, turned toward the guest, mid-conversation. Place the GUEST from IMAGE 3 seated in the RIGHT seat, relaxed posture, listening and responding, turned toward the host. Two black broadcast microphones on black boom arms extend into the frame, one aimed at each person.

Keep the lighting exactly as it appears in IMAGE 1 — same key light position, same ambient glow, same shadow direction, same warmth. The two people must be lit by that existing light so they sit naturally inside the scene.

Candid documentary style, natural depth of field with the whole set in focus, 24mm equivalent wide lens, iPhone HDR look. Realistic skin with visible pores and slight natural shine on both faces. Unedited amateur snapshot quality, no beauty filter, no airbrushing.

The environment must match IMAGE 1. The left person must match IMAGE 2. The right person must match IMAGE 3.
```

Setelah gambar wideshot tercipta, generate shot close-up untuk masing-masing karakter menggunakan Gemini Gem:

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [Gemini Custom Gem — Close-Up Podcast Prompter](https://gemini.google.com/gem/1MkFPWS8-2ud29QGKSmRAZrP4lWOCyATG?usp=sharing)

Generate menggunakan Nano Banana Pro di Google Flow atau ChatGPT.

### Hasil Close-Up Karakter

![ChatGPT Image 9 Sep 2026, 06.59.26.png](/images/membuat_podcast_ai_06_3d6cd19d.png)

![ChatGPT Image 9 Sep 2026, 06.59.23.png](/images/membuat_podcast_ai_07_3d6cd19d.png)

Untuk mengubah hasil close-up menjadi video animasi berbicara, gunakan Gemini Gem Video Prompt Generator:

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [Gemini Custom Gem — Video Podcast Prompt](https://gemini.google.com/gem/1WlhUiZo5SF0o3GMwHTuDxbizQFieV1D3?usp=sharing)

Contoh Global Setting Brief:

```plain text
Host: 
gaya bicara santai, interaktif, natural seperti host podcast. Talent tidak menatap ke lensa kamera, melainkan menatap ke arah lawan bicara sesuai sudut pandang referensi.

Narasumber:
gaya bicara santai, mendengarkan lalu merespons dengan gesture tangan wajar. Talent fokus menatap ke arah host.
```

### Video Tutorial — Produksi Podcast AI

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:1rem;margin:1.75rem 0;box-shadow:0 8px 30px rgba(0,0,0,0.12);border:1px solid rgba(255,255,255,0.1);">
  <iframe src="https://www.youtube-nocookie.com/embed/jPTZcTSFz8M" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="text-align:center;font-size:0.875rem;margin-top:-1rem;margin-bottom:1.5rem;"><a href="https://youtu.be/jPTZcTSFz8M" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg> Tonton di YouTube</a></p>

### Video Tutorial — Template Prompt Podcast

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:1rem;margin:1.75rem 0;box-shadow:0 8px 30px rgba(0,0,0,0.12);border:1px solid rgba(255,255,255,0.1);">
  <iframe src="https://www.youtube-nocookie.com/embed/L5ALR5F1WzE" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="text-align:center;font-size:0.875rem;margin-top:-1rem;margin-bottom:1.5rem;"><a href="https://youtu.be/L5ALR5F1WzE" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg> Tonton di YouTube</a></p>

### Modul Template Set Podcast

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [Koleksi Template Prompt Set Podcast](/bab-3-real-project/04-sub-prompt-set-podcast/) 

## Cara 2 — Generate Video via Google Flow Podcast Studio

Kamu juga bisa langsung men-generate video podcast menggunakan tool khusus Google Flow:

- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [<mark class="brush-blue">Google Flow</mark> - Podcast Studio Tool](https://flow.google.com/shared/tool/ee082839-2925-4f65-b958-4a502bb44f63)

```plain text
gaya bicara podcast style. Talent tidak melihat ke kamera, melihat ke lawan bicaranya saja seperti arah mata pada image reference. dengan gesture tangan yang interaktif.
```

## Cara 3 — Rekonstruksi Scene Referensi dengan Character Sheet

Teknik ini meniru komposisi studio referensi yang sudah ada dan mengganti talent dengan character sheet milik kita sendiri.

### Contoh Foto Referensi

- **Host:**

![Referensi Host Podcast](/images/membuat_podcast_ai_08_3d6cd19d.jpg)

- **Narasumber:**

![Creators Club Australia on Instagram_ _Top 3 platforms all social media (1).jpeg](/images/membuat_podcast_ai_09_3d6cd19d.jpg)

### Formula Prompt Rekonstruksi Karakter + Outfit

Terapkan prompt berikut:

** Ganti karakter + outfit ikut CHARACTER SHEET**

```javascript
Use the FIRST image as the SCENE only, and the SECOND image (character sheet) as the PERSON. Completely replace the person in the first image with the exact same individual from the character sheet — the same real person, not a lookalike, not just the same ethnicity. Use the clearest front-facing faces in the sheet as the main identity reference.

TAKE EVERYTHING ABOUT THE PERSON FROM THE SECOND IMAGE (the character sheet is the ONLY source of truth for the person — copy exactly):
- full face and facial structure: face shape, jawline, cheeks, eyes, eyebrows, nose, lips, ears
- skin: exact skin tone and undertone, real visible skin texture and pores, moles and freckles — do NOT lighten, darken, tan, smooth, or beautify
- makeup: copy the character's makeup exactly if she wears any; if the face is bare, keep it bare — do not add makeup
- hair: exact hair color, tone, texture, length, hairline, part and style as in the character sheet — recolor and restyle to match it; the hair must NOT keep the first image's color or style
- body type and build: match the character's real proportions from the sheet, not the first image's body
- outfit: dress the person in the character's clothing from the sheet

KEEP FROM THE FIRST IMAGE — SCENE ONLY, do not change anything here:
- environment, background, all props and objects
- pose, body position, hand and arm positions
- framing, shot size, camera angle, lens
- lighting direction, color, shadows, and mood

Nothing about the person's face, skin, makeup, hair, body, or outfit may come from the first image. If the first result does not fully match, prioritize matching the character sheet's face, then skin tone and texture, then hair color and style, then body build — all in this single image.

Blend everything naturally with correct scale, perspective and lighting so the character sits realistically in the scene, as one single real photograph.
Realistic photo, natural skin texture with visible pores and real imperfections, no beauty filter, no skin smoothing, no plastic or CGI look, no face slimming.

Negative: different person, lookalike, generic face, wrong face, identity drift, face morph, first image face kept, first image hair kept, wrong hair color, wrong skin tone, smoothed skin, plastic skin, waxy skin, beauty filter, CGI look, changed scene, changed pose, changed camera angle, changed lighting, changed background, changed props, extra fingers, distorted hands.
```

Reference

![_ (92).jpeg](/images/membuat_podcast_ai_10_93ccd19d.jpg)

Result

![Replacing_person_in_image_scene_202608142303.jpeg](/images/membuat_podcast_ai_11_3cacd19d.jpg)

## HASIL:

![Pria berbaju hitam di studio podcast.png](/images/membuat_podcast_ai_12_3d6cd19d.png)

![Perempuan elegan di sofa dengan mikrofon.png](/images/membuat_podcast_ai_13_3d6cd19d.png)

### Video Tutorial — Rekonstruksi Karakter Podcast

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:1rem;margin:1.75rem 0;box-shadow:0 8px 30px rgba(0,0,0,0.12);border:1px solid rgba(255,255,255,0.1);">
  <iframe src="https://www.youtube-nocookie.com/embed/9v3kLaOORVY" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="text-align:center;font-size:0.875rem;margin-top:-1rem;margin-bottom:1.5rem;"><a href="https://youtu.be/9v3kLaOORVY" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg> Tonton di YouTube</a></p>

### Video Tutorial — Editing Post-Production

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:1rem;margin:1.75rem 0;box-shadow:0 8px 30px rgba(0,0,0,0.12);border:1px solid rgba(255,255,255,0.1);">
  <iframe src="https://www.youtube-nocookie.com/embed/N33PmC-qeO8" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="text-align:center;font-size:0.875rem;margin-top:-1rem;margin-bottom:1.5rem;"><a href="https://youtu.be/N33PmC-qeO8" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg> Tonton di YouTube</a></p>

## Rekomendasi Akses Tools AI Premium

Untuk menunjang proses produksi dengan performa optimal:

- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [Raindigital App Premium & Digital Product](https://chat.whatsapp.com/HM7UrrD5mu16I16jgKzRHp?s=cl&p=a&mlu=4&ilr=4)
- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [Telegram Bot Store 1](https://web.telegram.org/a/#8865696772)
- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg> [Telegram Bot Store 2](https://web.telegram.org/a/#8804783849)
