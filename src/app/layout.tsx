import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        {/* JSON-LD Schema untuk logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sembako Murah Pak Aji",
              "url": "https://ezee-web.com",
              "logo": "https://ezee-web.com/logo.png"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <a
          href="https://wa.me/6289666823165?text=Halo,%20saya%20mau%20tanya%20tentang%20jasa%20pembuatan%20web"
          className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="white">
            <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.64 6L0 24l6.26-1.64A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.23-6.18-3.48-8.52zM12 22a9.94 9.94 0 0 1-5.1-1.39l-.36-.22-3.7.97.99-3.6-.23-.37A9.94 9.94 0 1 1 22 12c0 5.51-4.49 10-10 10zm5.14-7.6c-.27-.14-1.59-.79-1.84-.88-.25-.1-.43-.14-.61.14s-.7.88-.86 1.06c-.16.18-.32.2-.6.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.57-1.47-1.84-.15-.27-.02-.41.12-.55.12-.11.27-.3.41-.45.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.66 1.12 2.84c.14.18 1.95 2.98 4.74 4.18.66.28 1.18.45 1.58.57.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
          </svg>
          <span>Konsultasi Gratis!!</span>
        </a>
      </body>
    </html>
  );
}
