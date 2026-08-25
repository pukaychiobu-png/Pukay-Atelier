"use client";

import { useMemo, useState } from "react";

type Theme = {
  id: string;
  name: string;
  category: "Luxury" | "Floral" | "Classic" | "Heritage";
  price: string;
  description: string;
  accent: string;
  mood: string;
  includes: string[];
  featured?: boolean;
};

const themes: Theme[] = [
  { id: "obsidian-vow", name: "Obsidian Vow", category: "Luxury", price: "99.000", description: "A statement in black and gold, made for a celebration with presence.", accent: "gold", mood: "Black · Champagne · Editorial", includes: ["hingga 8 foto", "musik pilihan", "RSVP & ucapan"], featured: true },
  { id: "midnight-bloom", name: "Midnight Bloom", category: "Floral", price: "89.000", description: "Botanical details, deep wine tones, and a quietly romantic finish.", accent: "wine", mood: "Burgundy · Floral · Intimate", includes: ["hingga 6 foto", "musik pilihan", "RSVP & ucapan"] },
  { id: "ivory-heirloom", name: "Ivory Heirloom", category: "Classic", price: "79.000", description: "A timeless ivory card with warm serif type and restrained gold details.", accent: "ivory", mood: "Ivory · Classic · Warm", includes: ["hingga 5 foto", "musik pilihan", "RSVP & ucapan"] },
  { id: "emerald-ceremony", name: "Emerald Ceremony", category: "Luxury", price: "89.000", description: "Emerald depth meets polished gold for a refined modern ceremony.", accent: "emerald", mood: "Emerald · Gold · Modern", includes: ["hingga 6 foto", "musik pilihan", "RSVP & ucapan"] },
  { id: "royal-sapphire", name: "Royal Sapphire", category: "Classic", price: "89.000", description: "Sapphire blue and a formal editorial layout for an evening affair.", accent: "sapphire", mood: "Navy · Gold · Formal", includes: ["hingga 6 foto", "musik pilihan", "RSVP & ucapan"] },
  { id: "batik-noir", name: "Batik Noir", category: "Heritage", price: "109.000", description: "Heritage-inspired ornament in a black, gold, contemporary composition.", accent: "batik", mood: "Batik · Noir · Heritage", includes: ["hingga 8 foto", "musik pilihan", "RSVP & ucapan"], featured: true },
];

const categories = ["Semua", "Luxury", "Floral", "Classic", "Heritage"] as const;

function whatsappUrl(theme: Theme) {
  const message = `Halo Pukay Atelier, saya tertarik dengan tema ${theme.name} (Rp${theme.price}). Boleh tanya detail dan ketersediaannya?`;
  return `https://wa.me/6281295697061?text=${encodeURIComponent(message)}`;
}

function ThemeArtwork({ theme, full = false }: { theme: Theme; full?: boolean }) {
  const className = `artwork ${theme.id} ${full ? "artwork-full" : ""}`;

  if (theme.id === "obsidian-vow") {
    return <div className={className}><span className="art-kicker">THE WEDDING OF</span><span className="art-monogram">A <i>&amp;</i> R</span><span className="art-rule" /><span className="art-date">17 · 10 · 2026</span></div>;
  }
  if (theme.id === "midnight-bloom") {
    return <div className={className}><span className="bloom bloom-one" /><span className="bloom bloom-two" /><span className="bloom bloom-three" /><span className="art-script">Naya<br /><i>&amp;</i> Arga</span><span className="art-date">AN INTIMATE CELEBRATION</span></div>;
  }
  if (theme.id === "ivory-heirloom") {
    return <div className={className}><span className="ivory-edition">WEDDING EDITION · 2026</span><span className="ivory-initial">N <i>&amp;</i> A</span><span className="ivory-headline">A NEW CHAPTER<br />BEGINS</span><span className="ivory-columns">LOVE · FAMILY · FOREVER</span></div>;
  }
  if (theme.id === "emerald-ceremony") {
    return <div className={className}><span className="emerald-arch arch-back" /><span className="emerald-arch arch-front" /><span className="emerald-names">NAYA<br /><i>&amp;</i><br />ARGA</span><span className="emerald-date">SAVE THE DATE</span></div>;
  }
  if (theme.id === "royal-sapphire") {
    return <div className={className}><span className="ticket-top">ADMIT ONE · WEDDING CELEBRATION</span><span className="ticket-names">Naya <i>&amp;</i> Arga</span><span className="ticket-rule" /><span className="ticket-date">SATURDAY / OCT 17 / 2026</span><span className="ticket-seal">N A</span></div>;
  }
  return <div className={className}><span className="batik-corner corner-one" /><span className="batik-corner corner-two" /><span className="batik-names">Naya <i>&amp;</i> Arga</span><span className="batik-copy">THE BEGINNING OF<br />OUR FOREVER</span><span className="batik-date">17 OKTOBER 2026</span></div>;
}

