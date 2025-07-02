import Navbar from "@/components/ui/navbar";
import Promo from "@/components/tabs/promo";
import Section1 from "@/components/tabs/section";
import Footer from "@/components/tabs/footer";
import { generateMetadata } from "@/utils/seo";

export const metadata = generateMetadata({
  title: 'Jasa Pembuatan Website Murah Terpercaya | Mulai dari Rp. 98.000 Saja!',
  description: 'Jasa pembuatan website murah & terpercaya mulai Rp98.000. Gratis domain custom dan hosting! Cocok untuk UMKM, toko online, dan brand personal. Desain modern & mobile-friendly.',
  url: 'https://ezee-web.com',
  // image: {
  //   url: 'https://namabrand.com/og-home.jpg',
  //   alt: 'Landing Page NamaBrand'
  // },
  keywords: ['jasa pembuatan website murah', 'website free domain', 'website free hosting', 'pembuatan website']
})

export default function Home() {
  return (
    <div className="bg-[#030F0F]">
      <header>
        <Navbar/>
      </header>
      <main>
        <Promo/>
        <Section1/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
