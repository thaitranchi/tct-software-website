"use client";

import React from "react";
import Card from "@/app/components/Card";
import Hero from "@/app/components/Hero";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Hero title="Welcome to Our Platform" subtitle="Empowering Your Business with Cutting-Edge Technology" />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
        <Card 
          title="Innovative Solutions" 
          description="Tailored software to streamline your business operations." 
          imageUrl="/images/solutions.jpg" 
        />
        <Card 
          title="Expert Team" 
          description="Work with our experienced developers and designers." 
          imageUrl="/images/team.jpg" 
        />
        <Card 
          title="Scalable Infrastructure" 
          description="Build with future-proof technologies and scalability in mind." 
          imageUrl="/images/infrastructure.jpg" 
        />
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Customized software solutions to meet your business needs.</li>
          <li>Experienced team with a proven track record.</li>
          <li>Reliable and scalable infrastructure.</li>
        </ul>
      </section>
    </main>
  );
}
