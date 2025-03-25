import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/layout/Footer";
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">
        <Hero />
        <Grid />
      </main>
      <Footer />
    </div>
  );
}
