'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    name: 'Instalasi Jaringan Kantor PT Sentosa Abadi',
    location: 'Jakarta Selatan',
    year: '2024',
    category: 'Internet & Networking',
    type: 'internet',
  },
  {
    name: 'Sistem CCTV Monitoring Hotel Permata',
    location: 'Bandung',
    year: '2024',
    category: 'CCTV',
    type: 'cctv',
  },
  {
    name: 'Konfigurasi MikroTik & Load Balancing Bank Nusantara',
    location: 'Surabaya',
    year: '2023',
    category: 'MikroTik',
    type: 'mikrotik',
  },
  {
    name: 'Infrastruktur Jaringan SMK Negeri 5',
    location: 'Yogyakarta',
    year: '2023',
    category: 'Switch Management',
    type: 'switch',
  },
  {
    name: 'Wireless Point-to-Point Perkebunan Nusantara',
    location: 'Medan',
    year: '2023',
    category: 'Internet & Wireless',
    type: 'internet',
  },
  {
    name: 'CCTV & Access Door RS Harapan Bangsa',
    location: 'Semarang',
    year: '2022',
    category: 'CCTV & IT',
    type: 'cctv',
  },
];

const typeColors: Record<string, string> = {
  internet: 'bg-teal-100 text-teal-700 dark:bg-teal-800/50 dark:text-teal-300',
  cctv: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-800/50 dark:text-emerald-300',
  mikrotik: 'bg-amber-100 text-amber-700 dark:bg-amber-800/50 dark:text-amber-300',
  switch: 'bg-violet-100 text-violet-700 dark:bg-violet-800/50 dark:text-violet-300',
};

export default function PortfolioSection() {
  return (
    <section id="portofolio" className="py-20 lg:py-28 bg-background">
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
            Portofolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Proyek <span className="text-teal-600 dark:text-teal-400">Terbaru</span> Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Beberapa proyek yang telah kami selesaikan dengan sukses untuk klien di berbagai sektor
          </p>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Total Proyek', value: '200+' },
            { label: 'Klien Aktif', value: '150+' },
            { label: 'Kota Terjangkau', value: '20+' },
            { label: 'Tingkat Kepuasan', value: '98%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">{stat.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-xl transition-all duration-500 border-border hover:border-teal-300 dark:hover:border-teal-700 overflow-hidden">
                {/* Color bar */}
                <div className="h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500" />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={typeColors[project.type] || 'bg-gray-100 text-gray-700'}>
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    {project.location}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <a href="#kontak">
            <button className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium hover:underline">
              Lihat lebih banyak proyek kami
              <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
