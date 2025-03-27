"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  const transition = { duration: 0.5 };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="max-w-4xl mx-auto text-center py-20"
      >
        <h1 className="text-5xl font-extrabold mb-6 text-blue-500 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          We&apos;d love to hear from you! Whether you have questions, feedback, or business
          inquiries, feel free to reach out to us.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={transition}
        className="max-w-4xl mx-auto"
      >
        <ContactForm />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="text-center mt-8"
      >
        <p className="text-gray-600">We usually respond within 24 hours.</p>
      </motion.div>
    </main>
  );
}
