---
title: "Anatomi & Prinsip Prompt"
description: "Panduan Persona AI: APA ITU PROMPT?"
---

![ChatGPT Image Jul 3, 2026, 04_19_14 PM.png](/images/apa_itu_prompt_01_3dbcd19d.png)

## APA ITU PROMPT?

![ChatGPT Image Jul 3, 2026, 04_24_04 PM.png](/images/apa_itu_prompt_02_3dbcd19d.png)

---

### Jangan "NGEDOWN" Duluan

Banyak orang mundur sebelum mulai karena salah paham. Padahal kenyataannya jauh lebih santai:

![ChatGPT Image Jul 3, 2026, 11_07_48 PM.png](/images/apa_itu_prompt_03_3dbcd19d.png)

> Yang penting **bukan tata penulisannya**, tapi **kejelasan maksudnya.**

---

### Inti: AI Tidak Bisa Membaca Pikiran

AI **tidak tahu**:

- Apa yang kamu bayangkan di kepala
- Tujuan visual yang kamu mau
- Bagian mana yang penting, mana yang tidak
AI **hanya tahu apa yang kamu komunikasikan lewat prompt.** Kalau tidak dikomunikasikan, AI akan **menebak** dan mengisinya dengan asumsi acak — makanya hasilnya sering "meleset".

Karena itu, prompt berfungsi sebagai:

- **Penjelas konteks**
- <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/></svg> **Instruksi** (yang boleh dilakukan)
- **Batasan** (yang tidak boleh dilanggar)

---

### Anatomi Prompt (3 Bagian)

Secara konsep, prompt bisa dibagi jadi 3:

| No | Bagian | Fungsi | Contoh |
| --- | --- | --- | --- |
| 1 | **Apa yang diinginkan** | Konteks / adegan / subjek | *"Laki-laki umur 30 tahun, pose berdiri"* |
| 2 | **Yang HARUS ada** *(positive prompt)* | Istilah teknis yang diinginkan | *natural light, ultra realistic, uneven pores* |
| 3 | **Yang TIDAK BOLEH ada** *(negative prompt)* | Hal yang ingin dihindari | *blurry, cartoon, extra fingers* |

> [!NOTE]
> - **Positive & negative prompt** akan dipraktekkan secara mendalam pada modul-modul project berikutnya.
> - **Negative prompt** hanya tersedia di platform AI tertentu yang menyediakan dedicated input field.

---

### Detail vs Sederhana — Ini Sering Disalahpahami

Kesalahan umum: *"Semakin panjang prompt, semakin bagus."* <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg> 

Yang benar:

> <mark class="brush-green">**Bukan panjang, tapi jelas & tepat yang bikin hasil bagus.**</mark>

Faktanya, **prompt sederhana asalkan jelas bisa tetap efektif** — dan lebih mudah dibuat. Contoh:

> *"Extreme close up ke area pinggang"*

![Effortless Korean style outfit.jpeg](/images/apa_itu_prompt_05_3dbcd19d.jpg)

**PROMPT 1 (Simple):**
*Extreme close up ke area pinggang*

**PROMPT 2 (Detailed):**
*Zoom in to the waist area only. Keep the exact same person, outfit, pose, lighting, background, perspective, and image quality. Crop tightly from just below the chest to the upper thighs. Do not change facial features, body proportions, clothing, colors, or any other details. Only adjust the framing to focus on the waist.*

![Extreme_close_up_waist_area_202607032337.jpeg](/images/apa_itu_prompt_06_3dbcd19d.jpg)

**Hasilnya: SAMA AJA!**

Prompt sependek ini bisa **setara** dengan prompt panjang, karena maksudnya sudah jelas.

**Kapan butuh prompt detail?** Saat **"AI-nya tidak nurut"**. Kalau hasil terus meleset, tambahkan konteks lebih detail supaya AI paham maksudmu.

---

### Formula Andalan: Hybrid Semantic Prompt

Prinsipnya simpel:

- <mark class="brush-yellow">**Bahasa Indonesia**</mark> → untuk **deskripsi & konteks**
- <mark class="brush-blue">**Bahasa Inggris**</mark> → untuk **istilah teknis** (lighting, camera lens, realism)

**Contoh:**

> *"Foto perempuan cantik indonesia umur 25 tahun, duduk santai di kafe dekat jendela saat sore hari"* — `natural light, ultra realistic, shallow depth of field, 50mm, realistic skin texture`

Hasil:

![Woman_sitting_in_cafe_2K_202607040009.jpeg](/images/apa_itu_prompt_04_3dbcd19d.jpg)

