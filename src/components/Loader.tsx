// Loader.tsx
import { motion } from "framer-motion";
import mmLogo from "../assets/mm.jpeg"; 

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black text-white z-50">
      {/* ---------- Animated Gradient Blobs ---------- */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          style={{
            width: `${220 + i * 120}px`,
            height: `${220 + i * 120}px`,
            background: [
              "radial-gradient(circle, rgba(236,72,153,0.6), transparent 70%)",
              "radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)",
              "radial-gradient(circle, rgba(20,184,166,0.6), transparent 70%)",
              "radial-gradient(circle, rgba(251,191,36,0.6), transparent 70%)",
            ][i % 4],
            top: `${15 * i}%`,
            left: `${20 * i}%`,
          }}
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -60, 60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ---------- Floating Particles ---------- */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -25, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}

      {/* ---------- Logo Image ---------- */}
      <motion.div
        className="mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-pink-600/20 border-2 border-pink-500 shadow-lg backdrop-blur-sm overflow-hidden"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 8, -8, 0],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <img src={mmLogo} alt="MM Logo" className="w-full h-full object-cover" />
      </motion.div>

      {/* ---------- Thin Italic Stylish Text ---------- */}
      <motion.h1
        className="text-xl sm:text-2xl md:text-3xl font-light italic tracking-wider text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 0.8, 1], y: [20, 0, 0, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        MUSKANS PORTFOLIO 😍
      </motion.h1>

      {/* ---------- Spinning Ring ---------- */}
      <motion.div
        className="mt-8 w-16 h-16 border-4 border-t-transparent border-pink-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      />
    </div>
  );
}
