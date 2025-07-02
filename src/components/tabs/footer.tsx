'use client'
import { MessageCircle, MapPin } from 'lucide-react';
import { poppins, poppinsSB } from '@/fonts/font';

export default function Footer () {
  return (
    <section className="w-full bg-[#00DF82] rounded-t-lg pt-10 pb-20" id="contact">
      <p className={`${poppinsSB.className} text-[24px] text-center`}>Ezee-WEB</p>

      <div
        className={`
          ${poppins.className}
          flex flex-col items-center text-center gap-6
          sm:flex-col
          md:flex-row md:justify-evenly md:items-start md:pl-60
          mt-10 px-6
        `}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <MessageCircle size={18} />
            <p>WhatsApp</p>
          </div>
          <a href="https://wa.me/6289666823165" target="_blank" rel="noopener noreferrer" className="hover:underline">
            CS: 0896-6682-3165
          </a>
        </div>

        <div className="space-y-2 max-w-md">
          <div className="flex items-center justify-center gap-2">
            <MapPin size={18} />
            <p>Alamat</p>
          </div>
          <a
            href="https://maps.google.com/?q=Jalan. Kutisari Utara IV/2, Tenggilis Mejoyo, Surabaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Jalan. Kutisari Utara IV/2, Tenggilis Mejoyo, Surabaya, Indonesia
          </a>
        </div>
      </div>
    </section>
  );
}
