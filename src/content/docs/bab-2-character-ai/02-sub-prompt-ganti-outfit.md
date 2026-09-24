---
title: "Template Prompt: Ganti Outfit Character"
description: "Panduan Persona AI: Prompt ganti outfit CHARACTER SHEET"
---

![Screenshot 2026-07-13 at 14.21.08.png](/images/prompt_ganti_outfit_character__01_39ccd19d.png)

Prompt 1 untuk character 9 Grid seperti di atas

```javascript
This is a 9-panel character sheet. Apply the SAME outfit consistently 
across ALL panels, adapting it correctly per viewing angle (front, 
three-quarter, side profile, back view). Maintain garment continuity — 
same fabric, same color, same cut in every panel.
```

Prompt 2 untuk character 9 Grid seperti di atas

```javascript
This is a 5-panel character sheet. Apply the SAME outfit consistently 
across ALL panels, adapting it correctly per viewing angle (front, 
three-quarter, side profile, back view). Maintain garment continuity — 
same fabric, same color, same cut in every panel.
```

Prompt 2 (Versi singkat)

```javascript
Image 1 = person. Image 2 = outfit.

Put the outfit from Image 2 onto the person in Image 1.

Keep the body from Image 1 EXACTLY as it is — same shoulders, arms, 
hands, chest, waist, hips, thighs, legs, and feet. Same proportions, 
same silhouette, same pose. The clothes must wrap around the existing 
body; do not reshape the body to fit the clothes.

Also keep: same face, same hair, same background, same lighting.
Take only the clothing from Image 2 — nothing else.
```

Prompt 3 (Body-Locked Outfit Swap)

```javascript
Image 1 = IDENTITY & BODY REFERENCE. Image 2 = OUTFIT REFERENCE ONLY.

TASK: Dress the person from Image 1 in the outfit from Image 2. 
This is a garment replacement task. The body underneath must remain 
completely unchanged.

--- LOCKED FROM IMAGE 1 (must be pixel-faithful, zero deviation) ---
FACE: exact facial structure, features, expression, beauty mark, skin tone 
and texture.
HAIR: same color, length, texture, parting, and how it falls over the body.
BODY SILHOUETTE: preserve the exact original body shape and proportions — 
shoulder width, arm shape and thickness, chest/bust size and shape, 
ribcage, waist width and definition, hip width, thigh shape and thickness, 
calf shape, ankle and foot size. The body outline must trace the ORIGINAL 
silhouette exactly.
HANDS: identical hand position, finger placement, size, and shape.
POSE: identical stance, weight distribution, body angle, and limb angles.
SCENE: identical camera angle, focal length, framing, crop, background, 
lighting direction, shadows, and color grading.

--- TAKEN FROM IMAGE 2 (clothing only) ---
Copy ONLY the garments and accessories — their exact color, cut, fabric, 
seams, and construction.
IGNORE completely: the face, hair, body shape, proportions, pose, 
background, and lighting of Image 2. Do not transfer any anatomy from 
Image 2.

--- GARMENT FITTING RULES ---
- The clothing must CONFORM to the original body, not reshape it. 
  The body dictates the garment's drape — never the reverse.
- Do not slim, thicken, lengthen, shorten, or otherwise resculpt any 
  part of the body to fit the clothing.
- Do not add shapewear, padding, cinching, or corseting effects.
- Fabric should follow the original contours with natural folds, 
  tension lines, and gravity.
- Correct occlusion: hair and hands overlap the garment exactly as they 
  overlapped the original clothing.
- Re-light the new garment to match Image 1's lighting and color grade.

--- NEGATIVE ---
different person, altered face, changed hairstyle, changed body 
proportions, resized bust, slimmed waist, widened or narrowed hips, 
reshaped thighs, altered limb length, changed hand shape, changed pose, 
changed background, changed lighting, plastic skin, warped anatomy, 
extra fingers, compositing seams, watermark, text
```


<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:1rem;margin:1.75rem 0;box-shadow:0 8px 30px rgba(0,0,0,0.12);border:1px solid rgba(255,255,255,0.1);">
  <iframe src="https://www.youtube-nocookie.com/embed/fDPXeoRJVMI" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p style="text-align:center;font-size:0.875rem;margin-top:-1rem;margin-bottom:1.5rem;"><a href="https://youtu.be/fDPXeoRJVMI" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-inline"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg> Tonton di YouTube</a></p>
