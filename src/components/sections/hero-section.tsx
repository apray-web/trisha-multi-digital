'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const stats = [
  { icon: Users, value: '150+', label: 'Klien Puas' },
  { icon: Shield, value: '200+', label: 'Proyek Selesai' },
  { icon: Zap, value: '10+', label: 'Tahun Pengalaman' },
];

export default function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Network Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/80 to-teal-800/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Solusi IT Terpercaya Sejak 2014
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Trisha
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 animate-gradient">
                Multi Digital
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-teal-100/90 mb-4 max-w-xl">
              Solusi Profesional Jaringan, Internet, CCTV, dan Infrastruktur IT
            </p>

            <p className="text-base text-teal-200/70 mb-8 max-w-xl">
              Melayani pemasangan internet, instalasi CCTV, konfigurasi MikroTik, switch management, maintenance jaringan, serta berbagai kebutuhan teknologi informasi untuk rumah, kantor, sekolah, dan perusahaan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#kontak">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg shadow-teal-500/25 text-base px-8 py-6"
                >
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="#layanan">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-2 rounded-full border-2 border-teal-400/50 text-teal-100 hover:bg-teal-400/10 hover:text-white hover:border-teal-300 text-base px-8 py-6 bg-transparent"
                >
                  <Play className="w-5 h-5" />
                  Lihat Layanan
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-400/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-teal-300" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-teal-200/70">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-96 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border border-teal-400/20 backdrop-blur-xl p-8 flex flex-col justify-center items-center gap-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl shadow-teal-500/30">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Trisha Multi Digital Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Trisha Multi Digital</h3>
                  <p className="text-teal-200/80 text-sm">Your Trusted IT Infrastructure Partner</p>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {['Internet', 'CCTV', 'MikroTik', 'Switch'].map((service) => (
                    <div
                      key={service}
                      className="px-3 py-2 rounded-lg bg-teal-500/10 border border-teal-400/15 text-teal-200 text-xs text-center font-medium"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-amber-500/20 border border-amber-400/20 flex items-center justify-center animate-float">
                <Zap className="w-8 h-8 text-amber-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
}
