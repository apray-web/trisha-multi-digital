'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import Image from 'next/image';

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#beranda');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-teal-950/95 backdrop-blur-md shadow-lg border-b border-teal-100 dark:border-teal-900'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#beranda');
            }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
              <Image
                src="/images/logo.jpeg"
                alt="Trisha Multi Digital Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-bold text-lg leading-tight ${
                  scrolled ? 'text-teal-800 dark:text-teal-100' : 'text-white'
                }`}
              >
                Trisha Multi Digital
              </h1>
              <p
                className={`text-xs leading-tight ${
                  scrolled ? 'text-teal-600 dark:text-teal-300' : 'text-teal-100'
                }`}
              >
                Solusi Infrastruktur IT
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href
                    ? scrolled
                      ? 'bg-teal-100 text-teal-700 dark:bg-teal-800 dark:text-teal-100'
                      : 'bg-white/20 text-white'
                    : scrolled
                      ? 'text-gray-600 hover:text-teal-700 hover:bg-teal-50 dark:text-gray-300 dark:hover:text-teal-200 dark:hover:bg-teal-900'
                      : 'text-teal-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a href="https://wa.me/6281280201414" target="_blank" rel="noopener noreferrer">
              <Button
                className={`hidden sm:flex gap-2 rounded-full shadow-lg transition-all duration-300 ${
                  scrolled
                    ? 'bg-teal-600 hover:bg-teal-700 text-white'
                    : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
                }`}
              >
                <Phone className="w-4 h-4" />
                Hubungi Kami
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${
                    scrolled ? 'text-teal-700 dark:text-teal-200' : 'text-white'
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white dark:bg-teal-950">
                <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                <div className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        activeSection === item.href
                          ? 'bg-teal-100 text-teal-700 dark:bg-teal-800 dark:text-teal-100'
                          : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50 dark:text-gray-300 dark:hover:text-teal-200 dark:hover:bg-teal-900'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="https://wa.me/6281280201414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4"
                  >
                    <Button className="w-full gap-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white">
                      <Phone className="w-4 h-4" />
                      Hubungi via WhatsApp
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
