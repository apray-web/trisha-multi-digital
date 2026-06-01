'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281280201414"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 animate-whatsapp-pulse"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
