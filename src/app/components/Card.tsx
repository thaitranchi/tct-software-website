"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  // imageUrl: string; // Added imageUrl property
}

export default function Card({ 
  title, 
  description, 
  // imageUrl
}: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* <Image src={imageUrl} alt={title} width={100} height={100} className="rounded-lg" /> */}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
