"use client";

import React from "react";
import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-500 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          We'd love to hear from you! Whether you have questions, feedback, or business
          inquiries, feel free to reach out to us.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
