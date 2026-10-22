import { Geist, Geist_Mono } from 'next/font/google';
import MobilHeader from './components/header';
import Aside from './components/Aside';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = 'https://www.benolproperties.com';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'BenolProperties | Real Estate in Lagos, Nigeria',
    template: '%s | BenolProperties',
  },

  description:
    'Find properties for sale and rent in Lagos, Nigeria, with BenolProperties. Explore homes, land, and real estate investment opportunities to suit your needs.',

  applicationName: 'BenolProperties',

  keywords: [
    'BenolProperties',
    'real estate in Lagos',
    'properties for sale in Lagos',
    'houses for rent in Lagos',
    'land for sale in Lagos',
    'Lagos property investment',
    'Nigerian real estate',
  ],

  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteUrl,
    siteName: 'BenolProperties',
    title: 'BenolProperties | Find Your Property in Lagos',
    description:
      'Explore homes, land, and property investment opportunities in Lagos, Nigeria, with BenolProperties.',
    images: [
      {
        url: '/images/benolproperties-og.jpg',
        width: 1200,
        height: 630,
        alt: 'BenolProperties — Real estate in Lagos, Nigeria',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'BenolProperties | Real Estate in Lagos',
    description:
      'Discover properties for sale and rent, land, and investment opportunities in Lagos, Nigeria.',
    images: ['/images/benolproperties-og.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <main className="flex-1 min-h-screen bg-[#f7f9fc] text-slate-800">
        <div className="flex-1">
          <div className="">
            <MobilHeader />
            <div>
              <div className="flex min-h-screen">
                <Aside />
                <main className="min-w-0 flex-1">{children}</main>
              </div>
            </div>
          </div>
        </div>
      </main>
    </html>
  );
}
