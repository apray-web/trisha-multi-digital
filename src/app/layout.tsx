import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trisha Multi Digital - Solusi Profesional Jaringan, Internet, CCTV & Infrastruktur IT",
  description:
    "Melayani pemasangan internet, instalasi CCTV, konfigurasi MikroTik, switch management, maintenance jaringan, serta berbagai kebutuhan teknologi informasi untuk rumah, kantor, sekolah, dan perusahaan.",
  keywords: [
    "pemasangan internet",
    "instalasi CCTV",
    "konfigurasi MikroTik",
    "switch management",
    "maintenance jaringan",
    "IT infrastructure",
    "Trisha Multi Digital",
    "jasa IT",
    "fiber optic",
    "VPN",
    "network troubleshooting",
  ],
  authors: [{ name: "Trisha Multi Digital" }],
  openGraph: {
    title: "Trisha Multi Digital - Solusi Profesional Jaringan & IT",
    description:
      "Pemasangan internet, instalasi CCTV, konfigurasi MikroTik, switch management, dan layanan IT lainnya.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
