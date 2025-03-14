import { Geist, Geist_Mono, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';
import Appbar from './components/AppBar/Appbar';
import Script from 'next/script';
import Footer from './utils/Footer';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-schibsted',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: `Tirth's Webfolio`,
  description: 'Web folio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${schibstedGrotesk.variable} antialiased`}>
        {children}
        <div className="p-a-bottom">
          <Appbar />
        </div>
        <Footer />
      </body>
      <Script src="/scripts/display.js"></Script>
    </html>
  );
}
