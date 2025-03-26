import { motion } from "framer-motion";

export default function ProjectCard({ name, description }) {
  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
