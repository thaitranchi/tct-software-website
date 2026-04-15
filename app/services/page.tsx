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

  // Define variants for the container to orchestrate staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child's animation
      },
    },
  };

  // Define variants for individual service items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Hero 
        title="Our Services" 
        subtitle="Explore the wide range of services we offer." 
      />

      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            id={service.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              boxShadow: "0 0 0 3px #2563eb, 0 10px 20px rgba(0, 0, 0, 0.1)", // Adds a 3px blue border and a subtle drop shadow
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <Card 
              title={service.title} 
              description={service.description} 
              imageUrl={service.imageUrl} 
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
