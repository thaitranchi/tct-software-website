"use client";

import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Card from "@/app/components/Card";
import ContactForm from "./components/ContactForm";
import { PROJECTS_DATA } from "@/lib/constants";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each project card appearing
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero 
        title="Engineering Excellence" 
        subtitle="We build high-performance digital products for modern enterprises." 
      />

      {/* Featured Projects Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Work</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 0 0 3px #2563eb, 0 10px 20px rgba(0, 0, 0, 0.1)", // Adds a 3px blue border and a subtle drop shadow
                transition: { duration: 0.2 }
              }}
            >
              <Card 
                title={project.title} 
                description={project.description} 
                imageUrl={project.imageUrl} 
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Project</h2>
          <p className="text-xl opacity-90">Ready to scale your digital presence? Let&apos;s talk.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}