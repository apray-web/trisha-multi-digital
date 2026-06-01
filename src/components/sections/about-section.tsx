'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Clock, MapPin, Wrench } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Berpengalaman', desc: '10+ tahun di bidang IT' },
  { icon: Clock, label: 'Respons Cepat', desc: 'Layanan 24/7 siap membantu' },
  { icon: MapPin, label: 'Jangkauan Luas', desc: 'Melayani seluruh Indonesia' },
  { icon: Wrench, label: 'Teknisi Profesional', desc: 'Tim tersertifikasi & handal' },
];

const misi = [
  'Menyediakan layanan instalasi dan konfigurasi jaringan dengan standar kualitas tertinggi untuk memenuhi kebutuhan pelanggan.',
  'Memberikan solusi teknologi informasi yang inovatif, efisien, dan terjangkau bagi rumah, kantor, sekolah, dan perusahaan.',
  'Membangun kemitraan jangka panjang dengan pelanggan melalui layanan yang responsif, profesional, dan terpercaya.',
  'Mengembangkan kompetensi tim teknis secara berkelanjutan untuk mengikuti perkembangan teknologi terbaru.',
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-background">
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
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kenali <span className="text-teal-600 dark:text-teal-400">Trisha Multi Digital</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mitra terpercaya untuk solusi infrastruktur IT dan jaringan profesional
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 rounded-2xl bg-card border border-border hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/50 flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-100 dark:group-hover:bg-teal-800/50 transition-colors">
                <item.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{item.label}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              Profil Perusahaan
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Trisha Multi Digital</strong> adalah penyedia layanan yang bergerak di bidang jasa pemasangan internet, CCTV, konfigurasi MikroTik, switch management, dan berbagai layanan teknologi informasi lainnya. Berdiri dengan semangat untuk memberikan solusi IT terbaik, kami telah melayani ratusan pelanggan dari berbagai sektor.
              </p>
              <p>
                Dengan tim teknisi yang berpengalaman dan tersertifikasi, kami siap memberikan layanan profesional mulai dari perencanaan, instalasi, konfigurasi, hingga maintenance jaringan dan infrastruktur IT Anda. Kami berkomitmen untuk memberikan hasil kerja yang berkualitas tinggi dengan harga yang kompetitif.
              </p>
              <p>
                Klien kami meliputi perusahaan, kantor, sekolah, rumah sakit, hotel, dan berbagai institusi lainnya yang membutuhkan solusi jaringan dan IT yang handal. Kami memahami bahwa setiap klien memiliki kebutuhan unik, oleh karena itu kami selalu memberikan pendekatan yang disesuaikan untuk setiap proyek.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Visi */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 border border-teal-200 dark:border-teal-800">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                Visi
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi penyedia layanan infrastruktur IT dan jaringan terdepan yang dipercaya oleh pelanggan di seluruh Indonesia, dengan mengutamakan kualitas, inovasi, dan kepuasan pelanggan dalam setiap layanan yang kami berikan.
              </p>
            </div>

            {/* Misi */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-200 dark:border-emerald-800">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                Misi
              </h3>
              <ul className="space-y-3">
                {misi.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">{index + 1}</span>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
