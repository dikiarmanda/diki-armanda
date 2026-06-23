# Portofolio Diki Armanda

Website portofolio pribadi dibangun dengan **Next.js 15**, **React 19**, **Tailwind CSS 4**, dan **TypeScript**.

## Fitur

- Desain modern dengan gradient, glass morphism, dan animasi halus
- Mode gelap / terang (sistem)
- Responsif di mobile, tablet, dan desktop
- Bagian: Hero, Tentang, Tech Stack, Proyek, Kontak
- SEO metadata & Open Graph

## Menjalankan

```bash
pnpm install
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build Production

```bash
pnpm build
pnpm start
```

## Struktur

```
src/
  app/          # Layout & halaman Next.js
  components/   # Komponen UI
  lib/          # Data portofolio & konfigurasi
  providers/    # Theme provider
public/
  images/       # Foto profil & screenshot proyek
```
