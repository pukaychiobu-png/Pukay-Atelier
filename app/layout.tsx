import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pukay Atelier — Curated Digital Invitations",
  description: "Koleksi undangan digital premium untuk momen yang layak dikenang.",
  openGraph: {
    title: "Pukay Atelier — Curated Digital Invitations",
    description: "Koleksi undangan digital premium untuk momen yang layak dikenang.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pukay Atelier — Curated Digital Invitations",
    description: "Koleksi undangan digital premium untuk momen yang layak dikenang.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