export default function Home() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const visibleThemes = useMemo(() => themes.filter((theme) => active === "Semua" || theme.category === active), [active]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kembali ke Pukay Atelier"><span className="brand-mark">P</span><span>Pukay <em>Atelier</em></span></a>
        <nav aria-label="Navigasi utama"><a href="#collection">Koleksi</a><a href="#packages">Paket</a><a href="#process">Cara pesan</a></nav>
        <a className="header-link" href="#collection">Pilih tema <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="eyebrow">Digital invitation studio · Indonesia</p>
          <h1>One day, <i>beautifully</i> remembered.</h1>
          <p className="hero-description">Koleksi undangan digital yang dirancang untuk terasa personal, lalu siap dibagikan hanya lewat satu link.</p>
          <div className="hero-actions"><a className="button button-solid" href="#collection">Jelajahi koleksi <span>↓</span></a><a className="text-link" href="#process">Cara kerja <span>↗</span></a></div>
        </div>
        <div className="hero-art" aria-label="Preview undangan dark luxury">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-card"><p>The wedding of</p><h2>Aruna<br /><span>&amp;</span> Reza</h2><div className="art-line" /><small>17 · 10 · 2026</small></div>
          <span className="art-caption">Featured theme — Obsidian Vow</span>
        </div>
      </section>

      <section className="intro-strip"><p>Undangan yang dibuat untuk dibuka, disimpan, dan dibagikan.</p><div><span>01</span> Pilih tema <span>02</span> Kirim data <span>03</span> Sebar link</div></section>

      <section className="collection section" id="collection">
        <div className="section-heading">
          <div><p className="eyebrow">The collection</p><h2>Temukan gaya<br />yang terasa <i>kalian.</i></h2></div>
          <p>Setiap tema dapat dipersonalisasi dengan nama, detail acara, foto, lokasi, dan ucapan untuk tamu.</p>
        </div>
        <div className="filters" role="tablist" aria-label="Filter koleksi">
          {categories.map((category) => <button type="button" key={category} onClick={() => setActive(category)} className={active === category ? "active" : ""} role="tab" aria-selected={active === category}>{category}</button>)}
        </div>
        <div className="theme-grid">
          {visibleThemes.map((theme, index) => (
            <article className="theme-card" key={theme.id}>
              <a className="theme-visual" href={`/preview/${theme.id}`} aria-label={`Lihat full demo ${theme.name}`}>
                <span className="visual-number">0{index + 1}</span><ThemeArtwork theme={theme} />
                {theme.featured && <span className="featured-badge">Signature</span>}<span className="preview-hint">Lihat full demo ↗</span>
              </a>
              <div className="theme-detail"><div><p className="theme-category">{theme.category} collection</p><h3>{theme.name}</h3></div><strong>Rp{theme.price}</strong></div>
              <p className="theme-mood">{theme.mood}</p>
              <a className="order-button" href={whatsappUrl(theme)} target="_blank" rel="noreferrer">Pesan tema ini <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="packages section" id="packages">
        <div className="package-copy"><p className="eyebrow">Included with every invitation</p><h2>Bukan sekadar<br /><i>link biasa.</i></h2><p>Harga pada setiap tema sudah termasuk penyesuaian data dan satu link undangan siap sebar.</p></div>
        <ul className="feature-list">
          <li><span>01</span><b>Cover interaktif</b><p>Halaman pembuka dengan nama pasangan dan tombol buka undangan.</p></li>
          <li><span>02</span><b>Detail acara & maps</b><p>Akad, resepsi, dress code, serta tombol arah ke lokasi.</p></li>
          <li><span>03</span><b>RSVP & ucapan</b><p>Tamu dapat menitipkan ucapan langsung di halaman undangan.</p></li>
          <li><span>04</span><b>Personalisasi inti</b><p>Nama, waktu, foto, musik pilihan, dan link siap dibagikan.</p></li>
        </ul>
      </section>

      <section className="process section" id="process">
        <p className="eyebrow">Simple by design</p><h2>Mulai dari tema.<br />Berakhir jadi <i>cerita kalian.</i></h2>
        <div className="process-grid">
          <article><span>01</span><h3>Pilih koleksi</h3><p>Lihat preview dan pilih tema yang paling sesuai.</p></article>
          <article><span>02</span><h3>Chat via WhatsApp</h3><p>Tanya paket, kirim data acara, lalu sepakati detailnya.</p></article>
          <article><span>03</span><h3>Terima link jadi</h3><p>Undangan selesai, direvisi sesuai paket, dan siap kamu sebar.</p></article>
        </div>
      </section>

      <section className="closing"><p className="eyebrow">Your occasion, considered</p><h2>Let&apos;s make the<br /><i>first impression</i> count.</h2><a className="button button-light" href="#collection">Lihat semua tema <span>↓</span></a></section>
      <footer><a className="brand" href="#top"><span className="brand-mark">P</span><span>Pukay <em>Atelier</em></span></a><p>Curated digital invitations.</p><p>© {new Date().getFullYear()} Pukay Atelier</p></footer>

    </main>
  );
}
