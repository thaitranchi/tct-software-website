import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-primary p-4 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl text-white font-bold cursor-pointer">
            TCT Softwares
          </h1>
        </Link>
        <div>
          <Link href="/auth" className="mr-4 text-white hover:text-accent">
            Login
          </Link>
          <Link href="/dashboard" className="text-white hover:text-accent">
            Dashboard
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
