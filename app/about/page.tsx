// components/AboutPage.tsx

"use client";
import React from "react";
import Button from "@/app/components/Button";
import Hero from "@/app/components/Hero";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Hero 
        title="About Our Company" 
        subtitle="Learn more about our mission and values." 
      />
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-500 drop-shadow-lg">
          About TCT Softwares
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          At TCT Softwares, we specialize in delivering innovative software solutions
          designed to empower businesses and drive growth. Our expert team is dedicated
          to creating scalable and future-proof technologies tailored to meet our clients&apos; needs.
        </p>

        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To empower businesses with cutting-edge software solutions that enhance
            efficiency, scalability, and innovation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            To become a global leader in software development by consistently delivering
            exceptional value and fostering long-term partnerships.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Innovation: Continuously pushing the boundaries of technology.</li>
            <li>Integrity: Upholding transparency and trust in every interaction.</li>
            <li>Collaboration: Working together to achieve extraordinary results.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2025, TCT Softwares began with a vision to revolutionize how businesses leverage technology.
            Over the years, we have grown into a dynamic team dedicated to solving complex challenges with innovative solutions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            Our team comprises talented software engineers, designers, and business strategists
            committed to delivering exceptional value and fostering long-term relationships.
          </p>

          <Button variant="primary" className="mt-4" onClick={() => router.push("/contact")}>
            Join Our Team
          </Button>
        </div>
      </section>
    </main>
  );
}
