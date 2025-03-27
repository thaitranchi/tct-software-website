"use client";

import React from "react";
import Card from "@/app/components/Card";
import Hero from "@/app/components/Hero";
import { motion } from "framer-motion";
import Head from 'next/head';


export default function Homepage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>TCT Softwares - Innovative SaaS Solutions</title>
        <meta name="description" content="Leading the way with innovative SaaS solutions at TCT Softwares." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="TCT Softwares - Innovative SaaS Solutions" />
        <meta property="og:description" content="Discover cutting-edge software solutions tailored for your business needs." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://tctsoftwares.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TCT Softwares - Innovative SaaS Solutions" />
        <meta name="twitter:description" content="Discover cutting-edge software solutions tailored for your business needs." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <Hero 
        title="Welcome to Our Platform" 
        subtitle="Empowering Your Business with Cutting-Edge Technology" 
      />

      {/* Card Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card 
            title="Innovative Solutions" 
            description="Tailored software to streamline your business operations." 
            imageUrl="/images/solutions.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card 
            title="Expert Team" 
            description="Work with our experienced developers and designers." 
            imageUrl="/images/team.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card 
            title="Scalable Infrastructure" 
            description="Build with future-proof technologies and scalability in mind." 
            imageUrl="/images/infrastructure.png"
          />
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Customized software solutions to meet your business needs.</li>
          <li>Experienced team with a proven track record.</li>
          <li>Reliable and scalable infrastructure.</li>
        </ul>
      </motion.section>
    </main>
  );
}
