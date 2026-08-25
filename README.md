# Pukay Atelier

Katalog undangan digital dengan enam tema yang masing-masing memakai struktur desain berbeda.

## Jalankan di VS Code

1. Install Node.js versi 22 atau lebih baru.
2. Buka folder ini di VS Code.
3. Buka terminal, lalu jalankan:

```bash
npm install
npm run dev
```

4. Buka `http://localhost:3000`.

## Yang mudah kamu ubah

- Nama tema, harga, deskripsi, dan fitur: `app/page.tsx`
- Tampilan seluruh katalog: `app/globals.css`
- Halaman demo undangan penuh: `app/preview/[theme]/page.tsx`
- Tata letak enam demo: `app/preview/[theme]/preview.css`
- Judul browser dan preview saat link dibagikan: `app/layout.tsx`

## WhatsApp dan deploy Vercel

Tombol pesan sudah memakai nomor `6281295697061`.

Untuk deploy, push folder proyek ini ke GitHub lalu impor repositorinya di Vercel. Framework sudah dikunci ke **Next.js** lewat `vercel.json`; tidak perlu mengubah Build Command.

## Catatan

Katalog ini adalah fondasi showroom. Setelah ada pesanan, masing-masing tema dapat dikembangkan menjadi halaman undangan individual dengan data pasangan, acara, galeri, peta, RSVP, dan ucapan.
