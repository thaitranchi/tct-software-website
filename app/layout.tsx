import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "TCT Softwares - Innovative SaaS Solutions",
  description: "Leading the way with innovative SaaS solutions at TCT Softwares.",
  openGraph: {
    title: "TCT Softwares - Innovative SaaS Solutions",
    description: "Discover cutting-edge software solutions tailored for your business needs.",
    url: "https://tctsoftwares.com",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TCT Softwares - Innovative SaaS Solutions",
    description: "Discover cutting-edge software solutions tailored for your business needs.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
