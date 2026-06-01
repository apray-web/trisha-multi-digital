'use client';

import { motion } from 'framer-motion';
import {
  Wifi,
  Camera,
  Router,
  Network,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'internet',
    icon: Wifi,
    title: 'Jasa Pemasangan Internet',
    description:
      'Layanan pemasangan internet untuk kebutuhan rumah, kantor, dan perusahaan dengan koneksi stabil dan cepat.',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50 dark:bg-teal-900/30',
    borderColor: 'border-teal-200 dark:border-teal-800',
    iconBg: 'bg-teal-100 dark:bg-teal-800/50',
    iconColor: 'text-teal-600 dark:text-teal-400',
    features: [
      'Instalasi Internet Kantor',
      'Instalasi Internet Rumah',
      'Wireless Point to Point',
      'Fiber Optic',
      'Maintenance Jaringan',
    ],
  },
  {
    id: 'cctv',
    icon: Camera,
    title: 'Jasa Pemasangan CCTV',
    description:
      'Instalasi sistem CCTV profesional untuk keamanan rumah dan bisnis Anda, dilengkapi monitoring online 24/7.',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/30',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-100 dark:bg-emerald-800/50',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    features: [
      'CCTV Analog',
      'CCTV IP Camera',
      'CCTV Wireless',
      'CCTV Monitoring Online',
      'Maintenance CCTV',
    ],
  },
  {
    id: 'mikrotik',
    icon: Router,
    title: 'Konfigurasi MikroTik',
    description:
      'Layanan konfigurasi dan optimasi router MikroTik untuk manajemen jaringan yang efisien dan aman.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/30',
    borderColor: 'border-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-100 dark:bg-amber-800/50',
    iconColor: 'text-amber-600 dark:text-amber-400',
    features: [
      'Hotspot MikroTik',
      'Manajemen Bandwidth',
      'VPN Setup',
      'Load Balancing',
      'Failover Internet',
      'Firewall Security',
      'User Management',
      'Monitoring Jaringan',
    ],
  },
  {
    id: 'switch',
    icon: Network,
    title: 'Switch Management',
    description:
      'Konfigurasi dan manajemen switch jaringan untuk optimasi performa dan keamanan infrastruktur IT.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50 dark:bg-violet-900/30',
    borderColor: 'border-violet-200 dark:border-violet-800',
    iconBg: 'bg-violet-100 dark:bg-violet-800/50',
    iconColor: 'text-violet-600 dark:text-violet-400',
    features: [
      'VLAN Configuration',
      'Trunk Configuration',
      'Network Segmentation',
      'Switch Optimization',
      'Managed Switch Setup',
    ],
  },
  {
    id: 'it-lainnya',
    icon: Wrench,
    title: 'Layanan IT Lainnya',
    description:
      'Berbagai layanan IT tambahan untuk mendukung kebutuhan infrastruktur teknologi informasi Anda secara menyeluruh.',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50 dark:bg-rose-900/30',
    borderColor: 'border-rose-200 dark:border-rose-800',
    iconBg: 'bg-rose-100 dark:bg-rose-800/50',
    iconColor: 'text-rose-600 dark:text-rose-400',
    features: [
      'Penarikan Kabel LAN',
      'Fiber Optic Splicing',
      'Maintenance Server',
      'Network Troubleshooting',
      'Konsultasi IT',
      'Wireless Networking',
      'Sistem Absensi',
      'Access Door System',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-muted/30">
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
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Solusi <span className="text-teal-600 dark:text-teal-400">Lengkap</span> Kebutuhan IT
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai layanan profesional untuk memenuhi segala kebutuhan infrastruktur IT dan jaringan Anda
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`group h-full hover:shadow-xl transition-all duration-500 border-border hover:border-teal-300 dark:hover:border-teal-700 overflow-hidden`}>
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex-1">
                    <ul className="space-y-2 mb-5">
                      {service.features.slice(0, 5).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 5 && (
                        <li className="text-xs text-teal-600 dark:text-teal-400 font-medium pl-6">
                          +{service.features.length - 5} layanan lainnya
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a href="#kontak">
                    <Button
                      variant="ghost"
                      className="w-full gap-2 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 group/btn"
                    >
                      Hubungi Kami
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 border border-teal-200 dark:border-teal-800">
            <div>
              <h3 className="text-lg font-bold text-foreground">Butuh layanan khusus?</h3>
              <p className="text-sm text-muted-foreground">Kami siap memberikan solusi sesuai kebutuhan Anda</p>
            </div>
            <a href="#kontak">
              <Button className="gap-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg">
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
