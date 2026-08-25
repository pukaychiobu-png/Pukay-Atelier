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

4. Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

## Yang mudah kamu ubah

- Nama tema, harga, deskripsi, dan fitur: `app/page.tsx`
- Tampilan seluruh katalog: `app/globals.css`
- Halaman demo undangan penuh: `app/preview/[theme]/page.tsx`
- Tata letak enam demo: `app/preview/[theme]/preview.css`
- Judul browser dan preview saat link dibagikan: `app/layout.tsx`

## Menghubungkan WhatsApp

Saat sudah punya nomor WhatsApp bisnis, cari fungsi `whatsappUrl` di `app/page.tsx`.
Ganti:

```ts
https://wa.me/?text=
```

menjadi:

```ts
https://wa.me/628XXXXXXXXXX?text=
```

Ganti `628XXXXXXXXXX` dengan nomor kamu tanpa tanda `+`, spasi, atau angka `0` di depan.

## Catatan

Katalog ini adalah fondasi showroom. Setelah ada pesanan, masing-masing tema dapat dikembangkan menjadi halaman undangan individual dengan data pasangan, acara, galeri, peta, RSVP, dan ucapan.
