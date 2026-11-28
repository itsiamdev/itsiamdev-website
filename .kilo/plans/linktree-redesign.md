# Plan: Redesign profesional Glassmorphism pentru `/linktree`

## Fișier afectat
- `src/pages/Linktree.tsx` (singurul fișier; pagina e servită la `/links` și `/linktree` prin `App.tsx`)

## Obiectiv
Menținem tema dark + accent cyan existentă, dar ducem pagina la un nivel profesional folosind glassmorphism modern, animații subtile și ierarhie vizuală mai bună. Fără dependențe noi (sistemul de design și `tailwindcss-animate` sunt deja prezente).

## Modificări propuse

### 1. Fundal (glassmorphism + textură)
- Păstrăm cele două orb-uri blur existente, dar le facem mai discrete.
- Adăugăm un pattern subtil de grilă/puncte (SVG data-URI, ca în `Hero.tsx`) la opacitate ~5-8% pentru textură „tech".
- Overlay gradient radial în centru pentru adâncime.

### 2. Animații de intrare (staggered)
- Folosim clase `animate-in fade-in slide-in-from-bottom-*` (de la `tailwindcss-animate`, deja instalat) cu `delay-*` crescător pe: header → carduri linkuri → social → footer.
- Hover pe carduri: `-translate-y-0.5` + glow cyan (deja parțial prezent), menținut și rafinat.

### 3. Header / profil
- Inel gradient în jurul avatarului mai rafinat + glow cyan subtil.
- Adăugăm un badge mic „Disponibil pentru proiecte" cu dot verde pulsating sub tagline (opțional, ușor de scos).
- Tipografie: `@itsiamdev` + badge verificat păstrate; tagline cu contrast ușor îmbunătățit.
- Buton „Partajează" -> stil glass (backdrop-blur, border sottile), feedback „Link copiat" păstrat.

### 4. Carduri linkuri (glassmorphism)
- `bg-card/60` + `backdrop-blur-xl` + border `border-white/10`-style (folosind `border-border/60`).
- La hover: border cyan, glow `shadow-[0_12px_40px_rgba(34,211,238,0.15)]`, icon-arrow translate.
- Card featured: gradient cyan păstrat dar cu finisaj glass (overlay `bg-white/10`).
- Iconițe în containere cu `bg-white/5` pentru efect glass.

### 5. Rețele sociale
- Iconițe glass rotunde; la hover afișăm culoarea de brand a fiecăreia (GitHub/LinkedIn/Instagram/YouTube/Facebook/TikTok) + glow.
- Email păstrat.

### 6. Footer
- Text mai subtil, cu separator fin (linie gradient) deasupra.

## Verificare
- `npm run lint` (eslint) pentru a confirma că nu introducem erori.
- Build rapid `npm run build` opțional pentru a valida compilarea.
- Verificare vizuală manuală la `/linktree` și `/links` (responsive mobil + desktop).

## Note
- Nu se adaugă dependențe noi.
- Se păstrează accesibilitatea (aria-labels, focus states) și SEO (Helmet).
- Cod fără comentarii suplimentare, conform stilului proiectului.