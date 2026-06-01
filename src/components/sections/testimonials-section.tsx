'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'IT Manager',
    company: 'PT Sentosa Abadi',
    text: 'Trisha Multi Digital memberikan layanan yang sangat profesional. Instalasi jaringan kantor kami berjalan lancar dan hasilnya memuaskan. Tim teknis mereka sangat kompeten dan responsif dalam menangani setiap masalah.',
    rating: 5,
  },
  {
    name: 'Rina Wijaya',
    role: 'General Manager',
    company: 'Hotel Permata',
    text: 'Sistem CCTV yang dipasang oleh Trisha Multi Digital bekerja dengan sangat baik. Monitoring online 24/7 memberikan rasa aman bagi tamu dan manajemen hotel. Pelayanan after-sales juga sangat baik.',
    rating: 5,
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Kepala IT',
    company: 'Bank Nusantara',
    text: 'Konfigurasi MikroTik dan load balancing yang dilakukan tim Trisha sangat handal. Koneksi internet kami menjadi lebih stabil dan efisien. Sangat direkomendasikan untuk kebutuhan infrastruktur IT perusahaan.',
    rating: 5,
  },
  {
    name: 'Dewi Lestari',
    role: 'Kepala Sekolah',
    company: 'SMK Negeri 5 Yogyakarta',
    text: 'Infrastruktur jaringan sekolah kami menjadi jauh lebih baik setelah menggunakan jasa Trisha Multi Digital. Siswa dan guru dapat mengakses internet dengan lancar. Terima kasih atas layanan yang luar biasa!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimoni" className="py-20 lg:py-28 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Apa Kata <span className="text-teal-300">Pelanggan</span> Kami
          </h2>
          <p className="text-teal-200/70 max-w-2xl mx-auto text-lg">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-teal-400/30 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xl font-bold">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{testimonials[current].name}</p>
                    <p className="text-teal-200/70 text-sm">
                      {testimonials[current].role} &bull; {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'bg-teal-400 w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
