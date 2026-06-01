'use client';

import { motion } from 'framer-motion';
import { Camera, Monitor, Router, Cpu, Users, Building2 } from 'lucide-react';

const galleryItems = [
  {
    title: 'Instalasi Jaringan Kantor',
    category: 'Internet',
    icon: Monitor,
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    title: 'Pemasangan CCTV Gedung',
    category: 'CCTV',
    icon: Camera,
    gradient: 'from-emerald-400 to-green-500',
  },
  {
    title: 'Konfigurasi MikroTik',
    category: 'MikroTik',
    icon: Router,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Tim Teknisi Kami',
    category: 'Tim',
    icon: Users,
    gradient: 'from-violet-400 to-purple-500',
  },
  {
    title: 'Server Room Setup',
    category: 'Server',
    icon: Cpu,
    gradient: 'from-rose-400 to-pink-500',
  },
  {
    title: 'Instalasi Fiber Optic',
    category: 'Internet',
    icon: Monitor,
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Kantor Pusat Kami',
    category: 'Kantor',
    icon: Building2,
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'CCTV Monitoring Center',
    category: 'CCTV',
    icon: Camera,
    gradient: 'from-green-400 to-emerald-500',
  },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 text-sm font-medium mb-4">
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dokumentasi <span className="text-teal-600 dark:text-teal-400">Kerja</span> Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Lihat dokumentasi kegiatan dan proyek yang telah kami kerjakan
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
              
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base leading-tight mb-1">{item.title}</h4>
                <span className="text-white/70 text-xs">{item.category}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
