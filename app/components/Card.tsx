"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Card({ 
  title, 
  description, 
  imageUrl 
}: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