Generate gambar menggunakan nanobana 2 via FLOW AI [Studio Kreatif AI untuk Membuat Video, Gambar & Alat Kustom - <mark class="brush-blue">Google Flow</mark>](https://labs.google/fx/id/tools/flow)

Keuntungannya:

- Lebih fleksibel saat bikin prompt sendiri
- Tetap mudah walau tidak jago bahasa Inggris
- Tetap dipahami AI secara tepat (istilah teknis memang "bahasanya" AI)

---

### Cara Latihan & Iterasi (Penting untuk Pemula)

Prompt itu **jarang jadi sekali coba** — wajar. Anggap seperti **ngobrol**, bukan sekali tembak. Tapi ada cara latihan yang benar biar skill naik & credit tidak boros:

> [!TIP]
> <mark class="brush-yellow">**Ubah SATU hal per generate.**</mark>
>
> Kalau hasil kurang pas, ubah **satu variabel saja** (misal cuma *lighting*-nya), lalu generate & bandingkan. <mark class="brush-coral">Jangan ubah 5 hal sekaligus</mark> — nanti kamu tidak tahu **mana yang ngefek**.

Cara ini bikin kamu:

- Cepat paham sebab-akibat tiap kata
- Hemat credit (tidak asal generate ulang)

---

### Template Starter untuk Pemula

Bingung mulai dari mana? Isi kerangka ini dulu:

> **[Siapa/subjek]** + **[sedang apa/pose]** + **[di mana/lokasi]** + **[kapan/lighting]** + **[angle/jarak kamera]** + **[gaya & istilah teknis]**

**Contoh jadi:**

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg> Kurang jelas

![buatkan_foto_orang_keren_2K_202607040014.jpeg](/images/apa_itu_prompt_07_3dbcd19d.jpg)

*buatkan foto orang keren*

<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/></svg> Lebih terarah

![Man_standing_rooftop_golden_hour_202607040014.jpeg](/images/apa_itu_prompt_08_3dbcd19d.jpg)

*"Foto laki-laki indonesia umur 30 tahun, pose berdiri menyilangkan tangan, di rooftop kota saat golden hour"* — `ultra realistic, natural light, 35mm, cinematic`

---

### Kesalahan yang Sering Terjadi

Pola "muter-muter" yang jebakan buat pemula:

1. Nyuruh AI bikin prompt
2. Langsung dipakai generate
3. Hasil tidak sesuai
4. Nyuruh AI ubah prompt lagi
5. Diulang terus-menerus tanpa evaluasi
Kenapa ini bahaya? Karena **copy-paste prompt tanpa paham** bikin kamu:

- Bergantung penuh pada AI
- Tidak tahu apa yang harus diperbaiki
- Susah berkembang skill-nya
> Pakai AI untuk **bantu**, tapi tetap **kamu yang paham** kenapa sebuah prompt berhasil.

---

### Skill Dasar #1: Mendeskripsikan

Menguasai prompt **dimulai dari kemampuan mendeskripsikan** apa yang kamu lihat / bayangkan.

Kelihatan sepele, tapi krusial:

> Kalau kamu **tidak mau/tidak bisa** mendeskripsikan sesuatu ke **manusia lain**, AI juga **tidak akan** paham dengan baik.

Latih kebiasaan ini: lihat sebuah foto, lalu coba jelaskan dengan kata-kata (siapa, di mana, cahayanya bagaimana, anglenya seperti apa).

---

### Skill Dasar #2: Istilah Teknis

Selain deskripsi, kenali istilah teknis dasar:

`angle` · `jarak kamera` · `komposisi` · `pose` · `lighting` · `movement` · `environment`

> **Tidak perlu dihafal sekaligus.** Pelajari bertahap, sesuai kebutuhan.

Untuk itu, materi ini dilengkapi **8 Visual Prompt Cheat Sheet**:

| No | Cheat Sheet | No | Cheat Sheet |
| --- | --- | --- | --- |
| 1 | Realism | 5 | Pose |
| 2 | Angle | 6 | Movement |
| 3 | Focal Distance | 7 | Lighting |
| 4 | Visual Balance | 8 | Environment |

---

### Rangkuman

- Prompt = **cara mengarahkan AI**, bukan coding & bukan mantra
- Yang penting **kejelasan maksud**, bukan kerapian tulisan
- Struktur: **apa yang diinginkan** + **yang harus ada** + **yang tidak boleh ada**
- **Jelas & tepat** > sekadar panjang
- Pakai **Hybrid Semantic Prompt** (ID untuk deskripsi, EN untuk teknis)
- Latihan yang benar: **ubah 1 hal per generate**, dan **pahami**, jangan sekadar copy-paste
