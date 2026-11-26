import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { baseUrl, siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl()),
  title: { default: 'Medi Reminder : rappels de médicaments avec alarme', template: '%s · Medi Reminder' },
  description: siteConfig.description,
  applicationName: 'Medi Reminder',
  keywords: ['rappel médicaments', 'alarme médicaments', 'observance', 'Congo', 'RDC', 'application santé Android', 'Medi Reminder'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'fr_CD', url: '/', siteName: 'Medi Reminder', title: 'Medi Reminder : ne ratez plus aucune prise',
    description: siteConfig.description, images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Medi Reminder' }],
  },
  twitter: { card: 'summary_large_image', title: 'Medi Reminder', description: siteConfig.tagline, images: ['/og.png'] },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#0e9f7e', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="bg-blobs" aria-hidden="true"><i /><i /><i /></div>
        <a href="#contenu" className="skip">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Medi Reminder',
              operatingSystem: 'Android',
              applicationCategory: 'HealthApplication',
              inLanguage: 'fr',
              description: siteConfig.description,
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            }),
          }}
        />
      </body>
    </html>
  );
}
