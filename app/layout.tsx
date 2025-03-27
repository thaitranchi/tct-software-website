import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "TCT Softwares - Innovative SaaS Solutions",
  description: "Innovative SaaS solutions tailored for your business growth.",
  openGraph: {
    title: "TCT Softwares - Innovative SaaS Solutions",
    description: "Discover cutting-edge software solutions tailored for your business needs.",
    url: "https://tctsoftwares.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TCT Softwares - Innovative SaaS Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TCT Softwares - Innovative SaaS Solutions",
    description: "Discover cutting-edge software solutions tailored for your business needs.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico", // Favicon
    shortcut: "/favicon-32x32.png", // Browser tab icon
    apple: "/apple-touch-icon.png", // iOS home screen icon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
