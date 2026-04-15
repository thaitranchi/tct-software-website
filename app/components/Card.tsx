// components/Card.tsx
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

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
    <div className="bg-white rounded-lg shadow-md p-6">
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
    </div>
  );
}