import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Login to TCT Softwares</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-accent text-white p-3 rounded-lg shadow-md"
        >
          Login
        </motion.button>
      </form>
    </div>
  );
}
