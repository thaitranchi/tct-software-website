"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Card from "@/app/components/Card";
import Button from "@/app/components/Button";
import { PROJECTS_DATA } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero 
        title="TCT Softwares" 
        subtitle="Engineering scalable digital products for the next generation of SaaS founders." 
      />

      {/* Core Expertise Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We don't just build apps; we architect ecosystems designed for growth, security, and performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Enterprise Grade", desc: "Type-safe codebases using TypeScript and Next.js for maximum reliability." },
            { title: "Real-time Scale", desc: "Distributed architectures leveraging Firebase and edge computing." },
            { title: "Product Mindset", desc: "Strategic development focused on user retention and business goals." },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 bg-gray-50 rounded-3xl mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Engineering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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

      {/* Founder Section */}
      <section className="relative max-w-6xl mx-auto py-24 px-6 border-t border-gray-100 overflow-hidden">
        {/* Geometric Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 pointer-events-none opacity-[0.04] text-blue-600 translate-x-1/4 -translate-y-1/4">
          <svg width="600" height="600" fill="none" viewBox="0 0 600 600">
            <defs>
              <pattern id="geo-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                <path d="M 40 0 L 0 0 0 40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              </pattern>
            </defs>
            <rect width="600" height="600" fill="url(#geo-pattern)" />
          </svg>
        </div>
        
        {/* Subtle radial glow to anchor the visual profile */}
        <div className="absolute -left-24 bottom-0 -z-10 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative border-4 border-white shadow-2xl">
              <Image
                src="https://github.com/thaitranchi.png"
                alt="Thai Tran Chi - Founder of TCT Softwares"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Face Behind the Code</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Built by a Founder, for Founders.</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              I’m Thai Tran Chi, the lead engineer and founder of TCT Softwares. I believe that great software isn't just about code—it's about understanding the business vision and translating it into a scalable, high-performance reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-black transition-all">
                Read My Story
              </Link>
              <a href="https://founder.tctsoftwares.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                Founder Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}