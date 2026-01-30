import { motion } from "framer-motion";
import { Heart, Mail, Instagram, Star, Github, Linkedin } from "lucide-react";
import myImage from "../assets/muskanprofile2.jpeg";

export default function MadeByMe() {
  const email = "muskanmujawar995@gmail.com";

  const floatingIcons = [
    <Heart className="text-rose-500 text-xl sm:text-2xl" />,
    <Instagram className="text-pink-500 text-xl sm:text-2xl" />,
    <Star className="text-yellow-400 text-xl sm:text-2xl" />,
    <Mail className="text-green-400 text-xl sm:text-2xl" />,
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">
      {/* ---------- Full Background Image (Fully Fit + Dark Overlay) ---------- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={myImage}
          alt="Background"
          className="w-full h-full object-cover object-center brightness-40"
        />
      </div>

      {/* ---------- Animated Blobs & Particles ---------- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`blob-${i}`}
            className="absolute rounded-full mix-blend-multiply filter blur-2xl opacity-40"
            style={{
              width: `${100 + Math.random() * 150}px`,
              height: `${100 + Math.random() * 150}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              background: `radial-gradient(circle, ${
                ["#facc15", "#0ea5e9", "#a855f7", "#f472b6"][i % 4]
              }, transparent 70%)`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i,
            }}
          />
        ))}

        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 4 + 1.5;
          const colors = [
            "bg-cyan-400/40",
            "bg-purple-400/40",
            "bg-yellow-400/40",
            "bg-pink-400/40",
            "bg-teal-400/40",
            "bg-blue-400/40",
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <motion.div
              key={`particle-${i}`}
              className={`absolute rounded-full ${color} blur-sm`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, -100, -50, 0],
                x: [0, 10, -10, 10, 0],
                opacity: [0, 1, 0.5, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Floating Icons */}
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute flex items-center justify-center"
            style={{
              top: `${15 + (i * 12) % 70}%`,
              left: `${10 + (i * 15) % 80}%`,
            }}
            animate={{
              y: [0, -20, 0, 20, 0],
              x: [0, 10, 0, -10, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* ---------- Main Content ---------- */}
      <motion.div className="relative z-10 text-center max-w-4xl w-full px-4 sm:px-6 py-16 sm:py-20">
        <div className="inline-flex items-center gap-3 mb-4 justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Crafted with Passion ❤️
          </h2>
        </div>

        <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
          Every line of code here tells my story. I design, develop, and refine
          every detail to reflect creativity, dedication, and a love for clean,
          modern web experiences. Exploring this portfolio? You’re seeing my
          passion in action. ✨
        </p>

        <motion.div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href="https://github.com/muskan331"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-400 text-sm sm:text-base font-medium hover:bg-teal-800 transition-transform transform hover:scale-105 text-white"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/muskan-mujawar-5723342bb/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-400 text-sm sm:text-base font-medium hover:bg-blue-900 transition-transform transform hover:scale-105 text-white"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/muskan_m7.14/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-400 text-sm sm:text-base font-medium hover:bg-pink-900 transition-transform transform hover:scale-105 text-white"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            Instagram
          </a>
        </motion.div>

        {/* ---------- Thank You Section ---------- */}
        <div className="mx-auto max-w-sm p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl">
          <div className="flex items-center gap-3 mb-3 justify-center sm:justify-start">
            <motion.div className="flex items-center justify-center">
              <Heart className="w-6 h-6 text-rose-500 animate-ping" />
            </motion.div>
            <div className="text-left">
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                Thank You for Visiting!
              </h3>
              <p className="font-semibold text-white text-sm sm:text-base mt-1">
                Your presence makes my work meaningful. Feel free to connect and
                say hello! 🚀
              </p>
            </div>
          </div>

          <div className="flex justify-center sm:justify-start mt-2">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 bg-rose-600/20 shadow text-sm sm:text-base font-medium hover:bg-rose-500 hover:text-white transition text-white"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Say Hello
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm sm:text-base text-white">
          <span>Made with </span>
          <span className="text-rose-500">❤️</span>
          <span> by Muskan • </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="underline ml-1 hover:text-rose-500 transition"
          >
            Back to top
          </button>
        </div>
      </motion.div>
    </section>
  );
}
