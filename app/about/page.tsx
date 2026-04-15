"use client";
import React from "react";
import Button from "@/app/components/Button";
import Hero from "@/app/components/Hero";
import { useRouter } from "next/navigation";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Hero 
        title="Strategic Vision" 
        subtitle="The story behind TCT Softwares and our commitment to engineering excellence." 
      />
      <section className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          About TCT Softwares
        </h1>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          TCT Softwares is a specialized digital engineering studio. 
          We specialize in building high-performance web applications and scalable SaaS solutions that bridge the gap 
          between complex business requirements and <span className="italic">elegant technical execution</span>.
        </p>

        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To empower entrepreneurs and enterprises by building digital foundations that are secure, scalable, and high-performing.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            To become a global leader in software development by consistently delivering
            exceptional value and fostering long-term partnerships.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li><span className="font-bold">Code Quality:</span> Writing clean, maintainable, and type-safe codebases.</li>
            <li><span className="font-bold">Performance:</span> Zero compromise on speed and user experience.</li>
            <li><span className="font-bold">Transparency:</span> Keeping clients involved in every sprint and milestone.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h2>
          <p className="text-gray-600 mb-6">
            TCT Softwares was founded by Thai Tran Chi to offer specialized engineering services in the modern web ecosystem. 
            Starting with personal portfolio projects, the vision expanded into a professional brand dedicated to helping businesses scale through technology.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-gray-600">
            We operate as a lean development studio. This allows us to move fast, maintain a high bar for code quality, and provide direct, unbuffered communication between the founder and our clients.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 pt-10 border-t border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Founder's Open Source Activity</h2>
            <div className="flex justify-center items-center overflow-x-auto py-2">
              <GitHubCalendar username="thaitranchi" colorScheme="light" fontSize={14} />
            </div>
          </motion.div>

          <Button variant="primary" className="mt-4" onClick={() => router.push("/contact")}>
            Join Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
