"use client";
import { motion } from "framer-motion";
import { motionVariants } from "@/app/components/motionVariants";
import Card from "@/app/components/Card";
import Hero from "@/app/components/Hero";

export default function Homepage() {
  const cardData = [
    {
      title: "Innovative Solutions",
      description: "Tailored software to streamline your business operations.",
      imageUrl: "/images/solutions.png",
    },
    {
      title: "Expert Team",
      description: "Work with our experienced developers and designers.",
      imageUrl: "/images/team.png",
    },
    {
      title: "Scalable Infrastructure",
      description: "Build with future-proof technologies and scalability in mind.",
      imageUrl: "/images/infrastructure.png",
    },
  ];

  const transition = { duration: 0.5 };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Hero 
        title="Welcome to TCT Softwares" 
        subtitle="Innovative solutions for your business needs." 
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            variants={motionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ ...transition, delay: index * 0.2 }}
          >
            <Card 
              title={card.title} 
              description={card.description} 
              imageUrl={card.imageUrl} 
            />
          </motion.div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-8">We provide top-notch solutions tailored to your business growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Reliability", "Expertise", "Customer Support"].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">Experience unmatched service and dedicated support.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-6">Testimonials</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="bg-white shadow-md rounded-lg p-8"
        >
          <p className="text-lg italic mb-4">&quot;TCT Softwares transformed our business operations with their innovative solutions.&quot;</p>
          <p className="text-right font-semibold">- Happy Client</p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Partner A", "Partner B", "Partner C", "Partner D"].map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transition, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center"
            >
              <p className="text-xl font-semibold">{partner}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}