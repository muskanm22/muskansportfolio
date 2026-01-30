import React from "react";
import { Heart, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const email = "muskanmujawar995@gmail.com";

  return (
    <footer className="relative bg-gradient-to-r from-black via-slate-900 to-black text-white shadow-inner overflow-hidden mt-auto">
      {/* Floating Dots Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/15 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 3,
              delay: i * 0.2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center justify-center gap-3 text-xs sm:text-sm relative z-10">
        {/* CopyRight */}
        <motion.div
          className="flex items-center gap-1 text-slate-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
          >
            <Heart size={20} className="text-pink-500 animate-pulse" />
          </motion.div>
          <span>
            &copy; {year}{" "}
            <motion.strong
              className="font-semibold text-white cursor-pointer hover:text-teal-400 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Muskan Mujawar.
            </motion.strong>{" "}
             Built with React, TypeScript & Tailwind CSS. All rights reserved.
          </span>
        </motion.div>

        {/* Email Centered Below */}
        <motion.a
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition text-xs sm:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={18} />
          <span className="break-all">{email}</span>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
