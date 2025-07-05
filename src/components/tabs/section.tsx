'use client'
import { poppins, poppinsSB } from "@/fonts/font"
import Card from "../ui/card"
import Cardsrvc from "../ui/CardSrvc"
import Special from "../ui/special"
import {motion} from "framer-motion"
import 'swiper/css';
import 'swiper/css/navigation'; // jika pakai navigasi
import 'swiper/css/pagination'; // jika pakai pagination
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from "next/image"

export default function Section1 () {
    return(
        <div className="mt-2 pb-35 mx-1">
            <motion.section className={`${poppinsSB.className} text-center text-white lg:text-[36px] md:text-[36px] sm:text-[32px] text-[26px] px-7`} initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
                <h1 className="flex justify-center pt-8" id="home">EZee-WEB</h1>
                <h2 className="flex justify-center lg:text-[27px] md:text-[27px] text-[#2CC297] sm:text-[26px] text-[20px]">Solusi Murah dan Praktis</h2>
                <h3 className="flex justify-center lg:text-[27px] md:text-[27px] sm:text-[26px] text-[20px] text-[#2CC297]">Jasa Pembuatan Website Profesional untuk Bisnis Anda</h3>
            </motion.section>
                <motion.div initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
                className="
                    flex flex-col sm:flex-col md:flex-row lg:flex-row
                    justify-center gap-3
                    py-10 mb-10
                    sm:w-full px-5
                "
                >
                <a href="#product" className="sm:w-full md:w-auto">
                    <button
                    className={`
                        ${poppins.className}
                        w-full sm:w-full md:w-auto
                        px-20 md:px-20 lg:px-25
                        py-2
                        bg-[#03624C] border border-[#2CC297] text-white
                        rounded-lg
                        transition ease-in-out duration-200
                        hover:scale-105
                        block sm:block md:inline-block
                        mx-auto sm:mx-auto md:mx-0
                    `}
                    >
                    Pesan Sekarang
                    </button>
                </a>

                <a href="#explore" className="sm:w-full md:w-auto">
                    <button
                    className={`
                        ${poppins.className}
                        w-full sm:w-full md:w-auto
                        px-24 md:px-24 lg:px-29
                        py-2
                        bg-[#FFF9EF]
                        border border-[#2CC297]
                        rounded-lg
                        text-[#030F0F]
                        transition ease-in-out duration-200
                        hover:scale-105
                        block sm:block md:inline-block
                        mx-auto sm:mx-auto md:mx-0
                    `}
                    >
                    Explore Lagi
                    </button>
                </a>
                </motion.div>

            <motion.div className="bg-[#042222] py-15 mt-20 px-7">
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className={`${poppinsSB.className} text-center`}>
                    <h2 className="flex justify-center text-white mb-2 lg:text-[32px] md:text-[32px] sm:text-[32px] text-[26px]">Alasan Bisnis Anda Perlu Website</h2>
                    <h3 className={`${poppins.className} mb-6 flex justify-center text-[#2CC297] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[16px]`}>Website Bukan Sekedar Tambahan, Tapi Kebutuhan Dasar Bisnis modern</h3>
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }} className={`${poppins.className} flex justify-center text-[#2CC297] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] mx-10 text-justify`}>Website merupakan wajah profesional dari bisnis anda. Dengan website yang rapi dan informatif, bisnis anda tampil lebih profesional, kredibel dan siap bersaing. Calon pelanggan bisa langsung mengenal siapa anda, apa yang anda tawarkan, dan bagaimana menghubungi anda, semua dalam satu tempat yang dapat diakses 24 jam</motion.p>
            </motion.div>
            <div>
                <motion.h2 initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }} className={`${poppinsSB.className} flex justify-center text-white lg:text-[32px] md:text-[32px] sm:text-[32px] text-[26px] mx-10 pt-25 text-center`} id="about">Kenapa Memilih EZee-web</motion.h2>
                <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }} className="flex justify-center gap-10 mt-10 flex-wrap">
                    <Card url="/konsul.png" labelAatas="Konsultasi Gratis"/>
                    <Card url="/best-price.png" labelAatas="Memberikan Harga Terbaik"/>
                    <Card url="/hosting.png" labelAatas="Hosting dan Custom Domain Gratis"/>
                </motion.div>
            </div>
            <section className="w-full">
                <h2 className={`${poppinsSB.className} flex justify-center text-white lg:text-[32px] md:text-[32px] sm:text-[32px] text-[26px] mx-10 text-center pt-25 pb-10`} id="explore">Contoh Projek Yang Menggunakan Jasa EZee-WEB</h2>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    className="w-full lg:max-w-[800px] md:max-w-[700px] sm:max-w-[600px] max-w-[500px]"
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => {
                    console.log('Swiper ready', swiper);
                    if (swiper?.autoplay) swiper.autoplay.start(); // ⬅️ Pastikan autoplay aktif
                    }}
                >
                    <SwiperSlide>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[800px] aspect-[16/7] rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-[url(/projek1.png)] bg-cover bg-center"></div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[800px] aspect-[16/7] rounded-lg overflow-hidden">
                        <div className="w-full h-full bg-[url(/projek2.png)] bg-cover bg-center"></div>
                        </div>
                    </div>
                    </SwiperSlide>

                    {/* Tambah slide lainnya */}
                </Swiper>
            </section>
            <section>
                <h2 className={`${poppinsSB.className} flex justify-center text-white lg:text-[32px] md:text-[32px] sm:text-[32px] text-[26px] mx-10 text-center pt-25 pb-10`}>Di Balik Layar EZee-Web</h2>
                <div className="flex justify-center">
                    <div className="lg:w-[360px] lg:h-[360px] md:w-[360px] md:h-[360px] sm:w-[240px] sm:h-[240px] w-[240px] h-[240px]">
                    <Image
                    className="w-full "
                        src="/raffi.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        />
                    </div>
                </div>
                <p className={`flex justify-center lg:text-[16px] md:text-[16px] text-[#2CC297] sm:text-[14px] text-[14px] ${poppins.className} text-justify lg:mx-20 lg:mx-12 mx-7 mt-10`}>Halo! Saya Raffi Mahya Pratama, freelance web developer yang membantu UMKM, bisnis lokal, dan perusahaan untuk membuat website yang profesional, cepat jadi, dan terjangkau.
                <br />

                Saya percaya setiap bisnis besar atau kecil berhak tampil meyakinkan di internet. Karena itu, saya bantu dari nol: mulai dari ide awal sampai website siap tayang dan langsung bisa dipakai untuk jualan, branding, atau kebutuhan internal.
                <br />

                Saya tidak hanya membuat website company profile, tapi juga website custom dengan fitur dan sistem sesuai permintaan, seperti katalog produk, form booking, dashboard admin, dan lainnya semua disesuai kebutuhan bisnis anda.</p>
            </section>
            <section>
                <h2 className={`${poppinsSB.className} flex justify-center text-white lg:text-[32px] md:text-[32px] sm:text-[32px] text-[26px] mx-10 text-justify pt-25`} id="product">Yang Kami Tawarkan</h2>
                <div className="flex justify-center flex-wrap gap-10 mt-10 items-end">
                    <Special url="/umkm1" labelAatas="Paket UMKM" harga="Rp. 98.000" d1="Website Company Profile" d2="Desain Responsif" d3="Free Hosting" d4="1 Hari jadi" d5="Template dari 3 Sample yang Kami Sediakan" d6="Website Terhubung ke Sosial Media Anda" d7="(Instagram, Whatsapp, Gmaps, dll)" d8="SEO-Friendly" d9="Custom Domain situsAnda.my.id" d10="Revisi" d11="1 page" statDom={true} statRev={false} d12=""/>
                    <Cardsrvc url="/umkm2" labelAatas="Paket UMKM 2" harga="Rp. 129.000" d1="Website Company Profile" d2="Desain Responsif" d3="Free Hosting" d4="1 Hari jadi" d5="Custom Layout Template" d6="Website Terhubung ke Sosial Media Anda" d7="(Instagram, Whatsapp, Gmaps, dll)" d8="SEO-Friendly" d13="1 Email Profesional email@domainAnda.my.id 2Gb" statEm={false} d9="Custom Domain situsAnda.my.id" d10="Revisi" d11="1 page" statDom={true} statRev={false} d12=""/>
                    <Cardsrvc url="/umkm3" labelAatas="Paket UMKM 3" harga="Rp. 489.000" d1="Website Company Profile" d2="Desain Responsif" d3="Free Hosting" d4="1 Hari jadi" d5="Custom sesuai kebutuhan anda" d6="Website Terhubung ke Sosial Media Anda" d7="(Instagram, Whatsapp, Gmaps, dll)" d8="SEO-Friendly" d9="Custom Domain situsAnda.my.id" d13="1 Email Profesional email@domainAnda.my.id 2Gb" statEm={true} d10="Revisi 1 X" d11="1-2 pages" statDom={true} statRev={true} d12=""/>
                    <Cardsrvc url="/ecommerce" labelAatas="Sesuaikan sistem anda" harga="Mulai dari Rp. 889.000" d1="Website dinamis" d2="Desain Responsif" d3="Free Hosting" d4="5-10 hari" d5="Fitur sesuai kebutuhan anda" d6="Website Terhubung ke Sosial Media Anda" d7="(Instagram, Whatsapp, Gmaps, dll)" d8="SEO-Friendly" d9="Custom Domain situsAnda.my.id" d13="1 Email Profesional email@domainAnda.my.id 2Gb" statEm={true} d10="Revisi 2 X" d11="1-3 pages" statDom={true} statRev={true} d12="Garansi Fix Bug & Error 30 Hari"/>
                    <Cardsrvc url="/bebas" labelAatas="Pegang Kendali Penuh Website Anda" harga="Mulai dari Rp. 2.449.000" d1="Custom Penuh Website Anda" d2="WEbsite Dinamis" d3="Desain Responsif" d4="Free Hosting" d5="7-14 Hari" d6="Website Terhubung ke Sosial Media Anda" d7="(Instagram, Whatsapp, Gmaps, dll)" d8="SEO-Friendly" d9="Custom Domain situsAnda.com" d13="1 Email Profesional email@domainAnda.com 2Gb" statEm={true} d10="Revisi 4 X" d11="1-6 pages" statDom={true} statRev={true} d12="Garansi Fix Bug & Error 30 Hari"/>
                </div>
            </section>
            <section>
                <h2 className={`${poppinsSB.className} flex justify-center text-white lg:text-[32px] md:text-[32px] sm:text-[32px] text-[26px] mx-10 text-center pt-25 pb-2`}>Bingung Pilih Paket yang Mana??... Yuk Hubugi Kami!</h2>
                <div className="                    flex flex-col sm:flex-col md:flex-row lg:flex-row
                    justify-center gap-3
                    py-10 mb-10
                    sm:w-full px-5">
                        <a href="https://wa.me/6289666823165" className="sm:w-full md:w-auto">
                            <button
                            className={`
                                ${poppins.className}
                                w-full sm:w-full md:w-auto
                                px-20 md:px-20 lg:px-25
                                py-2
                                bg-[#03624C] border border-[#2CC297] text-white
                                rounded-lg
                                transition ease-in-out duration-200
                                hover:scale-105
                                block sm:block md:inline-block
                                mx-auto sm:mx-auto md:mx-0
                            `}
                            >
                            Yuk Hubungi Kami! Gratiss!
                            </button>
                        </a>

                    </div>
            </section>
        </div>
    )
}