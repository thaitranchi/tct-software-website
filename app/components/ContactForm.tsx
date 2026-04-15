"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

// Define the validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("");
    try {
      await addDoc(collection(db, "contacts"), data);
      setStatus("✅ Message sent successfully!");
      reset();
    } catch (error) {
      setStatus(`⚠️ An error occurred. Please try again. Error: ${(error as Error).message}`);
    }
  };
  

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Get in Touch</h2>

      <div className="mb-4">
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all ${
            errors.name ? "border-red-400 ring-red-100" : "border-blue-300"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1 ml-1">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all ${
            errors.email ? "border-red-400 ring-red-100" : "border-blue-300"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1 ml-1">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <textarea
          {...register("message")}
          placeholder="Your Message"
          className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all ${
            errors.message ? "border-red-400 ring-red-100" : "border-blue-300"
          }`}
          rows={5}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1 ml-1">{errors.message.message}</p>}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 shadow-lg ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "Sending..." : "🚀 Send Message"}
      </button>

      {status && <p className="mt-4 text-center font-medium text-blue-600">{status}</p>}
    </form>
  );
}