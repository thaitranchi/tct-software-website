"use client";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Card from "@/app/components/Card";

export default function ServicePage() {
  const servicesData = [
    {
      title: "Modern Frontend Systems",
      id: "frontend",
      description: "Building ultra-fast, SEO-optimized interfaces using Next.js 15, Server Components, and sophisticated design systems.",
      imageUrl: "/images/web-development.png",
    },
    {
      title: "Serverless Architecture",
      id: "serverless",
      description: "Architecting secure, auto-scaling backends using Firebase, AWS Lambda, and Edge Functions for global reach.",
      imageUrl: "/images/mobile-apps.png",
    },
    {
      title: "Technical SEO & Vitals",
      id: "seo",
      description: "Optimizing Core Web Vitals and structured data to ensure your SaaS product dominates search rankings.",
      imageUrl: "/images/cloud-solutions.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Hero 
        title="Our Services" 
        subtitle="Explore the wide range of services we offer." 
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            id={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card 
              title={service.title} 
              description={service.description} 
              imageUrl={service.imageUrl} 
            />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
