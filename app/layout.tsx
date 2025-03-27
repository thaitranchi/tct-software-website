"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-50">
        <div className="flex flex-col w-full">
          <Header />
          <main className="p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
