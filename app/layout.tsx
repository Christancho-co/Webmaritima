import type { Metadata } from 'next';
import { Open_Sans, Tinos } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

// 1. Google Fonts
const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

// Tinos es la alternativa gratuita más exacta a Times New Roman en Google Fonts
const times = Tinos({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-times',
  display: 'swap',
});

// 2. Fuentes Locales (Asegúrate de que los nombres de los archivos coincidan exactamente)
const brigend = localFont({
  src: '../public/fonts/Brigend Signature.otf',
  variable: '--font-brigend',
  display: 'swap',
});

const metag = localFont({
  src: '../public/fonts/metag.ttf',
  variable: '--font-metag',
  display: 'swap',
});

const monument = localFont({
  src: '../public/fonts/MonumentExtended-Black.otf',
  variable: '--font-monument',
  display: 'swap',
});

const myriadPro = localFont({
  src: '../public/fonts/MyriadPro-Regular.otf',
  variable: '--font-myriad',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maritima Boats - Luxury Vessels & Professional Marine Solutions',
  description: 'Maritima Boats offers premium recreational boats, professional pilot vessels, military-grade tactical craft, and custom marine engineering solutions.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      // Inyectamos todas las variables de fuentes en el HTML
      className={`${openSans.variable} ${times.variable} ${brigend.variable} ${metag.variable} ${monument.variable} ${myriadPro.variable}`}
    >
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      {/* Usamos OpenSans como la fuente general por defecto de la web */}
      <body className="font-sans antialiased bg-[#001F3F] text-white" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
