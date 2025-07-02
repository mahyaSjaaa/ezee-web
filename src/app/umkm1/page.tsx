'use client'
import Navbar from "@/components/ui/navbar"
import { poppins, poppinsSB } from "@/fonts/font"
import { Check } from "lucide-react";
import Image from 'next/image'

export default function Umkm1Page() {
    return(
        <section className="bg-[#030F0F]">
            <Navbar/>
            <div className="flex justify-evenly pt-35">
                <div className="block">

                        <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Template 1</p>
                <div className="max-w-[350px]">
                    <Image
                    src="/t1.png"
                    alt="jasa pembuatan web murah ezee-web"
                    width={350} // ganti sesuai ukuran asli gambar
                    height={0} // ganti sesuai ukuran asli gambar
                    className=""
                    />
                </div>
                <div className="flex justify-center mt-10">

                <a href="https://web-travel-gilt.vercel.app/" className="">
                    <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}>Cek Website</button>
                </a>
                </div>
                </div>
            </div>
            <div className="flex justify-evenly pt-35">
                <div className="block">

                        <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Template 2</p>
                <div className="max-w-[350px]">
                    <Image
                    src="/t2.png"
                    alt="jasa pembuatan web murah ezee-web"
                    width={350} // ganti sesuai ukuran asli gambar
                    height={0} // ganti sesuai ukuran asli gambar
                    className=""
                    />
                </div>
                <div className="flex justify-center mt-10">

                <a href="https://ayam-potong.vercel.app/" className="">
                    <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}>Cek Website</button>
                </a>
                </div>
                </div>
            </div>
            <div className="flex justify-evenly pt-35">
                <div className="block">

                        <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Template 3</p>
                <div className="max-w-[350px]">
                    <Image
                    src="/t32.png"
                    alt="jasa pembuatan web murah ezee-web"
                    width={350} // ganti sesuai ukuran asli gambar
                    height={0} // ganti sesuai ukuran asli gambar
                    className=""
                    />
                </div>
                <div className="flex justify-center mt-10">

                <a href="https://frozen-food-gamma.vercel.app/" className="">
                    <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}>Cek Website</button>
                </a>
                </div>
                </div>
            </div>
            <div className="pt-35 lg:px-30 md:px-20 sm:px-15 px-8">
                <p className={`${poppinsSB.className} text-white  flex justify-center text-center lg:text-[32px] md:text-[32px] sm:text-[32px] text-[24px]`}>Yang Didapat Pada Pilihan Ini Selain Pada Penjelasan Di Awal</p>
                <div className="mt-4 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Custom konten sesuai dengan kebutuhan anda. Seperti, Headline atau Tagline, Penjelasan bisnis anda, layanan dan produk yang anda tawarkan, juga kontak dan sosial media anda.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Custom warna sesuai keinginan anda.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Pada pilihan UMKM 1, anda tidak diperkenankan untuk mengajukan revisi.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Revisi yang dimaksud adalah anda meminta untuk mengubah isi konten, fitur, atau konsep setelah melakukan persetujuan isi konten, fitur, dan konsep di awal.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Anda akan mendapatkan satu custom domain situsAnda.my.id secara gratis pada awal pembuatan Website.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Custom domain berlaku selama satu tahun.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Harga perpanjang custom domain situsAnda.my.id adalah Rp. 11.000/Tahun.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Apabila anda ingin menggati custom domain dari situsAnda.my.id menjadi situsAnda.com maka anda perlu menambah biaya sebesar Rp. 134.000.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Apabila anda ingin menggunakan domain selain .my.id atau anda sudah memiliki domain sendiri, maka sampaikan pesan tersebut ke admin.</p>
                    </div>
                </div>
                <div className="flex justify-center py-15 mx-1">
                    <a href="https://wa.me/6289666823165?text=Halo%20kak%20saya%20ingin%20membuat%20website%20paket%20UMKM%201">
                    <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}>Tertarik? Hubungi Kami</button>
                    </a>
                </div>
            </div>
        </section>
    )
}