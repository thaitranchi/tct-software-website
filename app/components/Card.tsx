// components/Card.tsx
"use client";

import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/contact');
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-default"
    >
      {/* Hero Section */}
      <div className="relative w-full h-40">
        <Image 
          src={imageUrl} 
          alt={title || "Card image"} 
          fill 
          className="object-cover rounded-lg" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>

      {/* Button Section */}
      <Button variant="primary" className="mt-4" onClick={handleLearnMore}>
        Learn More
      </Button>
    </motion.div>
  );
}