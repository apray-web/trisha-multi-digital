'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telepon / WhatsApp',
    value: '+62 812-8020-1414',
    href: 'https://wa.me/6281280201414',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'admin@trishamultidigital.net',
    href: 'mailto:admin@trishamultidigital.net',
  },
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Tangerang, Banten, Indonesia',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: 'Senin - Sabtu: 08:00 - 17:00',
    href: '#',
  },
];

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 lg:py-28 bg-background">
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
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Siap <span className="text-teal-600 dark:text-teal-400">Membantu</span> Anda
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hubungi kami untuk konsultasi gratis
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-teal-50 dark:bg-teal-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 dark:group-hover:bg-teal-800/50 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* WhatsApp CTA + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/6281280201414"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-5 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-8 h-8" />
                    <div>
                      <p className="font-bold text-lg">Chat WhatsApp</p>
                      <p className="text-green-100 text-sm">Respon cepat & langsung</p>
                    </div>
                  </div>
                  <p className="text-green-50 text-sm">
                    Klik untuk langsung terhubung dengan tim kami via WhatsApp
                  </p>
                </div>
              </a>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63391.78!2d106.58!3d-6.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc5555555555%3A0x5555555555555555!2sTangerang%2C%20Banten%2C%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Trisha Multi Digital - Tangerang, Banten"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
