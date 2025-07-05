'use client'
import Navbar from "@/components/ui/navbar"
import { poppins, poppinsSB } from "@/fonts/font"
import { Check } from "lucide-react";

export default function Umkm3Page () {
    return(
        <section className="bg-[#030F0F] h-full">
            <Navbar/>
            <div className="pt-35 lg:px-30 md:px-20 sm:px-15 px-8">
                <h2 className={`${poppinsSB.className} text-white text-center text-[24px] flex justify-center lg:text-[32px] md:text-[32px] sm:text-[32px] text-[24px]`}>Penjelasan Lebih Lanjut Pilihan UMKM 3</h2>
                <div className="mt-4 flex-shrink-0 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Pada pilihan ini anda dapat melakukan request custom web company profile sesuai kebutuhan anda.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Custom warna sesuai keinginan anda.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Waktu pengerjaan selama 1-2 hari setelah kedua pihak (anda dan kami) sepakat mengenai sistem, konsep, fitur, dan setelah dilakukan Dp 15%</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Anda akan mendapat maksimal 1 X revisi.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Revisi yang dimaksud adalah anda meminta untuk mengubah isi konten, fitur, atau konsep setelah melakukan persetujuan isi konten, fitur, dan konsep di awal.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Apabila anda mengajukan revisi lebih dari 1 X, maka untuk setiap revisi setelahnya akan dikenakan biaya mulai dari Rp. 50.000.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Apabila konsep website anda melebihi 2 pages, maka setiap page nya akan dikenakan biasa mulai dari Rp. 120.000.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Anda akan mendapatkan dua custom domain situsAnda.com dan situsAnda.my.id secara gratis pada awal pembuatan web.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Kedua custom domain berlaku selama satu tahun.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Harga perpanjang custom domain situsAnda.my.id adalah Rp. 11.000/Tahun.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Harga perpanjang email profesional email@domainAnda.my.id adalah Rp. 65.000/Tahun.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Apabila anda ingin menggati custom domain dari situsAnda.com menjadi situsAnda.my.id dapat dilakukan dengan harga Rp. 11.000/Tahun.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Apabila anda ingin menggunakan domain selain .my.id dan .com atau anda sudah memiliki domain sendiri, maka sampaikan pesan tersebut ke admin.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Apabila anda ingin menambah email profesional, maka sampaikan pesan tersebut ke admin.</p>
                    </div>
                </div>
                <div className="flex justify-center py-15 mx-1">
                    <a href="https://wa.me/6289666823165?text=Halo%20kak%20saya%20ingin%20membuat%20website%20paket%20UMKM%203">
                    <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}>Hubungi Kami untuk Konsultasi Gratis</button>
                    </a>
                </div>
            </div>
        </section>
    )
}