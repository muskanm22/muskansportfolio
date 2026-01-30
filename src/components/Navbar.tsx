// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Activity,
  Folder,
  Briefcase,
  BookOpen,
  Mail,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import mmIcon from "../assets/mmLogo.png";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { path: "/", label: "Home", icon: <Home size={16} /> },
    { path: "/about", label: "About Me", icon: <User size={16} /> },
    { path: "/skills", label: "Skills", icon: <Activity size={16} /> },
    { path: "/projects", label: "Projects", icon: <Folder size={16} /> },
    { path: "/experience", label: "Experience", icon: <Briefcase size={16} /> },
    { path: "/education", label: "Education", icon: <BookOpen size={16} /> },
    { path: "/contact", label: "Contact", icon: <Mail size={16} /> },
    { path: "/made-by-me", label: "Made By Me", icon: <Heart size={16} /> },
  ];

  return (
    <nav className="bg-black/80 text-white shadow-xl fixed w-full z-50 backdrop-blur-sm">
      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 0.6, 0],
              y: [0, -8 + Math.random() * 16, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 1.5,
              delay: Math.random() * 2,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2 flex justify-between items-center relative z-10">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={mmIcon}
            alt="MM Logo"
            className="w-9 sm:w-10 h-9 sm:h-10 rounded-full object-cover shadow-md"
          />
          <h1 className="text-sm sm:text-base md:text-lg font-bold tracking-wide whitespace-nowrap">
            Muskan Mujawar
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-5 text-sm sm:text-base ml-6 flex-wrap items-center">
          {navItems.map((item) => (
            <motion.li
              key={item.path}
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`relative flex items-center gap-1.5 transition-all duration-300 whitespace-nowrap ${
                  location.pathname === item.path
                    ? "font-semibold text-teal-300"
                    : "hover:text-slate-200"
                }`}
              >
                {item.icon}
                <span className="text-xs sm:text-sm">{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <motion.div className="relative z-20 lg:hidden">
          <motion.button
            className="text-white bg-white/20 p-2 rounded-full backdrop-blur-sm shadow-md hover:scale-105 transition-transform"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9, rotate: 180 }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden relative backdrop-blur-xl bg-black/70 border-t border-teal-500/40 shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col gap-3 sm:gap-4 items-start w-full max-w-md mx-auto px-4 py-5 text-sm">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={{ x: -15, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -15, opacity: 0 }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.95, x: 2 }}
                  onClick={() => setMenuOpen(false)}
                  className="w-full"
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 w-full text-left ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-teal-500/20 to-pink-500/20 text-teal-300 font-semibold"
                        : "bg-white/10 hover:bg-white/20 hover:text-teal-200"
                    }`}
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
