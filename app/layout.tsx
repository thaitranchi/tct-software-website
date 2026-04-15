import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

export const metadata = {
  title: "TCT Softwares | Digital Product & SaaS Engineering Studio",
  description: "TCT Softwares specializes in building high-performance web applications, scalable SaaS architectures, and innovative digital products. Partner with us for engineering excellence.",
  openGraph: {
    title: "TCT Softwares - Engineering Your Digital Future",
    description: "From concept to deployment, we build secure, scalable, and high-performing digital foundations for modern enterprises.",
    url: "https://tctsoftwares.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thai Tran Chi - Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TCT Softwares - Digital Product Studio",
    description: "Turning complex business requirements into elegant technical reality.",
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
        <ProgressBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
