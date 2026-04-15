import type { Metadata, Viewport } from 'next';
import './globals.css'; // Assuming you have a global CSS file
import { Inter } from 'next/font/google'; // Example font, replace with your actual font
import Header from './components/Header'; // Assuming Header is part of the main layout
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import ServiceWorkerRegister from './components/ServiceWorkerRegister'; // Import the new component
import Footer from './components/Footer'; // Import the Footer component

const inter = Inter({ subsets: ['latin'] }); // Example font

export const viewport: Viewport = {
  themeColor: '#2563eb',
};

export const metadata: Metadata = {
  title: 'TCT Softwares',
  description: 'Professional software development services.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'TCT Softwares',
    description: 'Professional software development services.',
    url: 'https://tctsoftwares.com', // Replace with your actual production domain
    siteName: 'TCT Softwares',
    images: [
      {
        url: 'https://tctsoftwares.com/og-image.png', // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: 'TCT Softwares - Professional Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCT Softwares',
    description: 'Professional software development services.',
    images: ['https://tctsoftwares.com/og-image.png'], // Replace with your actual image path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Render your Header component */}
        {children}
        <Footer /> {/* Add the Footer component here */}
            <ServiceWorkerRegister /> {/* Add the service worker registration component */}
        <ScrollToTop /> {/* Render the ScrollToTop component */}
      </body>
    </html>
  );
}