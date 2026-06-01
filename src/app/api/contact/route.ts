import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, companyName, whatsappNumber, email, serviceType, message } = body;

    if (!fullName || !whatsappNumber || !email || !serviceType || !message) {
      return NextResponse.json(
        { error: 'Mohon lengkapi semua field yang wajib diisi' },
        { status: 400 }
      );
    }

    const submission = await db.contactSubmission.create({
      data: {
        fullName,
        companyName: companyName || null,
        whatsappNumber,
        email,
        serviceType,
        message,
      },
    });

    return NextResponse.json(
      { success: true, message: 'Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.', data: submission },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi nanti.' },
      { status: 500 }
    );
  }
}
