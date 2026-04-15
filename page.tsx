"use client";

import { motion } from "framer-motion";
import { IoWifiOff } from "react-icons/io5";

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-8 bg-white rounded-2xl shadow-xl max-w-md w-full"
      >
        <div className="flex justify-center mb-6">
          <IoWifiOff className="text-6xl text-slate-400" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-4">You're Offline</h1>
        <p className="text-slate-600 mb-8">
          It looks like you've lost your internet connection. Don't worry, once you're back online, the app will automatically sync.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}