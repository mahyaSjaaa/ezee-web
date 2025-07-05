'use client'
import Navbar from "@/components/ui/navbar"
import { poppins, poppinsSB } from "@/fonts/font"
import { Check } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation'; // jika pakai navigasi
import 'swiper/css/pagination'; // jika pakai pagination
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'react-hot-toast'
import Image from "next/image";

export default function Umkm2Page() {
    const [nav, setNav] = useState('')
    const [header, setHeader] = useState('')
    const [section, setSection] = useState('')
    const router = useRouter()

    const handlePesan = () => {
        if(nav === '' || header === '' || section === ''){
            toast.error('Harap lengkapi pilihan layout dekstop dan mobile')
            return
        }
        router.push(`https://wa.me/6289666823165?text=halo%2C%20kak.%20Saya%20ingin%20membuat%20website%20paket%20UMKM%202%20dengan%20layout%20${nav}%2C%20${header}%2C%20${section}`)
    }
    return (
        <section className="bg-[#030F0F]">
            <Toaster position="top-right" />
            <Navbar />
            <div className="pt-35 lg:px-30 md:px-20 sm:px-15 px-8">
                <h2 className={`${poppinsSB.className} text-white  flex justify-center text-center lg:text-[32px] md:text-[32px] sm:text-[32px] text-[24px]`}>Penjelasan Lebih Lanjut Paket UMKM 2</h2>
                <div className="mt-4 flex-shrink-0 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
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
                        <p className={`${poppins.className}`}>Anda dapat memilih layout yang kami sediakan. Seperti Navbar, Header, dan Section. Baik di desktop maupun di mobile.</p>
                    </div>
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Pada pilihan UMKM 2, anda tidak diperkenankan untuk mengajukan revisi.</p>
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
                    <div className={`${poppins.className} text-[#2CC297] flex gap-3 pb-1`}>
                        <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                        <p className={`${poppins.className}`}>Apabila anda ingin menambah email profesional, maka sampaikan pesan tersebut ke admin.</p>
                    </div>
                </div>
                <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5 pt-35`}>Pilih Layout</p>
                <p className={`${poppinsSB.className} text-[#2CC297] text-[20px] flex justify-center`}>Pilih Navbar Desktop dan Mobile</p>
                <div className="w-full flex justify-center py-10">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        className="w-full max-w-[1280px]"
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => {
                            console.log('Swiper ready', swiper);
                            if (swiper?.autoplay) swiper.autoplay.start(); // ⬅️ Pastikan autoplay aktif
                        }}
                    >
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Navbar 1</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/nav1.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {
                                    setNav('navbar1')
                                    toast.success('Navbar 1 berhasil disimpan')}}>Pilih</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Navbar 2</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/nav2.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setNav('navbar2')
                                    toast.success('Navbar 2 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Navbar 3</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/nav3.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setNav('navbar 3')
                                    toast.success('Navbar 3 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Navbar 4</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/nav4.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setNav('navbar 4')
                                    toast.success('Navbar 4 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p className={`${poppinsSB.className} text-[#2CC297] text-[20px] flex justify-center`}>Pilih Header</p>
                <div className="w-full flex justify-center py-10">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        className="w-full max-w-[1280px]"
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => {
                            console.log('Swiper ready', swiper);
                            if (swiper?.autoplay) swiper.autoplay.start(); // ⬅️ Pastikan autoplay aktif
                        }}
                    >
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Header 1</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/h1.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setHeader('header_1')
                                    toast.success('Header 1 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Header 2</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/h2.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setHeader('header_2')
                                    toast.success('Header 2 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Header 3</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/h3.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setHeader('header_3')
                                    toast.success('Header 3 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p className={`${poppinsSB.className} text-[#2CC297] text-[20px] flex justify-center`}>Pilih Section</p>
                <div className="w-full flex justify-center py-10">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        className="w-full max-w-[1280px] max-h-[1480px]"
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => {
                            console.log('Swiper ready', swiper);
                            if (swiper?.autoplay) swiper.autoplay.start(); // ⬅️ Pastikan autoplay aktif
                        }}
                    >
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Section 1</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/s1.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setSection('section_1')
                                    toast.success('Section 1 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Section 2</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/s2.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setSection('section_2')
                                    toast.success('Section 2 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-evenly">
                                <div className="block">
                                    <p className={`${poppinsSB.className} text-[#2CC297] text-[24px] flex justify-center mb-5`}>Section 3</p>
                                    <div className="max-w-[350px]">
                                        <Image
                                        src="/s3.png"
                                        alt="jasa pembuatan web murah ezee-web"
                                        width={350} // ganti sesuai ukuran asli gambar
                                        height={0} // ganti sesuai ukuran asli gambar
                                        className=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center pb-15 pt-10">
                                <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}onClick={() => {setSection('section_3')
                                    toast.success('Section 3 berhasil disimpan')
                                }}>Pilih</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="flex justify-center pb-15 pt-10 mx-1">
                <button onClick={handlePesan} className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#03624C] border border-[#2CC297] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}>Sudah milih? Hubungi Kami untuk Konsultasi Gratis</button>
            </div>
        </section>
    )
}