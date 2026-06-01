'use client';

import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  layanan: [
    { label: 'Pemasangan Internet', href: '#layanan' },
    { label: 'Instalasi CCTV', href: '#layanan' },
    { label: 'Konfigurasi MikroTik', href: '#layanan' },
    { label: 'Switch Management', href: '#layanan' },
    { label: 'Maintenance Jaringan', href: '#layanan' },
    { label: 'Konsultasi IT', href: '#kontak' },
  ],
  perusahaan: [
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Hubungi Kami', href: '#kontak' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-teal-950 text-teal-100 relative">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="#042f2e"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
                <Image
                  src="/images/logo.jpeg"
                  alt="Trisha Multi Digital Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Trisha Multi Digital</h3>
              </div>
            </div>
            <p className="text-teal-300/70 text-sm leading-relaxed mb-6">
              Solusi profesional jaringan, internet, CCTV, dan infrastruktur IT untuk rumah, kantor, sekolah, dan perusahaan.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+6281280201414"
                className="flex items-center gap-2 text-sm text-teal-300/70 hover:text-teal-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +62 812-8020-1414
              </a>
              <a
                href="mailto:admin@trishamultidigital.net"
                className="flex items-center gap-2 text-sm text-teal-300/70 hover:text-teal-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                admin@trishamultidigital.net
              </a>
              <div className="flex items-center gap-2 text-sm text-teal-300/70">
                <MapPin className="w-4 h-4" />
                Tangerang, Banten, Indonesia
              </div>
            </div>
          </div>

          {/* Layanan Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-teal-300/70 hover:text-teal-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-teal-300/70 hover:text-teal-200 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Jam Operasional */}
          <div>
            <h4 className="font-semibold text-white mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-sm text-teal-300/70">
              <div className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="text-teal-200">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabtu</span>
                <span className="text-teal-200">08:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Minggu</span>
                <span className="text-teal-200">Libur</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs text-teal-300/50 mb-2">Emergency Support 24/7</p>
              <a
                href="https://wa.me/6281280201414"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Darurat
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-800/50 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-teal-300/50 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Trisha Multi Digital. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-teal-800 hover:bg-teal-700 flex items-center justify-center text-teal-300 transition-colors"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
