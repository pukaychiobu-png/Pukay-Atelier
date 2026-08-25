import { notFound } from "next/navigation";
import "./preview.css";

const demos = {
  "obsidian-vow": { name: "Obsidian Vow", label: "A black-tie celebration", layout: "obsidian", quote: "A lifetime of moments begins with one beautiful day." },
  "midnight-bloom": { name: "Midnight Bloom", label: "An intimate garden affair", layout: "midnight", quote: "Where love grows, every season becomes a celebration." },
  "ivory-heirloom": { name: "Ivory Heirloom", label: "A timeless wedding edition", layout: "ivory", quote: "A new chapter, printed in the language of forever." },
  "emerald-ceremony": { name: "Emerald Ceremony", label: "A modern sacred union", layout: "emerald", quote: "Two paths, one promise, and a room full of love." },
  "royal-sapphire": { name: "Royal Sapphire", label: "An evening celebration", layout: "sapphire", quote: "A formal invitation to an unforgettable evening." },
  "batik-noir": { name: "Batik Noir", label: "Heritage, reimagined", layout: "batik", quote: "Tradition carries us here; love leads us forward." },
} as const;

type ThemeKey = keyof typeof demos;

export function generateStaticParams() {
  return Object.keys(demos).map((theme) => ({ theme }));
}

function InviteHero({ layout, label }: { layout: string; label: string }) {
  if (layout === "ivory") {
    return <section className="demo-hero editorial-hero"><p>THE WEDDING EDITION · 2026</p><span className="paper-stamp">N A</span><h1>A NEW<br /><i>CHAPTER</i><br />BEGINS</h1><small>SCROLL TO OPEN</small></section>;
  }
  if (layout === "sapphire") {
    return <section className="demo-hero ticket-hero"><span className="ticket-label">ADMIT ONE · WEDDING CELEBRATION</span><h1>Naya <i>&amp;</i> Arga</h1><div className="ticket-dotline" /><p>17 OCTOBER 2026 · BANDUNG</p><span className="ticket-seal">NA</span></section>;
  }
  if (layout === "batik") {
    return <section className="demo-hero batik-hero"><span className="batik-frame top" /><span className="batik-frame bottom" /><p>{label}</p><h1>Naya <i>&amp;</i> Arga</h1><small>17 · 10 · 2026</small></section>;
  }
  if (layout === "emerald") {
    return <section className="demo-hero arch-hero"><span className="arch a-one" /><span className="arch a-two" /><span className="arch a-three" /><p>{label}</p><h1>Naya<br /><i>&amp;</i><br />Arga</h1><small>17 OCTOBER 2026</small></section>;
  }
  if (layout === "midnight") {
    return <section className="demo-hero bloom-hero"><span className="petal p-one" /><span className="petal p-two" /><span className="petal p-three" /><p>{label}</p><h1>Naya <i>&amp;</i> Arga</h1><small>OPEN INVITATION</small></section>;
  }
  return <section className="demo-hero noir-hero"><span className="noir-line line-one" /><span className="noir-line line-two" /><p>{label}</p><h1>Naya<br /><i>&amp;</i><br />Arga</h1><small>SATURDAY · 17 OCTOBER 2026</small></section>;
}

export default async function DemoPage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params;
  if (!(theme in demos)) notFound();
  const demo = demos[theme as ThemeKey];

  return (
    <main className={`invite-demo invite--${demo.layout}`}>
      <a className="back-catalog" href="/#collection">← Kembali ke katalog</a>
      <InviteHero layout={demo.layout} label={demo.label} />

      <section className="demo-intro">
        <p className="demo-kicker">THE WEDDING OF</p>
        <h2>Naya <i>&amp;</i> Arga</h2>
        <p className="demo-quote">“{demo.quote}”</p>
      </section>

      <section className="demo-story">
        <div className="story-photo photo-one" />
        <div className="story-copy"><p className="demo-kicker">SAVE THE DATE</p><h2>Celebrate<br />with us.</h2><p>Dengan penuh sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan menjadi bagian dari hari istimewa kami.</p><div className="demo-date"><b>17</b><span>OKTOBER<br />2026</span></div></div>
        <div className="story-photo photo-two" />
      </section>

      <section className="demo-events">
        <div className="event-heading"><p className="demo-kicker">THE CELEBRATION</p><h2>Our special<br /><i>day.</i></h2></div>
        <div className="event-card"><span>01</span><h3>Akad Nikah</h3><p>Sabtu, 17 Oktober 2026<br />08.00 WIB</p><p>Grand Ballroom Aruna<br />Jl. Anggrek No. 17, Bandung</p><a href="#location">Lihat lokasi ↗</a></div>
        <div className="event-card"><span>02</span><h3>Resepsi</h3><p>Sabtu, 17 Oktober 2026<br />11.00 – 14.00 WIB</p><p>Grand Ballroom Aruna<br />Jl. Anggrek No. 17, Bandung</p><a href="#location">Lihat lokasi ↗</a></div>
      </section>

      <section className="demo-gallery">
        <div className="gallery-copy"><p className="demo-kicker">A FEW MOMENTS</p><h2>Made for<br /><i>remembering.</i></h2><p>Contoh tata letak galeri foto. Foto asli pasangan nantinya dapat menggantikan bagian ini.</p></div>
        <div className="gallery-grid"><div className="gallery-image image-large" /><div className="gallery-image image-small one" /><div className="gallery-image image-small two" /><div className="gallery-caption">NAYA &amp; ARGA · 2026</div></div>
      </section>

      <section className="demo-location" id="location">
        <div className="map-art"><span>GRAND<br />BALLROOM<br />ARUNA</span><i>✦</i><small>BANDUNG, ID</small></div>
        <div className="location-copy"><p className="demo-kicker">VENUE</p><h2>Find your<br /><i>way here.</i></h2><p>Grand Ballroom Aruna<br />Jl. Anggrek No. 17, Bandung</p><a className="demo-button" href="https://maps.google.com/?q=Bandung" target="_blank" rel="noreferrer">Buka Google Maps ↗</a></div>
      </section>

      <section className="demo-rsvp">
        <p className="demo-kicker">RSVP &amp; WISHES</p><h2>See you<br /><i>there.</i></h2>
        <div className="rsvp-form"><input aria-label="Nama tamu" placeholder="Nama kamu" /><select aria-label="Konfirmasi kehadiran" defaultValue=""><option value="" disabled>Konfirmasi kehadiran</option><option>Hadir</option><option>Berhalangan hadir</option></select><textarea aria-label="Ucapan" placeholder="Tulis ucapan & doa" rows={3} /><button type="button">Kirim ucapan</button></div>
        <p className="demo-note">Ini hanya contoh tampilan. Pada undangan pesanan, ucapan dapat disambungkan ke database.</p>
      </section>

      <footer className="demo-footer"><p>THANK YOU FOR YOUR KIND WISHES</p><h2>Naya <i>&amp;</i> Arga</h2><a href="/#collection">Pukay Atelier</a></footer>
    </main>
  );
}
