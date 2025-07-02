// lib/seo.ts
type GenerateSeoProps = {
  title?: string
  description?: string
  url?: string
  image?: {
    url: string
    alt?: string
  }
  keywords?: string[]
}

export function generateMetadata({
  title = 'Jasa Pembuatan Website Murah Terpercaya | Mulai dari Rp. 98.000 Saja!',
  description = 'Jasa pembuatan website murah & terpercaya mulai Rp98.000. Gratis domain custom dan hosting! Cocok untuk UMKM, toko online, dan brand personal. Desain modern & mobile-friendly.',
  url = 'https://ezee-web.com',
//   image = {
//     url: 'https://namabrand.com/og-image.jpg',
//     alt: 'Jasa Website UMKM',
//   },
  keywords = ['jasa pembuatan website murah', 'website free domain', 'website free hosting', 'pembuatan website']
}: GenerateSeoProps = {}) {
  return {
    title,
    description,
    keywords,
    metadataBase: new URL('https://ezee-web.com'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'ezee-web',
    //   images: [
    //     {
    //       url: image.url,
    //       alt: image.alt || title,
    //     },
    //   ],
      type: 'website',
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [image.url],
    // },
    robots: {
      index: true,
      follow: true,
    },
  }
}
