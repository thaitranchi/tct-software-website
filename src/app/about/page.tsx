"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-500 drop-shadow-lg">
          About TCT Softwares
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          At TCT Softwares, we specialize in delivering innovative software solutions
          designed to empower businesses and drive growth. Our expert team is dedicated
          to creating scalable and future-proof technologies tailored to meet our clients' needs.
        </p>
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To empower businesses with cutting-edge software solutions that enhance
            efficiency, scalability, and innovation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become a global leader in software development by consistently delivering
            exceptional value and fostering long-term partnerships.
          </p>
        </div>
      </section>
    </main>
  );
}
