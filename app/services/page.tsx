"use client";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Card from "@/app/components/Card";

export default function ServicePage() {
  const servicesData = [
    {
      title: "Web Development",
      description: "Building modern, responsive websites tailored to your business needs.",
      imageUrl: "/images/web-development.png",
    },
    {
      title: "Mobile Applications",
      description: "Innovative mobile solutions for iOS and Android platforms.",
      imageUrl: "/images/mobile-apps.png",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure to support your growth.",
      imageUrl: "/images/cloud-solutions.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      <Hero 
        title="Our Services" 
        subtitle="Explore the wide range of services we offer." 
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card 
              title={service.title} 
              description={service.description} 
              imageUrl={service.imageUrl} 
            />
          </motion.div>
        ))}
      </section>
    </main>
  );
}
