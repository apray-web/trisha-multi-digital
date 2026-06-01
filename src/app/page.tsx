import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import GallerySection from '@/components/sections/gallery-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/sections/footer';
import WhatsAppButton from '@/components/sections/whatsapp-button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
