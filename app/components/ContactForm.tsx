"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(`⚠️ An error occurred. Please try again. Error: ${(error as Error).message}`);
    }
  };
  

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Get in Touch</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 mb-4 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 mb-4 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 mb-4 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
        rows={5}
        required
      ></textarea>

      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
      >
        🚀 Send Message
      </button>

      {status && <p className="mt-4 text-center font-medium text-blue-600">{status}</p>}
    </form>
  );
}