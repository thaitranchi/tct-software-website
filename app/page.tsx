"use client";

import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Card from "@/app/components/Card";
import ContactForm from "./components/ContactForm";
import { PROJECTS_DATA } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero 
        title="Engineering Excellence" 
        subtitle="We build high-performance digital products for modern enterprises." 
      />

      {/* Featured Projects Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                title={project.title} 
                description={project.description} 
                imageUrl={project.imageUrl} 
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Project</h2>
          <p className="text-xl opacity-90">Ready to scale your digital presence? Let's talk.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}