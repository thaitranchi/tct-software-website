"use client";

import React from "react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-green-500 drop-shadow-lg">
          Our Services
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          At TCT Softwares, we offer a wide range of services designed to meet your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Custom Software Development</h2>
            <p className="text-gray-600">
              Tailored software solutions to streamline business operations and drive growth.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Web & Mobile Applications</h2>
            <p className="text-gray-600">
              Responsive and scalable applications to engage your audience effectively.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cloud Solutions</h2>
            <p className="text-gray-600">
              Seamless cloud integration to enhance security and accessibility.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Maintenance & Support</h2>
            <p className="text-gray-600">
              Reliable support to ensure the long-term performance of your software.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
